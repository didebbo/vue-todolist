const root = new Vue(
    {
        el: "#root",
        data: {
            toDo: "",
            toDos: ["Andare a Scuola", "Fare i compiti", "Andare in palestra"]
        },
        methods: {
            addToDo: function () {
                if (this.toDo != "") this.toDos.push(this.toDo);
            },
            deleteToDo: function (index) {
                const tmpToDos = [];
                this.toDos.forEach((toDo, i) => {
                    if (i != index) tmpToDos.push(toDo);
                });
                this.toDos = tmpToDos;
            }
        }
    }
);