# Stage 1: Build the application
FROM maven:3.8.4-openjdk-17 as build

# Copy the project files to the container
COPY src /home/app/src
COPY web-client /home/app/web-client
COPY pom.xml /home/app

# Build the application
RUN mvn -f /home/app/pom.xml clean package -DskipTests

# Stage 2: Create the final Docker image
FROM openjdk:17-slim

# Add a volume pointing to /tmp
VOLUME /tmp

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Copy the jar from the first stage to the current stage
COPY --from=build /home/app/target/*.jar app.jar

# Run the jar file
ENTRYPOINT ["java","-jar","/app.jar"]
