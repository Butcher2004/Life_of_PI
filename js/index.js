AOS.init({
  disable: "tablet, phone", // Disable animations on tablets and phones
  duration: 0, // Set the duration of 'aos:out' event to 0 to disable it
});

const bt = document.querySelector("#bton");
const txt = document.querySelector(".text");
const spa = document.querySelector(".of");
const vid = document.querySelector(".vid");
var nav = document.querySelector("#nav");
const title = document.querySelector(".title");
const main = document.querySelector(".main");
const tiger = document.querySelector(".tiger");
const pi = document.querySelector(".pi");
const chapters = document.querySelector(".chapter_cont");
const space = document.querySelector(".space")
const image = document.querySelector(".image")



bt.addEventListener("click", trig);
vid.addEventListener("click", trig);
txt.addEventListener("click", trig);













var arr = [
  "<div class='chapter' data-aos='fade-in' data-aos-offset='200' data-aos-delay='0' data-aos-duration='1000' ><a href = 'chapters\\chapt_1.html'><div class = 'chappie'><img src='pictures\\p_d.png' alt=''><h3>Chapter 1</h3><p>PONDICHERRY </p> <span>DREAMS</span></div></a></div>",
  "<div class='chapter' data-aos='fade-in' data-aos-offset='200' data-aos-delay='500' data-aos-duration='1000' ><a href = 'chapters\\chapt_2.html'><div class = 'chappie'><img src='pictures\\t_j_b.png' alt=''> <h3>Chapter 2</h3><p>THE JOURNEY </p><span>BEGINS</span></div></a></div>",
  "<div class='chapter' data-aos='fade-in' data-aos-offset='200' data-aos-delay='1000' data-aos-duration='1000' ><a href = 'chapters\\chapt_3.html'><div class = 'chappie'><img src='pictures\\sas_4.png' alt=''> <h3>Chapter 3</h3><p>SURVIVAL</p><span>AT SEA</span></div></a></div>",
  "<div class='chapter' data-aos='fade-in' data-aos-offset='200' data-aos-delay='1500' data-aos-duration='1000' ><a href = 'chapters\\chapt_4.html'><div class = 'chappie'><img src='pictures\\the_end_1.png' alt=''> <h3>Chapter 4</h3><p>THE ULTIMATE</p><span>JOURNEY</span></div></a></div>",
];

function trig() {
  txt.style.animation = "move_to_top 1s linear forwards";
  spa.style.animation = "move_to_top_s 1s linear forwards";
  bt.style.display = "none";
  vid.style.display = "none";
  vid.removeAttribute("onended");

  setTimeout(function () {
    title.innerHTML = "LIFE <span>OF&nbsp;</span> PI";
    txt.style.display = "none";
    main.style.display = "flex";
    tiger.style.display = "block";
    pi.style.display = "block";
    space.style.display = "block";
    image.style.display  = "block";
    setTimeout(function () {
      for (var i = 0; i < 4; i++) {
        chapters.innerHTML += arr[i];
      }
    }, 1500);
  }, 1000);
}

window.onload = function () {
  setTimeout(vid.play(), 1500);
};
