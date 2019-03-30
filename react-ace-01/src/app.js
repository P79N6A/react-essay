import React, { Component } from 'react';
import AceEditorBox from './AceEditorBox'

class App extends Component {

    state = {
        content: '',
    }

    updateContent = (content) => {
        this.setState({
            content,
        })
    }

    render() {
        const { content } = this.state
        return (
            <div>
                <AceEditorBox 
                    content={content}
                    updateContent={this.updateContent}
                    />
            </div>
        )
    }
}

export default App