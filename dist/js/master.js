$(function(){function e(){setTimeout(function(){$("#overlay").hide()},300)}$("#humburguer").on("click",function(i){i.preventDefault(),$("#overlay").is(":visible")?e():$("#overlay").show(0),$(".navbar").toggleClass("active")}),$("#overlay").click(function(){$(".navbar").removeClass("active"),e()})});