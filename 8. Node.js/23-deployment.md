## Node.js application Deployment

_This section is WIP_

Whenever we have the latest updates pushed to our repo, we follow the CI/CD pattern for the deployment.

```
[STAGES]
[Dev] ──► Pushes Code to git repo.
                    │
                    ▼ Trigger CI/CD Pipeline
[BUILD]   'npm install' & 'npm run build' 
          in an isolated cloud container.
                    │
                    ▼ If successful...
[TEST]    Runs all unit & integration tests.
          Or QA automations.
                    │
                    ▼ If tests pass...
[DEPLOY]  1. Connects to production server via SSH
          2. Copies ONLY the final compiled code files
          3. Runs 'pm2 reload ecosystem.config.js'
```

&nbsp;
---
---
<!-- PAGINATION_START -->

**Parent:** [Node.js](../8.%20Node.js/)
  
**Previous:** ← [Node.js > CLI Arguments](./22-cli-arguments.md)

<!-- PAGINATION_END -->
