## CRUD RESTful API

First "go" at a RESTful API using Node and Express. I opted out of using Mongoose and instead used MongoDB Node.js native driver, mostly as a learning experience.

### Tech Stack
Node.js
Express.js
MongoDB Atlas

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

| Method | URL       | Action           |
| ------ | --------- | ---------------- |
| GET    | /         | Get API info     |
| GET    | /item     | List all items   |
| POST   | /item     | Create a item    |
| GET    | /item/:id | Get a item       |
| PUT    | /item/:id | Update a item    |
| DELETE | /item/:id | Delete a item    |
| DELETE | /item     | Delete all items |

