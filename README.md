## CRUD RESTful API



A RESTful API for a CRUD application. I tried to keep it as generic as I knew how, in hopes I could use this as a template
for future projects.

It is built using Node.js, Express, and MongoDB Atlas. I only plan to build the backend for this project and
will add to it as I learn more about building RESTful APIs.

### Installation

---

To install this project, clone the repository and run `npm install` to install the dependencies.

MongoDB Atlas was used for the database, so if you are using Atlas you will need to create a cluster and add the connection
string to the `.env` file. You can also use a local MongoDB instance, just change the connection string in the `.env` file.

### Usage

---

To run the project, run `npm start` and the server will start on port 3000. You can change the port by setting the
`PORT` environment variable.

### API

The API is built using the RESTful architecture. The API has the following endpoints:

| Method | URL       | Action             |
| ------ | --------- | ------------------ |
| GET    | /         | Get API info       |
| GET    | /item     | List all recipes   |
| POST   | /item     | Create a recipe    |
| GET    | /item/:id | Get a recipe       |
| PUT    | /item/:id | Update a recipe    |
| DELETE | /item/:id | Delete a recipe    |
| DELETE | /item     | Delete all recipes |

