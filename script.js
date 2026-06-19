const input = document.getElementById("inputText");

const inputSection = document.getElementById("inputSection");

const resultSection = document.getElementById("resultSection");

const qrContainer = document.getElementById("qrcode");

const generateBtn = document.getElementById("generateBtn");

const downloadBtn = document.getElementById("downloadBtn");

const newBtn = document.getElementById("newBtn");


generateBtn.addEventListener("click", () => {

const value = input.value.trim();

if(value===""){

alert("Please enter text or URL");

return;

}

qrContainer.innerHTML="";

new QRCode(qrContainer,{

text:value,

width:220,

height:220

});

inputSection.style.display="none";

resultSection.style.display="block";

});


downloadBtn.addEventListener("click",()=>{

const image = qrContainer.querySelector("img");

if(!image){

return;

}

const link = document.createElement("a");

link.href=image.src;

link.download="QuickQR.png";

link.click();

});


newBtn.addEventListener("click",()=>{

input.value="";

qrContainer.innerHTML="";

resultSection.style.display="none";

inputSection.style.display="block";

});