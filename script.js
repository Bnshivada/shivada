const enter = document.getElementById("enter");
const music = document.getElementById("music");

enter.onclick = () => {
  enter.style.display = "none";
  music.play();
};

document.addEventListener("mousemove", e => {
  const x = (window.innerWidth / 2 - e.clientX) / 25;
  const y = (window.innerHeight / 2 - e.clientY) / 25;
  document.querySelector(".card").style.transform =
    `translate(-50%, -50%) rotateY(${x}deg) rotateX(${y}deg)`;
});
