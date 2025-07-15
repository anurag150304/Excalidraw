import { getServerSession } from "next-auth"
import { authOptions } from "../lib/auth.config"

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (session) console.log(session.user.accessToken)
  return (
    <h1>Hello World</h1>
  )
}