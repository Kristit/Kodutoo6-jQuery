 $(document).ready(functun)(){
        
        $("li:first").addClass("active"); // panen esimese listi elemendile klassi
        
        
        $("#next").click(function()){ //Edasi nuppule vajutusega
       var aktiivne = $("li.active");
        if (aktiivne.is($("li").last())) {
            $("li.active").removeClass("active");
            $("li").first().addClass("active");
        } else {
            aktiivne.next("li").addClass("active");
           aktiivne.first().removeClass("active");
        }
    });
        
      $("#prev").click(function () {
        var aktiivne = $("li.active");
        if (aktiivne.is($("li").first())) {
            aktiivne.removeClass("active");
            $("li").last().addClass("active");
        } else {
            aktiivne.prev("li").addClass("active");
            aktiivne.last().removeClass("active");
        }
    })
});
       
        
        });