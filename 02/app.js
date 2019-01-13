 $(function() {
     $("article:eq(2) a:eq(3)").html('Pinterest').attr("href","https://www.pinterest.cl/");
     $(".header__main").find("h2").css("font-size", "2rem");
	 $("a[href='#']").click (function(event){
	   	event.preventDefault();
    })
	 
})