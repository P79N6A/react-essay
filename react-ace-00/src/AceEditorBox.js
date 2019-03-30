import React, { Component } from 'react';
import AceEditor from 'react-ace'


let editorRef = null

class AceEditorBox extends Component {
    handleChange = () => {
        this.update()
    }

    update = () => {
        if (!editorRef) {
            return
        }
        const editor = editorRef.editor
        let shouldShow = !editor.session.getValue().length
        let node = editor.renderer.emptyMessageNode
        if (!shouldShow && node) {
            editor.renderer.scroller.removeChild(editor.renderer.emptyMessageNode)
            editor.renderer.emptyMessageNode = null
        } else if (shouldShow && !node) {
            node = document.createElement('div')
            editor.renderer.emptyMessageNode = node
            node.innerHTML = '我是placeholder~~~~'
            node.className = 'ace_invisible ace_emptyMessage'
            node.style.padding = '0 9px'
            node.style.position = 'absolute'
            node.style.zIndex = 5
            editor.renderer.scroller.appendChild(node)
        }
    }

    render() {
        return (
            <div>
                <AceEditor
                    onChange={this.handleChange}
                    ref={(r) => {
                        editorRef = r
                        setTimeout(() => {
                            this.update()
                        })
                    }}
                    placeholder="placeholder ace editor"
                />
            </div>
        )
    }
}

export default AceEditorBox