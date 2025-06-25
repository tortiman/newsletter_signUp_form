function emailValidator(email){
    const regExpExpresion=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regExpExpresion.test(email);
}

document.addEventListener('DOMContentLoaded',()=>{
    console.log('Escribes en el textbox email');
    emailAddress=document.getElementById('emailId');
    buttonSubmit=document.getElementById('submitButton');
    buttonSubmit.addEventListener('click',()=>{
        
        const texto=emailAddress.value;
        if (emailValidator(texto)){
            console.log('email correcto');
            document.querySelector('.email-error').style.opacity=0;
            document.querySelector('.email-error').style.visibility='hidden';
            document.querySelector('.email-address').style.color='hsl(0, 0%,58%)';
            document.querySelector('.email-address').style.border='1px solid hsl(0, 0%,58%)';
            document.querySelector('.email-address').style.backgroundColor='white';
            document.getElementById('formId').style.visibility='hidden';
            document.getElementById('formId').style.opacity=0;
            document.getElementById('successId').style.opacity=1;
            document.getElementById('successId').style.visibility='visible';
        }else{
            document.querySelector('.email-error').style.opacity=1;
            document.querySelector('.email-error').style.visibility='visible';
            document.querySelector('.email-address').style.color='hsl(4, 100%, 67%)';
            document.querySelector('.email-address').style.border='1px solid hsl(4, 100%, 67%)';
            document.querySelector('.email-address').style.backgroundColor='#FFE8E6';
        }   

    });

    emailAddress.addEventListener('keydown',(e)=>{
        const texto=emailAddress.value;
        if (emailValidator(texto)){
            console.log('email correcto');
            document.querySelector('.email-error').style.opacity=0;
            document.querySelector('.email-error').style.visibility='hidden';
            document.querySelector('.email-address').style.color='hsl(0, 0%,58%)';
            document.querySelector('.email-address').style.border='1px solid hsl(0, 0%,58%)';
            document.querySelector('.email-address').style.backgroundColor='white';
        }else{
            document.querySelector('.email-error').style.opacity=1;
            document.querySelector('.email-error').style.visibility='visible';
            document.querySelector('.email-address').style.color='hsl(4, 100%, 67%)';
            document.querySelector('.email-address').style.border='1px solid hsl(4, 100%, 67%)';
            document.querySelector('.email-address').style.backgroundColor='#FFE8E6';
        }
        
    });
});