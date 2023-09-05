var sum_to_n_a = function(n) {
    // for
    let count = 0;
    for (let i=1; i<=n; i++){
        count += i;
    }
    return count;
};

var sum_to_n_b = function(n) {
    // recursive
    if (n-1 == 0){
        return 1;
    }else{
        return n + sum_to_n_b(n-1);
    }
};

var sum_to_n_c = function(n) {
    // e.g. 1+2+3+4+5 = (1+5)+(2+4)+3 = 2(6)+3
    val = n+1;
    if (n%2 ==0){ 
        // if n is even 
        return val*n/2;
    }else{
        // if n is odd 
        return val*Math.floor(n/2) + Math.floor(n/2+1);
    }
};

const n = 5;

console.log(sum_to_n_a(n));
console.log(sum_to_n_b(n));
console.log(sum_to_n_c(n));