

	function dateFormat(pubDate) {
		var date = new Date(pubDate);
		var months = Array("January", "February", "March", "Abril", "May", "June", "July", "Agust", "September", "Octobar", "November","December");
		return date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear()
	  }


function FnFnewsUrl(newsurl,imgsource){



 
     var newsurl=newsurl;
     var feed = "https://cors-anywhere.herokuapp.com/"+newsurl;
    
    $.ajax(feed, {
        accepts:{
            xml:"application/rss+xml"
        },
        dataType:"xml",
        success:function(data) {
            var newsarray=[];
            $(data).find("item").each(function () { // dateFormat(el.find("pubDate").text()) or "item" or whatever suits your feed
                var el = $(this);
             
                newsarray.push('<img class="fnfnnewshowicon" src="'+imgsource+'"/><a href="' + el.find('link').text()+'">'+el.find('title').text() + '</a>');
         

                console.log("------------------------");
                console.log("title      : " + el.find("title").text());
                console.log("link       : " + el.find("link").text());
                console.log("description: " + el.find("description").text());
            });
            document.getElementById("news").innerHTML = newsarray;
 

        }	
    });
    

 

}


$(document).ready(function() {
	
    //feed to parse

   /* var newsurl=FnFnewsUrl();
    var feed = "https://cors-anywhere.herokuapp.com/"+"http://www.dailyjanakantha.com/rss.php";
    
    $.ajax(feed, {
        accepts:{
            xml:"application/rss+xml"
        },
        dataType:"xml",
        success:function(data) {
            var newsarray=[];
            $(data).find("item").each(function () { // or "item" or whatever suits your feed
                var el = $(this);
             
                newsarray.push('<a href="' + el.find('link').text()+'">'+el.find('title').text() + '</a>');
         

                console.log("------------------------");
                console.log("title      : " + el.find("title").text());
                console.log("link       : " + el.find("link").text());
                console.log("description: " + el.find("description").text());
            });
            document.getElementById("news").innerHTML = newsarray;
 

        }	
    });*/
    
});
$(".toggle").on("click", function () {
$(".marquee").toggleClass("microsoft");
});