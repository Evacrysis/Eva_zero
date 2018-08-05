

$(function(){

    $("#switch").load("../page/switch/homepage-module.html")
    //切换

})


$(".menu_effect").click(function() {
    $("#switch").load($(this).data("module"))
})


