import { getPullRequest } from "../operations/pulls";


describe('getPullRequest', () => {
  const owner = 'minimind-org';
  const repo = 'github-mcp-server';
  const pullNumber = 1;

  it('should return pull request data when successful', async () => {
    const result = await getPullRequest(owner, repo, pullNumber);
    console.log(result);
  });
});