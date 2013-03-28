$(document).ready(function(){
    'use strict';
    var i18n = $.i18n();

    $("#links").html(_.template($('#template-menu').html()));
    $(".content").html(_.template($('#template-content').html()));
    $("footer").html(_.template($('#template-footer').html()));
} );