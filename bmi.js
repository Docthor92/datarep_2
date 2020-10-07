class BMI{
    constructor(height, weight){
        this.height = height;
        this.weight = weight;
    }

    calculateBMI(){
        let bmi = this.weight / (this.height ** 2);
        return bmi;
    }



}

let Mybmi = new BMI(2,90);
let calculateBMI = Mybmi.calculateBMI();
console.log(calculateBMI);