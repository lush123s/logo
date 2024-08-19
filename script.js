let nav = document.getElementById('nav');
let logo =  document.getElementById('logo')
let h4 = document.getElementsByClassName('h4')
    console.log(h4)
let flag = 0;
nav.addEventListener('click',function(){
    if(flag === 0){

        for(let i of h4){
            i.style.display = 'block';
            logo.style.display = 'none'
            flag = 1;
        }
    }
    else{
        for(let i of h4){
            i.style.display = 'none';
            logo.style.display = 'block'
            flag = 0;
        }
    }
})