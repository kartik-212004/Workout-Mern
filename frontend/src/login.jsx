import { Link } from "react-router-dom"
import { useState } from "react"
import { useAuthContext } from "./useauthcontext"
import { useLogin } from "./uselogin"
export default function Login() {
    const { dispatch } = useAuthContext()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isLoading } = useLogin()

    async function handleclick(e) {
        e.preventDefault()

        await login(email, password)
    }

    return (
        <>
            <form className="container mx-auto pt-52 w-min" action="">
                <div className="box flex flex-col bg-white p-10  rounded-xl">
                    <h3 className="text-3xl my-5 font-bold">Login</h3>
                    <label className="text-2xl text-zinc-600 font-normal">Email:</label>
                    <input onChange={(e) => setEmail(e.target.value)} className="w-[500px] text-2xl px-4 border border-zinc-300 h-10 my-4 rounded-lg" type="email" />
                    <label className="text-2xl text-zinc-600 font-normal">Password:</label>
                    <input onChange={(e) => setPassword(e.target.value)} className="w-[500px] text-2xl px-4 border border-zinc-300 h-10 my-4 rounded-lg" type="password" />
                    <button disable={isLoading} onClick={handleclick} className="w-20 py-3 bg-green-700 rounded-lg text-white font-semibold">Login</button>
                    <h3 className="mt-8 text-zinc-700 text-[13px]">Don't have an account? <Link to={'/user/signup'} className="text-blue-700 font-semibold">Sign up</Link></h3>
                </div>
            </form>
        </>
    )
}
