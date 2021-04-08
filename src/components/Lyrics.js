import './styles/Lyrics.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Editor } from '@tinymce/tinymce-react';
import { tinyApiKey } from '../environment/secrets';
import $ from 'jquery';


class Lyrics extends Component {
    state = {  }
    render() {
        return (
            <div className="">
                <h1 className="abril-fatface">Lyrics page</h1>
                <Link to="/lyrics/new">Add new</Link>
            </div>
        );
    }
}

class LyricsCreate extends Component {
    constructor(props) {
        super(props);
        this.state = { };

        this.videoProps = {
            ratio: '16/9',
            width: 480,
        };

        document.documentElement.style.setProperty('--size-nb-side-width', this.videoProps.width);
    }

    computeVideoHeight() {
        const ratio = this.videoProps.ratio.split('/');
        return this.videoProps.width * ratio[1] / ratio[0];
    }

    getVideoWidth() {
        console.log($('nb-side-panel').clientWidth);
        return $('nb-side-panel').clientWidth;
    }

    getVideoHeight() {
        console.log($('nb-side-panel').clientHeight);
        return $('nb-side-panel').clientHeight;
    }

    render() {
        return (
            <div className="notebook row">
                <div className="nb-page col-8 xy-center full-min-height">
                    <div className="nb-format-lines">
                        <input className="title-input no-focus no-border abril-fatface" placeholder="Add title"></input>
                        <Editor
                            className="no-focus no-border"
                            apiKey={tinyApiKey}
                            inline={true}
                            init={{
                                height: 500,
                                menubar: false,
                                placeholder: 'Begin writing here',
                                plugins: [
                                    'advlist autolink lists link image charmap print preview anchor',
                                    'searchreplace visualblocks code fullscreen',
                                    'insertdatetime media table paste code help wordcount'
                                ],
                                toolbar:
                                    // Stretch toolbar as much as possible and leave help button
                                    'undo redo | formatselect | backcolor | ' +
                                    'alignleft aligncenter alignright alignjustify | ' +
                                    'bullist numlist | help'
                            }}
                            onEditorChange={this.handleEditorChange}
                        />
                    </div>
                </div>
                <div className="nb-side-panel col-4">
                    <div className="video-container">
                        <iframe title="soundtrack" className="video-beat-frame" src="https://www.youtube-nocookie.com/embed/videoseries?list=PLAkpLQE6lk-hLnBjXLa3arXiM7ebcAOTe"
                            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className="nb-side-meta xy-center">
                        <input className="no-focus no-border" placeholder="Add sounds here"></input>
                    </div>
                </div>
            </div>
        );
    }
}


export { Lyrics, LyricsCreate };
