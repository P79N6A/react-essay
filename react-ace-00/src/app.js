import React, { Component } from 'react';
import AceEditor from 'react-ace'
class App extends Component {
    render() {
        return (
            <div>
                <AceEditor 
                    placeholder="placeholder ace editor"
                />
            </div>
        )
    }
}

export default App