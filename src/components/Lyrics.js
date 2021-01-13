import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import { FaPuzzlePiece } from 'react-icons/fa'

import { Editor } from '@tinymce/tinymce-react';
import { tinyApiKey } from '../environment/secrets';


class Lyrics extends Component {
    state = {  }
    render() {
        return (
            <div className="">
                <h1 className="abril-fatface">Lyrics page</h1>
                <Link to="/lyrics/new">
                    Add new
                     {/* <FaPuzzlePiece size={30} /> */}
                </Link>
            </div>
        );
    }
}

class LyricsCreate extends Component {
    state = {}
    render() {
        return (
            <div className="">
                <h1 className="abril-fatface">Write new lyrics</h1>
                <Editor
                    apiKey={tinyApiKey}
                    initialValue="<p>This is the initial content of the editor</p>"
                    inline={true}
                    init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar:
                            'undo redo | formatselect | bold italic backcolor | \
                            alignleft aligncenter alignright alignjustify | \
                            bullist numlist outdent indent | removeformat | help'
                    }}
                    onEditorChange={this.handleEditorChange}
                />
            </div>
        );
    }
}


export { Lyrics, LyricsCreate };
