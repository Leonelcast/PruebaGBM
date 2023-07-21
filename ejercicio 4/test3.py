import unittest
import pandas as pd
from problema import create_features 

class TestCreateFeatures(unittest.TestCase):

    def test_create_features(self):
        data = {
            'customer_id': ['CS2122', 'CS1217', 'CS1850', 'CS5539'],
            'tran_amount': [52, 99, 78, 81],
            'trans_date': pd.to_datetime(['26-Feb-13', '16-Nov-11', '20-Nov-13', '26-Mar-14']),       
        }
        df = pd.DataFrame(data)

        df = create_features(df)

        self.assertIn('total_spent', df.columns)
        self.assertIn('max_spent', df.columns)
        self.assertIn('shopping_frequency', df.columns)
        self.assertIn('average_spent', df.columns)

if __name__ == "__main__":
    unittest.main()
