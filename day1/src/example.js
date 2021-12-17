import React, { Component } from 'react'

// 新建组件可以直接继承Component父类
class Example extends Component {
    constructor(props) {
        // 想要使用父类传递给子类的prop必须使用super方法 否则this的指向会出现错误
        super(props)
        // 每当state中的数据发升改变就会刷新页面
        this.state = {
            value: '10000'
        }
    }
    render() {
        const age = 18
        return <div> my age is {age} example value is {this.state.value} example props name is {this.props.name} <h2 onClick={() => this.props.hello(111)}>example props hobby is {this.props.hobby[0]}</h2></div>
    }
}
export default Example