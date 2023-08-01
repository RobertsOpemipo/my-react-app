class Test{
    constructor (num1, num2){
        this.num1 = num1;
        this.num2 = num2;
    }

    print(){
        console.log(this.num1 + this.num2)
    }
}

const test = new Test(5,6)
const test2 = new Test(5,6)

console.log(test.print())
console.log(test2.print())