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

## Election Code
```ruby
election do {
} end
```
