"use client";
import React, { useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { IconBrandGoogle } from "@tabler/icons-react";
import { signIn, useSession } from "next-auth/react";
import { DotBackground } from "@/components/ui/dotBackground";
import { useRouter } from "next/navigation";

export default function Page() {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.data?.user) {
      router.push("/dashboard");
    }
  }, [session, router]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <DotBackground>
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="shadow-2xl mx-auto w-full max-w-md rounded-2xl bg-zinc-900 border border-zinc-800 p-8">
          <h2 className="text-2xl font-bold text-white">Welcome to pizza.ai</h2>
          <p className="mt-2 max-w-sm text-sm text-zinc-400">
            Login to order your favourite, delicious pizza at the best price
            now.
          </p>

          <form className="my-8" onSubmit={handleSubmit}>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email" className="text-zinc-300">
                Email Address
              </Label>
              <Input
                id="email"
                placeholder="projectmayhem@fc.com"
                type="email"
                className="bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500 focus:border-cyan-500 focus:ring-cyan-500"
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="password" className="text-zinc-300">
                Password
              </Label>
              <Input
                id="password"
                placeholder="••••••••"
                type="password"
                className="bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500 focus:border-cyan-500 focus:ring-cyan-500"
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-8">
              <Label htmlFor="twitterpassword" className="text-zinc-300">
                Your twitter password
              </Label>
              <Input
                id="twitterpassword"
                placeholder="••••••••"
                type="password"
                className="bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500 focus:border-cyan-500 focus:ring-cyan-500"
              />
            </LabelInputContainer>
            <button
              className="group/btn relative block h-12 w-full rounded-md bg-gradient-to-br from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 font-medium text-white shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
              type="submit"
            >
              Sign up &rarr;
              <BottomGradient />
            </button>

            <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

            <div className="flex flex-col space-y-4">
              <button
                className="group/btn relative flex h-12 w-full items-center justify-start space-x-2 rounded-md bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600 px-4 font-medium text-white transition-all duration-200"
                type="button"
                onClick={async () => {
                  await signIn("google");
                }}
              >
                <IconBrandGoogle className="h-5 w-5 text-zinc-300" />
                <span className="text-sm text-zinc-300">
                  Continue with Google
                </span>
                <BottomGradient />
              </button>
            </div>
          </form>
        </div>
      </div>
    </DotBackground>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
