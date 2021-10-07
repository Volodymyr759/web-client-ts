## Description:

This is a [Next.js](https://nextjs.org/) project written in MERN-stack.

SPA presents company's site:
Demo: https://web-client-ts.vercel.app
API: https://polar-castle-18354.herokuapp.com/swagger/
BACKEND - repository: https://github.com/Volodymyr759/test-eivolo-api

Public area is designed from scratch using bootstrap-css and grids, is sensitive to all screen resolutions.
Private (admin) area uses layout based on source: https://webthemez.com/target-free-responsive-bootstrap-admin-template/, it possible to grant credentials of the admin-user upon request.

Application is easy scalable to add new features (for example 'News' / 'Vacancies').

Hosting and domain name for frontend-part are free, site is deployed to: https://vercel.com/

## Functionality:

Authentication by email / Authorization: OAuth-2.0, encrypted JWT - access/refresh tokens, expiration time: access_token: 30 min, refresh_token: 30 days, data storage: cookie.

User roles: anonymous, "user" - registered user, "admin".

Registered users allowed to see profile, change email/password and send messages to administrator.

Admin (administrator) uses /admin part of site, can manage (CRUD) users and messages.

## Contact

Regarding to create frontend / backend (frameworks Next.js / Nest.js), please use the mail: logisticmaster.2000@gmail.com
