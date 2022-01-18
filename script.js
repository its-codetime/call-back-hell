const count = document.getElementById("count");
const wish = document.querySelector(".wish");

setTimeout(() => {
  count.innerHTML = "10";
  setTimeout(() => {
    count.innerHTML = "9";
    setTimeout(() => {
      count.innerHTML = "8";
      setTimeout(() => {
        count.innerHTML = "7";
        setTimeout(() => {
          count.innerHTML = "6";
          setTimeout(() => {
            count.innerHTML = "5";
            setTimeout(() => {
              count.innerHTML = "4";
              setTimeout(() => {
                count.innerHTML = "3";
                setTimeout(() => {
                  count.innerHTML = "2";
                  setTimeout(() => {
                    count.innerHTML = "1";
                    setTimeout(() => {
                      count.classList.toggle("hidden");
                      wish.classList.toggle("hidden");
                      document.body.style.backgroundImage = `url(https://cdn.wallpapersafari.com/71/13/tqCR6y.jpg)`;
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
