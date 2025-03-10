import JiraTicketsForge from "./JiraTicketsForge";

export interface JiraForgeOptions {
  /**
   * The version of the API which should be used when making this request.
   * @default 2
   */
  version?: number;
}

export class JiraForge {
  /** The options thi. */
  options: JiraForgeOptions;
  /** Helper functions to manage jira tickets. */
  tickets: JiraTicketsForge;

  constructor(options: JiraForgeOptions) {
    this.options = options;
    this.tickets = new JiraTicketsForge(this);
  }

  /** The version of the api to use when making requests to the api. */
  get version() {
    return this.options.version ?? 2;
  }

  /** Update the version of the api to use when making requests to the api. */
  set version(version: number) {
    this.options.version = version;
  }
}

export default JiraForge;
