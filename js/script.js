$(document).ready(function(){
    'use strict';
    var i18n = $.i18n();

    function loadpage() {
        var id = $('.language'),
            language = $('option:selected', id).val();
        i18n.locale = language;
        $("#homepage").html(_.template($('#template-homepage').html()));
        id.on('change', loadpage);
    }
    loadpage();
} );