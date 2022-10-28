const sonarqubeScanner = require('sonarqube-scanner')
const { execSync } = require('child_process');

let branchName=process.env.GITHUB_REF;
let eventStart=process.env.GITHUB_EVENT_NAME;

require('dotenv').config();

//only to run local easily
function executeGitCommand(command) {
  return execSync(command)
    .toString('utf8')
    .replace(/[\n\r\s]+$/, '');
}

const options= {
  'sonar.projectKey': 'lojaintegrada_admin-components',
  'sonar.organization': 'lojaintegrada',
  'sonar.test.inclusions':
  './**/*.test.tsx,./**/*.test.ts,./**/*.test.js,./**/*.spec.js,./**/*.spec.tsx',
  'sonar.exclusions': './**/*.html,./package.json,./sonar-config.js',
  'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
  'sonar.testExecutionReportPaths': 'coverage/xml-reports/sonar.xml',
}

if(eventStart !== undefined && eventStart=="pull_request")
{
  options['sonar.pullrequest.key']=branchName.replace(/\D/g,'');
}
else{
  branchName=process.env.GITHUB_HEAD_REF ? undefined:executeGitCommand('git rev-parse --abbrev-ref HEAD')
  options['sonar.branch.name']=branchName;
}
  
sonarqubeScanner(
  {
    serverUrl: 'https://sonarcloud.io',
    token: 'd30d3c427d2ea2dcedae2aa19afcafe3e689cd12',
    options: options,
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {},
);