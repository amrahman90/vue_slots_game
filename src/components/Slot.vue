<template>
    <div>
    <h1>{{title}}</h1>
    <div class="slot">

        <div class="slot-1 def " v-bind:class="{'start-anim-1': startAnim}" >
            <img :src="fruits[slotOne]" v-bind:class="{'img': startAnim,'img-fix':!startAnim} "></img>            
        </div>
        <div class="slot-2 def" v-bind:class="{'start-anim-2': startAnim}">
            <img :src="fruits[slotTwo]" v-bind:class="{'img': startAnim,'img-fix':!startAnim} "></img>            

            
        </div>
        <div class="slot-3 def" v-bind:class="{'start-anim-3': startAnim}">
            <transition name="fade">
            <img :src="fruits[slotThree]" v-bind:class="{'img': startAnim,'img-fix':!startAnim} "></img>  
            </transition>
        </div>
        
    </div>
    <div><input class="button" type="button" v-on:click="startAnimation()" value="START" />
    <input class= "button" type="button" v-on:click="stopAnimation()" name="stop" value="STOP" />
    </div>
    <hr/>
    <h1>Select the fruits to bet for each of the corresponding slots</h1>

    <div class="bet">
        <div class="bet1">
        <select v-model="bet1.value" class="selectpicker">
          <option value="">Choose</option>
          <option v-for="(fruit, i) in fruitnames" :value="i+1">{{fruit}}</option>
          
        </select>
        <br>
            <img class="img-info" :src="bet1.img" v-if="displayImg==true"></img>
            <h3 v-if="displayImg && !bet3.img">You didn't select the fruit</h3>
        </div>
        <div class="bet2">
        <select v-model="bet2.value" class="selectpicker">
          <option value="">Choose</option>
          <option v-for="(fruit, i) in fruitnames" :value="i+1">{{fruit}}</option>
        </select>
        <br>
            <img class="img-info" :src="bet2.img" v-if="displayImg==true"></img>  
            <h3 v-if="displayImg && !bet3.img">You didn't select the fruit</h3>
        </div>
        <div class="bet3">
        <select v-model="bet3.value" class="selectpicker">
          <option value="">Choose</option>
          <option v-for="(fruit, i) in fruitnames" :value="i+1">{{fruit}}</option>
        </select>
        <br>
            <img class="img-info" :src="bet3.img" v-if="displayImg==true"></img>  
            <h3 v-if="displayImg && !bet3.img">You didn't select the fruit</h3>
        </div>

    </div>

    
    </div>
</template>
<script>
    export default {
        name: "Slots",
        data() {
            return {
                /*
                varialbles associated with bet
                */
                
                bet1: {value:'', img:''},
                bet2: {value:'', img:''},
                bet3: {value:'', img:''},
                
                //flag to display only when the machine is run
                displayImg: false,
                
                //assigning random numbers in the range 1 to 7
                slotOne: Math.floor(Math.random() * 7)+1,
                slotTwo: Math.floor(Math.random() * 7)+1,
                slotThree: Math.floor(Math.random() * 7)+1,
                //variable to toggle spinner animation
                startAnim: false,
                title: "Slots",
                //list of image dependencies
                fruits: [
                    require("../assets/fruits.png"),
                    require("../assets/apple.png"),
                    require("../assets/persimmon.png"),
                    require("../assets/lime.png"),
                    require("../assets/plum.png"),
                    require("../assets/pomegranate.png"),
                    require("../assets/raspberry.png"),
                    require("../assets/watermelon.png"),
                ],
                correct: require("../assets/correct.png"),
                wrong: require("../assets/wrong.png"),
                //list of fruit names used in the game
                fruitnames: ["Apple","Persimmon", "Lime", "Plum", "Pomegranate", "Raspberry", "Watermelon"]
            }
        },
        methods: {
            /*
            function to start slot machine spinner animation
            */
            startAnimation: function() {
            console.log("b4"+this.slotOne +":"+ this.slotTwo +":"+ this.slotThree);
                this.displayImg = false;
                this.slotOne = 0;
                this.slotTwo = 0;
                this.slotThree = 0;
              this.startAnim = true; 
            console.log("after"+this.slotOne +":"+ this.slotTwo +":"+ this.slotThree);


            },
            
            // function to assign each of the slots with an image 
            // based on the random index generated
            getSlotImage : function() {
                this.slotOne = Math.floor(Math.random() * 7)+1;
                this.slotTwo = Math.floor(Math.random() * 7)+1;
                this.slotThree = Math.floor(Math.random() * 7)+1;

                console.log(this.slotOne +":"+ this.slotTwo +":"+ this.slotThree);
            },
            // function to stop spinner animation
            stopAnimation : function() {
                this.getSlotImage();
                this.findScore();
                this.startAnim = false;
                
            },
            //function to to display correct or wrong predictions
            //TO-DO but left because of time constraints
            findScore: function() {
                
                this.displayImg = true;
                console.log("BET1"+this.bet1.value +" : " +this.slotOne);
                                console.log("BET2"+this.bet2.value +" : " +this.slotTwo);
                console.log("BET3"+this.bet3.value +" : " +this.slotThree);
                if(this.bet1.value == this.slotOne) {
                    
                    this.bet1.img = this.correct;
                }else if(this.bet1.value==''){
                    this.bet1.img = '';

                }else{
                    this.bet1.img = this.wrong;
                }
                if(this.bet2.value == this.slotTwo){
                    this.bet2.img = this.correct;
                }else if(this.bet2.value==''){
                    this.bet2.img = '';

                }else{
                    this.bet2.img = this.wrong;
                }
                if(this.bet3.value == this.slotThree) {
                    this.bet3.img = this.correct;
                }else if(this.bet3.value==''){
                    this.bet3.img = '';

                }else{
                    this.bet3.img = this.wrong;
                }
            }
        }
        
    }
</script>
<style scoped>
    .def {
        
        width: 150px;
        height: 150px;
        margin: 20px;
    }
    .slot {
        padding:10px;

        width: 600px;
        height: 200px;
        overflow:hidden;       
        margin:auto;
        display: flex;   
    }
    .bet {
        margin-top:100px;
        padding:20px;
        width: 600px;
        margin:auto;
        display: flex;
        
    }
    .bet1,.bet2, .bet3 {
        flex:1;
        margin:20px;
        position: relative;
        
    }
    .slot-2 {
        flex: 1;
    }
    .slot-3 {
        flex: 1;
    }
    .img {
        width: 150px;
        height: 900px;
        position:relative;


    }
    .img-fix {
        width: 150px;
        height: 150px;
        position:relative;

        
    }
    /*basic spinner animation*/
@keyframes spin {
  
  100% {
     transform: translateY(calc( -900px));

  }
}
/*never used*/
@keyframes spin-2 {
  from {
    margin-top:900px;
  }
  to {
    margin-top:0px;
    
  }
}

.slot-1 {
        flex: 1;
}
.start-anim-1 {
  animation: spin 0.6s linear infinite;
}
.start-anim-2 {
  animation: spin 0.5s linear infinite;
}
.start-anim-3 {
  animation: spin 0.7s linear infinite;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
.button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-top: 40px;
}
.img-info {
    width:100px;
    height:100px;
}
</style>