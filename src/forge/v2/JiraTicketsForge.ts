import { getTicket, GetTicketOptions } from "./issues";
import JiraForge from "./Jira";

export interface JiraForgeOptions {
  /**
   * The version of the API which should be used when making this request.
   * @default 2
   */
  version?: number;
}

export class JiraTicketsForge {
  service: JiraForge;

  constructor(service: JiraForge) {
    this.service = service;
  }

  get(options: GetTicketOptions) {
    return getTicket(options);
  }
}

export default JiraTicketsForge;
