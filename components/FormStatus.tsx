import { useFormStatus } from "react-dom";

const FormStatus = () => {
    const { pending } = useFormStatus();

    return (
        <button type="submit" disabled={pending}>
            {pending ? "Loading..." : "Submit"}
        </button>
    );
};

export default FormStatus;
