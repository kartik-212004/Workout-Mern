import { Link } from 'react-router-dom'
import { useLogout } from './useLogout'
import { useAuthContext } from './useauthcontext'
export default function Navbar() {
    const { logout } = useLogout()
    const { user } = useAuthContext()
    function handleclick() {
        logout()
    }
    return (
        <>
            <div className="navbar h-[5vh] flex flex-row py-2 justify-around items-center bg-slate-900">
                <h1 className="text-red-500 text-[26px] font-semibold">The Workout Diary</h1>
                <div className="links text-2xl space-x-14 flex flex-row text-white font-medium">


                    {!user && (
                        <>
                            <div className="box space-x-14">
                                <Link to="/user/login">Login</Link>
                                <Link to="/user/signup">Sign Up</Link>
                            </div>
                        </>
                    )}

                    {user &&
                        (
                            <> <div className="box space-x-14">
                                <Link to="/">Home</Link>
                                <Link to="/form">Add Workouts</Link>
                            </div>
                                <div>
                                    <span className='text-green-400'>{user.email}</span>
                                    <button className='w-28 h-10 box-border mx-4 hover:bg-red-600 hover:text-white rounded-lg text-red-700 bg-white' onClick={handleclick}>Logout</button>
                                </div>
                            </>
                        )
                    }

                </div>
            </div>
        </>
    )
} 