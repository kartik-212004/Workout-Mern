import { useState } from "react";

export default function Workoutform() {
    const [title, setTitle] = useState('');
    const [reps, setReps] = useState('');
    const [load, setLoad] = useState('');
    const [error, setError] = useState(null);

    async function handleSubmit(e) {

        e.preventDefault();
        const workout = { title, reps, load };
        document.getElementById('p').style.display = "block";
        const response = await fetch('http://localhost:5000/', {
            method: 'post',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        if (!data.ok) {
            setError(data.error);
        }
        if (data.ok) {
            setTitle('');
            setLoad('');
            setReps('');
            setError(null);
        }
    }
    return (
        <form className="pl-96 box-border pt-10 flex flex-col bg-gray-200">
            <h3 className="text-[2.4rem] font-semibold my-8">Add a New Workout</h3>

            <label className="text-3xl w-[400px] text-blue-950 my-3">Exercise Name:</label>
            <input className="w-[400px] border border-white outline-none h-12 rounded-md px-5 text-2xl" type="text" onChange={(e) => setTitle(e.target.value)} value={title} />

            <label className="text-3xl w-[400px] text-blue-950 my-3">Load (Kg):</label>
            <input className="w-[400px] border border-white outline-none h-12 rounded-md px-5 text-2xl" type="number" onChange={(e) => setLoad(e.target.value)} value={load} />

            <label className="text-3xl w-[400px] text-blue-950 my-3">Reps:</label>
            <input className="w-[400px] border border-white outline-none h-12 rounded-md px-5 text-2xl" type="number" onChange={(e) => setReps(e.target.value)} value={reps} />

            <button className="w-40 h-14 rounded-lg text-white hover:bg-green-600 bg-green-500 mt-10 text-2xl" onClick={handleSubmit} type="submit">Add Workout</button>
            <p id="p" className="text-2xl my-6 border border-green-500 w-min hidden px-4 py-2 rounded-md text-green-700 font-normal">Submitted</p>

            {error && <div className="error text-red-500 border border-red-500 w-[400px] my-5 text-2xl p-3 rounded-md bg-red-100">{error}</div>}
        </form>
    );
}
