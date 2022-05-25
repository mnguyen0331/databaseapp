function showPass () {
    let pwd = document.querySelector('#userPwd');
    pwd_type = pwd.getAttribute('type');
    if (pwd.type === "password") {
        pwd.type = "text";
    } else {
        pwd.type = "password";
    }
}