import Mock from 'mockjs'

Mock.mock('/getTodos', {
    'list|1-5': [{
        'text': 'todo-item',
        'completed|1': true,
    }]
})