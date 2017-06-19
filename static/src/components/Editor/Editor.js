import React from 'react'
import { Editor } from 'react-draft-wysiwyg'
import styles from './Editor.less'
import { EditorState, ContentState, convertFromHTML } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
// import draftToHtml from 'draftjs-to-html';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class DraftEditor extends React.Component {
	static propTypes = {
		content: React.PropTypes.string
	}

	static defaultProps = {
		content: '',
	}

	constructor(props, context) {
		super(props, context);

		this.state = {
			editorState: this.initEditorState(props.content)
		}
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.content != nextProps.content) {
			this.setState({ editorState: this.initEditorState(nextProps.content) });
		}
	}

	initEditorState(htmlStr) {
		const blockHTML = convertFromHTML(htmlStr);
		const contentState = ContentState.createFromBlockArray(blockHTML.contentBlocks, blockHTML.entityMap);

		return EditorState.createWithContent(contentState);
	}

	getContent() {
		const editorState = this.state.editorState;
		return stateToHTML(editorState.getCurrentContent()) || "";
	}

	isEmpty() {
		const content = this.getContent();
		return '<p><br></p>' == content;
	}

	editorStateChange(editorState) {
		this.setState({ editorState: editorState });
	}

	getEditor() {
		return this.refs.editor;
	}

	setFocus() {
		this.getEditor().focusEditor();
	}

	render() {
		const {content, ...props} = this.props;

		return (<div onClick={this.setFocus.bind(this)}>
			<Editor 
				ref="editor"
				locale="zh"
				toolbarClassName={styles.toolbar} 
				wrapperClassName={styles.wrapper} 
				editorClassName={styles.editor} 
				{...this.props} 
				onEditorStateChange={this.editorStateChange.bind(this)}
				editorState={this.state.editorState} />
			</div>)
	}
}

export default DraftEditor
