"use server";
import { auth } from "../middleware/auth";
import LoginPage from "./loginpage/page";
import HomePage from "./home/page";
import Signinpage from "./signinpage/page";

export default async function Home() {
  const session = await auth();

  if (!session?.user) return <LoginPage />
  return <HomePage />;
}
