### How to run the Posgres Database with Docker

```
docker run --name postgres-container -e POSTGRES_USER=leguin_admin -e POSTGRES_PASSWORD=leguin_forever -e POSTGRES_DB=library_db -p 5432:5432 -d postgres
```

### How to run with the production Database

```
./mvnw spring-boot:run -Dspring-boot.run.profiles=prod
```

See the [Spring Boot Maven Plugin Documentation](https://docs.spring.io/spring-boot/docs/current/maven-plugin/reference/htmlsingle/#run.examples.specify-active-profiles) for more info

#### Install the git hooks

```
. ./setup.sh
```


### TODO: problems found

- [] Dockerfile should be building the prod version of the app
- [] Web client should use relative url
- [] Add the DATABASE_URL secret to the application properties for prod
- 