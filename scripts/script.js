const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);











































// function entrar(e) {

//     const email = 'suporte';
//     const password = 'supp2468';

//     const id = (elem) => {
//         return document.getElementById(elem);
//     }

//     const validEmail = id('email').value;
//     const validPassword = id('password').value;

//     if (validEmail === email && validPassword === password) {
//         return true;
//     } else if (validEmail === email && validPassword !== password) {
//         alert('Senha incorreta!')
//         id('password').style.borderBottom = '1px solid #FF0000';
//         return e.preventDefault();
//     } else if (validEmail !== email && validPassword === password) {
//         alert('E-mail ou usuário incorreto!')
//         id('email').style.borderBottom = '1px solid #FF0000';
//         return e.preventDefault();
//     } else {
//         id('password').style.borderBottom = '1px solid #FF0000';
//         id('email').style.borderBottom = '1px solid #FF0000';
//         alert('Preencha os dados corretamente!')
//         return e.preventDefault();
//     }
// }

// const id = (elem) => {
//     return document.getElementById(elem);
// }


// document.addEventListener('keypress', function(e) {
//     if (e.key == 'Enter') {

//         const btn = document.querySelector("#button");

//         btn.click();
//     }
// });


// let acessarIndex = id('button');

// acessarIndex.addEventListener('click', entrar, false);




// //olho


// function mouseoverPass(obj) {
//     var obj = document.getElementById('password');
//     obj.type = "text";
// }

// function mouseoutPass(obj) {
//     var obj = document.getElementById('password');
//     obj.type = "password";
// }


//  animação menu mobile








// function entrar(e) {

//     const email = 'mateusangelo@hotmail.com';
//     const password = '123456';

//     const id = (elem) => {
//        return document.getElementById(elem);
//     }

//     const validEmail = id('email').value;
//     const validPassword = id('password').value;

//     if(validEmail !== email && validPassword !== password){
//         alert('Preencha os dados corretamente!')
//     }else if(validEmail === email && validPassword !== password){
//         alert('Senha incorreta!')
//         id('password').style.borderBottom = '1px solid #FF0000';
//         return e.preventDefault();
//     }else if(validEmail !== email && validPassword === password){
//         alert('E-mail incorreto!')
//         id('email').style.borderBottom = '1px solid #FF0000';
//         return e.preventDefault();
//     }
//     else{
//         return true;
//     }
// }

//     const id = (elem) => {
//        return document.getElementById(elem);
//     }



// document.addEventListener('keyup', function(e){
//     if(e.key === 'Enter' || e.key === 'NumpadEnter'){
//         entrar();
//     }
// });


// let acessarIndex = id('button');

// acessarIndex.addEventListener('click', (e) => {
//     e.preventDefault();
//     entrar
// }, false);