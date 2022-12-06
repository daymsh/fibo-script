// Generar los n fibonacci
const n = prompt("introducir numero N: "); 
let a = -1;
let b = 1;
let c = 0;
for (let i = 1; i <= n; i++) {
    d = a + b;
    console. log(d);
    a = b;
    b = d;
    document.write(d+", ");    
}