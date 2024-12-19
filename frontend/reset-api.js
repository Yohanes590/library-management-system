const resetFunction = ()=>{
const fav_food = document.getElementById("input-fav").value;
fetch("/show-fav-food",{
        method:"post"
    }).then(data=>data.json())
    .then(res=>{
        if(fav_food == res[0].forgotten){
            document.getElementById("passer").style.scale = "1.0"
           document.getElementById("username").innerText= res[0].username
           document.getElementById("password").innerText= res[0].password
        }else{
            window.alert("wrong answer")
            window.location.href="/"
        }
    })
}


const close_window = ()=>{
    document.getElementById("passer").style.scale = "0"
}