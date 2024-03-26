import { Component } from 'react';
import './employers-add-form.css'

class EmployersAddForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onChangeValue = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    onSubmit = (e) =>{
        e.preventDefault();
        if (this.state.name.length < 3 || !this.state.salary) return;
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }
    render() {
        const {name, salary} = this.state
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        name='name'
                        value={name}
                        placeholder="Как его зовут?"
                        onChange={this.onChangeValue} />
                    <input type="number"
                        className="form-control new-post-label"
                        name='salary'
                        value={salary}
                        placeholder="З/П в $?"
                        onChange={this.onChangeValue} />

                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployersAddForm;