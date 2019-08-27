fortuneBank = [
"วันนี้อากาศดี ลองออกไปเดิน จะพอกับสิ่งดีๆ ที่เฝ้ารอ",
"ท่องในใจก่อนนอนว่าอยากได้อะไร",
"วันนี้เลขนำโชคคือเลข 2",
"สีเขียวคือสีที่ทำให้โชคดีในวันนี้",
"ช่วยเหลือทุกคนจะทำให้โชคดี",
"กวาดพื้นทำให้โชคดี"
];

function play(){
    cookie1.classList.add("cookie-hide");
    cookie2.classList.add("cookie-show");
    setTimeout(function(){
        getFortune();
    },3000)
}

function getFortune(){
    rand = Math.floor(Math.random()*fortuneBank.length);
    fortune.innerText = fortuneBank[rand];
    fortune.style.opacity = 1;
    fortune.style.top = "96px";
}

function play2(){
    // cookie2.classList.add("cookie-hide");
    month = prompt("Your birth month")
    cookie2.classList.add("cookie-show");
    setTimeout(function(){
        getFortune();
    },3000);

}