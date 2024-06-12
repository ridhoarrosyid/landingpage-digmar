const grid = $(".grid").isotope({
  // options
  itemSelector: ".grid-item",
  layoutMode: "fitRows",
  percentPosition: true,
  filter: "*",
  masonry: {
    // use element for option
    columnWidth: ".grid-sizer",
  },
});

$(".filter-button-group").on("click", "button", function () {
  const filterValue = $(this).attr("data-filter");
  grid.isotope({ filter: filterValue });
});

const lightbox = new GLightbox({});

AOS.init({
  delay: 50,
  duration: 1000,
});
