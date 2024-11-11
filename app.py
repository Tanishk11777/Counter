from flask import Flask, request, jsonify
from flask_cors import CORS
from bs4 import BeautifulSoup
from collections import Counter
import requests
import re

app = Flask(__name__)
CORS(app)

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    url = data.get("url")
    
    try:
        response = requests.get(url)
        soup = BeautifulSoup(response.text, 'html.parser')
        text = soup.get_text().lower()
        
        words = re.findall(r'\b\w+\b', text)
        word_counts = Counter(words)
        
        top_words = word_counts.most_common(10)
        result = [{"word": word, "frequency": freq} for word, freq in top_words]
        
        return jsonify(result)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
