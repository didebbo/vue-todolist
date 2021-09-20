const root = new Vue(
    {
        el: "#root",
        data: {
            toDo: "",
            toDos: [
                {
                    desc: "Andare a Scuola",
                    done: true,
                    editMode: false
                },
                {
                    desc: "Fare i compiti",
                    done: false,
                    editMode: false
                },
                {
                    desc: "Andare in Palestra",
                    done: false,
                    editMode: false
                }
            ]
        },
        methods: {
            addToDo: function () {
                if (this.toDo != "") {
                    this.toDos.push(
                        {
                            desc: this.toDo,
                            done: false,
                            editMode: false
                        }
                    );
                    this.toDo = "";
                }
            },
            editToDo: function (toDo) {
                toDo.editMode = true;
            },
            saveTodo: function (toDo) {
                console.log(toDo);
                toDo.editMode = false;
            },
            deleteToDo: function (index) {
                const tmpToDos = [];
                this.toDos.forEach((toDo, i) => {
                    if (i != index) tmpToDos.push(toDo);
                });
                this.toDos = tmpToDos;
            },
            changeStatus: function (toDo) {
                toDo.done = !toDo.done;
                this.saveTodo(toDo);
            }
        }
    }
);