# API&SPA
**API&SPA** — a project that provide an opportunity to view users and their albums and photos that stores on server.
### Techs and libraries:
`HTML` `TailwindCSS` `JavaScript` `React` `NodeJS` `Express` `ExpressValidator` `Chance`

### Database & API
Users, albums and photos generates on server authomaticaly using random strings and names. API is written by NodeJS and Express with GET methods to fetch all data. I also used Express Validator library to validate queries that user sends. API fully repeat `jsonplaceholder` API.

### Client part
To display all pages I used React-Router. For use fetched from the server data I used custom hook that gives data by query. Client has 404 error and failed to fetch error pages for displaying it to user in error case. There are 10 users, each of which has 10 albums. In every album there are 50 photos.

### UI
UI is very simple and has no overs. All styles was written on TailwindCSS.

User page
![User page](https://i.imgur.com/zLVX0Gk.png)

### For launching
Write `node server.js` in `./server/` & `npm run dev` in `./client/`.
