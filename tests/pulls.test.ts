import { getPullRequest, listPullRequests } from "../operations/pulls";


describe('Pull Request', () => {
  const owner = 'minimind-org';
  const repo = 'github-mcp-server';
  const pullNumber = 1;

  it('should return pull request data when successful', async () => {
    const result = await getPullRequest(owner, repo, pullNumber);
    console.log(result);
  });

  it('should return list pull request data when successful', async () => {
    const result = await listPullRequests(owner, repo, {});
    console.log(result);
  });
});