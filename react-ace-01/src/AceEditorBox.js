import React, { Component } from 'react';

import brace from "brace"
import AceEditor from "react-ace"

import "brace/mode/sql"
import "brace/theme/github"


let editorRef = null

const config = {
    name: 'createSQL'
}

class AceEditorBox extends Component {
    handleChange = (content) => {
        this.props.updateContent(content)
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
        const { content } = this.props
        return (
            <div>
                <AceEditor
                    ref={(r) => {
                        editorRef = r
                        setTimeout(() => {
                            this.update()
                        })
                    }}
                    mode="sql"
                    theme="github"
                    width="100%"
                    height="300px"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    showPrintMargin={false}
                    name={`ace-editor-${config.name}-name`}
                    editorProps={{ $blockScrolling: true }}
                    value={content}
                    defaultValue=""
                    key={`ace-editor-${config.name}`}
                    fontSize={16}
                    style={{
                        background: '#F8F8F8',
                        border: '1px solid #D8D8D8',
                        borderRadius: '2px',
                    }}
                />
            </div>
        )
    }
}

export default AceEditorBox