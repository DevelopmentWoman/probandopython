from flask import Flask, request, jsonify
from flask_cors import CORS
import crud
import json



app = Flask(__name__)
CORS(app)


@app.route("/find", methods=["POST"])
def fn_find():
    email = request.form["email"]
    exist=crud.find(email)
    if exist==True:
        return "Usuario Existe"
    else:
        return "Usuario no existe"
    

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








if __name__ == "__name__":
    app.run(debug=True)