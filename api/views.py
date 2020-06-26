from flask import Blueprint, jsonify, request

main = Blueprint('main', __name__)      

@main.route('/add_user', methods=['GET'])     
def add_user():
    #user_data = request.get_json()     

    #new_user =      #adding the new user to list when button is clicked
 
#add the new variable to the list


    return 'Done', 201      #201 means something was created

@main.route('/users')      #second route
def users():
    user_list = ["Rozan", "Lahiru", "Faith", "Daham"]    #getting all the data from the list
    

    return 'Done' #jsonify({'users' : user_list})     #array returned through json object. jsonify used to convert that.
