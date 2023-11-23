from flask import Flask, request, jsonify
from flask_cors import CORS
import crud
import json



app = Flask(__name__)
# CORS(app)
cors = CORS(app, resources={r"/find/*": {"origins": "*"}})



@app.route("/find", methods=["POST"])
def fn_find():
    exist=False
    content_type = request.headers.get('Content-Type')
    print(content_type)
    # if content_type == 'application/json':
    email = request.get_json()
    exist=crud.find(email)
    
    if exist==True:
        return jsonify({"message":"Usuario Existe"})
    else:
        return jsonify({"message":"Usuario no existe"})
    

@app.route("/add", methods=["POST"])
def fn_add():
    user= {"email" : request.form["email"], 
           "nombre" : request.form["name"],
           "age" : request.form["age"]}
    result = crud.add(user)
    return result


@app.route("/delete", methods=["POST"])
def fn_delete():
    email = request.form["email"]
    result= crud.delete(email)
    return result


@app.route("/update", methods=["POST"])
def fn_update():
    user= {"email" : request.form["email"], 
           "nombre" : request.form["name"],
           "age" : request.form["age"]}
    result = crud.add(user)
    return result







if __name__ == "__name__":
    app.run(debug=True)