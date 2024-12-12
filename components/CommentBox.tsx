import React from "react";
import { Suspense, use } from "react";

import { CommentType } from "../src/App";

function Comments({
    commentsPromise,
}: {
    commentsPromise: Promise<CommentType[]>;
}) {
    // `use` will suspend until the promise resolves.
    const comments = use(commentsPromise);
    return comments.map((comment) => <p key={comment.id}>{comment.text}</p>);
}

function CommentBox({
    commentsPromise,
}: {
    commentsPromise: Promise<CommentType[]>;
}) {
    // When `use` suspends in Comments,
    // this Suspense boundary will be shown.
    return (
        <Suspense fallback={<div>Loading comments...</div>}>
            <Comments commentsPromise={commentsPromise} />
        </Suspense>
    );
}

export default CommentBox;
