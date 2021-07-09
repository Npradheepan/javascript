class CoffeeMachine {
            _waterAmount = 0;
            constructor(power){
                this._power = power;
            }
            set _waterAmount(value){
                if(value<0) throw new Error('Negative water');
                this._waterAmount =value;
            }
            get _waterAmount(){
                return this._waterAmount;
            }
            // set not Possible bcs private Power
            //Get Only
            get power (){
                return this._power; 
            } 
        }
            let  coffeeMachine = new CoffeeMachine(200);
            coffeeMachine.waterAmount = 150;
             alert(`Creat Coffee Machine Power Is ${coffeeMachine.power}`);
            console.log(`water Amount = ${coffeeMachine.waterAmount}`);
