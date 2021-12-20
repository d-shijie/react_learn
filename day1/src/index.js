import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import './example'
import Example from './example'
import Table from './Table'
import Form from './Form'
// 组件可定义为类或函数 定义为类组件需要继承React.Component
// 组件的生命周期 略分为render=>constructor=>componentDidMount=>componentDidUpdate=>componentsWillUnmount 更多https://reactjs.org/docs/react-component.html
// 每当调用componentDidMount componentDidUpdate componentWillUnmount 都会调用render
class App extends React.Component {
    // constructor接受两个参数props和context
    // props是使用此组件的组件传递给此组件的数据  context表示上下文
    // 注意 props是只读属性 不可直接更改 这也和vue中父子组件的props类似
    constructor(props) {
        super(props)
        // this.state相当于一些组件本身的自定义数据
        this.state = {
            value: '1000',
            data: [
                { name: 'Mac', job: 'Cooker' },
                { name: 'Helen', job: 'Cooker' },
                { name: 'jack', job: 'Cooker' },
                { name: 'Bom', job: 'Cooker' },
            ]
        }
    }
    // 生命周期挂载函数
    componentDidMount() {
        const api = 'http://'
        console.log('componentDidMount'); // render componentDidMount
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');// render componentDidUpdate
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');// render componentWillUnmount
    }
    render() {
        console.log('render');
        // 变量可以用{}包裹之后在html语句上直接使用 
        const name = 'world'
        // jsx的写法
        // 定义的方法前最好写()=>否则会在挂载后就直接执行方法
        return <div>
            <h1 onClick={() => this.changeState(2222)}>hellow {name} my props {this.state.value}</h1>
            {/* 传递的方法和数据都直接在组件上定义 和vue的v-bind相似*/}
            <Example name='mac' hobby={['football', 'basketball']} hello={(text) => this.show(text)}></Example>
            <Table data={this.state.data}></Table>
            <Form></Form>
        </div>
    }
    show(text) {
        alert(text)
    }
    changeState(item) {
        // 使用setState对state做出改变
        this.setState({
            value: item
        })
    }
}

ReactDom.render(
    <App></App>,
    document.querySelector('#root')
)