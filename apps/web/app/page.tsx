import { getServerSession } from "next-auth"
import { authOptions } from "../config/auth.config"
import Link from "next/link";

export default async function Page() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1>Welcome to Excalidraw</h1>
      <Link href={session?.user ? "/drawing" : "/signin"} className="bg-[#8783ff] text-white rounded-md py-2 px-4">
        {session?.user ? "Draw your Ideas" : "Sign In"}
      </Link>
    </main>
  )
}