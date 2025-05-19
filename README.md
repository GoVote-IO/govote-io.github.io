# GoVote-IO Website

This is the official website for the GoVote-IO project, an open-source voting system initiative created in response to electronic voting concerns in recent elections. The project aims to create a transparent, auditable voting system using Go programming language and the Goa framework.

The website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Project Overview

GoVote-IO is licensed under the GNU Affero General Public License v3 (AGPL-3.0) to ensure public auditability. The system is designed with redundancy and verification in mind, storing vote data across multiple cloud providers to enable independent analysis of results.

## Related Repositories

The GoVote-IO project consists of multiple repositories:

1. **Administration Project**: [https://github.com/orgs/GoVote-IO/projects/1](https://github.com/orgs/GoVote-IO/projects/1) - For overall project administration.
2. **Software Development Project**: [https://github.com/orgs/GoVote-IO/projects/2](https://github.com/orgs/GoVote-IO/projects/2) - For managing software development.
3. **Election Service**: [https://github.com/GoVote-IO/govote_election_service](https://github.com/GoVote-IO/govote_election_service) - CRUD operations for creating and running elections.
4. **Authentication Service**: [https://github.com/GoVote-IO/govote_authentication_service](https://github.com/GoVote-IO/govote_authentication_service) - Service for authenticating voters, poll workers, and administrators.
5. **Voter Service**: [https://github.com/GoVote-IO/govote_voter_service](https://github.com/GoVote-IO/govote_voter_service) - Service for loading and recording votes.
6. **Election Language**: [https://github.com/GoVote-IO/election_specific_language](https://github.com/GoVote-IO/election_specific_language) - Specification for the election language.

## Website Development

### Installation

```
$ npm install
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

The website is automatically deployed to GitHub Pages when changes are pushed to the master branch.

## Contribution Guidelines

Contributions are welcome in all forms - from brainstorming ideas to submitting code. The project is at an early stage of development and looking for community involvement. Contributors should add GitHub issues on the admin repo to suggest ideas or report problems.