function makeid(l) {
  // write your code here
	const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let res = "";
	while(l--){
	    res+= char.charAt(Math.floor(Math.random()*char.length));
	}
	return res;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
