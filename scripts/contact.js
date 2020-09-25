function displayErrors(){
    var name, name_err, email, email_err, phone, phone_err, order_code, order_code_err, message, message_err;
    name = document.getElementById("name_id").value;
    email = document.getElementById("email_id").value;
    phone = document.getElementById("telephone_id").value;
    order_code = document.getElementById("order_code_id").value;
    message = document.getElementById("message_id").value;

    if(name == ""){
        name_err = "*Name is required";
    }else{
        name_err = "";
    }

    if(email == ""){
        email_err = "*email is required";
    }else{
        email_err = "";
    }

    if(phone == ""){
        phone_err = "*phone is requred";
    }else{
        phone_err = "";
    }

    if(order_code == ""){
        order_code_err = "*Order code is required";
    }else{
        order_code_err = "";
    }

    if(message == ""){
        message_err = "*Message is required";
    }else{
        message_err = "";
    }

    document.getElementById("name_err_txt").innerHTML = name_err;
    document.getElementById("email_err_txt").innerHTML = email_err;
    document.getElementById("phone_err_txt").innerHTML = phone_err;
    document.getElementById("order_code_err_txt").innerHTML = order_code_err;
    document.getElementById("message_err_txt").innerHTML = message_err;
}