import "regenerator-runtime";
import "./src/css/styles.css";
import "./src/js/component/sidebar.js";
import "./src/js/component/searchbar.js";
import main from "./src/js/view/main.js";


main('Spring');

$(document).ready(function() {
    $(".nav-link").click(function () {
        $(".nav-link").removeClass("active");
        $(this).addClass("active");   
        $('anime-list').hide();
        document.getElementById('section-title').innerHTML = "" + $(this).attr('target') + " Movies";
        main('' + $(this).attr('target'));
    });

    $("#searchButtonElement").click(function () {
    	$(".nav-link").removeClass("active");
    	$('anime-list').hide();
        document.getElementById("section-title").innerHTML = "Searching " + $("#searchElement").val();
        main('Search');
    });

    $("#searchElement").keypress(function(e) {
        if(e.which == 13) {
            $(".nav-link").removeClass("active");
            $('anime-list').hide();
            document.getElementById("section-title").innerHTML = "Searching " + $("#searchElement").val();
            main('Search');
        }
    });

});


