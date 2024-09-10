let title = document.querySelector('#title');
let paragraph_1 = document.querySelector('#paragraph_1');
let pubblication_Time = document.querySelector('#pubblication_Time');
let button_Insert = document.querySelector('#button_Insert');


button_Insert.addEventListener('click' , ()=>{
    title.innerHTML = prompt('Inserisci un titolo');
    paragraph_1.innerHTML = prompt('Inserisci un paragrafo');
    pubblication_Time.innerHTML = Date();
})