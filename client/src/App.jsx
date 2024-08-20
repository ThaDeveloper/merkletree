import { useState } from "react";
import axios from "axios";

import "./App.css";

const serverUrl = "http://localhost:1225";

const App = () => {
    const [valid, setValid] = useState(false);
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");

    const verifyGift = async () => {
        const { data: gift } = await axios.post(`${serverUrl}/gift`, {
            name
        });

        if (gift) {
            setValid(true);
            setMessage("You got a toy robot!");
        } else {
            setValid(false);
            setMessage("Sorry, You're not on the list!");
        }

        setName("")
    };

    return (
        <div className="justify-center	items-center mt-96">
            <div className="flex flex-col">
                <h1 className="text-5xl font-bold mb-4">Gift List</h1>
                <div className="min-w-96 flex-row h-14">
                    <input
                        type="text"
                        className="p-3 border-solid border-gray-300 border-2 w-11/12 h-full"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <button
                        className="rounded-r-md bg-blue-500 h-full text-slate-700 p-2 hover:bg-blue-600 font-bold"
                        onClick={verifyGift}
                    >
                        Check Gift
                    </button>
                </div>
                <div className={`${valid ? "text-green-600" : "text-red-600"} mt-4 self-start`}>{message}</div>
            </div>
        </div>
    );
};

export default App;
