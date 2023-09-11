function convert(){
    var option1=document.getElementById("select").value;
    var option2=document.getElementById("tselect").value;
    var input=document.getElementById("num").value;
    var result=10;

    if(option1=='C')
    {
        if(option2=='K')
        {
            result=parseFloat(input)+273.15;
            document.getElementById("result").innerHTML=result.toFixed(2);
        }
        else if(option2=='F')
        {
            result=(parseFloat(input)*1.8)+32;
            document.getElementById("result").innerHTML=result.toFixed(2);
        }
        else{
            result=parseFloat(input);
            document.getElementById("result").innerHTML=result;
        }   
    }
    
    else if(option1=='K')
    {
        if(option2=='F')
        {
            result=(parseFloat(input)-273.15)*(9/5)+32;
            document.getElementById("result").innerHTML=result.toFixed(2);
        }
        else if(option2=='C')
        {
            result=parseFloat(input)-273.15;
            document.getElementById("result").innerHTML=result.toFixed(2);
        }
        else
        {
            result=parseFloat(input);
            document.getElementById("result").innerHTML=result;
        }
    }
    else
    {
        if(option2=='C')
        {
            result=(parseFloat(input)-32)*(5/9);
            document.getElementById("result").innerHTML=result.toFixed(2);
        }
        else if(option2=='K')
        {
            result=(parseFloat(input)+459.67)*(5/9);
            document.getElementById("result").innerHTML=result.toFixed(2);
        }
        else
        {
            result=parseFloat(input);
            document.getElementById("result").innerHTML=result;
        }
    }
}