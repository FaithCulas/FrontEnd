from flask import Flask
from flask import jsonify 
#app = Flask(__name__)

#@app.route('/')
def create_app():       #creating the create_app function
    app = Flask(__name__)       #create the application object
    
    @app.route('/hello')
    def hello():
        user_list = "R"
        return user_list#jsonify({'user' : user_list}) 
    #from .views import main
    #app.register_blueprint(main)        #register the blueprint
     
    return app
