import { getPullRequest } from "../operations/pulls";


describe('getPullRequest', () => {
  const owner = 'bitlydev';
  const repo = 'otc-otc';
  const pullNumber = 114;

  it('should return pull request data when successful', async () => {
    const result = await getPullRequest(owner, repo, pullNumber);
    console.log(result);
  });
});