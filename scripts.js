function convert(){
    const temperature = parseFloat(document.getElementById("temperature").value);
    const fromTemp = document.getElementById("fromTemp").value;
    const toTemp = document.getElementById("toTemp").value;

    var result;
    var resultUnit;

    console.log("T : ",temperature);
    console.log("F : ",fromTemp);
    console.log("To : ",toTemp);

    switch(fromTemp){
        case "C" : 
            if(toTemp=="F"){
                result = (temperature * 9/5) + 32;
                resultUnit = "F";
            }else if(toTemp=="K"){
                result = temperature + 273.15;
                resultUnit = "K";
            }else{
                result = temperature;
                resultUnit = "C";
            }
            break;
        case "F" :
            if(toTemp=="C"){
                result = (temperature - 32) * 5/9;
                resultUnit = "C";
            }else if(toTemp=="K"){
                result = (temperature - 32) * 5/9 + 273.15;
                resultUnit = "K";
            }else{
                result = temperature;
                resultUnit = "F";
            }
            break;
        case "K" :
            if(toTemp=="C"){
                result = temperature - 273.15;
                resultUnit = "C";
            }else if(toTemp=="F"){
                result = (temperature - 273.15) * 9/5 + 32;
                resultUnit = "F";
            }else{
                result = temperature;
                resultUnit = "K";
            }
            break;
    }
    console.log(result , resultUnit);
    document.getElementById("res").innerText = result.toFixed(2) +" "+resultUnit;
}

