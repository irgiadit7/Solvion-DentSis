import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SignUpButton, SignedOut, SignedIn, SignOutButton } from "@clerk/nextjs";

export default function Home() {
  return (
  <div>
    <h1>Home Page</h1>
    <SignedOut>
    <SignUpButton mode="modal"></SignUpButton>
    </SignedOut>

    <SignedIn>
      <SignOutButton>Logout</SignOutButton>
    </SignedIn>

  </div>
  )
}
