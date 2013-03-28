$(document).ready(function(){
    'use strict';
    var i18n = $.i18n();

    function loadpage() {
        var language = $('option:selected').val() || 'en';
        i18n.locale = language;
        $("#homepage").html(_.template($('#template-homepage').html()));
        $('.language').on('change', loadpage);
    }
    loadpage();
} );