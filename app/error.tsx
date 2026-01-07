"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Error = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/documents");
    router.refresh();
  };

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
        <Image 
            src="/error.png"
            height="300"
            width="300"
            alt="Error"
            className="dark:hidden"
        />
        <Image 
            src="/error-dark.png"
            height="300"
            width="300"
            alt="Error"
            className="dark:block hidden"
        />

        <h2 className="text-xl font-medium">
            Something went wrong. Please try again later.
        </h2>
        <Button onClick={handleGoBack}>
            Go back
        </Button>
    </div>
  );
};

export default Error;