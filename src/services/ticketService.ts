/* eslint-disable @typescript-eslint/no-explicit-any */
const API_BASE_URL = 'https://ven05366.service-now.com/api';
const API_USER = import.meta.env.VITE_API_USER;
const API_PASS = import.meta.env.VITE_API_PASS;

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
  },

  // 🔽 Added 10 new sample tickets
  {
    id: "2a845cd874523003a1b5478e9bc0b92a",
    description: "VPN connection fails intermittently for remote users.",
    externalId: "",
    issueStartDate: "2020-07-22 10:20:15",
    priority: "2",
    severity: "2 - High",
    ticketType: "Incident",
    relatedEntity: [],
    relatedContactInformation: [
      { emailAddress: "", name: "Global IT Services", number: "(312) 555-7788", organization: "", role: "customer" },
      { emailAddress: "", name: "Emma Watson", number: "(312) 555-7788", organization: "Global IT Services", role: "customer_contact" },
      { emailAddress: "", name: "Network Support", number: "", organization: "", role: "assignment_group" },
      { emailAddress: "", name: "James Patel", number: "", organization: "", role: "assigned_to" }
    ]
  },
  {
    id: "3b965ef980723003b9b8678d9cd1a93b",
    description: "Users report slow response times from the internal CRM system.",
    externalId: "",
    issueStartDate: "2019-05-11 09:14:40",
    priority: "4",
    severity: "4 - Low",
    ticketType: "Incident",
    relatedEntity: [],
    relatedContactInformation: [
      { emailAddress: "", name: "CRM Team", number: "", organization: "", role: "customer" },
      { emailAddress: "", name: "Michael Lee", number: "", organization: "CRM Team", role: "customer_contact" },
      { emailAddress: "", name: "Application Support", number: "", organization: "", role: "assignment_group" },
      { emailAddress: "", name: "Sara Kim", number: "", organization: "", role: "assigned_to" }
    ]
  },
  {
    id: "4d076gh192023004c4c978a2dce2b04c",
    description: "Unable to print documents from the office network printer.",
    externalId: "",
    issueStartDate: "2022-10-19 16:30:28",
    priority: "3",
    severity: "3 - Moderate",
    ticketType: "Incident",
    relatedEntity: [],
    relatedContactInformation: [
      { emailAddress: "", name: "Office Admin", number: "", organization: "", role: "customer" },
      { emailAddress: "", name: "John Carter", number: "", organization: "Office Admin", role: "customer_contact" },
      { emailAddress: "", name: "Hardware Support", number: "", organization: "", role: "assignment_group" },
      { emailAddress: "", name: "Mike Ross", number: "", organization: "", role: "assigned_to" }
    ]
  },
  {
    id: "5e187hi205223005d5d089b3efe3c15d",
    description: "Database backup job failed due to storage limit exceeded.",
    externalId: "",
    issueStartDate: "2023-04-09 03:12:55",
    priority: "1",
    severity: "1 - Critical",
    ticketType: "Problem",
    relatedEntity: [],
    relatedContactInformation: [
      { emailAddress: "", name: "DataOps Team", number: "", organization: "", role: "customer" },
      { emailAddress: "", name: "Rajesh Kumar", number: "", organization: "DataOps Team", role: "customer_contact" },
      { emailAddress: "", name: "DBA Team", number: "", organization: "", role: "assignment_group" },
      { emailAddress: "", name: "Lisa Wong", number: "", organization: "", role: "assigned_to" }
    ]
  },
  {
    id: "6f298ij318423006e6e190c4f0f4d26e",
    description: "Email spam filter not blocking phishing emails.",
    externalId: "",
    issueStartDate: "2021-12-22 11:40:00",
    priority: "2",
    severity: "2 - High",
    ticketType: "Incident",
    relatedEntity: [],
    relatedContactInformation: [
      { emailAddress: "", name: "Mail Security", number: "", organization: "", role: "customer" },
      { emailAddress: "", name: "Sophia Brown", number: "", organization: "Mail Security", role: "customer_contact" },
      { emailAddress: "", name: "Cybersecurity", number: "", organization: "", role: "assignment_group" },
      { emailAddress: "", name: "David Yu", number: "", organization: "", role: "assigned_to" }
    ]
  },
  {
    id: "7g309kl429523007f7f291d5g1g5e37f",
    description: "Router configuration mismatch detected during audit.",
    externalId: "",
    issueStartDate: "2024-03-13 08:55:45",
    priority: "2",
    severity: "2 - High",
    ticketType: "Incident",
    relatedEntity: [],
    relatedContactInformation: [
      { emailAddress: "", name: "Network Infra", number: "", organization: "", role: "customer" },
      { emailAddress: "", name: "Robert Fox", number: "", organization: "Network Infra", role: "customer_contact" },
      { emailAddress: "", name: "Network Operations", number: "", organization: "", role: "assignment_group" },
      { emailAddress: "", name: "Alice Green", number: "", organization: "", role: "assigned_to" }
    ]
  },
  {
    id: "8h410mn530623008g8g392e6h2h6f48g",
    description: "Application deployment failed in production environment.",
    externalId: "",
    issueStartDate: "2023-06-20 17:25:31",
    priority: "1",
    severity: "1 - Critical",
    ticketType: "Problem",
    relatedEntity: [],
    relatedContactInformation: [
      { emailAddress: "", name: "DevOps", number: "", organization: "", role: "customer" },
      { emailAddress: "", name: "Kevin Thomas", number: "", organization: "DevOps", role: "customer_contact" },
      { emailAddress: "", name: "Release Management", number: "", organization: "", role: "assignment_group" },
      { emailAddress: "", name: "Maria Perez", number: "", organization: "", role: "assigned_to" }
    ]
  },
  {
    id: "9i521op641723009h9h493f7i3i7g59h",
    description: "Firewall rule change request for new data center VLAN.",
    externalId: "",
    issueStartDate: "2024-02-10 14:22:09",
    priority: "4",
    severity: "4 - Low",
    ticketType: "Request",
    relatedEntity: [],
    relatedContactInformation: [
      { emailAddress: "", name: "Data Center Ops", number: "", organization: "", role: "customer" },
      { emailAddress: "", name: "Laura Davis", number: "", organization: "Data Center Ops", role: "customer_contact" },
      { emailAddress: "", name: "Firewall Team", number: "", organization: "", role: "assignment_group" },
      { emailAddress: "", name: "Ethan Brown", number: "", organization: "", role: "assigned_to" }
    ]
  },
  {
    id: "0j632qr752823010i0i504g8j4j8h60i",
    description: "Employee unable to access shared drive after password reset.",
    externalId: "",
    issueStartDate: "2023-09-25 19:35:00",
    priority: "3",
    severity: "3 - Moderate",
    ticketType: "Incident",
    relatedEntity: [],
    relatedContactInformation: [
      { emailAddress: "", name: "HR Systems", number: "", organization: "", role: "customer" },
      { emailAddress: "", name: "Amy Johnson", number: "", organization: "HR Systems", role: "customer_contact" },
      { emailAddress: "", name: "Access Management", number: "", organization: "", role: "assignment_group" },
      { emailAddress: "", name: "Ryan Smith", number: "", organization: "", role: "assigned_to" }
    ]
  },
  {
    id: "1k743st863923011j1j615h9k5k9i71j",
    description: "System monitoring dashboard not updating metrics in real time.",
    externalId: "",
    issueStartDate: "2024-11-01 06:45:18",
    priority: "2",
    severity: "2 - High",
    ticketType: "Incident",
    relatedEntity: [],
    relatedContactInformation: [
      { emailAddress: "", name: "Monitoring Team", number: "", organization: "", role: "customer" },
      { emailAddress: "", name: "Olivia White", number: "", organization: "Monitoring Team", role: "customer_contact" },
      { emailAddress: "", name: "IT Operations", number: "", organization: "", role: "assignment_group" },
      { emailAddress: "", name: "George Hall", number: "", organization: "", role: "assigned_to" }
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