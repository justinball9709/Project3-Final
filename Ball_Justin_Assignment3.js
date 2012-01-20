//alert("JavaScript works!");

//JSON

var json = {
	"salesreps": {
		"0294":		{
		"name": "Justin",
		"age":	23
	},
		"0025":		{
		"name":	"Bobby",
		"age": 40
		}
	}
};

for (var json in json.salesreps)	{
	 var sales = json.salesreps[json];
};

var json2 = {
	"salesreps":	[
	]
};







//Property Object/ 4 properties 2 methods
var rep = {
	dealercode:	   						  0294,//number
	Name:		   					  "Justin",
	repyes:								  true,//boolean
	UniformColor:  	  ["Blue", "White", "Red"],//array
	putAcc:		   function (screenprotect) {},
	attachscreen:  function () {}
};

put.Acc(" Clean screen and place protector");



//Method Procedure
	likePhone: function () {
		console.log(" I love this phone");
	}
	
};
var key =	"dealercode";
rep.name = "Bob";

console.log( student[key] );
console.log( student["likePhone"] );

rep.likePhone();

rep.likePhone = function () {
	console.log("This is the top 4G phone");
};

for  (var key in rep) {
	console.log("key: " + key + ", value: ", rep[key]);
};

//NOTE THIS IS COPY PASTE PROJECT 2
//alert("JavaScript works!");
//Author: Justin Ball
//January 10, 2012
//Project 2 Assignment
//Deliverable 2
//Larry in the wireless industry

//Initial Variables
var Rep = "Larry",
	company = "Verizon",
	Smart = "Smartphones",
	money = 1,
	total = 2,
	ex = 'Larry\'s favorite phone is the iphone',
	sellalot = true,
	less = false
;

//arrays LOCAL VARIABLES
var android1 = "HTC",
	android2 = "Samsung",
	android3 = "Motorola"
;
var androids = ["HTC", "Samsung","Motorola"];

var adjectives = [ 
		" Thunderbolt has poor battery life.",
		" Charge has a super bright screen.",
		" Droid X is the phone I use."
];
					
//LOOP (for)
//console.log( androids.length );
for (var i=0, j=androids.length; i < j; i++) {
	console.log( " The Android " + androids[i] + adjectives[i]);
};

//Loops WHILE LOOP EXAMPLE

var tier = 10,
	level = true,
	total = 10,
	money = 5,
	zero = 0
; //number used to manipulate the loop is called the "iterator or counter"
//conditional in parenthesis true statment
while (tier > 0) {
	console.log(" Tier ", tier + " pays out a different commission.");
	tier--;
};
var mix = function (c) {
var c = 5;
mix( "This can only be obtained one time a year");
}

console.log("If Larry doesn't hit a tier level he will not get paid commission.")
	if (tier === 10, + total) {
	console.log(" Larry will get a bonus if he hits a tier. ");
	}else {
	console.log(zero, + " tier level pay.");
}

//functions with return
var pi = 3.14159;
var radius = 5;

var getArea = function (r) {
	var area = r * r * pi;
	return area;
};
var reportArea = function(name, area, message){
	console.log(name + "'s circle has " + area + " area, and " + message);
};

var area = getArea(10);
reportArea("Ceiling cat", area, "is all seeing");


// 1 FUNCTION PROCEDURE FLOWCHART
var acc = 2;
var r = 4;

var Pack = function (r,name, message) {
	var bundle = r * acc;
		if (bundle ===4){
		console.log("Larry is excited about the accessory bonus.");
		}else{
		console.log("Larry is trying hard to hit the higher accessory bonus.");
}
		console.log(name + " bonus of $" + bundle + message);
};

Pack(2,"Larry's"," is the minimum.");
Pack(5, "If Larry hits it he will get a", " dollars extra.");

//String Function
var string = function (cases) {
	console.log(cases + "Hope we have a good amount of cases " + group + "amount");
};

//ex function delete
var pi =3.14159;
var radius = 5;

var getArea = function (r, name, message) {
	var area = r * r * pi;
	console.log(name + "'s circle has " + area + " area, and" + message);
};

getArea(2, "Mike", " is awesome");
getArea(5, "Rick", " is brilliant");
getArea(10, "Ceiling cat", "is all seeing");
//

