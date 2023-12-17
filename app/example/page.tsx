"use client";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function MyComponent() {
    const [value, setValue] = useState("test");

    return (
        <div className="bg-white p-2 rounded text-black">
            <ReactQuill
                theme="snow"
                value={value}
                onChange={setValue}
            />
        </div>
    );
}
