var app = new Vue({
    el: '#app',
    data: {
    message : "Todolist App",
    todolists :[ ],
    newtodolist : "" 
    },
    methods:{
   
    addTodo:function(){
       if(this.newtodolist){
           this.todolists.push({
               text: this.newtodolist,
               completed: false
           });
           this.newtodolist = '';
       }
    },
    removeTodo:function(index){
    this.todolists.splice(index,1);
    }
   
    }
   })