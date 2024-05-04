function lists(clss1, clss2) {
  let ele = document.querySelector(clss1);
  let eleToshow = document.querySelector(clss2);

  ele.addEventListener("click", function () {
    eleToshow.classList.toggle("show");
  });
}

lists(".author-links .text", ".mega-menu");
lists(".list-icon .click", ".links");

window.onscroll = () => count();
window.addEventListener("scroll", progress);

function count() {
  let section = document.querySelector(".stats");
  let nums = document.querySelectorAll(".stats .box .num");
  let start = false;

  window.onscroll = function () {
    if (window.scrollY >= section.offsetTop) {
      if (!start) {
        nums.forEach((n) => {
          let gool = n.dataset.num;
          let count = setInterval(() => {
            n.textContent++;
            if (n.innerHTML === gool) {
              clearInterval(count);
            }
          }, 2000 / gool);
        });
      }
      start = true;
    }
  };
}

function progress() {
  let skillsDiv = document.querySelector(".skills");
  let spans = document.querySelectorAll(".skills span");

  if (window.scrollY >= skillsDiv.offsetTop) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
      span.style.visibility = "visible";
    });
  }
}

time();
function time() {
  let count = setInterval(() => {
    let dateNow = new Date();
    let target = new Date("july 10, 2025");

    let dateDiff = target - dateNow;

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let mints = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let sec = Math.floor((dateDiff % (1000 * 60)) / 1000);

    document.querySelector(".events .days").innerHTML = days;
    document.querySelector(".events .hours").innerHTML = hours;
    document.querySelector(".events .mints").innerHTML = mints;
    document.querySelector(".events .sec").innerHTML = sec;
  }, 1000);
}

video();
function video() {
  let lis = document.querySelectorAll(".video .list li");
  let theImage = document.querySelector(".video img");

  let imgs = [
    { name: "vallhla", src: "style/photo/vedio/vallhla.jpg" },
    { name: "batman", src: "style/photo/vedio/batman.jpg" },
    { name: "nfs", src: "style/photo/vedio/nfs.jpg" },
    { name: "hogwarts", src: "style/photo/vedio/hogwarts.jpg" },
    { name: "callOfDuty", src: "style/photo/vedio/callOfDuty.jpg" },
    { name: "batelfield", src: "style/photo/vedio/batelfield.jpg" },
  ];

  //______________________________________________

  for (let i = 0; i < lis.length; i++) {
    for (let x = 0; x < imgs.length; x++) {
      if (lis[i].className == imgs[x].name) {
        lis[i].onclick = function () {
          remove(lis);
          lis[i].classList.add("active");
          theImage.src = imgs[x].src;
          theImage.style.opacity = 1;
        };
      }
    }
  }
  imgSlider(imgs, theImage);

  //____________________________________

  function remove(el) {
    el.forEach((e) => {
      e.classList.remove("active");
    });
  }
  //____________________________________
  function imgSlider(imgObj, theImage) {
    let i = 0;
    let slide = setInterval(() => {
      theImage.src = imgObj[i].src;
      i++;
      if (i == imgObj.length) {
        i = 0;
      }
    }, 1000);
  }
}
