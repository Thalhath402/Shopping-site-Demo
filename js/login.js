$(document).ready (function () {  
    $('#myform').submit (function (e) {  
       e.preventDefault();   
       var email = $('#email').val(); 
       var pswrd = $('#pass').val();   
    $(".error").remove();    
        if (email.length < 1) {  
            $('#email').before('<span class="error"> This field is required !</span>');  
        } 
            else {  
                var regEx =/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
                var validEmail = regEx.test(email);}  
                if (!validEmail) {  
                    $('#email').before('<span class="error"> Enter a valid email !</span>');  
                }  
       
        if (pswrd.length < 1) {  
            $('#pass').before('<span class="error">This field is required !</span>');  
        }
            else{
                var passv=/^[a-zA-Z0-9!@#$%^&*]{6,16}$/
                var passvalidatio=passv.test(pswrd)
            }                              
                if(!passvalidatio){
                    $('#pass').before('<span class="error"> Invalid password !</span>');  
                }
     }); 
    });






