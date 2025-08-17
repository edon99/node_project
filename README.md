This project is a simple backend API built with Node.js + Express + Sequelize.
It handles product management, authentication, and authorization according to the requirements and stories provided in the document sent by email.
For handling roles and authorization two middlwares were setup to verify whether requets user is authenticated and is an owner.

Endpoints:
  1.Auth:
    -POST /auth/register
    -POST /auth/login
    -POST /auth/logout
  2.Category
    -GET /categories/
    -POST /categories/
    -GET /categories/id
    -PUT /categories/id
    -DELETE /categories/id
  3.Product
    -GET /products/
    -POST /products/
    -GET /products/id
    -PUT /products/id
    -DELETE /products/id

env:
  DB_HOST=localhost
  DB_USER=root
  DB_PASS=
  DB_NAME=noded
  JWT_SECRET
  JWT_EXPIRES_IN

Notes:
-The roles are either "guest" or "owner".
-Make sure to set the correct role (owner or guest) when creating a user for testing.


