import { Component } from "react";


class AddTodo extends Component {
    state={
        value:''
    }

    submit=(event)=>{
        event.preventDefault();
        this.props.addTodo(this.state.value);
        this.setState({value:''})
    }

    onChange=(event)=>{
        this.setState({value:event.target.value});
    }

    render() {

        return (
            <div className="container">
                <form onSubmit={this.submit}>
                    <div className="row">
                        <div className="col-9">
                            <input className="form-control" type="text" value={this.state.value} onChange={this.onChange} />
                        </div>
                        <div className="col-3">
                            <button type="submit" className="btn btn-success">Add Todos</button>
                        </div>

                    </div>
                </form>
            </div>
        )
    }

}

export default AddTodo;