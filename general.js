//Close Objective box//
let object = document.getElementById('Obj');
    function closeme(){
        object.style.display="none";
    }
//Play an Audio//

    var audio = document.getElementById("kinetic_audio");
    var count = 0;
    function play(){
        if(count == 0){
            count=1;
            audio.play();
        }else{
            count = 0;
            audio.pause();
        }
    }


//Display block of review questions//
    let quest = document.getElementById("reviewquest");
    function reviewquest(){
        quest.style.display="block";

    }


//Temperature Change Calculations//

//Celsius to Kelvin//
    function getValue(){
        let celsius = document.getElementById("celsius");
        let Valuecelsius = (Number(celsius.value))+273;
        let kelvin = document.getElementById("kelvin");
        let roundValue = Valuecelsius.toFixed(2);
        kelvin.innerText = roundValue;
    }
//Celsius to Fahrenheit//
    function getValue1(){
        let celsius = document.getElementById("celsius1");
        let Valuecelsius = (9/5)*(Number(celsius.value))+32;
        let fahrenheit = document.getElementById("fahrenheit");
        let roundValue = Valuecelsius.toFixed(2);
        fahrenheit.innerText=roundValue;
    }
    


//Calculation for review questions//
    let correctas=[2,2,2,3,4,1];

    let opcion_elegida = [];
    let cantidad_correctas= 0;
    
    function checkme(nob,selection){
        opcion_elegida[nob] = selection.value;
        
        id="p"+ nob;

        labels = document.getElementById(id).chilNodes;
        labels[3].style.backgroundColor="white";
        labels[5].style.backgroundColor="white";
        labels[7].style.backgroundColor="white";

        selection.parentNode.style.backgroundColor="#cec0fc";
    }
        function checkit(){
            cantidad_correctas = 0
            for(i=0; i < correctas.length; i++){
                if(correctas[i]==opcion_elegida[i]){
                    cantidad_correctas++;
                }
            }
            document.getElementById("result").innerHTML=cantidad_correctas;
    }

    