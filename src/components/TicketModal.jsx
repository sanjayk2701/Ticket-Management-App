import {
  X,
  Calendar,
  AlertCircle,
  User,
  Phone,
  Building,
  Loader,
  CheckCircle,
  Hash,
  Tag,
  Activity,
  FileWarning,
  Ticket,
  FileText,
} from "lucide-react";

export default function TicketModal({ ticket, onClose, isLoading = false }) {
  if (!ticket && !isLoading) return null;

  const getRoleLabel = (role) => {
    return role
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="relative bg-white rounded-lg shadow-xl sm:max-w-4xl w-full mx-4 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900">
            Ticket Details
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="px-6 py-4 overflow-y-auto flex-1">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <Loader className="w-8 h-8 text-blue-600 animate-spin mx-auto mb-3" />
                <p className="text-gray-600">Loading ticket details...</p>
              </div>
            </div>
          ) : (
            <div className="space-y-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Issue Start Date */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span className="text-xs font-medium text-gray-500">
                      Issue Start Date
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {ticket.issueStartDate}
                  </p>
                </div>

                {/* Ticket Type */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Ticket className="w-4 h-4 text-red-500" />
                    <span className="text-xs font-medium text-gray-500">
                      Ticket ID
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {ticket?.id || "No ticket id found"}
                  </p>
                </div>

                {/* Priority */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <AlertCircle className="w-4 h-4 text-red-500" />
                    <span className="text-xs font-medium text-gray-500">
                      Priority
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-900 ml-1">
                    {ticket.priority}
                  </p>
                </div>

                {/* Severity */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <AlertCircle className="w-4 h-4 text-red-500" />
                    <span className="text-xs font-medium text-gray-500">
                      Severity
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {ticket.severity}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* externalid */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Hash className="w-4 h-4 text-purple-500" />
                    <span className="text-xs font-medium text-gray-500">
                      ExternalId
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {ticket.eternalid || "-"}
                  </p>
                </div>

                {/* Type */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Tag className="w-4 h-4 text-blue-500" />

                    <span className="text-xs font-medium text-gray-500">
                      Type
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {ticket.type || "-"}
                  </p>
                </div>

                {/* Impact */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Activity className="w-4 h-4 text-orange-500" />
                    <span className="text-xs font-medium text-gray-500">
                      Impact{" "}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-900 ml-1">
                    {ticket.degraded || "-"}
                  </p>
                </div>

                {/* Severity */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <FileWarning className="w-4 h-4 text-green-500" />

                    <span className="text-xs font-medium text-gray-500">
                      Ticket Type
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {ticket.ticketType}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* externalid */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    <span className="text-xs font-medium text-gray-500">
                      Ticket Creation Date
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {ticket.creationDate || "-"}
                  </p>
                </div>

                {/* Type */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                                        <Calendar className="w-4 h-4 text-green-500" />

                    <span className="text-xs font-medium text-gray-500">
                      Expected Resolved Date
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {ticket.expectedResolvedDate || "-"}
                  </p>
                </div>

                {/* Impact */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                                        <Calendar className="w-4 h-4 text-purple-500" />
                    <span className="text-xs font-medium text-gray-500">
                      Last Update
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-900 ml-1">
                    {ticket.lastUpdate || "-"}
                  </p>
                </div>

                {/* Severity */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-xs font-medium text-gray-500">
                      Ticket Status
                    </span>
                  </div>
                  <p className="text-xs font-medium text-gray-900 mt-1 ml-1">
                    {ticket.status || "-"}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Description */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <FileText className="w-4 h-4 text-blue-500" />
                    <span className="text-xs font-medium text-gray-500">
                      Description
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {ticket.description || "-"}
                  </p>
                </div>
              </div>

              {/* Related Contact Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Related Contact Information
                </h3>

                <div className="space-y-4">
                  {ticket.relatedContactInformation.map((contact, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg px-4 py-4 border border-gray-200 grid grid-cols-1 md:grid-cols-4 gap-6"
                    >
                      {/* Name */}
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <span className="text-xs text-gray-500">Name</span>
                        </div>
                        <p className="text-sm font-medium text-gray-900 mt-1">
                          {contact.name || "-"}
                        </p>
                      </div>

                      {/* Number */}
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-gray-400" />
                          <span className="text-xs text-gray-500">Number</span>
                        </div>
                        <p className="text-sm font-medium text-gray-900 mt-1">
                          {contact.number || "-"}
                        </p>
                      </div>

                      {/* Organization */}
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <Building className="w-4 h-4 text-gray-400" />
                          <span className="text-xs text-gray-500">
                            Organization
                          </span>
                        </div>
                        <p className="text-sm font-medium text-gray-900 mt-1">
                          {contact.organization || "-"}
                        </p>
                      </div>

                      {/* Role */}
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 text-gray-400" />
                          <span className="text-xs text-gray-500">Role</span>
                        </div>
                        <p className="text-sm font-medium text-gray-900 mt-1">
                          {getRoleLabel(contact.role)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
      </div>
    </div>
  );
}
