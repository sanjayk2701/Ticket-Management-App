import { useState, useEffect } from "react";
import Layout from "./components/layout/Layout";
import TicketCard from "./components/TicketCard";
import TicketModal from "./components/TicketModal";
import { ticketService } from "./services/ticketService";
import { Loader } from "lucide-react";

function App() {
  const [tickets, setTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalLoading, setModalLoading] = useState(false);
  const [error, setError] = useState(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 9;

  useEffect(() => {
    fetchTickets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Ensure currentPage is valid when tickets length changes
  useEffect(() => {
    const totalPages = Math.max(1, Math.ceil(tickets.length / ITEMS_PER_PAGE));
    if (currentPage > totalPages) setCurrentPage(totalPages);
    // no deps on currentPage so it won't loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tickets.length]);

  const fetchTickets = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await ticketService.getAllTickets();
      setTickets(data);
      setCurrentPage(1); // reset to first page on fresh load
    } catch (err) {
      setError("Failed to load tickets. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCardClick = async (ticket) => {
    setSelectedTicket(ticket);
    setModalLoading(true);
    try {
      const detailedTicket = await ticketService.getTicketById(ticket.id);
      setSelectedTicket(detailedTicket);
    } catch (err) {
      console.error("Failed to fetch ticket details:", err);
    } finally {
      setModalLoading(false);
    }
  };

  // Pagination helpers
  const totalPages = Math.max(1, Math.ceil(tickets.length / ITEMS_PER_PAGE));
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedTickets = tickets.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    // optional: scroll content area to top when page changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Layout>
      <div className="relative">
        <div className="px-1">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Tickets</h1>

          {loading && (
            <div className="flex items-center justify-center min-h-96">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4" />
                <p className="text-gray-600">Loading tickets...</p>
              </div>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-red-800">{error}</p>
              <button
                onClick={fetchTickets}
                className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          )}

          {!loading && !error && tickets.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No tickets found</p>
            </div>
          )}

          {!loading && !error && tickets.length > 0 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedTickets.map((ticket) => (
                  <TicketCard
                    key={ticket.id}
                    ticket={ticket}
                    onClick={() => handleCardClick(ticket)}
                  />
                ))}
              </div>

              {/* Fixed Pagination (bottom-right) */}
              <div
                className="fixed bottom-6 right-6 flex items-center gap-2 bg-white px-3 py-2 rounded-lg z-50"
                role="navigation"
                aria-label="Pagination"
              >
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1 rounded-md text-sm bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
                >
                  Previous
                </button>

                {/* page numbers */}
                <div className="flex gap-1 max-w-[240px] overflow-x-auto px-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
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
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 rounded-md text-sm bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>

        {/* Ticket Modal */}
        <TicketModal
          ticket={selectedTicket}
          onClose={() => {
            setSelectedTicket(null);
            setModalLoading(false);
          }}
          isLoading={modalLoading}
        />
      </div>
    </Layout>
  );
}

export default App;
