import devConfig from '../../config/option.json';
import $ from "jquery";

window.addEventListener('DOMContentLoaded', (event) => {
    var sections = [];
    var menu = [];
    var menuContainer = $('.menu-rect-container');
    $('.section').each((el,index)=>{
        sections.push($(el));
    });
    $('.menu-rect').each((index,el)=>{
        console.log(el)
        menu.push($(el));
    });
    $(window).on('scroll',()=>{
        menu.map(el =>{
            
            var id = el.data("id");
            var targetSection = $("#"+id);
            var navTop = $(el).offset().top;
            var navBottom = navTop + menuContainer.height();
            var sectionTop = targetSection.offset().top;
            var sectionBottom = sectionTop+targetSection.innerHeight();
            var diff = navBottom-sectionBottom;
            var height = Math.min(menuContainer.height()-diff,menuContainer.height())
            $(el).height(height);
        });
    })
});