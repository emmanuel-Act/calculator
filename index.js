let display = document.getElementById('display'); //get the display div we will use it to update the cotents of the display

let buttons = Array.from(document.getElementsByClassName('button'));//get every element with class name button the and change it to an array to user array functions on them

buttons.map( button => { //map function creates an array by calling a specific function on each element present in the parent array. is it used to iterate over an array and calling function on every element of array.
    button.addEventListener('click', (e) => { //its like saying for every button in buttons array addeventlistener
        switch(e.target.innerText){ //e is a variable representing an event that triggers a specific function to be executed
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});