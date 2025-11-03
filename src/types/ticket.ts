export interface RelatedContactInformation {
  emailAddress: string;
  name: string;
  number: string;
  organization: string;
  role: string;
}

export interface Ticket {
  id: string;
  description: string;
  externalId: string;
  issueStartDate: string;
  priority: string;
  severity: string;
  ticketType: string;
  note: unknown[];
  relatedEntity: unknown[];
  relatedContactInformation: RelatedContactInformation[];
}
