import React from 'react';
let marked = require("marked"); // Loads module 
class App extends React.Component{
    constructor(props) {
        let initialState = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)`
        super(props); 
        this.state = {
            input: initialState
        };
    }

    handleChange(event) {
        let value = event.target.value; 
        this.setState({input:value})
    };

    render() {
        return (
            <div class="container">
                <div class="form-group text-center" id="editor-div">
                    <label for="editor">Editor</label>
                    <textarea value={this.state.input} onChange={this.handleChange.bind(this)} class="form-control" rows="12" id="editor" placeholder="## Enter your mark "></textarea>
                </div>
                <div id="preview-div">
                    <div id="title-div">
                        <h1 class="text-center">Markdown Output</h1>
                    </div>
                    <div id="preview" dangerouslySetInnerHTML={{ __html: marked(this.state.input)}}>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;