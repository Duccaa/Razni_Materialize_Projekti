// document.addEventListener('DOMContentLoaded', function () {
//     var elems = document.querySelectorAll('.sidenav');
//     var instances = M.Sidenav.init(elems);
//     var elems = document.querySelectorAll('.materialboxed');
//     var instances = M.Materialbox.init(elems);
//     var elems = document.querySelectorAll('.parallax');
//     var instances = M.Parallax.init(elems);
//     var elems = document.querySelectorAll('.tabs');
//     var instance = M.Tabs.init(elems);
//     var elems = document.querySelectorAll('.scrollspy');
//     var instances = M.ScrollSpy.init(elems);
// });

$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.materialboxed').materialbox();
    $('.parallax').parallax();
    $('.tabs').tabs();
    $('.scrollspy').scrollSpy();
});
