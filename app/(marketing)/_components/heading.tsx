"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";
import { SignInButton, useAuth } from "@clerk/clerk-react";

export default function Heading() {
  const { isSignedIn, isLoaded } = useAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents, & Plans. Unified. Welcome to{" "}
        <span className="underline">Jotion</span>
      </h1>

      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Jotion is the connected workspace where <br />
        better, faster work happens
      </h3>

      {!isLoaded && (
        <div className="w-full flex justify-center items-center">
          <Spinner size="lg" />
        </div>
      )}

      {isLoaded && isSignedIn && (
        <Button asChild>
          <Link href="/documents">
            Enter Jotion
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      )}

      {isLoaded && !isSignedIn && (
        <SignInButton mode="modal">
          <Button>
            Get Jotion Free
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
}
