import Workouts from "./workouts";
import { useEffect, useState } from "react";

export default function Home() {
    const [workouts, setWorkouts] = useState(null);

    useEffect(() => {
        const Fetching = async () => {
            const data = await fetch('http://localhost:5000');
            const response = await data.json();
            setWorkouts(response)


        };
        Fetching();
    },);

    return (
        <div className="workoutsmain p-10 pl-96 ">
            {workouts && workouts.map((work) => (
                <Workouts key={work._id} workout={work} />
            ))}
        </div>
    );
}
