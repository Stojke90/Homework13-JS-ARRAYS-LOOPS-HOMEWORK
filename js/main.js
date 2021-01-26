
// Task 1   ////////////////////////////////////////////////////////////


var data = [34, true, "Peter", 1992];

var newData = [];

var i = 0;

while (i < data.length) {
	newData[i] = data[i]
	i++;
}

console.log(newData)




// Task 2        ////////////////////////////////////////////////////////////////////

var data = [34, true, "Peter", 1992];

var newDataReverse = [];

var t = 0;

while (t < data.length) {
	newDataReverse[t] = data[data.length - t - 1]
	t+=1;
}

console.log(newDataReverse)



// Task 3        ////////////////////////////////////////////////////////////

var dataOldRepack = [34, true, "Peter", 1992];

var dataNewRepack = [12, "Jack"];

var r = 0;

while (r < dataOldRepack.length) {
	dataNewRepack[dataNewRepack.length] = dataOldRepack[r];
	r++;
}

console.log(dataNewRepack)


// Task 4                 ////////////////////////////////////////////////////////////////// 


var a = [12, 56, 32, 44, 69];

var b = [88, 7, 13];

var c = [];

var s = 0;

var y = 0;



while (s < a.length) {
	c[s]= a[s];
	s++;
	
}

while (y < b.length) {
	c[c.length] = b[y];
	y++;
}

console.log(c)



// Task 5    ///////////////////////////////////////////////////////////////////


var al = [12, 56, 32, 44];

var bl = [88, 7, 13];

var q = [];

var z = 0;

var x = 0;

var d = 0;


while(z < al.length + bl.length) {
   if(x > d) {
      q[z] = bl[d];
      d++;
   }else {
      q[z] = al[x];
      x++;
   }
   z++;
}


console.log(q)




// Task 6         //////////////////////////////////////////////////////////////

for (var i = 6; i >= 1; i--) {
  var stars = "";
  for (var j = i; j <= 6; j++) {
  stars += "*";
     }
 console.log(stars);
}



// Task 7           /////////////////////////////////////////////////////////////////////


var width = 10;
var height = 6;
var star = '*';
var emptySpace = ' ';

for (var i = 1; i <= height; i++) {
    if (i === 1 || i === height) {
        console.log(star.repeat(width));
    } else {
        console.log(star + emptySpace.repeat(width - 2) + star);
    }
}