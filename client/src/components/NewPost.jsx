import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const NewPost = () => {
    const [value, setValue] = useState("");
    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ font: [] }],
            [{ size: [] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
            ],
            ["link", "image", "video"],
        ],
    };

    return (
        <div className="admin-container">
            <div className="row">
                <div className="blog-title">
                    <label htmlFor="">Title</label>
                    <input type="text" />
                </div>
                <div className="editor">
                    <ReactQuill
                        theme='snow'
                        value={ value }
                        onChange={ setValue }
                        className='editor-input'
                        modules={ modules }
                    />

                </div>
                <div className="preview" dangerouslySetInnerHTML={ { __html: value } } />
            </div>

        </div>
    )
}
export default NewPost