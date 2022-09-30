$(document).ready (function () {  
    $('#myform').submit (function (e) {  
       e.preventDefault();  
       var name = $('#name').val();   
       var email = $('#email').val();  
       var pswrd = $('#pass').val();
       var cpswrd = $('#cpass').val();        
       
     $(".error").remove();  
        if (name.length < 1) {  
            $('#name').before('<span class="error">This field is required !</span>');  
        }
            else {
            var fnamv = /^[A-Za-z]+$/;
            var validfname=fnamv.test(name)
            }
                if(!validfname) {
                        $('#name').before('<span class="error"> only charecterse allowed !</span>');
                    }
                 
        if (email.length < 1) {  
            $('#email').before('<span class="error"> This field is required !</span>');  
        } 
            else {  
                var regEx = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;  
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
                    $('#pass').before('<span class="error"> use a strong password !</span>');  
                }
                    else{
                    var plength=pswrd.length > 8
                    }
                        if(!plength){
                            $('#pass').before('<span class="error"> password must be 8 charecterse !</span>');  
                        }
    
        if (cpswrd != pswrd ){
            $('#cpass').before('<span class="error"> password is not same !</span>');  

        }
       
     }); 
    });






