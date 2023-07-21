import unittest
import pandas as pd
from problema import categorize_customers

class TestCategorizeCustomers(unittest.TestCase):

    def test_categorize_customers(self):
        data = {
            'customer_id': ['CS2122', 'CS1217', 'CS1850', 'CS5539'],
            'tran_amount': [52, 99, 78, 81],
            'trans_date': pd.to_datetime(['26-Feb-13', '16-Nov-11', '20-Nov-13', '26-Mar-14']),         
            'total_spent': [300, 300, 400, 400],
            'max_spent': [200, 200, 250, 250],
            'shopping_frequency': [2, 2, 2, 2],
            'average_spent': [150, 150, 200, 200]
        }
        df = pd.DataFrame(data)

        df = categorize_customers(df)

        self.assertIn('value', df.columns)
        self.assertTrue((df['value'].isin([0, 1, 2])).all())

if __name__ == "__main__":
    unittest.main()
