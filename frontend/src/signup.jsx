import { useState } from "react"
import { useSignup } from "./usesignup"

export default function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signup, error, isLoading } = useSignup()

    const handleClick = async (e) => {
        e.preventDefault()
        await signup(email, password)
    }

    return (
        <>
            <form className="container mx-auto pt-52 w-min" action="">
                <div className="box flex flex-col bg-white p-10 rounded-xl">
                    <h3 className="text-3xl my-5 font-bold">Sign Up</h3>
                    <label className="text-2xl text-zinc-600 font-normal">Email:</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-[500px] border px-4 text-2xl border-zinc-300 h-12 my-4 rounded-lg"
                        type="email"
                    />
                    <label className="text-2xl text-zinc-600 font-normal">Password:</label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-[500px] border px-4 text-2xl border-zinc-300 h-12 my-4 rounded-lg"
                        type="password"
                    />
                    <div className="box flex flex-row">
                        <button
                            onClick={handleClick}
                            className="w-20 py-3 bg-green-700 rounded-lg text-white font-semibold"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Signing Up...' : 'Sign Up'}
                        </button>
                        {error && <div className="error text-red-400 flex items-center mx-4">{error}</div>}
                    </div>
                </div>
            </form>
        </>
    )
}
