$(document).ready(function(){
    var i18n = $.i18n();

    function loadpage() {
        var browserLanguage = navigator.language;
        if(browserLanguage.indexOf('-') !== -1)
        {
            var position = browserLanguage.indexOf('-');
            browserLanguage = browserLanguage.substring(0, position);
        }
        var obj = $(this),
        language = $(this).data("language") || browserLanguage || "en";
        i18n.locale = language;
        $("#homepage").html(_.template($('#template-homepage').html()));
    }
    loadpage();
    $('.language').on('click', loadpage);
} );
