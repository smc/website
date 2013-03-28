$(document).ready(function(){
    'use strict';
    $.i18n.debug = true;
    var i18n = $.i18n();

    $("#homepage").html(_.template($('#template-homepage').html()));
} );