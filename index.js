const bm = document.getElementById("birthmonth");

const body =document.body;

const changeBackground=()=>{
 
    switch(bm.value){
        case "1":
            body.style.backgroundColor="#fc0382";
            break;
        case "2":
            body.style.backgroundColor="#ebd234";
            break;
        case "3":
            body.style.backgroundColor="#c0f576";
            break;
        case "4":
            body.style.backgroundColor="#eb7fd0";
            break;                        
        case "5":
            body.style.backgroundColor="#07084a";
            break;
        case "6":
            body.style.backgroundColor="#7e07d9";
            break;
        case "7":
            body.style.backgroundColor="#f56d05";
            break;
        case "8":
            body.style.backgroundColor="#1a020c";
            break; 
        case "9":
            body.style.backgroundColor="#fc0382";
            break;
        case "10":
            body.style.backgroundColor="#e30909";
            break;
        case "11":
            body.style.backgroundColor="#555933";
            break;
        case "12":
            body.style.backgroundColor="aqua";
            break; 
        default:
            breake
    }

};
