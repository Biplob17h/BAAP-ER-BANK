document.getElementById('btn-submit').addEventListener('click', function(){
    const eMail = document.getElementById('email1');
    const enterEmail = eMail.value;
    const passWord = document.getElementById('pass1');
    const enterPassword = passWord.value;
    console.log(enterEmail, enterPassword)
    if(enterEmail === 'sontan@bap.com' && enterPassword === 'yourson'){
        window.location.href = 'bank.html'
    }
    else if(enterEmail === ''){
        alert("E-mail can't be eamty")
    }
    else if(enterPassword === ''){
        alert("Password can't be eamty")
    }
    else if(enterEmail != 'sontan@bap.com'){
        alert('please enter  right E-mail')
    }
    
   
    else if(enterEmail === 'sontan@bap.com' && enterPassword != 'yourson'){
        alert('please enter right Password')
    }

})