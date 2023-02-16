let string = "";

let buttons = document.querySelectorAll(".btn");

Array.from(buttons).forEach((button,i) => {
    button.addEventListener(('click'), (e) => {


        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML=='AC'){
            string='';
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML=='DE'){
            let n=string.length;
            string=string.slice(0,n-1);
            document.querySelector('input').value=string;
        }
        else {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
     
         let color=e.target.style.background;
        
        setTimeout(()=>{
            e.target.style.background='rgba(104, 117, 117, 0.619)';
        },1);
        setTimeout(()=>{
            e.target.style.background=color;
        },200);
    })
})