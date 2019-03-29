import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import Page404 from './Page404'

const data = [
    {
        text: '001',
        completed: false,
    },
    {
        text: '002',
        completed: false,
    },
]

class App extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Route exact path="/">
                            {
                                ({ match }) => {
                                    if (match) {
                                        return (<span>列表页</span>)
                                    }
                                    return (<Link to="/">列表页</Link>)
                                }
                            }
                        </Route>
                        
                    </li>
                    <li>
                    <Route exact path="/addTodo">
                            {
                                ({match}) => {
                                    if (match) {
                                        return (<span>添加页</span>)
                                    }
                                    return (<Link to="/addTodo">添加页</Link>)
                                }
                            }
                        </Route>
                        
                    </li>
                    <li>
                        <Link to="/xxxx-yyyy">404</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/" render={() => {
                        return (<TodoList todos={data} />)
                    }} />
                    <Route path="/addTodo" component={AddTodo} />
                    <Route component={Page404} />
               </Switch>
            </div>
        )
    }
}

export default App