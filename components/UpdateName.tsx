import { default as React, useState, useTransition } from "react";
import { DummyPromise } from "../helper/helper";

function UpdateName() {
    const [name, setName] = useState("");
    const [error, setError] = useState(null);
    const [isPending, startTransition] = useTransition();

    const handleSubmit = () => {
        startTransition(async () => {
            setName(await DummyPromise());
            if (error) {
                setError(error);
                return;
            }
            // redirect("/path");
        });
    };

    return (
        <div>
            <input
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            {isPending && <p>Loading...</p>}
            <button onClick={handleSubmit} disabled={isPending}>
                Update
            </button>
            {error && <p>{error}</p>}
        </div>
    );
}

export default UpdateName;
