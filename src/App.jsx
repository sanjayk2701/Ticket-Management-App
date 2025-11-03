import { useState, useEffect } from 'react';
import Layout from './components/layout/Layout';
import TicketCard from './components/TicketCard';
import TicketModal from './components/TicketModal';
import { ticketService } from './services/ticketService';

function App() {
  const [tickets, setTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalLoading, setModalLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await ticketService.getAllTickets();
      setTickets(data);
    } catch (err) {
      setError('Failed to load tickets. Please try again.');
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
      console.error('Failed to fetch ticket details:', err);
    } finally {
      setModalLoading(false);
    }
  };

  return (
    <Layout>
      <div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tickets.map((ticket) => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                onClick={() => handleCardClick(ticket)}
              />
            ))}
          </div>
        )}
      </div>

      <TicketModal
        ticket={selectedTicket}
        onClose={() => {
          setSelectedTicket(null);
          setModalLoading(false);
        }}
        isLoading={modalLoading}
      />
    </Layout>
  );
}

export default App;
