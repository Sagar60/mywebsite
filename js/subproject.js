const input = document.querySelector('input');
const prime = document.querySelector('#prime');
const hex = document.querySelector('#hex');
const palim = document.querySelector('#palim');
const binary = document.querySelector('#binary');
const octal = document.querySelector('#Octal');
const h3 = document.getElementById('h3');
const perfact = document.getElementById('perfact');
const reset = document.getElementById('reset');

const result = document.getElementById('result');

// binary.style.color = "red";

let num;
const getnum = () =>{
    try {
        return parseInt(input.value);
    } catch (error) {
        console.log(error);
    }
};
const getnumstr = () =>{
    try {
        return (input.value);
    } catch (error) {
        console.log(error);
    }
};
const binaryfun = () => {
    num = getnum();
    if( isNaN(num) ){
        result.textContent = ":-  It's Not a Number, give a number.";
        console.log("This is Not a Number.");
    }
    else{
        result.textContent =" is : "+ num.toString(2);
        console.log(num.toString(2));
    }
};
const octalfun = () => {
    num = getnum();
    if( isNaN(num) ){
        result.textContent = ":-  It's Not a Number, give a number.";
        console.log("This is Not a Number.");
    }
    else{
        result.textContent =" is : " +num.toString(8);
        console.log(num.toString(8));
    }
};
const hexfun = () =>{
    num = getnum();
    if( isNaN(num) ){
        result.textContent = ":-  It's Not a Number, give a number.";
        console.log("This is Not a Number.");
    }
    else{
        result.textContent = " is : "+num.toString(16).toUpperCase();
    }
};

const palimfun = () =>{
    num = getnumstr();
    if( isNaN(parseInt(num)) ){
        result.textContent = ":-  It's Not a Number, give a number.";
        console.log("This is Not a Number.");
    }
    else{
        let i =0;
        let j =num.length-1;
        let flag =false;
        while( i<j ){
            if(num[i] !== num[j]  ){
                flag = true;
                break;
            }
            i++;
            j--;
        }
        if(flag)
        result.textContent = " is : It's Not a Palindrome Number.";
        else
        result.textContent = "  is : It's a Palindrome Number.";
        console.log(num);
    }
};
const primefun = () => {
    num = getnum();
    if( isNaN(parseInt(num)) ){
        result.textContent = ":-  It's Not a Number, give a number.";
        console.log("This is Not a Number.");
    }
    else{
        let flag =false;
        if(num <2 ){
            result.textContent = " is : It's not A Prime Number.";
        }else{
            let p =2;
            while( p*p<=num){
                if(num % p ==0){
                    flag = true;
                    result.textContent = " is : It's Not a Prime Number.";
                    console.log("It's Not a Prime Number.");
                    break;
                }
                p++;
            }
            if(!flag){
                result.textContent =" is : It's A Prime Number.";
                console.log("It's a Prime Number.");
            }
        }
    }
};


binary.addEventListener('click', binaryfun);
palim.addEventListener('click', palimfun);
hex.addEventListener('click', hexfun);
octal.addEventListener('click', octalfun);
prime.addEventListener('click',primefun);
perfact.addEventListener('click', () =>{
    num = getnum();
    if( isNaN(parseInt(num)) ){
        result.textContent = ":-  It's Not a Number, give a number.";
        console.log("This is Not a Number.");
    }else{
        let a=[];
        let p=1;
        while(p*p <= num ){
            if(num% p ==0 ){
                if( num/p !== p  ){
                    a.push(p);
                    if(num !== num/p)
                    a.push(num/p);

                }
                else
                a.push(p);
            }
            p++;
        }
        let sum =0; 
        for(let number of a){
            sum+=number;
        }
        if( sum === num ){
            result.textContent = " is : It's A Perfact Number.";
        }
        else{
            result.textContent = " is : It's Not A Perfact Number.";
        }
        console.log(a);
    }
});
reset.addEventListener('click', () =>{
    input.value="";
});

// submit.addEventListener('click',fun);
