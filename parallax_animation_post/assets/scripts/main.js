window.addEventListener("scroll", () => {

  const imageTop = document.querySelector(".img-top");
  const imageMiddle = document.querySelector(".img-middle");
  const imageBottom = document.querySelector(".img-bottom");
  const showcaseData = document.querySelector(".showcase-data");


  let scrollPostionY = window.scrollY;

  let showcaseDataStyle = `
    transform: translateY(${scrollPostionY * .2}%);
    opacity: ${1 - scrollPostionY * 0.002};
  `;


  if (scrollPostionY < 600) {
    showcaseData.style = showcaseDataStyle;
    imageTop.style.transform = `translateY(${-scrollPostionY * .001}%)`;
    imageMiddle.style.transform = `translateY(${scrollPostionY * .02}%)`;
    imageBottom.style.transform = `translateY(${-scrollPostionY * .04}%)`;
  }


});