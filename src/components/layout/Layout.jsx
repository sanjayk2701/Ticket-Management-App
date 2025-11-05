import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({
  children,
  currentPage,
  totalPages,
  onPageChange,
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="pt-16 lg:pl-64 relative">
        <div className="p-6">{children}</div>

        {/* Global Pagination */}
        {totalPages > 1 && (
          <div
            className="fixed bottom-6 right-6 flex items-center gap-2 bg-white px-3 py-2 
                       rounded-lg z-40 "
            role="navigation"
            aria-label="Pagination"
          >
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded-md text-sm bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
            >
              Previous
            </button>

            <div className="flex gap-1 max-w-[240px] overflow-x-auto px-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`px-3 py-1 text-sm rounded-md whitespace-nowrap ${
                      currentPage === page
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>

            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded-md text-sm bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
