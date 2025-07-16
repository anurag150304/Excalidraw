"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "@repo/ui/Button";
import { ChangeEvent, useState } from "react";
import { User } from "@repo/types/zodTypeInfers"

export default function Signup() {
    const [data, setData] = useState<Omit<User, "id">>({ firstname: "", lastname: "", email: "", password: "" });
    const router = useRouter();

    const addData = (e: ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const createUser = () => {
        if (!data.firstname || !data.email || !data.password) return;

        axios.post("/api/signup", data)
            .then((res) => {
                setData({ firstname: "", lastname: "", email: "", password: "" });
                alert(res.data.message);
                router.push("/signin");
            }).catch(err => {
                if (err.response?.data?.errors) for (const val of err.response.data.errors) alert(val)
                else if (err.response?.data?.error) alert(err.response.data.error)
                else console.log(err);
            });
    }
    return (
        <main className="h-screen w-screen m-0 p-0 flex justify-center items-center bg-[#000000ed]">
            <div className="w-[30%] bg-[#232329] rounded-lg shadow flex flex-col justify-center items-center gap-5 p-4 text-white font-mono">
                <h1 className="text-center text-3xl font-semibold text-[#c1bfff]">Create Account</h1>
                <div className="w-full flex justify-center items-center gap-4">
                    <div className="w-1/2 flex flex-col justify-center items-start">
                        <label htmlFor="firstname">Fisrtname</label>
                        <input
                            id="firstname"
                            className="w-full bg-gray-100 shadow p-2 rounded text-black"
                            type="text"
                            placeholder="ex - Alex"
                            name="firstname"
                            value={data.firstname}
                            onChange={addData}
                        />
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="lastname">Lastname</label>
                        <input
                            id="lastname"
                            className="w-full bg-gray-100 shadow p-2 rounded text-black"
                            type="text"
                            name="lastname"
                            value={data.lastname}
                            onChange={addData}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start w-full gap-4">
                    <div className="w-full">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            className="w-full bg-gray-100 shadow p-2 rounded text-black"
                            type="text"
                            placeholder="ex - jhon@gmail.com"
                            name="email"
                            value={data.email}
                            onChange={addData}
                        />
                    </div>

                    <div className="w-full">
                        <label htmlFor="pass">Password</label>
                        <input
                            id="pass"
                            className="w-full bg-gray-100 shadow p-2 rounded text-black"
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={addData}
                        />
                    </div>
                </div>
                <div className="w-full flex flex-col justify-center items-center gap-2">
                    <Button
                        backgroundColor="bg-[#8783ff]"
                        textColor="text-black"
                        textSize="text-md"
                        radius="rounded-lg"
                        Vpad="py-2"
                        className="w-full"
                        text="Create"
                        onClick={createUser}
                    />
                    <span>Already have account? <Link href="/signin" className="text-[#7a76ff] underline hover:text-sky-600">Signin</Link></span>
                </div>
            </div>
        </main>
    );
}