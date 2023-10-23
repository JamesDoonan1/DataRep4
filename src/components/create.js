import { useState } from "react";

function Create() {

    //Returns a stateful value, and a function to update it.
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [cover, setCover] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Log the form input values
        console.log("Title: " + title +
            "Author: " + author +
            "Cover: " + cover);
    }
    return (
        <div>
            <h3>Hello from Create component</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>

                <div>
                    <label>Add Book Author: </label>
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </div>

                <div>
                    <label>Add front page url: </label>
                    <input type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>

                <div>
                    <input type="submit" value="Add Book"></input>
                </div>
            </form>
        </div>
    )
}
export default Create;
