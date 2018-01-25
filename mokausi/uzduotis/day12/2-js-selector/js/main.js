console.log("Labas");

// ==============================================================

// document.getElementsByClassName("super");
// document.getElementByTagName("h1");
// document.getElementById("wrapper");
//
// document.querySelector("#wrapper p");
// document.querySelectorAll("li");

//===============================================================
// get "data-........" attribute
//===============================================================
// we can set several distinct for a single element and retrieve them later:

// $( "body" ).data( "foo",52 );
// $( "body" ).data( "bar", {myType: "test", count: 40} );
// $( "body" ).data( {baz: [1, 2, 3] } );
// $( "body" ).data( "foo" ); // 52
// $( "body" ).data(); // {foo: 52, bar: {myType: "test", count: 40}, baz: [1, 2, 3] }

// <article id="electriccars" data-columns="3" data-index-number="12314"
// data-parent="cars" </article>

        // <article>
        //      id="electriccars"
        //      data-columns="3"
        //      data-index-number="12314"
        //      data-parent="cars"
        //      ......
        // </article>

//==============================================================

var x = $('#preke');
var musuID = x.data('id');
var vardas = x.data('name');
console.log("Mudu ID: ", musuID, "musu data-name: ", vardas);

// pakeiciam id-67 i id-109

x.attr("data-id", 109);

x.attr('id', "item");

x.attr('data-name', "Jaronimas");

var img = $('img');
img.attr('heigth', '400px');
img.attr('width', '400px');
img.attr('src', '../5.jpg');
