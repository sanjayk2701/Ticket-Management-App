import {
  Calendar,
  AlertCircle,
  CheckCircle,
  Ticket,
  FileWarning,
} from "lucide-react";

export default function TicketCard({ ticket, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 cursor-pointer hover:shadow-md transition-shadow"
    >
      <div className="space-y-4">
        {/* Ticket ID */}
        {/* <div>
          <h3 className="text-xs font-medium text-gray-500 mb-1">Ticket ID</h3>
          <p className="text-lg font-medium text-gray-900">
  <p className="text-xs font-medium text-gray-900 mt-1 ml-1">
              {ticket.ticketId}
            </p>
        </div> */}

        {/* <div>
          <div className="flex items-center gap-2 mb-1">
            <Ticket className="w-4 h-4 text-red-500" />

            <span className="text-xs font-medium text-gray-500">Ticket ID</span>
          </div>
          <p className="text-lg font-medium text-gray-900">{ticket.id}</p>
        </div> */}

        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <Ticket className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-medium text-gray-500">
              Ticket ID
            </span>
          </div>
          <p className="text-sm font-medium text-gray-900 mt-1 ml-1 break-all">
            {ticket.id}
          </p>
        </div>


        {/* Row: Issue Start Date, Severity */}
        <div className="flex items-center justify-between gap-2 text-gray-600">
          {/* Issue Start Date */}
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-blue-500" />
              <span className="text-[10px] font-medium text-gray-500 whitespace-nowrap">
                Issue Start Date
              </span>
            </div>
            <p className="text-[11px] font-medium text-gray-900 mt-0.5 ml-1 truncate">
              {ticket.issueStartDate}
            </p>
          </div>

          {/* Severity */}
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 text-red-500" />
              <span className="text-[10px] font-medium text-gray-500 whitespace-nowrap">
                Severity
              </span>
            </div>
            <p className="text-[11px] font-medium text-gray-900 mt-0.5 ml-1 truncate">
              {ticket.severity}
            </p>
          </div>

          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1">
              <FileWarning className="w-3.5 h-3.5 text-green-500" />
              <span className="text-[10px] font-medium text-gray-500 whitespace-nowrap">
                Ticket Type
              </span>
            </div>
            <p className="text-[11px] font-medium text-gray-900 mt-0.5 ml-1 truncate">
              {ticket.ticketType || "-"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
