let logo = document.getElementById("logo");
let kopcinja = document.getElementById("Kopcinja");



let backgroundImg = document.getElementById("backgroundImg");
let backgroundVar = "none";
var bgPixeli = backgroundImg.offsetWidth;
backgroundImg.style.width = 0;

let contactsPozadina = document.querySelector(".podatoci");
//backgroundImg.style.backgroundImage = "url('images/testRus.jpg')";

function loader(){
    
    
    backgroundImg.style.width = 75+"%";
    backgroundImg.style.transition = 0.5+"s";
    
    logo.style.width = 300+"px";
    logo.style.transition = 1+"s";
    
    setTimeout(function(){
        kopcinja.style.opacity = 1;
    },1000)
}

function changeToRus(){
    if(backgroundVar != "Rus"){
        backgroundImg.style.opacity = 0;
        backgroundImg.style.transition = 0.2+"s";
        setTimeout(function(){
            backgroundImg.style.backgroundImage = "url('images/testRus.jpg')";
            backgroundImg.style.opacity = 1;
            backgroundImg.style.transition = 0.2+"s";
            backgroundImg.style.border = "thick solid #000000";
        },200);

        backgroundVar = "Rus";
    }
    else{
    }
    
}

function changeToSlo(){
    if(backgroundVar != "Slo"){
        backgroundImg.style.opacity = 0;
        backgroundImg.style.transition = 0.2+"s";
        setTimeout(function(){
            backgroundImg.style.backgroundImage = "url('images/testSlo.jpg')";
            backgroundImg.style.opacity = 1;
            backgroundImg.style.transition = 0.2+"s";
            backgroundImg.style.border = "thick solid #000000";
        },200);

        backgroundVar = "Slo";
    }
    else{
    }
    
}

function changeToUae(){
    if(backgroundVar != "Uae"){
        backgroundImg.style.opacity = 0;
        backgroundImg.style.transition = 0.2+"s";
        setTimeout(function(){
            backgroundImg.style.backgroundImage = "url('images/testUae.jpg')";
            backgroundImg.style.opacity = 1;
            backgroundImg.style.transition = 0.2+"s";
            backgroundImg.style.border = "thick solid #000000";
            
        },200);

        backgroundVar = "Uae";
    }
    else{
    }
    
}
function changeToEgy(){
    if(backgroundVar != "Egy"){
        backgroundImg.style.opacity = 0;
        backgroundImg.style.transition = 0.2+"s";
        setTimeout(function(){
            backgroundImg.style.backgroundImage = "url('images/testEgy.jpg')";
            backgroundImg.style.opacity = 1;
            backgroundImg.style.transition = 0.2+"s";
            backgroundImg.style.position = 'center';
            document.body.style.position = 'center';
            document.body.style.backgroundSize = 'cover';
            backgroundImg.style.border = "thick solid #000000";
        },200);

        backgroundVar = "Egy";
    }
    else{
    }
    
}
/* NE FAKJAJ TUKA ZA UPDATE E OVOA */
function imageBack(){
    backgroundImg.style.opacity = 0;
    backgroundImg.style.transition = 0.2+"s";
    
    setTimeout(function(){
            backgroundImg.style.backgroundImage = "url('images/test.jpg')";
            backgroundImg.style.opacity = 1;
            backgroundImg.style.transition = 0.2+"s";
            backgroundImg.style.position = 'center';
            document.body.style.position = 'center';
            document.body.style.backgroundSize = 'cover';        
    },200)
    
    backgroundVar = "none";
}

