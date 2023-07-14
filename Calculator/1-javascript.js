let display = document.getElementById('display');

let button = Array.from(document.getElementsByClassName('button'));

button.map( buttom => {
    buttom.addEventListener('click', (e) => {
        switch(e.target.innertext){
            default:
                display.innerText += e.target.innerText;
        }
    })
});