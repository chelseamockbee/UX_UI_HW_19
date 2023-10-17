var showRevival=false;

$(".highlight").on("click", function() {
    showRevival=!showRevival
    if(showRevival === true) {
        $(".overlay").show()
    } else {
        $(".overlay").hide()
    }
})


