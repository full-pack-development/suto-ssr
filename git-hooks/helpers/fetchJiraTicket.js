const axios = require('axios') // eslint-disable-line import/no-extraneous-dependencies

const auth = require('../../jiraCredentials.js')
const { JIRA_URL } = require('../constants')

function fetchJiraTicket(jiraTicket) {
  const response = axios.get(`${JIRA_URL}/${jiraTicket}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${Buffer.from(`${auth.username}:${auth.token}`).toString('base64')}`,
    },
  })

  return response
}

module.exports.fetchJiraTicket = fetchJiraTicket
