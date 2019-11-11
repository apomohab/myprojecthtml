
let sections = document.querySelectorAll(".section");

const parentUL = document.getElementById("navlist");

sections.forEach((el, ind) => {
  let dataInfo = el.getAttribute("data-info");
  let idInfo = el.getAttribute("id");
  console.log(dataInfo);
  const listItem = document.createElement("li");
  listItem.setAttribute("class", "mylist" + (ind + 1));
  listItem.innerHTML = `<a href=#${idInfo}>${dataInfo}</a>`;
  parentUL.appendChild(listItem);
  console.log(Math.ceil(el.getBoundingClientRect().top));
});

parentUL.classList.add("created");