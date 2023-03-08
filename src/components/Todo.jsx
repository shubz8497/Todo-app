import { Component } from "react";


class Todo extends Component {

    onDelete = () => {
        this.props.delete(this.props.todo.id)
    }

    render() {
        return (
            <div className="container mb-2">
                <div className="row">
                    <div className="col-md-1">
                        {this.props.index}
                    </div>
                    <div className="col-md-1">
                        <input type="checkbox" checked={this.props.todo.isDone} />
                    </div>
                    <div 
                        className="col-md-6">
                        {this.props.todo.value}
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-danger" onClick={this.onDelete}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Todo;