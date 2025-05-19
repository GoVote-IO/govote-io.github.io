# GO-VOTE System Interview Questions

Below are questions organized by role to help fully understand the vision, requirements, timeline, and technical architecture for the GO-VOTE systems. Please provide detailed answers to help develop comprehensive role-specific prompt files.

## Product Manager Questions

### Vision and Goals
1. What specific problems in current voting systems are you trying to solve with GO-VOTE?
2. Who are the primary users of this system (voters, election officials, poll workers, others)?
3. What are your success metrics for this project? How will you measure if it's successful?
4. Are there any existing voting systems that you admire or want to improve upon?
5. Is this intended for official government elections, or also for private organizations, unions, etc?

### Features and Requirements
6. Beyond the basic voting process outlined in the README, what other core features do you envision?
7. What types of elections should the system support (ranked-choice, first-past-the-post, proportional representation)?
8. Should the system handle different types of ballots (e.g., multiple questions, propositions)?
9. What languages should the system support?
10. Do you envision any accessibility features for voters with disabilities?

### User Experience
11. How should voters interact with the system? Dedicated hardware or their own devices?
12. What verification should voters receive that their vote was properly recorded?
13. How should election administrators interact with the system?
14. What reporting capabilities would administrators need?
15. How should the public access election results?

### Compliance and Standards
16. Which voting regulations (federal, state, local) should the system comply with?
17. Are there specific security standards or certifications the system should meet?
18. How should the system handle recounts or audits?
19. What transparency features should be built into the system?
20. How should the system address voter privacy?

## Project Manager Questions

### Scope and Priorities
1. What is the minimum viable product (MVP) for GO-VOTE?
2. Which features are "must-haves" vs. "nice-to-haves"?
3. Are there any hard deadlines or target dates for any phases of the project?
4. What are the biggest risks to project success that you can foresee?
5. What aspects of the project would you prioritize for early development?

### Resources and Team
6. What resources (financial, personnel, etc.) are currently available for this project?
7. Do you already have team members or contributors identified?
8. What skills are needed that you're still looking for?
9. How do you envision the team structure and governance?
10. What is your desired level of involvement in day-to-day development?

### Development Process
11. What development methodology do you prefer (Agile, waterfall, etc.)?
12. How should progress be tracked and reported?
13. What are your expectations for testing and quality assurance?
14. How do you envision handling change requests during development?
15. What would be your ideal release cadence after initial launch?

### Stakeholders and Communication
16. Who are the key stakeholders for this project?
17. How should the team engage with the wider open-source community?
18. What documentation do you expect to be maintained?
19. How should the team handle community contributions?
20. What communication channels should be established between team members?

## CTO/Chief Architect Questions

### Technical Architecture
1. Why did you choose Go and Goa framework specifically?
2. What other technologies are you considering as part of the stack?
3. How should the system components (election, authentication, voter services) interact?
4. What specific database technologies are you considering?
5. How should the system handle offline scenarios or network interruptions?

### Security and Trust
6. What are your most significant security concerns?
7. How should encryption be handled throughout the system?
8. What authentication mechanisms should be used for different user types?
9. How should the system prevent tampering with votes or results?
10. What techniques should be used to ensure votes are correctly counted?

### Scalability and Performance
11. What is the expected scale in terms of concurrent voters?
12. What geographic distribution do you anticipate (local, regional, national)?
13. What performance requirements do you have (response times, throughput)?
14. How should the system scale for different election sizes?
15. What redundancy and failover strategies should be implemented?

### Integration and Deployment
16. How should the system integrate with existing voter registration systems?
17. What deployment models should be supported (cloud, on-premises, hybrid)?
18. How should upgrades and patches be handled in deployed systems?
19. What monitoring and alerting should be implemented?
20. How should the system be tested before deployment for an actual election?

### Technical Governance
21. How should code quality be maintained?
22. What API design principles should be followed?
23. How should technical decisions be documented?
24. What should the contribution workflow look like for developers?
25. How should technical debt be managed?

After I receive your answers to these questions, I'll create three comprehensive prompt files:
- prompts/product_manager.md
- prompts/project_manager.md
- prompts/cto_chief_architect.md

These files will serve as detailed guidance for each role to drive the development of the GO-VOTE system forward.