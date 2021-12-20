import { Component } from 'react'

const FormBody = (props) => {
    return <div>
        <input placeholder='input1' type='number'></input>
        <input type='number' placeholder='input2'></input>
        <button onClick={(e) => props.change(e)}>提交</button>
        <img src='https://node-test-bucket.oss-cn-hangzhou.aliyuncs.com/1639463174852.jfif?Expires=1639734382&OSSAccessKeyId=TMP.3KfkgH3791EFLFwP84NLWj8wcqrj4fw8HnohrMj8GhH6TSxuRfgP78Ta8iSqzkLt1PH46QNEH6sX1S3rkLzHZxkhZSVsPB&Signature=R%2FjbP%2BM%2F54jC6C0RhRQToOm6rCI%3D&versionId=CAEQIxiBgIDgw73e7RciIGZkNzQzZGY2YmY5MzQ4NWVhYWRkNWZkYzNjODhkM2Y1&response-content-type=application%2Foctet-stream'></img>
    </div>
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