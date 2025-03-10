import api, { route } from "@forge/api";
import { JiraForge } from "./src/forge/v2/Jira";

const ISSUE_KEY = "TEST-1";
const jira = new JiraForge({
    version: 2
});



export async function run() {

}

export async function runWithLib() {
    const issue = await jira.tickets.get({ issueIdOrKey: ISSUE_KEY, asUser: false });
}