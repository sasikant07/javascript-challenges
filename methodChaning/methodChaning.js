const calc = {
    total: 0,
    add (a) {
        this.total += a;
        return this;    // this will retur the whole object
    },
    multiply (b) {
        this.total *= b;
        return this;
    },
    subtract (c) {
        this.total -= c;
        return this;
    }
}

const result = calc.add(10).multiply(5).subtract(30).add(10);
console.log(result.total);  // 30;