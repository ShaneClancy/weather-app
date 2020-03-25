import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch';

import { Input, TextArea, Button } from '../components/FormComponents';

const userId = 1234;

function Post() {
    const [ title, setTitle ] = useState("");
    const [ body, setBody ] = useState("");

    async function sendPost() {
        if (title && body && userId) {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/posts',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        title: title,
                        body: body,
                        userId: userId
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            const responseBody = await response.json();
            console.log('response', responseBody);
        }
    }

    return (
        <form onSubmit={(event => {
            event.preventDefault();
            sendPost();
        })}>
            <div>
                <Input placeholder="Title" value={title} onChange={(event) => setTitle(event.target.value)} />
            </div>
            <div>
                <TextArea placeholder="Body" value={body} onChange={(event) => setBody(event.target.value)} />
            </div>
            <div>
                <Button>Submit</Button>
            </div>
        </form>
    );
}

export default Post;