const root = new Vue(
    {
        el: "#root",
        data: {
            toDo: "",
            toDos: [
                {
                    desc: "Andare a scuola",
                    done: true,
                    editMode: false,
                    priority: false
                },
                {
                    desc: "Fare i compiti",
                    done: false,
                    editMode: false,
                    priority: true
                },
                {
                    desc: "Andare in palestra",
                    done: false,
                    editMode: false,
                    priority: false
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
                            editMode: false,
                            priority: false
                        }
                    );
                    this.toDo = "";
                }
            },
            editToDo: function (toDo) {
                toDo.editMode = !toDo.editMode;
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
            },
            isDone: function (toDo) {
                if (toDo.done) return "done";
            },
            colorStatus: function (toDo) {
                if (toDo.done) return "done";
                if (toDo.priority) return "priority";
            },
            changePriority: function (toDo) {
                toDo.priority = !toDo.priority;
                this.saveTodo(toDo);
            },
            isPriority: function (toDo) {
                if (toDo.priority) return "not";
            }
        }
    }
);