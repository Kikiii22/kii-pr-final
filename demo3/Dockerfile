FROM maven:3.9.6 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src



RUN mvn clean package -DskipTests


FROM amazoncorretto:21-alpine3.16-jdk
WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080
CMD ["java", "-jar", "app.jar"]