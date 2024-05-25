
from flask import Flask, request, jsonify
from flask_cors import CORS
import Levenshtein as levenshtein
import requests
import waitress


app = Flask(__name__, static_folder='../frontend/build', static_url_path='/')


CORS(app)  # This will enable CORS for all routes

poke_data = dict()

@app.route('/')
def index():
    return app.send_static_file('index.html')

def get_pokemon_data():
    global poke_data
    try:
        response = requests.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0').json()
        for result in response['results']:
            url = result['url']
            id = url.rstrip('/').split('/')[-1]  # Remove trailing slash and split on remaining slashes
            result['id'] = int(id)  # Convert the ID to an integer and store it
            poke_data[result['name']] = result  # Use the Pokemon's name as the key
    except requests.exceptions.RequestException as e:
        print(f"Error fetching Pokemon data: {e}")

get_pokemon_data()

def find_closest_match(search_term):
    min_distance = 5
    closest_match = None
    for key in poke_data:
        distance = levenshtein.distance(search_term, key)
        if distance < min_distance:
            min_distance = distance
            closest_match = key
    return closest_match

@app.route('/api/search', methods=['POST'])
def search():
    data = request.get_json()
    
    get_pokemon_data()
    
    if not data or 'searchTerm' not in data:
        return jsonify({'status': '400', 'message': 'Invalid request. searchTerm is required.'}), 400
    
    search_term = data['searchTerm']
    
    if search_term.isnumeric():
        search_term = int(search_term)
        # Search by ID not by key
        for key in poke_data:
            if poke_data[key]['id'] == search_term:
                name = poke_data[key]['name']
                id = poke_data[key]['id']
                url = poke_data[key]['url']
                break
        else:
            return jsonify({'status': '404', 'message': 'Pokemon not found'}), 404
    
    else:
        try:
            if search_term in poke_data:
                name = poke_data[search_term]['name']
                id = poke_data[search_term]['id']        
                url = poke_data[search_term]['url']
            else:
                closest_match = find_closest_match(search_term)
                if closest_match is None:
                    return jsonify({'status': '404', 'message': 'Pokemon not found'}), 404
                
                name = poke_data[closest_match]['name']
                id = poke_data[closest_match]['id']
                url = poke_data[closest_match]['url']
        except ValueError:
            return jsonify({'status': '404', 'message': 'Pokemon not found'}), 404
    
    return jsonify({
        'status': '200',
        'name': name,
        'id': id,
        'url': url,
    })

if __name__ == '__main__':
    app.run(debug=True, port=10000)
