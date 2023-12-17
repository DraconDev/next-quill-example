"use client";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function TextBox() {
    const [value, setValue] = useState("");

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
