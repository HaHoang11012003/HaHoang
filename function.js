`use strict`;
// Phần Reload lại trang
const buttonReload = document.querySelector(`.button-reload-web`);
buttonReload.addEventListener(`mouseenter`, function (e) {
  e.preventDefault();
  buttonReload.style.cursor = "pointer";
});
buttonReload.addEventListener(`click`, function () {
  location.reload();
});
// Phần hiệu ứng JS dành cho LATEST
const overlayClass = document.querySelector(`.overlay-class`);
const btnMenu = document.querySelector(`.header-son`);
const latestMum = document.querySelector(`.latest-mum`);
btnMenu.addEventListener(`mouseenter`, function (event) {
  event.preventDefault();
  latestMum.style.transform = "translateY(100%)";
  overlayClass.classList.add(`colors`);
  latestMum.addEventListener(`click`, function (e) {
    e.stopPropagation();
  });
});
btnMenu.addEventListener(`mouseleave`, function (e) {
  e.preventDefault();
  latestMum.style.transform = "translateY(0%)";
  overlayClass.classList.remove(`colors`);
});
// Phần hiệu ứng JS dành cho LATEST

// Phần hiệu ứng JS dành cho MUTV
const btnMenu1 = document.querySelector(`.header-son:nth-child(3)`);
const MUTV = document.querySelector(`.MUTV-mum`);
btnMenu1.addEventListener(`mouseenter`, function (e) {
  e.preventDefault();
  MUTV.style.transform = "translateY(100%)";
  overlayClass.classList.add(`colors`);
  MUTV.addEventListener(`click`, function (e) {
    e.stopPropagation();
  });
});
btnMenu1.addEventListener(`mouseleave`, function (e) {
  e.preventDefault();
  MUTV.style.transform = "translateY(0%)";
  overlayClass.classList.remove(`colors`);
});
// Phần hiệu ứng JS dành cho MUTV

// Phần hiệu ứng JS dành cho FIXTURES
const btnMenu2 = document.querySelector(`.header-son:nth-child(5)`);
const fixtures = document.querySelector(`.fixtures-mum`);
btnMenu2.addEventListener(`mouseenter`, function (e) {
  e.preventDefault();
  fixtures.style.transform = "translateY(100%)";
  overlayClass.classList.add(`colors`);
  fixtures.addEventListener(`click`, function (e) {
    e.stopPropagation();
  });
});
btnMenu2.addEventListener(`mouseleave`, function (e) {
  e.preventDefault();
  fixtures.style.transform = "translateY(0%)";
  overlayClass.classList.remove(`colors`);
});
// Phần hiệu ứng JS dành cho FIXTURES

// Phần hiệu ứng JS dành cho TICKETS
const btnMenu3 = document.querySelector(`.header-son:nth-child(6)`);
const tickets = document.querySelector(`.tickets-mum`);
btnMenu3.addEventListener(`mouseenter`, function (e) {
  e.preventDefault();
  tickets.style.transform = "translateY(100%)";
  overlayClass.classList.add(`colors`);
  tickets.addEventListener(`click`, function (e) {
    e.stopPropagation();
  });
});
btnMenu3.addEventListener(`mouseleave`, function (e) {
  e.preventDefault();
  tickets.style.transform = "translateY(0%)";
  overlayClass.classList.remove(`colors`);
});
// Phần hiệu ứng JS dành cho TICKETS

// Phần hiệu ứng JS dành cho MY UNITED
const btnMenu4 = document.querySelector(`.header-son:nth-child(7)`);
const myUnited = document.querySelector(`.myUnited-mum`);
btnMenu4.addEventListener(`mouseenter`, function (e) {
  e.preventDefault();
  myUnited.style.transform = "translateY(100%)";
  overlayClass.classList.add(`colors`);
  myUnited.addEventListener(`click`, function (e) {
    e.stopPropagation();
  });
});
btnMenu4.addEventListener(`mouseleave`, function (e) {
  e.preventDefault();
  myUnited.style.transform = "translateY(0%)";
  overlayClass.classList.remove(`colors`);
});
// Phần hiệu ứng JS dành cho MY UNITED

// Phần hiệu ứng JS dành cho FANS
const btnMenu5 = document.querySelector(`.header-son:nth-child(8)`);
const fans = document.querySelector(`.fans-mum`);
btnMenu5.addEventListener(`mouseenter`, function (e) {
  e.preventDefault();
  fans.style.transform = "translateY(100%)";
  overlayClass.classList.add(`colors`);
  fans.addEventListener(`click`, function (e) {
    e.stopPropagation();
  });
});
btnMenu5.addEventListener(`mouseleave`, function (e) {
  e.preventDefault();
  fans.style.transform = "translateY(0%)";
  overlayClass.classList.remove(`colors`);
});
// Phần hiệu ứng JS dành cho FANS

