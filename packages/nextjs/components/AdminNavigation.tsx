// components/SidebarNavigation.tsx
import Link from "next/link";

export default function AdminNavigation() {
  return (
    <nav className="menu">
      <ul className="space-y-2">
        
        <li>
          <Link href="/research" className="btn btn-ghost justify-start w-full text-left">
            Research
          </Link>
        </li>
       
        <li>
          <Link href="/protocol" className="btn btn-ghost justify-start w-full text-left">
            Protocol
          </Link>
        </li>
        
        <li>
          <Link href="/consent" className="btn btn-ghost justify-start w-full text-left">
            Enrollments
          </Link>
        </li>
        <li>
          <Link href="/review" className="btn btn-ghost justify-start w-full text-left">
            Reviews
          </Link>
        </li>

        <li>
          <Link href="/survey" className="btn btn-ghost justify-start w-full text-left">
            Surveys
          </Link>
        </li>
        <li>
          <Link href="/" className="btn btn-ghost justify-start w-full text-left">
            Marketplace
          </Link>
        </li>
      </ul>
    </nav>
  );
}
