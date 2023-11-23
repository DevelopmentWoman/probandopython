"use strict"
let flag = 0



document.addEventListener("DOMContentLoaded", e=>{
    let data = window.location.search
    const urlParams = new URLSearchParams(data)
    var flag = urlParams.get('flag')

    console.log(flag);
    if(flag!=0){
        if(flag==1){
            document.querySelector(".container-login").innerHTML=
            `
            <form action="" method="" id="frm-login">
            <h1>CRUD FLASK</h1>
            <div class="cont-email">                
                <input type="text" name="email" placeholder="Email" id="findEmail">
            </div>
            <button id="find">Buscar</button>
            </form>`
        }else if(flag==2){
            document.querySelector(".container-login").innerHTML=
            `
            <form action="http://localhost:5000/add" method="POST" id="frm-login">
            <h1>CRUD FLASK</h1>
            <div class="cont-email">                
                <input type="text" name="email" placeholder="Email">
            </div>
            <div class="cont-name">
                <input type="text" name="name" placeholder="Nombre">
            </div>
    
            <div class="cont-age">                
                <input type="text" name="age" placeholder="Edad">
            </div>
            <button>Agregar</button>
            </form>`
        }else if(flag==3){
            document.querySelector(".container-login").innerHTML=
            `

            <form action="" method="" id="frm-login" class="update">
            <div class="cont-email">                
                <input type="text" name="email" placeholder="Email">
            </div>
            <div class="cont-name">
                <input type="text" name="name" placeholder="Nombre">
            </div>

            <div class="cont-age">                
                <input type="text" name="age" placeholder="Edad">
            </div>
            <button id="updBtn">Actualizar</button>
            </form>`
        }else if(flag==4){
            document.querySelector(".container-login").innerHTML=
            `
            <form action="http://localhost:5000/delete" method="POST" id="frm-login">
            <h1>CRUD FLASK</h1>
            <div class="cont-email">                
                <input type="text" name="email" placeholder="Email">
            </div>
            <button>Borrar</button>
            </form>`
        }
    }
})


document.addEventListener("click", e=>{
    e.preventDefault()
    if (e.target==document.querySelector(".btn-add")) {
        flag=2
        window.location.href=`crud.html?flag=${flag}`
    }else if (e.target==document.querySelector(".btn-find")) {
        flag=1
        window.location.href=`crud.html?flag=${flag}`
    }else if (e.target==document.querySelector(".btn-update")) {
        flag=3
        window.location.href=`crud.html?flag=${flag}`
    }    
    else if (e.target==document.querySelector(".btn-delete")) {
        flag=4
        window.location.href=`crud.html?flag=${flag}`
    }else if (e.target==document.querySelector("#find")){
        let $email = document.getElementById("findEmail").value
        // console.log($email);
        let email={"email":$email}
        // console.log(email);
        find(email)
    }
})




const find = async (param)=>{
    let url = "http://localhost:5000/find"
    let data = {param}
    let params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json;charset=UTF-8"}

    }
    try {
        let res = await fetch(url,params)
        let resUser = await res.json()
        if (!res.ok) throw {status: res.status, statusText: res.statusText}
        console.log(resUser)
    } catch (error) {
        let message = error.statusText || "Ocurrio un error"
        console.log(`Error ${error.status}:${message}`);
    }
}


