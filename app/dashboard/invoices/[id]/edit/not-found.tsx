import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-gray-400 text-red-500" />
      <h2 className="text-xl font-semibold text-red-400">
        Opp ! 404 Not Found
      </h2>
      <p className="text-red-400">Could not find the requested invoice.</p>
      <Link
        href="/dashboard/invoices"
        className="mt-4 rounded-md bg-red-500 px-4 py-2 text-sm text-white transition-colors hover:bg-red-400"
      >
        Go Back
      </Link>
    </main>
  );
}
