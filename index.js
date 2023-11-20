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
            <form action="http://localhost:5000/find" method="POST" id="frm-login">
            <h1>CRUD FLASK</h1>
            <div class="cont-email">                
                <input type="text" name="email" placeholder="Email">
            </div>
            <button>Buscar</button>
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
            <form action="http://localhost:5000/update" method="POST" id="frm-login">
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
            <button>Actualizar</button>
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
    }
})