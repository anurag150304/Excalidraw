"use client";

import axios, { AxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "@repo/ui/Button";
import Spinner from "@repo/ui/Spinner";
import { useToast } from "@repo/ui/ToastProvider";
import { ChangeEvent, useState } from "react";
import { User } from "@repo/types/zodTypeInfers";
import { LuSparkles } from "react-icons/lu";

export default function Signup() {
  const [data, setData] = useState<Omit<User, "id">>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const toast = useToast();

  const addData = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const createUser = async () => {
    if (!data.firstname || !data.email || !data.password) {
      toast.error("First name, email, and password are required");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("/api/user/auth/signup", data);
      setData({ firstname: "", lastname: "", email: "", password: "" });
      toast.success(res.data.message || "Account created successfully");
      router.push("/signin");
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response?.data?.errors)
          for (const val of err.response.data.errors) toast.error(val);
        else if (err.response?.data?.error)
          toast.error(err.response.data.error);
        else toast.error("Failed to create account");
      } else {
        toast.error((err as Error).message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b0914] px-5 py-10">
      <div className="flex w-full max-w-md flex-col gap-6 rounded-2xl border border-[#ffffff27] bg-[#12101c] p-8 text-white shadow-[0_0_2rem_#4a388533]">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="flex items-center gap-1.5 rounded-full border border-[#3e325b] bg-[#1b1036] px-3 py-1.5">
            <LuSparkles className="h-3.5 w-3.5 text-[#5d5ff2]" />
            <span className="text-xs font-medium text-white">Get started</span>
          </span>
          <h1 className="text-3xl font-semibold text-white">Create Account</h1>
          <p className="text-sm font-light text-white/50">
            Join CanvasDraw and start collaborating today
          </p>
        </div>

        <div className="flex gap-4">
          <div className="flex w-1/2 flex-col gap-1.5">
            <label
              htmlFor="firstname"
              className="text-sm font-medium text-white/70"
            >
              First name
            </label>
            <input
              id="firstname"
              className="w-full rounded-xl border border-[#ffffff20] bg-[#0b0914] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#6b4def]"
              type="text"
              placeholder="Alex"
              name="firstname"
              value={data.firstname}
              onChange={addData}
            />
          </div>
          <div className="flex w-1/2 flex-col gap-1.5">
            <label
              htmlFor="lastname"
              className="text-sm font-medium text-white/70"
            >
              Last name
            </label>
            <input
              id="lastname"
              className="w-full rounded-xl border border-[#ffffff20] bg-[#0b0914] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#6b4def]"
              type="text"
              placeholder="Optional"
              name="lastname"
              value={data.lastname ?? ""}
              onChange={addData}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-white/70"
            >
              Email
            </label>
            <input
              id="email"
              className="rounded-xl border border-[#ffffff20] bg-[#0b0914] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#6b4def]"
              type="email"
              placeholder="you@example.com"
              name="email"
              value={data.email}
              onChange={addData}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="pass" className="text-sm font-medium text-white/70">
              Password
            </label>
            <input
              id="pass"
              className="rounded-xl border border-[#ffffff20] bg-[#0b0914] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#6b4def]"
              type="password"
              name="password"
              value={data.password}
              onChange={addData}
              onKeyDown={(e) => e.key === "Enter" && createUser()}
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <Button
            backgroundColor="bg-[#6b4def]"
            textColor="text-white"
            textSize="text-sm"
            fontWeignt="font-medium"
            radius="rounded-xl"
            Vpad="py-3"
            Hpad="px-6"
            className="w-full transition-all hover:bg-[#6147d6]"
            text={loading ? "Creating account..." : "Create Account"}
            icon={loading ? <Spinner size="sm" className="ml-2" /> : undefined}
            onClick={createUser}
          />
          <span className="text-sm font-light text-white/50">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="font-medium text-[#5d5ff2] transition-colors hover:text-[#8b8dff]"
            >
              Sign in
            </Link>
          </span>
        </div>
      </div>
    </main>
  );
}
