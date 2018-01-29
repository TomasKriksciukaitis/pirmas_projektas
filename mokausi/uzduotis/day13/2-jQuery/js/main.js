console.log("Labas");


//Execute the function when the DOM is ready to be used.

// paleis funkcija tik tada kai puslapis bus uzkrautas

$(function() {
    // Document is ready
});


//========array=============


// var x = [ 52, 97, 205, 1236, 20, 56, 98, 996 ];
//
// $.each(x, function( index, value ) {
//   console.log( "stalcius ", index + ": " + value );
// });
//
// // arba galima naudoti su objektais:
//
// var obj = {
//   "name": "Tomas",
//   "age": "21"
// };
// $.each( obj, function( key, value ) {
//    console.log( "stalcius", key + ": " + value );
// });

// =============================

var x = [ 52, 97, 105, 502, 2, 6, 98, 1058, 6987, 25, 98 ];
function myFunction(item,index,arr) {
   console.log(arr);
   console.log(index, item);
}




//=============css===============

// js

// document.getElementById(id).style.property = new style

// document.getElementById("p2").style.color = "blue";

$('h1').css("color", "#b1b1b1");

// kaip pakeisti dau css vienu metu:

var manoStilius = {
  "font-size": "100px",
  color: "red",
  border: "solid 2px black"
};

$('h1').css(manoStilius);


// advance: get curent width and height
$( 'h1' ).css({
	  width: function( index, value ) {
		console.log("curent width:" + value);
		return parseFloat( value ) * 1.8;
	  },
	  height: function( index, value ) {
		console.log("curent height: " + value);
		return parseFloat( value ) * 1.2;
    },
    color: function( index, value ) {
    console.log("mano splava: " + value);

    }
});
