
import { useState } from "react";
import { Editor } from 'primereact/editor';

const EditorDocs = () => {
    const [text, setText] = useState('');
  return (
    <div className="card">

        <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{height: '450px'}} />
      
    </div>
  )
}

export default EditorDocs