// Phần hiệu ứng JS dành cho PLAYERS
const btnMenu6 = document.querySelector(`.header-son:nth-child(9)`);
const players = document.querySelector(`.players-mum`);
btnMenu6.addEventListener(`mouseenter`, function (e) {
  e.preventDefault();
  players.style.transform = "translateY(100%)";
  overlayClass.classList.add(`colors`);
  players.addEventListener(`click`, function (e) {
    e.stopPropagation();
  });
});
btnMenu6.addEventListener(`mouseleave`, function (e) {
  e.preventDefault();
  players.style.transform = "translateY(0%)";
  overlayClass.classList.remove(`colors`);
});
// Phần hiệu ứng JS dành cho PLAYERS

// Phần hiệu ứng JS dành cho STADIUM
const btnMenu7 = document.querySelector(`.header-son:nth-child(10)`);
const stadium = document.querySelector(`.stadium-mum`);
btnMenu7.addEventListener(`mouseenter`, function (e) {
  e.preventDefault();
  stadium.style.transform = "translateY(100%)";
  overlayClass.classList.add(`colors`);
  stadium.addEventListener(`click`, function (e) {
    e.stopPropagation();
  });
});
btnMenu7.addEventListener(`mouseleave`, function (e) {
  e.preventDefault();
  stadium.style.transform = "translateY(0%)";
  overlayClass.classList.remove(`colors`);
});
// Phần hiệu ứng JS dành cho STADIUM

// Phần hiệu ứng JS dành cho MORE
const btnMenu8 = document.querySelector(`.header-son:nth-child(11)`);
const more = document.querySelector(`.more-mum`);
if (buttonReload) {
  Object.assign(more.style, {
    transform: "translateY(-100%)",
    transition: "transform 0s linear",
  });
  overlayClass.classList.remove(`colors`);
}
btnMenu8.addEventListener(`mouseenter`, function (e) {
  e.preventDefault();
  Object.assign(more.style, {
    transform: "translateY(0%)",
    transition: "transform 1s linear",
  });
  overlayClass.classList.add(`colors`);
  more.addEventListener(`click`, function (e) {
    e.stopPropagation();
  });
});
btnMenu8.addEventListener(`mouseleave`, function (e) {
  e.preventDefault();
  Object.assign(more.style, {
    transform: "translateY(-100%)",
    transition: "transform 1s linear",
  });
  overlayClass.classList.remove(`colors`);
});
// Phần hiệu ứng JS dành cho MORE
// Phần hiệu ứng JS dành cho SIGN IN
const btnMenu9 = document.querySelector(`.header-son:nth-child(12)`);
const buttonCLose = document.querySelector(`.ti-close`);
const loading = document.querySelector(`.ring`);
btnMenu9.addEventListener(`click`, function (e) {
  e.preventDefault();
  loading.classList.remove("hidden");
  const signIn = document.querySelector(`.baseModal-signIn`);
  const sutdownInterval = setInterval(() => {
    loading.classList.add("hidden");
    signIn.classList.remove(`hidden`);
  }, 2000);
  signIn.addEventListener(`click`, function (e) {
    e.stopPropagation();
  });
  buttonCLose.addEventListener(`click`, function (e) {
    e.preventDefault();
    clearInterval(sutdownInterval, 2000);
    signIn.classList.add(`hidden`);
  });
});
// Phần hiệu ứng JS dành cho SIGN IN
// Phần hiệu ứng JS dành cho Search
const buttonCLoses = document.querySelector(`#close-down`);
const btnMenu10 = document.querySelector(`.header-son:nth-child(13)`);
const search = document.querySelector(`.search-son`);
btnMenu10.addEventListener(`click`, function (e) {
  e.preventDefault();
  search.classList.remove(`hidden`);
  overlayClass.classList.add(`colors`);
  btnMenu10.addEventListener(`mouseleave`, function (e) {
    e.preventDefault();
    search.classList.add(`hidden`);
  });
  buttonCLoses.addEventListener(`click`, function (e) {
    e.stopPropagation();
    search.classList.add(`hidden`);
    overlayClass.classList.remove(`colors`);
  });
});
// Phần hiệu ứng JS dành cho Search

