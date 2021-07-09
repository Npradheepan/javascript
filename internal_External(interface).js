 //internal interface
        // external interface
        class CoffeeMachine {
            _waterAmount = 0;
            constructor(power){
                this.power = power;
                alert(`Creat acoffee -Machine, Power ${this.power}`);
            }
            set _waterAmount(value){
                if(value<0) throw new Error('Negative water');
                this._waterAmount =value;
            }
            get _waterAmount(){
                return this._waterAmount;
            }
        }
            let  coffeeMachine = new CoffeeMachine(200);
            coffeeMachine.waterAmount = 150;
            console.log(`water Amount = ${coffeeMachine.waterAmount}`);
        
