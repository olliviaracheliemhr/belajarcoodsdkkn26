let currentQuestion = 0;
let score = 0;

const judul = document.getElementById("judul");
const pertanyaan = document.getElementById("pertanyaan");
const targetText = document.getElementById("targetText");
const kode = document.getElementById("kode");
const pilihan = document.getElementById("pilihan");
const hasil = document.getElementById("hasil");

const nextBtn = document.getElementById("nextBtn");

const scoreText = document.getElementById("score");

const nomorSoal = document.getElementById("nomorSoal");
const totalSoal = document.getElementById("totalSoal");

const progressBar = document.getElementById("progressBar");

const finishPage = document.getElementById("finishPage");
const container = document.querySelector(".container");

const finalScore = document.getElementById("finalScore");

totalSoal.innerHTML = questions.length;

loadQuestion();

function loadQuestion(){

const q = questions[currentQuestion];

judul.innerHTML = q.title;

pertanyaan.innerHTML = q.question;

targetText.innerHTML = q.text;

kode.innerHTML = q.code;

nomorSoal.innerHTML = currentQuestion + 1;

progressBar.style.width =
((currentQuestion+1)/questions.length)*100+"%";

hasil.innerHTML="";

nextBtn.style.display="none";

pilihan.innerHTML="";

q.options.forEach((option,index)=>{

const btn=document.createElement("button");

btn.className="option";

btn.innerHTML=option;

btn.onclick=function(){

checkAnswer(index);

}

pilihan.appendChild(btn);

});

}

function checkAnswer(index){

const q=questions[currentQuestion];

const semua=document.querySelectorAll(".option");

semua.forEach(btn=>btn.disabled=true);

if(index===q.answer){

semua[index].classList.add("correct");

hasil.innerHTML="🎉 Jawaban Benar!";

hasil.style.color="green";

score+=10;

scoreText.innerHTML=score;

}else{

semua[index].classList.add("wrong");

semua[q.answer].classList.add("correct");

hasil.innerHTML="❌ Jawaban Salah";

hasil.style.color="red";

}

nextBtn.style.display="block";

}

function nextQuestion(){

currentQuestion++;

if(currentQuestion<questions.length){

loadQuestion();

}else{

container.style.display="none";

finishPage.style.display="block";

finalScore.innerHTML=score+" / 100";

}

}
