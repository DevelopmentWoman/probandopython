import json
def find(email):
    result=False
    
    if email!="":
        
        with open("data.json","r") as f:
            data = json.load(f)
            for item in data:
                if item["email"]==email['email']:                   
                    result=True

    return result
                    
def add(user):
    result=""
    if user["email"]!="" and user["nombre"]!=""  and user["age"]!="" :
        with open("data.json","r") as f:
            data = json.load(f)
            for item in data:
                if item["email"]==user["email"]:
                    result="El usuario ya existe en la bd"

            if result=="":
                data.append(user)

                with open("data.json", "w") as w_f:
                    json.dump(data,w_f)
                    result="Usuario guardado correctamente"
    return result
                    


def delete(email):
    result=""
    if email!="":
        with open("data.json","r") as f:
            data = json.load(f)
            for i in range(len(data)):
                

                if data[i]["email"]==email:
                    data.pop(i)
                    print(data[i])
                    with open("data.json", "w") as w_f:
                        json.dump(data,w_f)
                    result = "Usuario eliminado correctamente"

            if result=="":
                result="El usuario no se pudo eliminar compruebe que realmente exista"
    return result



def update(user):
    result=""
    if user["email"]!="" and user["nombre"]!=""  and user["age"]!="" :
        with open("data.json","r") as f:
            data = json.load(f)
            for i in range(len(data)):
                # result= data[i]["email"]

                if data[i]["email"]==user["email"]:
                    data[i]["nombre"]==user["nombre"]
                    data[i]["age"]==user["age"]
                    with open("data.json", "w") as w_f:
                        json.dump(data,w_f)
                        result="Usuario actualizado correctamente"


            if result=="":
                result="Usuario no existe"
                    
    return result
