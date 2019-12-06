//addhtml()
$("rates").after("Lessons");

//forloop
var songs = ["I wish", "Sycophant Lady", "Loving Tonight"];
for (var i = 0; i < songs.length; i++) {
        console.log("I love " + songs[i]);
      }

//function
var aSong = "I wish";

    	song("I wish");

    	function song (songName){
    		var song = songName;

    		console.log("The song name is: " + song);
    	}

 //click
 $(document).ready(function() {
 $(".text").on("click", function() {
 	console.log("I've been clicked!");
      });
//mouseleave
$(".text").mouseleave(function(){
  $(".text").css("background-color", "blue");
});
//mouseover
$(".Address").mouseover(function(){
  $(".Address").css("background-color", "green");
});
});








