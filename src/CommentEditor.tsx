import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

class CommentEditor extends React.Component {
    handleEditorChange = (e: { target: { getContent: () => any; }; }) => {
        console.log(
        'Content was updated:',
        e.target.getContent()
        );
    }

render() {
    return (
        <Editor
            init={{
                skin: 'oxide-dark',
                content_css: 'dark',
                placeholder:"Addcomment...",
                height: 500,
                menubar: false,
                plugins: [
                    'advlist autolink lists link image',
                    'charmap print preview anchor help',
                    'searchreplace visualblocks code',
                    'insertdatetime media table paste wordcount'
                ],
                toolbar:
                    // eslint-disable-next-line no-multi-str
                    'undo redo | formatselect | bold italic | \
                    alignleft aligncenter alignright | \
                    bullist numlist outdent indent | help'
            }}
            onChange={this.handleEditorChange}
        />
    );
    }
}

export default CommentEditor;
