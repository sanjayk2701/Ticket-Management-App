import { X, Calendar, AlertCircle, User, Mail, Phone, Building, Loader } from 'lucide-react';

export default function TicketModal({ ticket, onClose, isLoading = false }) {
  if (!ticket && !isLoading) return null;

  const getRoleLabel = (role) => {
    return role.split('_').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
          onClick={onClose}
        />

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
          <div className="bg-white px-6 pt-6 pb-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">Ticket Details</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <div className="text-center">
                  <Loader className="w-8 h-8 text-blue-600 animate-spin mx-auto mb-3" />
                  <p className="text-gray-600">Loading ticket details...</p>
                </div>
              </div>
            ) : (
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Description</h3>
                <p className="text-gray-900">
                  {ticket.description || 'No description provided'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-blue-500 mt-1" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Issue Start Date</h3>
                    <p className="text-gray-900 font-medium">{ticket.issueStartDate}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-500 mt-1" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Priority</h3>
                    <p className="text-gray-900 font-medium">{ticket.priority}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 mt-1" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Severity</h3>
                    <p className="text-gray-900 font-medium">{ticket.severity}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Contact Information</h3>
                <div className="space-y-4">
                  {ticket.relatedContactInformation.map((contact, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                          {getRoleLabel(contact.role)}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {contact.name && (
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-gray-400" />
                            <div>
                              <span className="text-xs text-gray-500">Name</span>
                              <p className="text-sm font-medium text-gray-900">{contact.name}</p>
                            </div>
                          </div>
                        )}

                        {contact.emailAddress && (
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-gray-400" />
                            <div>
                              <span className="text-xs text-gray-500">Email</span>
                              <p className="text-sm font-medium text-gray-900">{contact.emailAddress}</p>
                            </div>
                          </div>
                        )}

                        {contact.number && (
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-gray-400" />
                            <div>
                              <span className="text-xs text-gray-500">Phone</span>
                              <p className="text-sm font-medium text-gray-900">{contact.number}</p>
                            </div>
                          </div>
                        )}

                        {contact.organization && (
                          <div className="flex items-center gap-2">
                            <Building className="w-4 h-4 text-gray-400" />
                            <div>
                              <span className="text-xs text-gray-500">Organization</span>
                              <p className="text-sm font-medium text-gray-900">{contact.organization}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            )}
          </div>

          <div className="bg-gray-50 px-6 py-4 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