// Phần Thân
// Phần hiệu ứng chuyển ảnh
window.addEventListener(`load`, function () {
  const sliderMain = document.querySelector(`.slider-main`);
  const slider = document.querySelectorAll(`.slide`);
  const sliderItemWidth = slider[0].offsetWidth;
  const dotItem = document.querySelectorAll(`.dot`);
  const maxSlide = slider.length;
  let index = 0;
  let slideShow;

  const backSLide = () => {
    if (index == 0) {
      clearInterval(sliderShow);
      slideShow = setInterval(nextSLide, 3000);
    } else {
      index--;
      sliderMain.style = `transform: translateX(${
        sliderItemWidth * -1 * index
      }px)`;
    }
    [...dotItem].forEach((el) => el.classList.remove("active"));
    dotItem[index].classList.add("active");
  };
  let sliderShow = setInterval(backSLide, 3000);

  const nextSLide = () => {
    if (index == maxSlide - 1) {
      clearInterval(slideShow);
      sliderShow = setInterval(backSLide, 3000);
    } else {
      index++;
      sliderMain.style = `transform: translateX(${
        sliderItemWidth * -1 * index
      }px)`;
    }
    [...dotItem].forEach((el) => el.classList.remove("active"));
    dotItem[index].classList.add("active");
  };

  dotItem.forEach((dot) =>
    dot.addEventListener(`click`, function (e) {
      [...dotItem].forEach((el) => el.classList.remove("active"));
      if (clearInterval(slideShow)) {
        sliderShow = setInterval(backSLide, 3000);
      } else if (clearInterval(sliderShow)) {
        slideShow = setInterval(nextSLide, 3000);
      }
      {
        slideShow = setInterval(nextSLide, 3000);
      }
      e.target.classList.add("active");
      const slideIndex = parseInt(e.target.dataset.index);
      index = slideIndex;
      positionX = -1 * index * sliderItemWidth;
      sliderMain.style = `transform: translateX(${positionX}px)`;
      // sliderShow = setInterval(backSLide, 3000);
      // slideShow = setInterval(nextSLide, 3000)
    })
  );
});
// Phần hiệu ứng chuyển ảnh

// Phần hiệu ứng cho lịch thi đấu
// MAN UNITED MEN
const btnLeft = document.querySelector(`.btn-left`);
const btnRight = document.querySelector(`.btn-right`);
const itemContent = document.querySelectorAll(`.match-item-men`);
const itemMainMen = document.querySelector(`.item-main-men`);
const itemWidth = itemContent[0].offsetWidth;
const maxItem = itemContent.length;
const arrowButton = document.querySelectorAll(`.switch-button i`);
let item = 0;

const nextItem = () => {
  if (item == maxItem - 1) {
    return btnRight.classList.add(`opacity`);
  } else {
    item++;
    itemMainMen.style = `transform: translateX(${itemWidth * -1 * item}px)`;
  }
  if (item > 0) {
    btnLeft.classList.remove(`opacity`);
    itemMainMen.style = `transform: translateX(${itemWidth * -1 * item}px)`;
  } else {
    btnLeft.classList.add(`opacity`);
    itemMainMen.style = `transform: translateX(${itemWidth * -1 * item}px)`;
  }
};
btnRight.addEventListener(`click`, nextItem);
const backItem = () => {
  if (item == 0) {
    return btnLeft.classList.add(`opacity`);
  } else {
    item--;
    itemMainMen.style = `transform: translateX(${itemWidth * -1 * item}px)`;
  }
  if (item == maxItem - 2) {
    btnRight.classList.remove(`opacity`);
    itemMainMen.style = `transform: translateX(${itemWidth * -1 * item}px)`;
  }
};
btnLeft.addEventListener(`click`, backItem);
// MAN UNITED MEN

// MAN UNITED WOMEN
const btnsLeft = document.querySelector(`.btn-left-women`);
const btnsRight = document.querySelector(`.btn-right-women`);
const itemsContent = document.querySelectorAll(`.match-item-women`);
const itemMainWomen = document.querySelector(`.item-main-women`);
const itemsWidth = itemsContent[0].offsetWidth;
const maxItems = itemsContent.length;
let items = 0;

