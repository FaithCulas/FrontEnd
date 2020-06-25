import flask
from flask import request, jsonify

app = flask.Flask(__name__)
app.config["DEBUG"] = True

# Create some test data for our catalog in the form of a list of dictionaries.

books = [
    {"activity":'running',
    'user':'daham',
    'location':'place1'},
]


@app.route('/', methods=['GET'])
def home():
    return jsonify(books)


app.run()
