import { Calendar, AlertCircle } from 'lucide-react';

export default function TicketCard({ ticket, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 cursor-pointer hover:shadow-md transition-shadow"
    >
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-1">Description</h3>
          <p className="text-gray-900">
            {ticket.description || 'No description provided'}
          </p>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <Calendar className="w-4 h-4" />
          <div>
            <span className="text-xs text-gray-500">Issue Start Date</span>
            <p className="text-sm font-medium">{ticket.issueStartDate}</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-orange-500" />
            <div>
              <span className="text-xs text-gray-500">Priority</span>
              <p className="text-sm font-medium text-gray-900">{ticket.priority}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-500" />
            <div>
              <span className="text-xs text-gray-500">Severity</span>
              <p className="text-sm font-medium text-gray-900">{ticket.severity}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
