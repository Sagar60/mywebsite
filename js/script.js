
/*let d=new Date();
        alert("Today's date is "+d);


        function add(num1 , num2){
            const result = num1 + num2;
            alert('the result of '+num1+' + '+num2+' is '+result);
        }
        add(1,2);*/

        
    
        // Buttom Creation 
        var inPut= document.getElementById('inputnum');
        const addb= document.getElementById('add-sum');
        const subtractb= document.getElementById('add-subtract');
        const multipb= document.getElementById('add-multiply');
        const divideb= document.getElementById('add-divide');
        const reset=document.getElementById('reset2');
        const log=document.getElementById('log-btm');
        const ln=document.getElementById('ln-btm');
    
        const equalb=document.getElementById('add-eqn');
        let sign='';
        let fLog=0;
    
        // object define
        let a= {
            first: [],
            sign: [],
            second: [],
            result: [],

        };
        // show in console result via object
        function objsee(fir, sig, sec, res){
            a.first.push(fir);
            a.sign.push(sig);
            a.second.push(sec);
            a.result.push(res);
            console.log(a);
        }
        // equal button key
    
        var eqn=document.getElementById('eqn-resut');
        const resulteqn=document.getElementById('result');
    
        let first=0;
        let last=0;
        let rLast=0;
    
        // Button action by keyboard
        inPut.addEventListener("keyup",function(event){
            if(event.keycode === 13)
            {
                event.preventDefault();
    
                document.getElementById("add-eqn").click();
                
            }
        });
        // For Print the output Function
        function print1(number,text){
            if(rLast!=1)
            var s="Equation of:  ";
            else{
                s="";
            }
            if(fLog==1){
                s="For ";
            }
            eqn.textContent=s+text;
            resulteqn.textContent=" "+number;
    
        }
        // number take from input box
    
        function getnum(){
            try{
            return parseFloat(inPut.value);
            }
            catch(error){
                console.log(error);
            }
        }
        var forLog;
        // For Log value
        function logarithm(){
            if(fLog!=1 || last==0){
            if(inPut.value=='' && last==0 && first==0){
                alert("Please Enter Value of  'a' Then See The Result");
            }
            else{
               
                if(first==0){
                fLog=1;
            const valLog = getnum();
            forLog=valLog;
            print1(Math.log10(valLog), "Log("+getnum()+")");
            first=Math.log10(valLog);
                }
                else{
                    if(forLog!=getnum()){
                    first=getnum();
                    }
                    fLog=1;
            valLog =first;
            print1(Math.log10(valLog), "Log("+first+")");
            first=Math.log10(valLog);
                }
            }
            }
            else if(fLog==1 && last!=0){
                alert("This Feature Not Support Right Now Please Note This Result And Try Again After Clear")
            }
        }
    var forLn;
        // For Ln value
        function lnFun(){
            if(fLog!=1 || last==0){
            if(inPut.value=='' && last==0 && first==0){
                alert("Please Enter Value of  'a' Then See The Result");
            }
            else{
                if(first==0){
                fLog=1;
            const valLn = getnum();
            forLn=valLn;
            print1(Math.log(valLn), "ln("+getnum()+")");
                    first=Math.log(valLn);
                }
                else{
                    if(forLn!=getnum()){
                        first=getnum();
                    }
                    fLog=1;
            valLn = first;
            print1(Math.log(valLn), "ln("+first+")");
            first=Math.log(valLn)
                }
            }
            }
        else if(fLog==1 && last!=0){
            alert("This Feature Not Support Right Now Please Note This Result And Try Again After Clear")
        }
        }
    
        // for sum result 
        function add(){
            if(fLog!=1 || last==0){
            if(inPut.value=='' && last==0){
                alert('Please Enter Value Then See The Result');
            }
            else{
            if(last==0)
            first=getnum();
            sign='+';
            inPut.value='';
            last++;
            }
        }
        else if(fLog==1 && last!=0){
            alert("This Feature Not Support Right Now Please Note This Result And Try Again After Clear")
        }
        }
        // for subtract result take
        function sub(){
            if(fLog!=1 || last==0){
            if(inPut.value==''  && last==0){
                alert('Please Enter Value Then See The Result');
            }
            else{
            if(last==0)
            first=getnum();
            sign='-';
            inPut.value='';
            last++;
            }
        }
        else if(fLog==1 && last!=0){
            alert("This Feature Not Support Right Now Please Note This Result And Try Again After Clear")
        }
        }
        // for multiply result take
        function multi(){
            if(fLog!=1 || last==0){
            if(inPut.value=='' && last==0 ){
                alert('Please Enter Value Then See The Result');
            }
            else{
            if(last==0)
            first=getnum();
            sign ='*';
            inPut.value='';
            last++;
            }
        }
        else if(fLog==1 && last!=0){
            alert("This Feature Not Support Right Now Please Note This Result And Try Again After Clear")
        }
        }
        // for divide result take
        function divid(){
            if(fLog!=1 || last==0){
            if(inPut.value==''  && last==0){
                alert('Please Enter Value Then See The Result');
            }
            else{
            if(last==0)
            first=getnum();
            sign='/';
            inPut.value='';
            last++;
            }
        }
        else if(fLog==1 && last!=0){
            alert("This Feature Not Support Right Now Please Note This Result And Try Again After Clear")
        }
        }
        let now=0;
        let second;
    
        // for equal the value to get result
        function equal(){
            if(fLog!=1){
            if(inPut.value==''){
                alert('Please Enter Value Then See The Result');
                return;
            }
            if(sign === ''){
                alert('Select a correct Operator');
                return;
            }
            else{
            now=1;
            second = getnum();
            now =first;
            rLast=0;
            if(sign=='+')
            {
                first=first+second;
            }
            else if(sign=='-'){
                first=first-second;
    
            }
            else if(sign=='*'){
                first=first*second;
                
            }
            else if(sign=='/'){
                first=first/second;
                
            }
            const s= sum(sign,now,second);
            }
           // console.log(`First: ${now} ${sign} Second: ${second}\nResult: ${first}`);
            objsee(now, sign, second, first);

        }
        
        }
        function sum(sign, num1 , num2){
            const num=`${num1} ${sign} ${num2}`;
            print1(first,num);
        }
        function goReset(){
            rLast=1;
            fLog=0;
            first=0;
            second=0;
            last=0;
            sign = '';
            print1(0,0);
            
        }
    
        /*function name(){
            alert(inPut.value);
            alert('HI I am there'+inPut);
        }
    function prevprint(operator, num1 , num2){
            const byPut=`${num1} ${operator} ${num2}`;
            print1(first,byPut);
        }
        function add(){
            first=getnum();
            sign='+';
            inPut.value='';
        }
        function equal(){
            const second=getnum();
            alert(second);
            const num=first;
            if(sign=='+')
            {
                first=first+second;
            }
            else if(sign=='-'){
                first=first-second;
    
            }
            else if(sign=='*'){
                first=first*second;
                
            }
            else if(sign=='/'){
                first=first-second;
                
            }
            prevprint(sign, num, second);
        }*/
    
        //  declare buuton work
    
      
        log.addEventListener('click', logarithm);
        ln.addEventListener('click', lnFun);
        reset.addEventListener('click', goReset);
        addb.addEventListener('click',add);
        subtractb.addEventListener('click',sub);
        multipb.addEventListener('click',multi);
        divideb.addEventListener('click',divid);
        equalb.addEventListener('click',equal);
    
