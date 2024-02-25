# Brownfield Library

> DISCLAIMER: This repository is an exercise to practice working with legacy code. Do not take it as a real project. It is not a real project.

## Welcome

This is the Brownfield library Monolith repository. It runs the library portal for both members and curators.

## Developer Setup

Before starting:
- Install the git hooks using the `setup.sh` Bash script
- Make sure you are using Java 17 and that you have Maven installed

## Running the application

To compile and run the application, do

```
mvn -Pdev clean install spring-boot:run
```

It will show the application running at `localhost:8080`

## Frontend development

### Running the `web-client` in development mode

- If you run `npm run dev` from the `web-client` directory, it will automatically start running `json-server` at port 9001 and the react client at port 5173. 

- **json-server configuration:** You will have to keep the files in `web-client/json-server` up to date if you want the web-client to work in standalone mode.

### Running the frontend tests

- We use `testing library` and `msw` to test components and the application. Use `npm test` to run the tests.
- Make sure you keep the test server up to date when adding new tests.

## Backend development

### Database migration with Flyway

The database schema is updated by using [Flyway migrations](https://docs.spring.io/spring-boot/docs/2.0.0.M5/reference/html/howto-database-initialization.html#howto-execute-flyway-database-migrations-on-startup). Everytime you need to update the schema, make sure you add and test the adecquate migration scripts.

### Testing

Run the tests with Maven by doing `mvn test`.

## Running the application in `development` or `production` mode

Use the `-P` flag to control the application profiles: `test`, `dev` and `prod`

```
mvn -P{profile} spring-boot:run
```

- The `prod` profile connects the application to a Postgres database, whereas the `dev` and `test` profiles use H2.
- The `dev` profile loads initial data using sample `.sql` statements placed in the `resources` folder.
  

## How to run the Posgres Database with Docker

If you want to use docker instead of manually configuring a Posgres database:

```
docker run --name postgres-container -e POSTGRES_USER=leguin_admin -e POSTGRES_PASSWORD=leguin_forever -e POSTGRES_DB=library_db -p 5432:5432 -d postgres
```