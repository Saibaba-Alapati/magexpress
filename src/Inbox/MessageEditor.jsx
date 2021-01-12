import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

class ShortMessageEditor extends React.Component {
handleEditorChange = (content, editor) => {
    console.log('Content was updated:', content);
}

render() {
    return (
    <div className="h-full w-full px-3 py-3">
        <Editor
        initialValue="<p>This is the initial content of the editor</p>"
        init={{
            id: "#MessageBox",
            menubar: false,
            toolbar_location: "bottom",
            plugins: "autoresize link lists emoticons image",
            autoresize_bottom_margin: 0,
            max_height:120,
            min_height:120,
            width:'100%',
            skin: "oxide-dark",
            content_css:"dark",
            branding: false,
            statusbar:false,
            placeholder: "Enter message . . .",
            toolbar:
                "bold italic strikethrough link numlist bullist blockquote emoticons image",
            icons:"small",
            setup: function (editor) {
                editor.ui.registry.addButton('myCustomToolbarButton', {
                text: 'My Custom Button',
                onAction: function () {
                    alert('Button clicked!');
                }
                });
            }
        }}
        onEditorChange={this.handleEditorChange}
    />
    </div>
    );
}
}

export default ShortMessageEditor;





// setup: function (editor) {
//     editor.ui.registry.addButton("mySendButton", {
//         tooltip: "Send Message",
//         text: "Send",
//         onAction: function () {
//             alert(editor.getContent());
//             editor.resetContent();
//         },
//         });
// },