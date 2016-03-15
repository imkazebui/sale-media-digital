var audio;
var playlist;
var tracks;
var current;

init();
function init(){
    current = 0;
    audio = $('audio');
    playlist = $('#playlist');
    tracks = playlist.find('li a');
    len = tracks.length - 1;
    audio[0].volume = .10;
    playlist.find('a').click(function(e){
        e.preventDefault();
        link = $(this);
        current = link.parent().index();
        run(link, audio[0]);
    });
    audio[0].addEventListener('ended',function(e){
        current++;
        if(current == len){
            current = 0;
            link = playlist.find('a')[0];
        }else{
            link = playlist.find('a')[current];    
        }
        run($(link),audio[0]);
    });
}
function run(link, player){
        player.src = link.attr('href');
        par = link.parent();
        par.addClass('active').siblings().removeClass('active');
        audio[0].load();
        audio[0].play();
}

$("#infor-xemthem").click(function(){
    $("#div-rutgon").removeClass("show");
    $("#div-rutgon").addClass("hide");
    $("#div-daydu").addClass("show");
})

$("#infor-rutgon").click(function(){
    $("#div-daydu").removeClass("show");
    $("#div-daydu").addClass("hide");
    $("#div-rutgon").addClass("show");
})

$("#lyric-btn-xemthem").click(function(){
    $("#lyric-rutgon").removeClass("show");
    $("#lyric-rutgon").addClass("hide");
    $("#lyric-daydu").addClass("show");
})

$("#lyric-btn-rutgon").click(function(){
    $("#lyric-daydu").removeClass("show");
    $("#lyric-daydu").addClass("hide");
    $("#lyric-rutgon").addClass("show");
})

$(".btn-like").click(function(){
    if ($(".btn-like").text() == " Thích")
    {
        ($(".btn-like").html('<span class="fa fa-heart"></span> Bỏ thích'));
        $(".sl-like").text(parseInt($(".sl-like").text()) + 1);
    }
    else
    {
        ($(".btn-like").html('<span class="fa fa-heart"></span> Thích'));
        $(".sl-like").text(parseInt($(".sl-like").text()) - 1);
    }
})

$(".btn-like-gg").click(function(){
    if ($(".btn-like-gg").text() == " Thích")
    {
        ($(".btn-like-gg").html('<span class="fa fa-google-plus"></span> Bỏ thích'));
        $(".sl-like-gg").text(parseInt($(".sl-like-gg").text()) + 1);
    }
    else
    {
        ($(".btn-like-gg").html('<span class="fa fa-google-plus"></span> Thích'));
        $(".sl-like-gg").text(parseInt($(".sl-like-gg").text()) - 1);
        $("#modal_gg").modal('show');
    }
})

$(".btn-like-fb").click(function(){
    if ($(".btn-like-fb").text() == " Thích")
    {
        ($(".btn-like-fb").html('<span class="fa fa-facebook-square"></span> Bỏ thích'));
        $(".sl-like-fb").text(parseInt($(".sl-like-fb").text()) + 1);
    }
    else
    {
        ($(".btn-like-fb").html('<span class="fa fa-facebook-square"></span> Thích'));
        $(".sl-like-fb").text(parseInt($(".sl-like-fb").text()) - 1);
        $("#modal_fb").modal('show');
    }
})

// Star mouseenter
$(".st1").mouseenter(function(){
    $("#mucdo").text("Ghét");
})

$(".st2").mouseenter(function(){
    $("#mucdo").text("Không thích");
})

$(".st3").mouseenter(function(){
    $("#mucdo").text("Chỉ Ok");
})

$(".st4").mouseenter(function(){
    $("#mucdo").text("Thích");
})

$(".st5").mouseenter(function(){
    $("#mucdo").text("Rất thích");
})

// mouseleave
$(".fa-star").mouseleave(function(){
    $("#mucdo").text("");
})


// Star click
$(".st1").click(function(){
    $(".st1").addClass("st-yellow");
    $("#danhgia").text("Ghét");
    $(".st5").removeClass("st-yellow");
    $(".st4").removeClass("st-yellow");
    $(".st3").removeClass("st-yellow");
    $(".st2").removeClass("st-yellow");
})

$(".st2").click(function(){
    $(".st1").addClass("st-yellow");
    $(".st2").addClass("st-yellow");
    $("#danhgia").text("Không thích");
    $(".st5").removeClass("st-yellow");
    $(".st4").removeClass("st-yellow");
    $(".st3").removeClass("st-yellow");
})

$(".st3").click(function(){
    $(".st1").addClass("st-yellow");
    $(".st3").addClass("st-yellow");
    $(".st2").addClass("st-yellow");
    $("#danhgia").text("Chỉ OK");
    $(".st5").removeClass("st-yellow");
    $(".st4").removeClass("st-yellow");
})

$(".st4").click(function(){
    $(".st1").addClass("st-yellow");
    $(".st4").addClass("st-yellow");
    $(".st3").addClass("st-yellow");
    $(".st2").addClass("st-yellow");
    $(".st5").removeClass("st-yellow");
    $("#danhgia").text("Thích");
})

$(".st5").click(function(){
    $(".st1").addClass("st-yellow");
    $(".st5").addClass("st-yellow");
    $(".st4").addClass("st-yellow");
    $(".st3").addClass("st-yellow");
    $(".st2").addClass("st-yellow");
    $("#danhgia").text("Rất thích");
})

function addComment(){
    var txt1 = '<div class="other-comments row" id="row-p">';
    var txt2 = '<img style="width:50px; height: 50px; float: left; margin-right: 20px;" src="./images/avatar.jpg">';
    var txt3 = '<div class="pull-left">';
    var txt4 = '<p><b>Bùi Thanh Phương</b></p>';
    var txt5 = '<p>' + $("#txtComment").val() + '</p>';
    var txt6 = '</div>';
    var txt7 = '<div class="pull-right">'+ 'vừa xong' + '</div>';
    // $(".add_comments").append(txt1,txt2,txt3,txt4,txt5,txt6,txt6);
    var txt = txt1+txt2+txt3+txt4+txt5+txt6+txt7+txt6;
    $(".add_comments").prepend(txt);
    // $(txt).insertBefore(".add_comments");
    $("#txtComment").val("");

    $("#count_comment").text(parseInt($("#count_comment").text()) + 1)
}

$("#follow").click(function(){
    if ($("#follow").text() == " Quan tâm")
    {
        ($("#follow").html('<span class="fa fa-check"></span><b> Quan tâm (9k)</b>'));
        $("#follow").css('background-color','purple');
        $("#follow").css('color','white');
    }
    else
    {
        ($("#follow").html('<span class="fa fa-user-plus"></span><b> Quan tâm</b>'));
        $("#follow").css('background-color','#fff');
        $("#follow").css('color','#888');
    }    
})

$("#xacnhan").click(function(){
    if ($("#matkhau").val() == "123"){
        $("#modal_mua").removeClass("show");
        $("#modal_mua").addClass("hide");

        $("#link_down").removeClass("hide");
        $("#link_down").addClass("show");

        $(".modal-title").text("Cám ơn bạn đã mua sản phẩm của chúng tôi");
    } 
    else {
        $("#err").text("*Sai mật khẩu").fadeOut(3000);
    }
})

