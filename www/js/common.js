/**
 * Created by sedan on 2017-01-13.
 */

$(document).ready(function () {

    $(function () {

        //var width = $('#container').width();
        //var wid2 = window.innerWidth || document.body.clientWidth;
        //var percent2 = 100 * wid2 / width + '%';

//        var parentWidth = $('#container').offsetParent().width();
//        var percent = 100*width/parentWidth;


        $('#container').width(window.innerWidth);
        $('#container').css('height', $(window).width() * 1.8);

        //alert(window.innerWidth);


        //var body = document.getElementById("body").offsetWidth;
        //<audio  autoplay loop preload="none">
        //    <source src="index.ogg" type="audio/ogg">
        //    </audio>


        var protoWidth = 720;
        var protoHeight = 1280;
        var screenRatio = 1.8; //protoWidth / protoWidth;
        //alert(screenRatio);
        var containerWidth = $(window).width();

        $("#container div").map(function () {

            $(this).css('width', (((($(this).css('width')).slice(0, -2)) / protoWidth) * 100) + '%');
            $(this).css('top', (((($(this).css('top')).slice(0, -2)) / protoHeight) * 100) + '%');
            $(this).css('left', (((($(this).css('left')).slice(0, -2)) / protoWidth) * 100) + '%');
            $(this).css('height', 'auto');

        });


        $('#container img').width('100%');
        $('#container img').height('100%');




        if ($('#container').height() > $(window).height()) {

            var overHeight = $('#container').height() - $(window).height();
            var newContainerWidth =  containerWidth - (overHeight/ screenRatio) ;
            var newContainerHeight = newContainerWidth * screenRatio ;

            $('#container').css('width', newContainerWidth );
            $('#container').css('height', newContainerHeight );


        }
    });


});