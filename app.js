Vue.createApp({
    data(){
        return{
            userInput: '',
            class1: false,
            class2: false,
            hidden:false,
            visible:true,
            backColor: ''
        };
    },
    methods:{
       
        confirmInput(){
            if(this.userInput==="user1"){
                this.class1 = true;
            }
            else if (this.userInput === "user2"){
                this.class2 = true;
            }
        },
        showOrNot(){
            if(this.hidden === false){
                this.hidden = true;
                this.visible = false;
            }
            else if(this.hidden === true){
                this.hidden = false;
                this.visible = true;
            }
        }
    }
}).mount('#assignment');

