// Octokit.js
// https://github.com/octokit/core.js#readme


const { Octokit, App } = require("octokit");

console.log(`TOKEN: ${process.env.GH_TOKEN}`)


const octokit = new Octokit({
  auth: process.env.GH_TOKEN
})

octokit.request('POST /repos/{owner}/{repo}/git/refs', {
  owner: 'Bin0id',
  repo: 'Github-Tutorial',
  ref: 'refs/heads/sdksjs',
  sha: 'af6e351075e5e8671aa0bf17e1dfab02f7b5df0b',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})