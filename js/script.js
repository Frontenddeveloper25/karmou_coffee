//toggle class active hum menu//
const navbarNav = document.querySelector(".navbar-nav");
//ketika di click menu//
document.querySelector("#menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};
//klik di luar elemen//
const menu = document.querySelector("#menu");
const sb = document.querySelector("#search_button");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !search_form.contains(e.target)) {
    search_form.classList.remove(
      "active"
    ); /*jika target click bukan (!)sb(variable) maka akan me nonaktifkan tampilan search*/
  }
});

//toggle class active search form//

const search_form = document.querySelector(".search_form");
const search_box = document.querySelector("#search_box");

document.querySelector("#search_button").onclick = (e) => {
  search_form.classList.toggle("active");
  search_box.focus();
  e.preventDefault(); /*untuk submit atau pindah akses*/
};

// login//
