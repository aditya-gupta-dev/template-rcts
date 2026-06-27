import { ModeToggle } from "@/components/custom/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full gap-4">
      <ModeToggle />
      <Button>Click Me</Button>
    </div>
  );
}
