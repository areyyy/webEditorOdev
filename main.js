//lettcode

SORU 20 VALİD PARENTHESES
var isValid = function(s) {
    const openMap = new Map([
      ['(', ')'],
      ['[', ']'],
      ['{', '}'],
    ]);
    const closeMap = new Map([
      [')', '('],
      [']', '['],
      ['}', '{'],
    ]);
    const stack = [];
  
    for (let i = 0; i < s.length; i += 1) {
      if (openMap.get(s[i])) {
        stack.push(s[i]);
      } else {
        const item = stack.pop();
  
        if (item !== closeMap.get(s[i])) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  };

SORU 70 CLİMBİNG STAİRS

let climbStairs = function(n) {
    let countingFunc = function(stairsRemaining, savedResults) {
      if (stairsRemaining < 0) {
        return 0;
      }

      if (stairsRemaining === 0) {
        return 1;
      }

      if (savedResults[stairsRemaining]) {
        return savedResults[stairsRemaining];
      }

      savedResults[stairsRemaining] = countingFunc(stairsRemaining - 1, savedResults) + countingFunc(stairsRemaining - 2, savedResults);

      return savedResults[stairsRemaining];
    };

    return countingFunc(n, {});
};

SORU 350 INTERSECTION OF TWO ARRAYS 2
/**
 * @param {numara []} num1
 * @param {numara []} num2
 * @return {numara []
 */
var intersect = function(nums1, nums2) {
    const map = {};
    nums1.forEach(n => (map[n] = (map[n] || 0) + 1));
    return nums2.filter(n => {
      if (map[n]) {
        map[n] -= 1;
        return true;
      }
     return false;
    });
  };

1370. Increasing Decreasing String


let sortString = (s, ord = String.fromCharCode, offset = 'a'.charCodeAt(0), m = new Map(), ans = []) => {
    for (let c of s) {
        let i = c.charCodeAt(0);
        m.set(i, (m.get(i) || 0) + 1);
    }
    let L = (res = []) => { // forwards from (L)eft-to-right 👉
        for (let i = offset; i < offset + 26; ++i)
            if (m.get(i))
                res.push(ord(i)), m.set(i, m.get(i) - 1);
        return res;
    };
    let R = (res = []) => { // backwards from 👈 (R)ight-to-left
        for (let i = offset + 26 - 1; i >= offset; --i)
            if (m.get(i))
                res.push(ord(i)), m.set(i, m.get(i) - 1);
        return res;
    };
    for (let turn = 1;; turn ^= 1) {
        let next = turn ? L() : R();
        if (next.length == 0)
            break;
        ans = ans.concat(next);
    }
    return ans.join('');
};

1380. Lucky Numbers in a Matrix


var luckyNumbers  = function(matrix) {
    const luckyNumbers = [];
    
    for (let i = 0; i < matrix.length; i++) {
        const [minValue, columnIndex] = matrix[i].reduce((result, value, index) => {
            return (!result[0] || value < result[0]) ? [value, index] : result;
        }, []);
        
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[j][columnIndex] > minValue) {
                break;
            }
            
            if (j === matrix.length - 1) {
                luckyNumbers.push(minValue);
            }
        }
    }
    
    return luckyNumbers;
};


//project euler

SORU 30 DİGİT FİFTH POWERS

var toplam=0;
  for (var i=2;i<1000000;++i) {
    var d=(''+i).split(''), sum=0;
    for (var j=0;j<d.length;++j) {
      sum+=Math.pow(d[j], 5);
    }
    if (sum==i) {
      toplam+=i;
    }
  }
  console.log(toplam);

SORU 40 CHAMPERNOWNE’S CONSTANT 
let string = "0";
let counter = 1;

while (string.length < 100000001) {
	string += counter ++;
}

console.log(string[1e0] * string[1e1] * string[1e2] * string[1e3] * string[1e4] * string[1e5] * string[1e6]);

SORU 10 SUMMATİON OF PRİMES


function primeFactors (number){
    var factors= [],
        divisor= 2 

    
    while (number>2){


        if (number % divisor == 0){
            factors.push(divisor);
            number = number/divisor;    
        }
        else {
            divisor++
        }
    }

    return factors
}

let getAllPrimes = []
i=2
while (i<2000000){
    if (primeFactors(i).length == 1){
        getAllPrimes.push(i)
    }
    i++
}    
let sum = getAllPrimes.reduce((x,y) => x + y) - 2
console.log(sum)

SORU 120 SQUARE REMAİNDERS

let s = 0;
for (let a = 3; a <= 1000; a += 1) {
  let rMax;
  if (a % 2 === 0)
    rMax = a * (a - 2);
  else
    rMax = a * (a - 1);
  s += rMax;
}
console.log(s);

SORU 60 PRİME PAİR SETS

var ms = Date.now();

function Primes(N) {			
    var primes = []
    var multiples = []			
    var p = 3					
    while (p <= N){
	if (!multiples[p]) {		
	    if (p!=5) primes.push(p);
	    for (var i = p*p ;i <= N; i += 2*p ) multiples[i] = true;		
	}
	p += 2				
    } 
    return primes
}		
function isprime(n) {
    var p = 3
    while (p*p <= n) if (n % p == 0) return false; else p += 2;
    return true		
}

var N = 10000
var primes=Primes(N)

var pair={} // list of primes pointing to their prime pairs
primes.forEach(p=>{
    primes.forEach(q=>{
	if (q>p && isprime(+(''+p+q)) && isprime(+(''+q+p))) {
	    if (!pair[p]) pair[p]={};
	    pair[p][q]=true
	}
    })	
})

for (var p1 in pair) 
    for (var p2 in pair[p1]) 
	for (var p3 in pair[p2]) 
    	    if (pair[p1][p3]) 
	        for (var p4 in pair[p3]) 
		    if (pair[p1][p4] && pair[p2][p4]) 
			for (var p5 in pair[p4]) 
			    if (pair[p1][p5] && pair[p2][p5] && pair[p3][p5]) {
				var arr=[+p1,+p2,+p3,+p4,+p5]
				console.log(arr,arr.reduce((a,b)=>a+b))
			    }

// [ 13, 5197, 5701, 6733, 8389 ] 26033

console.log(Date.now()-ms+' ms') // => 15990 ms
