function submit(){
    var date,date_text, quantity,quantity_text, message,message_text, signature, signature_text;

    date = document.getElementById("input_date").value;
    quantity = document.getElementById("input_quantity").value;
    message = document.getElementById("input_message").value;
    signature = document.getElementById("input_signature").value;
    if(date==""){
        date_text = "This input field is required";
    }else{
        date_text = "";
    }
    if(quantity==""){
        quantity_text = "This input field is required";
    }else{
        quantity_text = "";
    }
    if(message==""){
        message_text = "This input field is required";
    }else{
        message_text = "";
    }
    if(signature==""){
        signature_text = "This input field is required";
    }else{
        signature_text = "";
    }
    document.getElementById("input_date_txt").innerHTML = date_text;
    document.getElementById("input_quantity_txt").innerHTML = quantity_text;
    document.getElementById("input_message").innerHTML = message_text;
    document.getElementById("input_signature_txt").innerHTML = signature_text;
}

document.getElementById("checking").innerHTML = "hello";
function myFunction(){
    document.getElementById("checking").innerHTML = "fucking awesome";
    document.getElementsByClassName("err").style.color = "red";
}

var div1 = document.getElementsByClassName('price_tag')[0];
var div2 = document.getElementsByClassName('price_tag')[1];
var div3 = document.getElementsByClassName('price_tag')[2];

div1.addEventListener('click',function (event){
    document.getElementById("check_box_one").checked = true;
});
div2.addEventListener('click',function (event){
    document.getElementById("check_box_two").checked = true;
});
div3.addEventListener('click',function (event){
    document.getElementById("check_box_three").checked = true;
});

