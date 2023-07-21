import unittest
import pandas as pd
from problema import train_model

class TestTrainModel(unittest.TestCase):

    def test_train_model(self):
        X_train = pd.DataFrame({'total_spent': [1, 2], 'max_spent': [1, 2], 'shopping_frequency': [1, 2]})
        y_train = pd.Series([0, 1]) 
        model = train_model(X_train, y_train)

        self.assertIsNotNone(model) 

if __name__ == "__main__":
    unittest.main()
