"use client";
import Button from "@repo/ui/Button";
import Spinner from "@repo/ui/Spinner";
import { useToast } from "@repo/ui/ToastProvider";
import { Session } from "next-auth";
import Link from "next/link";
import { signOut } from "next-auth/react";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header({ session }: { session: Session | null }) {
  const [logout, isLogout] = useState<boolean>(false);
  const router = useRouter();
  const toast = useToast();

  async function signoutUser() {
    const token = session?.user.accessToken;
    if (!token) return toast.error("Access token not found");

    isLogout(true);
    try {
      await axios.get("/api/user/auth/signout", {
        headers: { Authorization: `Bearer ${token}` },
      });
      signOut({ redirect: false });
      toast.success("Signed out successfully");
      router.push("/");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data?.message ?? err.message);
      } else {
        toast.error((err as Error).message);
      }
    }
    isLogout(false);
  }
  return (
    <header
      className="sticky top-0 z-50 flex flex-row justify-between items-center gap-4 p-4 border-b border-b-[#ffffff28]"
      style={{ backdropFilter: "blur(10px)" }}
    >
      <Link
        className="flex flex-row justify-center items-center gap-1"
        href="/"
      >
        <span className="bg-[#6b4def] rounded-lg px-2.5 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-pencil h-6 w-6 text-primary-foreground text-white"
          >
            <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
            <path d="m15 5 4 4" />
          </svg>
        </span>
        <h1 className="text-[#6b4def] font-semibold text-xl">CanvasDraw</h1>
      </Link>
      {session?.user ? (
        <Button
          text={logout ? "Signing Out..." : "Sign Out"}
          icon={logout ? <Spinner size="sm" className="ml-2" /> : undefined}
          textSize="text-sm"
          textColor="text-[#6b4def]"
          fontWeignt="font-semibold"
          borderLine="border-2"
          borderColor="border-[#6b4def]"
          Vpad="py-2"
          Hpad="px-3"
          radius="rounded-lg"
          className="hover:bg-[#6b4def] hover:text-white transition-all"
          onClick={signoutUser}
        />
      ) : (
        <div className="flex flex-row justify-center items-center gap-3">
          <Link href="/signin">
            <Button
              text="Sign In"
              textSize="text-sm"
              textColor="text-[#6b4def]"
              fontWeignt="font-semibold"
              borderLine="border-2"
              borderColor="border-[#6b4def]"
              Vpad="py-2"
              Hpad="px-3"
              radius="rounded-lg"
              className="hover:bg-[#6b4def] hover:text-white transition-all"
            />
          </Link>

          <Link href="/signup">
            <Button
              text="Sign Up"
              textSize="text-sm"
              textColor="text-[#fff]"
              fontWeignt="font-semibold"
              backgroundColor="bg-[#6b4def]"
              borderLine="border-2"
              borderColor="border-[#6b4def]"
              Vpad="py-2"
              Hpad="px-3"
              radius="rounded-lg"
              className="hover:bg-[#6147d6] hover:text-white transition-all"
            />
          </Link>
        </div>
      )}
    </header>
  );
}
