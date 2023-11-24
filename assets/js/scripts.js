$(function () {
  $(".mobile-menu-icon").on("click", function () {
    $("body").addClass("menu-open");
  });
  $(".mobile-menu-overlay").on("click", function () {
    $("body").removeClass("menu-open");
  });
});
