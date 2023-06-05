const word = document.getElementById('keyword');
const sd = document.getElementById('showData');
$(function(){
    $("button").on("click",loadServerData);
    
});

function loadServerData(){
    sd.replaceChildren();
    console.log(word.value);
    $.getJSON("https://api.chucknorris.io/jokes/search?query="+word.value)
    .done(function( data) {
        console.log("Success");
        var myH2 = document.createElement("h2");
        // $("#showData").text(data.value);
        
        console.log(data.total);
        if(data.total==0)
            $("#showData").text("沒有相關笑話");
        else{
            for(var i=0;i<data.total;i++)
            {    console.log(data.result[i].value);
                $("#showData").append(
                    "<hr>"+data.result[i].value
                    );
            }
        }
        
        
    })
    .fail(function(){
        console.log("Error");
    })
    .always(function(){
        console.log("Always");
    });
}