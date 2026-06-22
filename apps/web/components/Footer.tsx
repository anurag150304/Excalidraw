import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#ffffff15] bg-[#080610]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 py-12 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-4">
          <Link
            href="/"
            className="flex w-fit items-center gap-2 text-[#6b4def]"
          >
            <span className="rounded-lg bg-[#6b4def] px-2.5 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                <path d="m15 5 4 4" />
              </svg>
            </span>
            <span className="text-xl font-semibold">CanvasDraw</span>
          </Link>
          <p className="max-w-xs text-sm font-light leading-relaxed text-white/50">
            Professional canvas drawing tool for creators. Draw, collaborate,
            and share in real time.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-white">Product</h3>
            <Link
              href="/dashboard"
              className="text-sm font-light text-white/50 transition-colors hover:text-[#5d5ff2]"
            >
              Dashboard
            </Link>
            <Link
              href="/drawing"
              className="text-sm font-light text-white/50 transition-colors hover:text-[#5d5ff2]"
            >
              Canvas
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-white">Account</h3>
            <Link
              href="/signin"
              className="text-sm font-light text-white/50 transition-colors hover:text-[#5d5ff2]"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="text-sm font-light text-white/50 transition-colors hover:text-[#5d5ff2]"
            >
              Sign Up
            </Link>
          </div>
          <div className="col-span-2 flex flex-col gap-3 sm:col-span-1">
            <h3 className="text-sm font-semibold text-white">Legal</h3>
            <span className="text-sm font-light text-white/50">
              Privacy Policy
            </span>
            <span className="text-sm font-light text-white/50">
              Terms of Service
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-[#ffffff10] px-5 py-5">
        <p className="text-center text-xs font-light text-white/40">
          &copy; {new Date().getFullYear()} CanvasDraw. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
