import React, { useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'; // Import Prism CSS for styling
import './CodeEditor.css'; // Custom CSS for the component

const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div className="code-editor">
      <textarea
        className="code-input"
        value={code}
        onChange={handleChange}
        spellCheck="false"
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect="off"
      />
      <pre className="code-output">
        <code
          className="language-javascript"
          dangerouslySetInnerHTML={{ __html: Prism.highlight(code, Prism.languages.javascript, 'javascript') }}
        />
      </pre>
    </div>
  );
};

export default CodeEditor;
