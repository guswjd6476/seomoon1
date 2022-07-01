$(".isec").hide();
$(".bwrap").each(function () {
  $(this).children(".mnavi li:first").addClass("active"); //Activate first tab
  $(this).children(".isec").first().show();
});

$(".mnavi li a").click(function () {
  $(this).parent().siblings("li").removeClass("active");
  $(this).parent().addClass("active"); 
  $(this).parent().parent().parent().parent().parent().find(".isec").hide();
  var activeTab = $(this).attr("rel");
   $("#" + activeTab).fadeIn();
});