const nextsItem = () => {
  if (items == maxItems - 1) {
    btnsRight.classList.add(`opacity`);
    itemMainWomen.style = `transform: translateX(${itemsWidth * -1 * items}px)`;
    return;
  } else {
    items++;
    itemMainWomen.style = `transform: translateX(${itemsWidth * -1 * items}px)`;
  }
  if (items == 0) {
    btnsLeft.classList.add(`opacity`);
    itemMainWomen.style = `transform: translateX(${itemsWidth * -1 * items}px)`;
  } else {
    btnsLeft.classList.remove(`opacity`);
    itemMainWomen.style = `transform: translateX(${itemsWidth * -1 * items}px)`;
  }
};
btnsRight.addEventListener(`click`, nextsItem);
const backsItem = () => {
  if (items <= 0) {
    btnsLeft.classList.add(`opacity`);
    itemMainWomen.style = `transform: translateX(${itemsWidth * -1 * items}px)`;
    // return;
  } else {
    items--;
    itemMainWomen.style = `transform: translateX(${itemsWidth * -1 * items}px)`;
  }
  if (items == maxItems - 2) {
    btnsRight.classList.remove(`opacity`);
    itemMainWomen.style = `transform: translateX(${itemsWidth * -1 * items}px)`;
  }
};
btnsLeft.addEventListener(`click`, backsItem);
// MAN UNITED WOMEN
// Phần hiệu ứng cho lịch thi đấu
// Phần hiệu ứng cho kết quả của trận đấu
window.addEventListener(`load`, function () {
  const sliderImages = document.querySelector(`.match-images`);
  const imagesSlide = document.querySelectorAll(`.images`);
  const sliderImagesWidth = imagesSlide[0].offsetWidth;
  const maxImages = imagesSlide.length;
  let images = 0;
  let imagesShow;

  const backImage = () => {
    if (images == 0) {
      clearInterval(imageShow);
      imagesShow = setInterval(nextImage, 5000);
    } else {
      images--;
      sliderImages.style = `transform: translateX(${
        sliderImagesWidth * -1 * images
      }px)`;
    }
  };
  let imageShow = setInterval(backImage, 5000);
  const nextImage = () => {
    if (images == maxImages - 1) {
      clearInterval(imagesShow);
      imageShow = setInterval(backImage, 5000);
    } else {
      images++;
      sliderImages.style = `transform: translateX(${
        sliderImagesWidth * -1 * images
      }px)`;
    }
  };
});
// Phần hiệu ứng cho kết quả của trận đấu
// Phần hiệu ứng hiển thị danh sách cầu thủ nam
const rotatingAnimation = document.querySelector(`.rotating-animation`);
const rotatingImage = document.querySelectorAll(`.rotating-image`);
const rotatingImageWidth = rotatingImage[0].offsetWidth;
const maxrotatingImages = rotatingImage.length;
let rotatingimages = 0;
let rotatingImagesShow;

const backRotatingImage = () => {
  if (rotatingimages == 0) {
    clearInterval(rotatingImagesShows);
    rotatingImagesShow = setInterval(nextRotatingImage, 10000);
  } else {
    rotatingimages--;
    rotatingAnimation.style = `transform: translateX(${
      rotatingImageWidth * -1 * rotatingimages
    }px)`;
  }
};
let rotatingImagesShows = setInterval(backRotatingImage, 10000);
const nextRotatingImage = () => {
  if (rotatingimages == maxrotatingImages - 1) {
    clearInterval(rotatingImagesShow);
    rotatingImagesShows = setInterval(backRotatingImage, 10000);
  } else {
    rotatingimages++;
    rotatingAnimation.style = `transform: translateX(${
      rotatingImageWidth * -1 * rotatingimages
    }px)`;
  }
};
// Phần hiệu ứng hiển thị danh sách cầu thủ nam
// Phần hiệu ứng hiển thị danh sách cầu thủ nữ
const rotatingsAnimation = document.querySelector(`.rotating-animations`);
const rotatingsImage = document.querySelectorAll(`.rotating-images`);
const rotatingsImageWidth = rotatingsImage[0].offsetWidth;
const maxrotatingsImages = rotatingsImage.length;
let rotatingsimages = 0;
let rotatingsImagesShow;

const backRotatingsImage = () => {
  if (rotatingsimages == 0) {
    clearInterval(rotatingsImagesShows);
    rotatingsImagesShow = setInterval(nextRotatingsImage, 10000);
  } else {
    rotatingsimages--;
    rotatingsAnimation.style = `transform: translateX(${
      rotatingsImageWidth * -1 * rotatingsimages
    }px)`;
  }
};
let rotatingsImagesShows = setInterval(backRotatingsImage, 10000);
const nextRotatingsImage = () => {
  if (rotatingsimages == maxrotatingsImages - 1) {
    clearInterval(rotatingsImagesShow);
    rotatingsImagesShows = setInterval(backRotatingsImage, 10000);
  } else {
    rotatingsimages++;
    rotatingsAnimation.style = `transform: translateX(${
      rotatingsImageWidth * -1 * rotatingsimages
    }px)`;
  }
};
// Phần hiệu ứng hiển thị danh sách cầu thủ nữ
// Phần Thân
