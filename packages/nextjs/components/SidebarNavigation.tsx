// components/SidebarNavigation.tsx
import Link from "next/link";

export default function SidebarNavigation() {
  return (
    <nav className="menu">
      <ul className="space-y-2">
        <li>
          <Link href="/project" className="btn btn-ghost justify-start w-full text-left">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/participate" className="btn btn-ghost justify-start w-full text-left">
            Participate
          </Link>
        </li>
        <li>
          <Link href="/projects" className="btn btn-ghost justify-start w-full text-left">
            All Projects
          </Link>
        </li>
        <li>
          <Link href="/about" className="btn btn-ghost justify-start w-full text-left">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
