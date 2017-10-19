//closures

function tenPercent(){
	return function(price){
		return price + (price * 0.1)
    }
}


function xPercent(x){
	return function(price){
		return price + (price * (x/100))
    }
}

var ddv18 = xPercent(18);

ddv18(2000); //returns 2360 

//Counts how many instances are created
(function () {
    var created;
    created = 0;
    function SomeClass() {
        created += 1;
    }
    SomeClass.prototype = {
        howMany: function () {
            return created;
        }
    };
    window.SomeClass = SomeClass;
}());

var x = new SomeClass();
var y = new SomeClass();
x.howMany(); //2
