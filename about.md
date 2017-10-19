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
