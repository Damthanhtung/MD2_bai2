class QuadraticEquation {
    constructor(a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getDiscriminant () {
        return this.b**2-4*this.a*this.c;
    }
    getRoot1 () {

        let x1= (-this.b+Math.pow(this.getDiscriminant(),0.5)/2*this.a)
        return x1;
    }
    getRoot2 () {

        let x2=(-this-Math.pow(this.getDiscriminant(),0.5)/2*this.a)
        return x2;
    }
    Total () {
        if (this.getDiscriminant()===0) {
            console.log("Phương trình có nghiệm kép" + this.getRoot1());
        }
        else if (this.getDiscriminant()>0) {
            console.log("Phương trình có 2 nghiệm phân biệt" + this.getRoot1() + " và " + this.getRoot2())
        }
        else {
            console.log("Phương trình vô nghiệm")
        }
    }
}
let ptb2 = new QuadraticEquation(5,6,7);
ptb2.Total();