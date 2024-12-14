const offline = document.getElementById("offline_message")
const cheack_connection = (connection)=>{
    connection = navigator.onLine
    if(!connection){
    offline.style.display = "flex"
    }else{
        console.log("Online check passed!")
    }
}


function login(){
    const login_username = document.getElementById("login_username").value;
    const login_password = document.getElementById("login_passowrd").value;
    const login_empty_string = ""
    if(login_username == login_empty_string){
        window.alert("please insert user name")
    }else if(login_password == login_empty_string){
        window.alert("please insert password")
    }else {
        login_fetch_api()
        login_username = ""
        login_password = ""
    }
}