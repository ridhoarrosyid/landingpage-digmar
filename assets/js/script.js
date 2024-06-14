var $grid = $(".grid").imagesLoaded(function () {
  $grid.isotope({
    itemSelector: ".grid-item",
    percentPosition: true,
    filter: "*",
    masonry: {
      isFitWidth: true,
      columnWidth: 50,
      glutter: 10,
    },
  });
});

$(".filter-button-group").on("click", "button", function () {
  const filterValue = $(this).attr("data-filter");
  $grid.isotope({ filter: filterValue });
});

const lightbox = new GLightbox({});

AOS.init({
  duration: 1000,
});
