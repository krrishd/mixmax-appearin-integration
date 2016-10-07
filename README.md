# Mixmax x Appear.in Integration

This is the source for a slash command built on the Mixmax SDK that allows Mixmax users to use `/appear` in order to generate a unique link to an Appear.in videoconferencing room.

## Setup

1. If you're testing this locally, simply clone this project, install dependencies (run `npm install`).

2. Exit Chrome, open your Terminal, run: `open -a Google\ Chrome --args --allow-running-insecure-content --ignore-certificate-errors`. This will allow Chrome/Mixmax to load localhost (which is technically an insecure resource relative to Gmail, which is SSL-protected).

3. Open your Mixmax dashboard, click Settings, click Integrations/API.

4. Go to Slash Commands and add a new one with the following values:

| Input Name | Value |
| ---------- | ----- |
| Name | Appear.in Videconferencing |
| Command | appear |
| Parameter placeholder | [ENTER for link] |
| Typeahead API URL | http://localhost:1337/typeahead |
| Resolver API URL | http://localhost:1337/resolver |

5. Run `node server.js`
6. Open Gmail/Inbox
7. Try `/appear` out!