const slideList = [{
    img: "img/project_image_01@2x.jpg",
  },
  {
    img: "img/project_image_02@2x.jpg",
  },
  {
    img: "img/project_image_03@2x.jpg",
  }
];

const arrowPrev = [{
  img: "img/icon_prev_hover.svg"
}, {
  img: "img/icon_prev.svg"
}]

const arrowNext = [{
  img: "img/icon_next_hover.svg"
}, {
  img: "img/icon_next.svg"
}]

let count = 1;
const prevArrow = document.querySelector(".slider-wrap__prev");
const nextArrow = document.querySelector(".slider-wrap__next");
const leftPicture = document.querySelector(".left-img");
const defaultPicture = document.querySelector(".default-img");
const rightPicture = document.querySelector(".right-img");

function checkImgRenge(num) {
  if (num === slideList.length) {
    return num = 0;
  } else if (num < 0) {
    return num = slideList.length - 1;
  } else {
    return num;
  }
}

function changeImg(num) {
  let numLeft = num;
  let numRight = num;
  leftPicture.src = slideList[checkImgRenge(--numLeft)].img;
  defaultPicture.src = slideList[num].img;
  rightPicture.src = slideList[checkImgRenge(++numRight)].img;
}

prevArrow.addEventListener('click', () => {
  count = checkImgRenge(--count);
  changeImg(count);
});

nextArrow.addEventListener('click', () => {
  count = checkImgRenge(++count);
  changeImg(count);
});

prevArrow.addEventListener('mouseover', () => {
  prevArrow.src = arrowPrev[0].img;
});

prevArrow.addEventListener('mouseleave', () => {
  prevArrow.src = arrowPrev[1].img;
});

nextArrow.addEventListener('mouseover', () => {
  nextArrow.src = arrowNext[0].img;
});

nextArrow.addEventListener('mouseleave', () => {
  nextArrow.src = arrowNext[1].img;
});