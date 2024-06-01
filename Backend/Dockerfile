# Use the official Maven image as a base
FROM maven:3.8.1-openjdk-11-slim as build

# Set the working directory inside the container
WORKDIR /app

# Copy the pom.xml file and the source code to the working directory
COPY pom.xml .
COPY src ./src

# Build the Spring Boot application
RUN mvn clean package -DskipTests

# Use the official OpenJDK image as a base for running the application
FROM openjdk:11-jre-slim

# Copy the built jar file from the previous stage to the current stage
COPY --from=build /app/target/*.jar /app/app.jar

# Expose port 8080
EXPOSE 8080

# The default command to run when the container starts
CMD ["java", "-jar", "/app/app.jar"]