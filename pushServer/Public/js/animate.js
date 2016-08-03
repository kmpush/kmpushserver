/**
 * Created by User on 2016/8/3.
 */
function go_here(where) {
    $("html,body").animate({
        scrollTop: $("#" + where + "").offset().top
    }, 500);
}