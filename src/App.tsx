// import ChangeName from "../components/ChangeName";
import { useState } from "react";
import ChangeName from "../components/ChangeName";
import "./App.css";
import React from "react";
import CommentBox from "../components/CommentBox";

export type CommentType = {
    id: number;
    text: string;
};

function App() {
    const [name, setName] = useState("");

    async function dummyComments() {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return [
            { id: 1, text: "Comment 1" },
            { id: 2, text: "Comment 2" },
            { id: 3, text: "Comment 3" },
        ];
    }

    return (
        <>
            {/* <UpdateName /> */}
            <ChangeName name={name} setName={setName} />
            <CommentBox commentsPromise={dummyComments()} />
        </>
    );
}

export default App;
