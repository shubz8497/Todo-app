import { Component } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";


class Todos extends Component {

    state = {
        todos:
            localStorage.getItem("todos") ?
                JSON.parse(localStorage.getItem("todos")) :
                []
    }

    addNewTodo = (todoValue) => {

        if(todoValue==="")
            return;
        let todos = this.state.todos;
        todos.push({
            id: new Date().getTime(),
            value: todoValue,
            isDone: false
        })

        this.updateState(todos);
    }

    updateState = (todos) => {
        this.setState({
            todos
        })

        localStorage.setItem("todos", JSON.stringify(todos))
    }

    onDelete = (todoId) => {
        let todos = this.state.todos.filter(item => item.id != todoId)

        this.updateState(todos);
    }

    handleDone = (todoId) => {
        let todos = this.state.todos;
        todos.map = (item => {
            if (item.id == todoId) {
                item.isDone = !item.isDone;
            }
            return item;
        })

        this.updateState(todos);
    }

    render() {
        return (
            <div>
                <h1>Todos App</h1>
                {
                    this.state.todos.length == 0 ? <h1>No todos are present</h1> :
                        this.state.todos.map((item, index) => {
                            return <Todo key={index}
                                todo={item}
                                index={index + 1}
                                delete={this.onDelete}
                                handleDone={this.handleDone}
                            />
                        })
                }
                <div style={{ marginTop: 10 }}>
                    <AddTodo addTodo={this.addNewTodo} />
                </div>

            </div>

        )
    }
}

export default Todos;