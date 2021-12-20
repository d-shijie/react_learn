import React from 'react'
import ReactDom from 'react-dom'
import { useState, useEffect } from 'react'

// hook 组件名必须以大写字母开头  hook名必须以use开头
const Example = (props) => {
    // count =>this.state.count setCount=>this.setCount 0初始状态相当于初始的this.state.count的值
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `you clicked ${count} times`
    })
    return <div>
        <p>you clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click Me!</button>
    </div>
}
class App extends React.Component {
    render() {
        return <div>
            <Example></Example>
        </div>
    }
}
ReactDom.render(
    <App></App>,
    document.querySelector('#root')
)