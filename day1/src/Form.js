import { Component } from 'react'

const FormBody = (props) => {
    return <div>
        <input placeholder='input1' type='number'></input>
        <input type='number' placeholder='input2'></input>
        <button onClick={(e) => props.change(e)}>提交</button> </div>
}
class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            job: ''
        }
    }
    render() {
        const { name, job } = this.state
        return <FormBody change={(e) => this.handleChange(e)}></FormBody>
    }
    handleChange(e) {
        console.log(e);
        // const { name, value } = e.target
        // this.setState({ [name]: value })
        // console.log(this.state);
    }
}
export default Form