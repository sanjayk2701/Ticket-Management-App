const API_BASE_URL = 'https://ven05366.service-now.com/api';
const API_USER = import.meta.env.VITE_API_USER;
const API_PASS = import.meta.env.VITE_API_PASS.replace(/^"|"$/g, '');

function getBasicAuthHeader(user: any, pass: any) {
  const token = btoa(`${user}:${pass}`);
  return `Basic ${token}`;
}

// Sample fallback data
const SAMPLE_TICKETS = [
  {
    id: "0598b22b877313003c1c8467a7cb0b71",
    description: "",
    externalId: "",
    issueStartDate: "2018-08-14 18:45:38",
    priority: "5",
    severity: "5 - Planning",
    ticketType: "Incident",
    relatedEntity: [],
    relatedContactInformation: [
      { emailAddress: "", name: "Advanced Super Routing", number: "(408) 839-2810", organization: "", role: "customer" },
      { emailAddress: "", name: "Andrew Chen", number: "(408) 839-2810", organization: "Advanced Super Routing", role: "customer_contact" },
      { emailAddress: "", name: "", number: "", organization: "", role: "assignment_group" },
      { emailAddress: "", name: "", number: "", organization: "", role: "assigned_to" }
    ]
  },
  {
    id: "0c5f3cece1b12010f877971dea0b1449",
    description: "",
    externalId: "",
    issueStartDate: "2021-01-15 21:04:34",
    priority: "5",
    severity: "5 - Planning",
    ticketType: "Incident",
    relatedEntity: [],
    relatedContactInformation: [
      { emailAddress: "", name: "", number: "", organization: "", role: "customer" },
      { emailAddress: "", name: "survey user", number: "", organization: "", role: "customer_contact" },
      { emailAddress: "", name: "", number: "", organization: "", role: "assignment_group" },
      { emailAddress: "", name: "", number: "", organization: "", role: "assigned_to" }
    ]
  },
  {
    id: "1c741bd70b2322007518478d83673af3",
    description: "I am unable to connect to the email server. It appears to be down.",
    externalId: "",
    issueStartDate: "2016-12-12 15:19:57",
    priority: "3",
    severity: "3 - Moderate",
    ticketType: "Incident",
    relatedEntity: [],
    relatedContactInformation: [
      { emailAddress: "", name: "ACME North America", number: "", organization: "", role: "customer" },
      { emailAddress: "", name: "Joe Employee", number: "", organization: "ACME North America", role: "customer_contact" },
      { emailAddress: "", name: "Network", number: "", organization: "", role: "assignment_group" },
      { emailAddress: "", name: "Network", number: "", organization: "", role: "assigned_to" }
    ]
  },
  {
    id: "1c832706732023002728660c4cf6a7b9",
    description: "My computer is not detecting the headphone device. It could be an issue with the USB port.",
    externalId: "",
    issueStartDate: "2018-09-16 12:50:05",
    priority: "3",
    severity: "3 - Moderate",
    ticketType: "Incident",
    relatedEntity: [],
    relatedContactInformation: [
      { emailAddress: "", name: "", number: "", organization: "", role: "customer" },
      { emailAddress: "", name: "David Miller", number: "", organization: "", role: "customer_contact" },
      { emailAddress: "", name: "", number: "", organization: "", role: "assignment_group" },
      { emailAddress: "", name: "", number: "", organization: "", role: "assigned_to" }
    ]
  }
];

export const ticketService = {
  async getAllTickets() {
    try {
      const res = await fetch(
        `${API_BASE_URL}/x_prna_metro_eth_0/ticket/troubleTicket`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: getBasicAuthHeader(API_USER, API_PASS),
          },
        }
      );
      if (!res.ok) throw new Error(`API error`);
      const data = await res.json();
      return Array.isArray(data) ? data : data.result || [];
    } catch (err) {
      // Fallback to sample data if API fails
      console.warn('API unavailable, using sample data:', err);
      return SAMPLE_TICKETS;
    }
  },

  async getTicketById(id: any) {
    try {
      const res = await fetch(
        `${API_BASE_URL}/x_prna_metro_eth_0/ticket/troubleTicket/${id}`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: getBasicAuthHeader(API_USER, API_PASS),
          },
        }
      );
      if (!res.ok) throw new Error(`API error`);
      const data = await res.json();
      return data.result || data;
    } catch (err) {
      // Fallback to sample data if API fails
      console.warn('API unavailable, using sample data:', err);
      return SAMPLE_TICKETS.find(ticket => ticket.id === id) || null;
    }
  },
};