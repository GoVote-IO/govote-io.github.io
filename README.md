# Welcome to Go-Vote.io

With the uncertainty of electronic voting in the 2016 and after campaigns I had started to think there needed to be some sort of open source voting system. Then came the Iowa Caucuses of 2020, and it became abundantly clear that this is a necessity. This project will be the result. This is going to be a golang based voting system based off goa. It is licensed with Affero GPL, so that it can be constantly publicly audited. The architecture and design is in the initial development phase, so this page will change a lot along the way. Please feel free to watch the repo, report ideas and issues and pull requests. It will take a community to get this right. 

## Initial Thoughts on Voting Process
1. Voting Administrator Creates Election
1. Voting Administrator CRUDS Candidates. 
1. Voting Administrator Locks and Publishes Election 
1. Voter walks in to polling location is verified and issues an id(hash, not traceable to actual, id but enough to be a key)
1. Voter goes to polling station enters key, a ballot is pulled up and a vote occurs. 
1. The vote is saved to the election server, as well it is shipped to cloud storage on each of the 3 public clouds(Google, Microsoft, Amazon). 
1. When the polls close, the election admistrator closes the election. 
1. A job is then run that tallies the vote and publishes it. 

## Projects
1. (Administration Project)[https://github.com/orgs/GoVote-IO/projects/1] - This project manages what is going on with the administration of the project as a whole. 
1. (Software Development Project)[https://github.com/orgs/GoVote-IO/projects/2] - This project manages all the related software projects. 
1. (Admin Repo)[https://github.com/GoVote-IO/govote-io.github.io] - Repository for the website and administration issues. 

## Election Code
1. [Election Service](https://github.com/GoVote-IO/govote_election_service) - CRUD Operations For Creating and Running and Elections
1. [Authentication Service](https://github.com/GoVote-IO/govote_authentication_service) - Service to Authenticate a voter, pollworker and administrator
1. [Voter Service](https://github.com/GoVote-IO/govote_voter_service) - Service to provide for loading and recording of vote. 
1. [Election Language](https://github.com/GoVote-IO/election_specific_language) - Election Language Specification

## FAQ
1. Why GPL? - If we made the service with a less explicit license it could be used without the source, and lessen the integrity of the software being used. 
1. Why not SAAS? - SAAS would not allow for a strict review of the code being used at the moment. The results could be saved and manipulated in the saas provider before shipping. 
1. Why 3 cloud providers? - Not only will this guarantee redundancy, but it will allow for independent analysis of the results. 
1. Could the Russians Hack it? Probably I am not that great a programmer. 

## Contributing
Wondering how you can help? Well I need it everywhere, from brainstorming to questions to code. Right now this is a single persons crazy idea. Feel free to add github issues on the admin repo and throw out ideas as I go along. 