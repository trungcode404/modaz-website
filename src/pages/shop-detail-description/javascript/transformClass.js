// function myFunction(){
// const transform = document.querySelector('li')
// function addClass(){
//     transform.classList.add('active')
// }
// transform.addEventListener('click', addClass);
// setTimeout(function(){
//     transform.classList.remove('active')
// }, 100);
// }

$(document).ready(function () {
    $(".content-tab").hide(); //hide All content
    var defaultActive = $(".menu-tab li.active content-inner").attr("class"); //store active href default value
    $(defaultActive).show();

    $(".tab-menu li a").click(function (e) {
        e.preventDefault();
        $("ul li").removeClass("active-tab");
        var related = $(this).attr("href"); //store href value
        $(this).parent().addClass("active-tab");
        if ($(this).parent().hasClass("active-tab")) {
            $(".tab_content").hide();
            $(related).show();
        }
    })

});