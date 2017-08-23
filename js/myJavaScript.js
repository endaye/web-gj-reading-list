function hideElse(obj){
    var name=jQuery(obj).children("a").attr("href");
    var target=name.substr(1,name.length);
    jQuery(".week-context").each(function(){
        var idname=jQuery(this).attr("id");
        if(target===idname){
            jQuery(this).slideDown();
        }else{
            jQuery(this).hide();
        }
    })

};
jQuery(function(){
    jQuery(".datanav").children("li").each(function(){
        jQuery(this).on("click",function(){
            hideElse(this);
        });
    });
});