$(document).ready(function () {
    var i18n = $.i18n();

    function loadpage() {
        var browserLanguage = navigator.language.split('-')[0];
        i18n.locale = $(this).data('language') || browserLanguage || "en";
        i18n.load('i18n/smc-' + i18n.locale + '.json', i18n.locale).done(() => {
            $("#homepage").i18n();
        });
    }
    loadpage();
    $('.language').on('click', loadpage);
});
