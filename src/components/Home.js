import React, { Component } from 'react';
import { data } from './data';

import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
// Use this library instead of '@editorjs/paragraph' because it has alignment
import Paragraph from 'editorjs-paragraph-with-alignment';
import List from '@editorjs/list';
import Embed from '@editorjs/embed';
import Image from '@editorjs/image';
import SimpleImage from '@editorjs/simple-image';
import Table from '@editorjs/table';
// import AttachesTool from '@editorjs/attaches';
import Undo from 'editorjs-undo';


const editor = new EditorJS({ 
    holder: 'write-posts',
    placeholder: 'Write here',
    // readOnly: true,
    tools: {
        header: Header,
        paragraph: Paragraph,
        list: List,
        embed: Embed,
        // image: Image,
        image: SimpleImage,
        table: Table,
        // attaches: AttachesTool,
    },
    data: data,

    onReady: () => {
        new Undo({ editor });
    },
});


class Home extends Component {
    state = {  }

    render() {
        return (
            <div className="content text-center">
                <h1 className="abril-fatface">Home page</h1>
                <div id="write-posts"/>
            </div>
        );
    }
}

export default Home;
