from app import app
from flask import jsonify

@app.route("/")
def index():
    return "Hello world"

@app.route("/users")
def users():
    recog = [
        {"activity":'running',
        'user':'daham',
        'location':'place1'},
    ] 
    user_list = ["Rozan", "Lahiru", "Faith", "Daham"] 
    jsonify({'user' : user_list})

    return jsonify(recog)





   