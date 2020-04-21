import devConfig from '../../config/option.json';
import $ from "jquery";

window.addEventListener('DOMContentLoaded', (event) => {
    var sections = [];
    var menu = [];
    var menuContainer = $('.menu-rect-container');
    var currentId = "";
    $('.section').each((el,index)=>{
        sections.push($(el));
    });
    $('.menu-rect').each((index,el)=>{
        console.log(el)
        menu.push($(el));
    });
    $(window).on('scroll',()=>{
        updateMask();
    })
    updateMask();
    function updateMask(){
        menu.map(el =>{
            
            var id = el.attr("data-id");
            var targetSection = $("#section-"+id);
            if(targetSection.length == 0){
                $(el).height(0);
                return;
            }
            var navTop = $(el).offset().top;
            var navBottom = navTop + menuContainer.height();
            var sectionTop = targetSection.offset().top;
            var sectionBottom = sectionTop+targetSection.innerHeight();
            var diff = navBottom-sectionBottom;
            var height = Math.min(menuContainer.height()-diff,menuContainer.height())
            if(navTop >= sectionTop && navBottom <= sectionBottom){
                if(id != currentId){
                    currentId = id;
                    updateMaskItem();
                }
            }
            $(el).height(height);
        });
    }
    function updateMaskItem(){
        $('.is-current').removeClass('is-current')
        $("#"+currentId).addClass("is-current");
        $("#menu-rect--current").attr('data-id',Number(currentId))

        //ちらつき対応
        setTimeout(()=>{
            $("#menu-rect--prev").attr('data-id',Number(currentId)-1)
            $("#menu-rect--next").attr('data-id',Number(currentId)+1)
        },10)
       
    }
});