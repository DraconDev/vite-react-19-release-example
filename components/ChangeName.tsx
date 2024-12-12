import React, { useActionState, useOptimistic } from "react";
import FormStatus from "./FormStatus";

type ChangeNameProps = {
    name: string;
    setName: (name: string) => void;
};

function ChangeName({ name, setName }: ChangeNameProps) {
    const [optimisticName, setOptimisticName] = useOptimistic(
        name,
        (state, newName: string) => {
            return newName;
        }
    );

    async function updateName(name: FormDataEntryValue | null) {
        console.log(name);
        if (name) {
            setName(name.toString());
        } else {
            return new Error("Name is required");
        }
        return null;
    }

    // optimistic
    const [error, submitAction, isPending] = useActionState(
        async (previousState: Error | null, formData: FormData) => {
            const fieldName = formData.get("name")?.toString() ?? "";
            setOptimisticName(fieldName);
            await new Promise((resolve) => setTimeout(resolve, 2000));
            const error = await updateName(fieldName);
            if (error) {
                return error;
            }
            return null;
        },
        null
    );

    return (
        <form
            action={submitAction}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
            <h3>Regular Name</h3>
            <label htmlFor="name">{name}</label>
            <h3>Optimistic Name</h3>
            <label htmlFor="name">{optimisticName}</label>
            <input type="text" name="name" defaultValue={name} />
            <button type="submit" disabled={isPending}>
                Update
            </button>
            <FormStatus />
            {isPending && <p>Loading...</p>}
            {error && <p>Ohoh</p>}
        </form>
    );
}
export default ChangeName;
