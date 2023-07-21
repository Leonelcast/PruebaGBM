import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense

def create_features(df):
     # Calcula el gasto total por cliente
    df['total_spent'] = df.groupby('customer_id')['tran_amount'].transform('sum')
    # Calcula el gasto maximo por transacción para cada cliente
    df['max_spent'] = df.groupby('customer_id')['tran_amount'].transform('max')
    # Cuenta el numero de transacciones realizadas por cada cliente
    df['shopping_frequency'] = df.groupby('customer_id')['trans_date'].transform('count')
    # Calcula el gasto medio por cliente
    df['average_spent'] = df['total_spent'] / df['shopping_frequency']
    return df

def categorize_customers(df):
    # Obtiene el numero de valores sin repetir en la columna 'average_spent'
    unique_values = df['average_spent'].nunique()
    # Define el numero de categorias
    num_bins = min(3, unique_values)
    labels = ['low', 'medium', 'high'][:num_bins]
    # Asigna etiquetas correspondientes
    df['value'] = pd.qcut(df['average_spent'], num_bins, labels=labels)
    # Convierte las etiquetas a numeros
    df['value'] = df['value'].replace({'low': 0, 'medium': 1, 'high': 2})
    return df

def train_model(X_train, y_train):
    sc = StandardScaler()
    X_train = sc.fit_transform(X_train)
    # Define la estructura de la red neuronal
    model = Sequential()
    model.add(Dense(32, activation='relu', input_dim=X_train.shape[1]))
    model.add(Dense(16, activation='relu'))
    model.add(Dense(3, activation='softmax'))

    # Compila el modelo
    model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])
    # Entrena el modelo con los datos de entrenamiento
    model.fit(X_train, y_train, epochs=10, batch_size=32)

    return model

if __name__ == "__main__":
    # Se otiene el archivo CSV
    df = pd.read_csv('data_customer_classification.csv')
    # Transforma la columna 'trans_date' a tipo datetime
    df['trans_date'] = pd.to_datetime(df['trans_date'])
    # Crea características adicionales
    df = create_features(df)
    # Categorizar a los clientes
    df = categorize_customers(df)
    #Se establecen caracteristicas y las etiquetas<
    X = df[['total_spent', 'max_spent', 'shopping_frequency']]
    y = df['value']
    # Divide los datos en conjuntos de entrenamiento y prueba
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    # Entrena el modelo
    model = train_model(X_train, y_train)
    # Se establece la presicion
    _, accuracy = model.evaluate(X_test, y_test)
    # Imprime la precisión del modelo
    print('Accuracy: %.2f' % (accuracy*100))
