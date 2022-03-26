const eye = document.querySelector(".iris");
window.addEventListener("mousemove", (event) => {
  const x = -(window.innerWidth / 2 - event.pageX) / 20; //35
  const y = -(window.innerHeight / 2 - event.pageY) / 20;
  eye.style.transform = `rotate(-40deg) translateY(${y}px) translateX(${x}px)`;
});
const eye2 = document.querySelector(".iris2");
window.addEventListener("mousemove", (event) => {
  const x = -(window.innerWidth / 2 - event.pageX) / 20;
  const y = -(window.innerHeight / 2 - event.pageY) / 20;
  eye2.style.transform = `rotate(-40deg) translateY(${y}px) translateX(${x}px)`;
});

