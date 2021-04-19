$(function(){

    $("div#topBtnArea").click(function(){
        $(window).scrollTop(0);
    });

    $(window).scroll(function(){
        // 화면전체가 스크롤되는 적용 window 용
        // 선택자로 지정함
        // alert($(this).scrollTop() + "px");

        if ($(this).scrollTop() > 300) {
            $("div#topBtnArea").fadeIn(200);
        } else {
            $("div#topBtnArea").fadeOut(200);
        }

    });

});
