import unittest
import json
from app import app, poke_data

class PokemonAPITestCase(unittest.TestCase):

    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True

    def test_search_by_name(self):
        response = self.app.post('/api/search', data=json.dumps({'searchTerm': 'pikachu'}),
                                 content_type='application/json')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data)
        self.assertEqual(data['status'], '200')
        self.assertEqual(data['name'], 'pikachu')
        self.assertEqual(data['id'], 25)

    def test_search_by_id(self):
        response = self.app.post('/api/search', data=json.dumps({'searchTerm': '25'}),
                                 content_type='application/json')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data)
        self.assertEqual(data['status'], '200')
        self.assertEqual(data['name'], 'pikachu')
        self.assertEqual(data['id'], 25)

    def test_search_non_existent_pokemon(self):
        response = self.app.post('/api/search', data=json.dumps({'searchTerm': 'notapokemon'}),
                                 content_type='application/json')
        self.assertEqual(response.status_code, 404)
        data = json.loads(response.data)
        self.assertEqual(data['status'], '404')
        self.assertEqual(data['message'], 'Pokemon not found')

    def test_invalid_request(self):
        response = self.app.post('/api/search', data=json.dumps({}),
                                 content_type='application/json')
        self.assertEqual(response.status_code, 400)
        data = json.loads(response.data)
        self.assertEqual(data['status'], '400')
        self.assertEqual(data['message'], 'Invalid request. searchTerm is required.')

    def test_levenshtein_distance_search(self):
        response = self.app.post('/api/search', data=json.dumps({'searchTerm': 'pikach'}),
                                 content_type='application/json')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data)
        self.assertEqual(data['status'], '200')
        self.assertEqual(data['name'], 'pikachu')
        self.assertEqual(data['id'], 25)

if __name__ == '__main__':
    unittest.main()
