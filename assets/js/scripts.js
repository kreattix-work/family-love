$(function () {
  $(".mobile-menu-icon").on("click", function () {
    $("body").addClass("menu-open");
  });
  $(".mobile-menu-overlay").on("click", function () {
    $("body").removeClass("menu-open");
    $("body").removeClass("category-filter-open");
  });
  $(".category-filter-icon").on("click", function (e) {
    e.preventDefault();
    $("body").addClass("category-filter-open");
  });
});
