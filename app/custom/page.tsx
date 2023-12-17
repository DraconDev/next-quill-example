import { QuillBox } from "@/components/Quill/QuillBox";
import { useState } from "react";

type Props = {};

const Custom = (props: Props) => {
    const [userText, setUserText] = useState("");
    return (
        <QuillBox
            userText={userText}
            setUserText={setUserText}
        />
    );
};

export default Custom;
