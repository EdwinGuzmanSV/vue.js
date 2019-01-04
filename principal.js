var app= new Vue({
    el: '#app',
    data : {
        lista:[
            {nombre: 'juan carlos', promedio:'10',estado:false},
            {nombre: 'mario sanchez', promedio:'8',estado:true},
            {nombre: 'nicole guzman', promedio:'10',estado:false}
        ],
        nombre: '',
        promedio: ''
    },
    methods: {
        agregarNota: function (){
            estadoA=false;
            if(this.promedio>=12.5){
                estadoA=true;
            }
            if(this.nombre!="" && this.promedio!=""&& this.promedio>=0 && this.promedio<=10){
                this.lista.push({nombre:this.nombre,promedio:this.promedio,estado:estadoA});
            }
            else{
                alert("Ingrese el nombre y promedio del estudiante!")
            }
        }
    }
})