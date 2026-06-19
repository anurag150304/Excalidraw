"use client";
import Button from "@repo/ui/Button";
import { Session } from "next-auth";
import Link from "next/link";
import { signOut } from "next-auth/react";
import axios from "axios";
import { useState } from "react";

export default function Header({ session }: { session: Session | null }) {
  const [logout, isLogout] = useState<boolean>(false);

  async function signoutUser() {
    const token = session?.user.accessToken;
    if (!token) return alert("Access Token not found!");

    isLogout(true);
    try {
      await axios.get("/api/signout", {
        headers: { Authorization: `Bearer ${token}` },
      });
      signOut();
    } catch (err) {
      if (axios.isAxiosError(err)) {
        alert(err.response?.data?.message ?? err.message);
      } else {
        alert((err as Error).message);
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
