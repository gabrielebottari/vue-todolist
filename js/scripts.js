/*
Descrizione:
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, 
il testo digitato viene letto e utilizzato per creare un nuovo todo,
che quindi viene aggiunto alla lista dei todo esistenti.

Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente
(se done era uguale a false, impostare true e viceversa)
*/

// Estraggo la funzione createApp dall'oggetto Vue
const { createApp } = Vue;

// Creo l'istanza di Vue da mondare in pagina
createApp({
    data() {
        return {

            //array di oggetti
            todos : [
                {
                    text: 'Fare i compiti',
                    done: false,
                },
                {
                    text: 'Fare la spesa',
                    done: false,
                },
                {
                    text: 'Fare il bucato',
                    done: false,
                },
            ],

            newTodo: '',
        };
    },

    
    methods: {

        //funzione per mettere e togliere la classe completed
        toggleTodo(index) {
          this.todos[index].done = !this.todos[index].done;
        },

        //rimuovo il todo
        removeTodo: function(index) {
            this.todos.splice(index, 1);
        },
        
        //aggiungo un nuovo todo
        addTodo: function() {
            if (this.newTodo.trim() !== '') {
                this.todos.push({ text: this.newTodo, done: false });
                this.newTodo = '';
            }
        },
    },
    
// Monto l'istanza di Vue in pagina
}).mount('#app');