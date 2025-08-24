import Link from "next/link";
import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4 text-white">
      <div className="flex items-center gap-2 font-bold">
        <Menu className="h-5 w-5" />
        Boilerplate
      </div>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}
