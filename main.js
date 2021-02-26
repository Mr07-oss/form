
function validasi() {
    var username = document 
        .forms["myForm"] ["username"].value;
    var password = document
        .forms["myForm"] ["password"].value;
    
    if(username == "admin" && password == "gans"){
        alert("hai abang");
        return true;
    }
    
    else if (username == "" || password == ""){
        alert("masukkan username atau password");
        return false;
    
    }
    
    
    
    else {
        alert("username atau passwod anda salah");
        return false;
    }
}