$("document").ready(function () {
  $(".btn").click(function () {
    // let blocks = $(".btn");
    $(".btn:first").fadeOut(400);
    setTimeout(function () {
      $(".btn:last").after($(".btn:first"));
      $(".btn:last").fadeIn(200);
    }, 400);
  });
});
