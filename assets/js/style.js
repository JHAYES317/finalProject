//show/hide and if/else
$(document).ready(function() {
$(".services").hide();
$(".Lessons").hide();
$(".rates").hide();
$(".text").hide();
$(".Sessions").hide();
$(".Accompaniment").hide();
$(".fees").hide();
$(".pricing").hide();
$(".Address").hide();
$(".container").hide();
$(".headSection").hide();
$(".title").hide();

var likeGuitar = prompt("Do you like music? Input yes or no.");
if(likeGuitar == "yes"){
$(".services").show();
$(".Lessons").show();
$(".rates").show();
$(".text").show();
$(".Sessions").show();
$(".Accompaniment").show();
$(".fees").show();
$(".pricing").show();
$(".Address").show();
$(".container").show();
$(".headSection").show();
$(".title").show();
	
}
else{
$(".services").hide();
$(".Lessons").hide();
$(".rates").hide();
$(".text").hide();
$(".Sessions").hide();
$(".Accompaniment").hide();
$(".fees").hide();
$(".pricing").hide();
$(".Address").hide();
$(".container").hide();
$(".headSection").hide();
$(".title").hide();
}


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

});







