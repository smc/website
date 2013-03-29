$(document).ready(function(){
    'use strict';
    var i18n = $.i18n();

    function loadpage() {
        var cls = $('.language'),
            language = ($(this).attr("id"))?$(this).attr("id"):"en";
        i18n.locale = language;
        $("#homepage").html(_.template($('#template-homepage').html()));
        cls.on('click', loadpage);
        $(this).unbind("click");
        }
    loadpage();
} );
