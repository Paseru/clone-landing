import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <main className="max-w-4xl w-full space-y-8 text-center">
        <h1 className="text-5xl font-bold">
          Welcome to Next.js
        </h1>
        
        <p className="text-xl text-muted-foreground">
          Next.js 15 with Tailwind CSS v4 and shadcn/ui
        </p>
        
        <div className="flex gap-4 justify-center">
          <Button>Get Started</Button>
          <Button variant="outline">Learn More</Button>
          <Button variant="ghost">Documentation</Button>
        </div>
        
        <div className="mt-12 p-6 bg-card rounded-lg border">
          <h2 className="text-2xl font-semibold mb-4">Setup Complete ✓</h2>
          <ul className="text-left space-y-2 text-muted-foreground">
            <li>✓ Next.js 15 with App Router</li>
            <li>✓ TypeScript configured</li>
            <li>✓ Tailwind CSS v4 installed</li>
            <li>✓ shadcn/ui components ready</li>
            <li>✓ ESLint configured</li>
          </ul>
        </div>
      </main>
    </div>
  );
}