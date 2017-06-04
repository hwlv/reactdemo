import React, {Component} from 'react';
import Home from './component/Home'
import About from './component/About'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
// var myStyle = {
//     text-align:left;
// };
var arr = [
    <h1>菜鸟教程</h1>,
    <h2>学的不仅是技术，更是梦想！</h2>,
];


// const Home = () => (
//     <div>
//         <h2>Home</h2>
//     </div>
// )
// const About = () => (
//     <div>
//         <h2>About</h2>
//     </div>
// )
const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)
const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )}/>
    </div>
)
// 创建组件
class App extends Component {

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <p data-myattribute="somevalue">自定义属性，data前缀</p>
                <p>我们可以在 JSX 中使用 JavaScript 表达式。表达式写在花括号 {} 中。实例如下：{1 + 3}</p>
                {/*<p>在 JSX 中不能使用 if else 语句，但可以使用 conditional (三元运算) 表达式来替代。{1 == 1 ? 'True!' : 'False'}</p>*/}
                {/*<p>数组{arr}</p>*/}
                <p>路由<br/>
                    <h1>App</h1>
                    <Router>
                        <div>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about" name="about" >About</Link></li>
                                <li><Link to="/topics">Topics</Link></li>
                            </ul>

                            <hr/>

                            <Route exact path="/"  component={Home}/>
                            <Route path="/:id" name="about" component={About}/>
                            <Route path="/topics" component={Topics}/>
                        </div>
                    </Router>
                    {/*
                     接着用 `this.props.children` 替换 `<Child>`
                     router 会帮我们找到这个 children
                     */}
                    {/*{this.props.children}*/}
                </p>
            </div>
        );
    }
}

export default App;
