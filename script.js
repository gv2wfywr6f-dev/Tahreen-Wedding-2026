document.addEventListener("DOMContentLoaded",()=>{

const enterBtn=document.getElementById("enterBtn");
const loading=document.getElementById("loading");

const envelope=document.getElementById("envelopeSection");
const openCard=document.getElementById("openCard");

const card=document.getElementById("cardSection");
const continueBtn=document.getElementById("continueBtn");

const scratch=document.getElementById("scratchSection");
const cover=document.getElementById("cover");
const next=document.getElementById("nextCouple");

envelope.style.display="none";
card.style.display="none";
scratch.style.display="none";

enterBtn.onclick=()=>{

loading.style.opacity="0";

setTimeout(()=>{

loading.style.display="none";
envelope.style.display="flex";

},1000);

}

openCard.onclick=()=>{

document.querySelector(".letter").style.transform="translateY(-140px)";

setTimeout(()=>{

envelope.style.display="none";
card.style.display="flex";

},1000);

}

continueBtn.onclick=()=>{

card.style.display="none";
scratch.style.display="flex";

}

cover.onclick=()=>{

cover.style.opacity="0";

setTimeout(()=>{

cover.style.display="none";

},800);

}

next.onclick=()=>{

alert("Next: Pinterest Couple Section ❤️");

}

});