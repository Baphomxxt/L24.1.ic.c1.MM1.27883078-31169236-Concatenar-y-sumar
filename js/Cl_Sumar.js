export default class Cl_Sumar {
    constructor(num1, num2, num3, num4) {
       this._num1 = num1;
       this._num2 = num2;
       this._num3 = num3;
       this._num4 = num4;
    }
    set num1(num1) {
        this.num1 = +num1;
    }
    get num1() {
        return this._num1;
    }
    set num2(num2) {
        this.num2 = +num2;
    }
    get num2() {
        return this._num2;
    }
    set num3(num3) {
        this.num3 = +num3;
    }
    get num3() {
        return this._num3;
    }
    set num4(num4) {
        this.num4 = +num4;
    }
    get num4() {
        return this._num4;
    }
    sumar() {
        return this.num1 + this.num2 + this.num3 + this.num4;
    }
    concatenacion() {
        return this.num1 , this.num2 , this.num3 , this.num4;
    }
}