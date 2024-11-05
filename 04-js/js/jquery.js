// loading 되면 bg-color를 lightblue로 변경
$("body").css({
  "background-color": "lightblue",
  "font-size": "20px",
});

// btn을 클릭했을 때
$(".btn1")
  .on("mouseenter", function () {
    $(".box").stop().slideDown(1000);
  })
  .on("mouseleave", function () {
    $(".box").stop().slideUp(1000);
  });

$(".btn2")
  .mouseenter(function () {
    $(".box2").hide();
  })
  .mouseleave(function () {
    $(".box2").show();
  });

// animate
// .btn3을 클릭했을 때
$(".btn3").click(function () {
  // .box3가 1초 동안 왼쪽으로 100px 이동
  $(".box3").animate(
    {
      width: "+=150px",
      left: 300,
      top: 100,
    },
    1000
  );
});
