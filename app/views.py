from app import app
from flask import jsonify
import os
from authentication import getUser

@app.route("/")
def index():
    return "Hello world"

@app.route("/users")
def users():
    os.system("python authentication.py")
    
    recog = [
        {"activity":'running',
        'user':'daham',
        'location':'place1'},
    ] 
    jsonify(recog)

    user_list = ["Rozan", "Lahiru", "Faith", "Daham"] 
    jsonify({'user' : user_list})

    return getUser




   
