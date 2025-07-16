"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "@repo/ui/Button";
import { ChangeEvent, useState } from "react";
import { User } from "@repo/types/zodTypeInfers"
import { signIn } from "next-auth/react";

export default function Signin() {
    const [data, setData] = useState<Omit<User, "id" | "firstname" | "lastname">>({ email: "", password: "" });
    const router = useRouter();

    const addData = (e: ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const signinUser = async () => {
        if (!data.email || !data.password) return;
        const response = await signIn("credentials", {
            redirect: false,
            email: data.email,
            password: data.password
        });

        if (response) {
            if (response.error) alert(response.error);
            else {
                alert("Logged In successully");
                router.push("/");
            }
        }

    }
    return (
        <main className="h-screen w-screen m-0 p-0 flex justify-center items-center bg-[#000000ed]">
            <div className="w-[30%] bg-[#232329] rounded-lg shadow flex flex-col justify-center items-center gap-5 p-4 text-white font-mono">
                <h1 className="text-center text-3xl font-semibold text-[#c1bfff]">Welcome Back!</h1>
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
                        text="Signin"
                        onClick={signinUser}
                    />
                    <span>Don&apos;t have account? <Link href="/signup" className="text-[#7a76ff] underline hover:text-sky-600">Create</Link></span>
                </div>
            </div>
        </main>
    );
}