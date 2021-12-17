import { Component } from 'react'

// 简单组件就是一个方法通过jsx的方法返回一html结构 jsx的方法的类名用className
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>name</th>
                <th>job</th>
            </tr>
        </thead>
    )
}
const TableBody = (props) => {
    // 与v-for相似 key用于识别每个列表项 
    const data = props.data.map((item, index) => {
        return <tr key={index}>
            <td>{item.name}</td>
            <td>{item.job}</td>
            <td>
                <button onClick={() => props.remove(index)}>
                    delete
                </button>
            </td>
        </tr>
    })
    return <tbody>{data}</tbody>

}
class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: props.data
        }
    }
    render() {
        // 组件的最外层必须有一个盒子包裹
        return <table>
            <TableHeader></TableHeader>
            {/* 简单组件同样的方法传值 接受的方法也是一个props 这里传过去data 组件方法处接受的就是props.data */}
            <TableBody data={this.state.data} remove={(index) => this.remove(index)}></TableBody>
        </table>
    }
    remove(index) {
        console.log(index);
        this.setState({
            data: this.state.data.filter((item, i) => {
                return i !== index
            })
        })
    }
}
export default Table