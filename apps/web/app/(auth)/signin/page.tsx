"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "@repo/ui/Button";
import Spinner from "@repo/ui/Spinner";
import { useToast } from "@repo/ui/ToastProvider";
import { ChangeEvent, useState } from "react";
import { User } from "@repo/types/zodTypeInfers";
import { signIn } from "next-auth/react";
import { LuSparkles } from "react-icons/lu";

export default function Signin() {
  const [data, setData] = useState<Omit<User, "id" | "firstname" | "lastname">>(
    { email: "", password: "" },
  );
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const toast = useToast();

  const addData = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const signinUser = async () => {
    if (!data.email || !data.password) {
      toast.error("Email and password are required");
      return;
    }

    setLoading(true);
    try {
      const response = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (response?.error) {
        toast.error(response.error);
      } else {
        toast.success("Logged in successfully");
        router.push("/dashboard");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b0914] px-5">
      <div className="flex w-full max-w-md flex-col gap-6 rounded-2xl border border-[#ffffff27] bg-[#12101c] p-8 text-white shadow-[0_0_2rem_#4a388533]">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="flex items-center gap-1.5 rounded-full border border-[#3e325b] bg-[#1b1036] px-3 py-1.5">
            <LuSparkles className="h-3.5 w-3.5 text-[#5d5ff2]" />
            <span className="text-xs font-medium text-white">Welcome back</span>
          </span>
          <h1 className="text-3xl font-semibold text-white">Sign In</h1>
          <p className="text-sm font-light text-white/50">
            Access your drawing rooms and continue creating
          </p>
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
              onKeyDown={(e) => e.key === "Enter" && signinUser()}
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
            text={loading ? "Signing in..." : "Sign In"}
            icon={loading ? <Spinner size="sm" className="ml-2" /> : undefined}
            onClick={signinUser}
          />
          <span className="text-sm font-light text-white/50">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-[#5d5ff2] transition-colors hover:text-[#8b8dff]"
            >
              Create one
            </Link>
          </span>
        </div>
      </div>
    </main>
  );
}
