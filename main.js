// let title = document.querySelector('#title');
// let paragraph_1 = document.querySelector('#paragraph_1');
// let pubblication_Time = document.querySelector('#pubblication_Time');
// let button_Insert = document.querySelector('#button_Insert');


// button_Insert.addEventListener('click' , ()=>{
//     title.innerHTML = prompt('Inserisci un titolo');
//     paragraph_1.innerHTML = prompt('Inserisci un paragrafo');
//     pubblication_Time.innerHTML = Date();
// })



let title = document.querySelector('input');
let paragraph_1 = document.querySelector('textarea');
let button_Insert = document.querySelector('button');
let container = document.querySelector('.container');
let pubblication_Time = Date()

button_Insert.addEventListener('click', ()=>{


    if (title.value == '' || paragraph_1.value == '') {
        alert('Tutti i campi sono obbligatori')
    }else{
        let div = document.createElement('div')
        div.style.backgroundColor = 'aqua'
        div.style.padding = '20px'
        div.style.marginTop = '20px'
        div.style.border = '2px solid black'
        div.innerHTML = `<h2>${title.value}</h2> <p>${paragraph_1.value}</p> <i>${pubblication_Time}</i>`
        container.appendChild(div)
        title.value = ''
        paragraph_1.value = ''
    }
})

