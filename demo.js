let input = document.getElementById('item');

let buttons = document.querySelectorAll('.button');

let string = " " ;

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.value == '='){
            string = eval(string);
            input.innerHTML = string;
        }
        else if(e.target.value == 'AC'){
            string = "";
            input.innerHTML = string;
        }
        else{
            console.log(e.target)
            string = string + e.target.value;
           // input.value = string;
           
            input.innerHTML= string;
            
           
        }
    });
});