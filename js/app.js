document.addEventListener("DOMContentLoaded", function() {
  let li = document.querySelector("header ul li:first-child");
  let dropdown = document.querySelector(".around-dropdown");

  dropdown.style.display = "none";

  li.addEventListener("mouseover", function() {
    dropdown.style.display = "block";
  });
  li.addEventListener("mouseout", function() {
    dropdown.style.display = "none";
  });

  // ----------------------------------------- //

  let firstTitle = document.querySelector(".image-1");
  let secondTitle = document.querySelector(".image-2");

  firstTitle.addEventListener("mouseover", function() {
    let element = this.firstElementChild;
    element.style.display = "none";
  });

  firstTitle.addEventListener("mouseout", function() {
    let element = this.firstElementChild;
    element.style.display = "block";
  });
  secondTitle.addEventListener("mouseover", function() {
    let element = this.firstElementChild;
    element.style.display = "none";
  });

  secondTitle.addEventListener("mouseout", function() {
    let element = this.firstElementChild;
    element.style.display = "block";
  });

  // ----------------------------------------------- //


});
