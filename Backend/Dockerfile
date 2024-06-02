# Use the official Maven image as a base with JDK 17
FROM maven:3.9.6-eclipse-temurin-17 as build

# Set the working directory inside the container
WORKDIR /app

# Copy the pom.xml file and the source code to the working directory
COPY pom.xml .
COPY src ./src

# Build the Spring Boot application
RUN mvn clean package -DskipTests

# Verify the build output
RUN ls -al /app/target

# Use the official OpenJDK image as a base for running the application
FROM eclipse-temurin:17-jre

# Set the working directory inside the container
WORKDIR /app

# Copy the built war file from the previous stage to the current stage
COPY --from=build /app/target/*.war /app/app.war

# Verify the copy process
RUN ls -al /app

# Expose port 8080
EXPOSE 8080

# Set environment variables for database connection and Hibernate dialect
ENV SPRING_DATASOURCE_URL=jdbc:mysql://host.docker.internal:3306/pharmaco
ENV SPRING_DATASOURCE_USERNAME=root
ENV SPRING_DATASOURCE_PASSWORD=123456
ENV SPRING_JPA_DATABASE_PLATFORM=org.hibernate.dialect.MySQLDialect

# The default command to run when the container starts
CMD ["java", "-jar", "/app/app.war"]
