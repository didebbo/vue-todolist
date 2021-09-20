const root = new Vue(
    {
        el: "#root",
        data: {
            toDos: ["Andare a Scuola", "Fare i compiti", "Andare in palestra"]
        },
        methods: {
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