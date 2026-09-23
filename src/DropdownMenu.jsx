import { useState } from "react"

export default function DropdownMenu({ buttonName = "Opciones", options = [] }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="group relative inline-block">
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="flex cursor-pointer items-center gap-2 text-gray-700 uppercase transition-colors hover:text-blue-400"
      >
        <span>{buttonName}</span>
      </button>

      <div className={`absolute left-0 top-full z-10 mt-1 w-48 max-w-[calc(100vw-2rem)] ${isOpen ? "pointer-events-auto visible opacity-100" : "pointer-events-none invisible opacity-0 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100"}`}>
        <div className="bg-blue-900 w-full h-1 mt-2"></div>
        <div className={`origin-top bg-[#799DD5] uppercase shadow-lg transition-transform duration-300 ease-out ${isOpen ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"}`}>
          {options.map(({ label, href }) => (
            <a key={href} href={href} className="block wrap-break-word px-4 py-2 border-b border-b-blue-800 text-gray-700 hover:text-white">
              {label}
            </a>
          ))}
        </div>
      </div>

    </div>
  );
}