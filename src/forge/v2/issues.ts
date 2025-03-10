import api, { route } from "@forge/api";

export interface GetTicketOptions {
   /** The id or key of the ticket. */
   issueIdOrKey: string;
   /** 
    * Whether or not the request should be made as the user itself.
    * @default false
    */
   asUser?: boolean;
   /**
    * The version of the API which should be used when making this request.
    * @default 2
    */
   version?: number;
}

/** Get a Jira ticket with issue id or key. */
export async function getTicket(options: GetTicketOptions) {
    const response = await api[options.asUser ? 'asUser' : 'asApp']().requestJira(route`/rest/api/${options.version ?? "2"}/issue/${options.issueIdOrKey}`, {
        headers: {
            'Accept': 'application/json'
        }
    });

    // TODO: debugging ~ support debugging logs here

    return response.json();
}
