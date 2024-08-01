import deleteimg from './assets/delete.png'
export default function Workouts({ workout }) {
    async function handle(e) {
        console.log(e)
        console.log(workout._id)
        const resopnse = await fetch('http://localhost:5000/' + workout._id,
            { method: 'DELETE' })
        const json = await resopnse.json()
        if (resopnse.ok) {

        }
    }
    return (
        <div key={workout._id} id={workout._id} className="work_details w-[700px] my-10 relative bg-white p-6 hover:shadow-2xl rounded-lg flex flex-row">
            <div className="box1">
                <h4 className="text-[25px] font-semibold  text-red-500">{workout.title.toUpperCase()}</h4>
                <p className="text-2xl"><strong>Load (kg) : </strong>{workout.load}</p>
                <p className="text-2xl"><strong>Reps : </strong>{workout.reps}</p>
                <p className="text-2xl"><strong>Created : </strong>{workout.createdAt}</p>
            </div>
            <div className="box2 flex justify-center items-center">
                <img onClick={(e) => {
                    handle(e)
                }} className=' invert right-5 absolute size-8' src={deleteimg} alt="" />
            </div>
        </div>
    )
}
