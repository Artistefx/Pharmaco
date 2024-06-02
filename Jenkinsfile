pipeline {
    agent any
    tools {
        nodejs "node 22"
        maven "maven-3.9.7"
    }
    environment {
        GESTION_IMAGE_NAME = 'artistehmz/pharmaco-gestion'
        SHOP_IMAGE_NAME = 'artistehmz/pharmaco-shop'
        BACKEND_IMAGE_NAME = 'artistehmz/pharmaco-backend'
    }
    stages {
        stage('Build Frontend-Gestion') {
            steps {
                dir('Frontend-Gestion') {
                    bat 'npm install'
                }
            }
        }
        stage('Build Frontend-Shop') {
            steps {
                dir('Frontend-Shop') {
                    bat 'npm install'
                }
            }
        }
        stage('Build Backend') {
            steps {
                dir('Backend') {
                    bat 'mvn clean install'
                }
            }
        }
         stage('Build Docker Image for Frontend-Gestion') {
            steps {
                dir('Frontend-Gestion') {
                    bat "docker build -t ${GESTION_IMAGE_NAME}:${BUILD_NUMBER} ."
                }
            }
        } 
        
         stage('Build Docker Image for Frontend-Shop') {
            steps {
                dir('Frontend-Shop') {
                    bat "docker build -t ${SHOP_IMAGE_NAME}:${BUILD_NUMBER} ."
                }
            }
        } 
         stage('Build Docker Image for Backend') {
            steps {
                dir('Backend') {
                    bat "docker build -t ${BACKEND_IMAGE_NAME}:${BUILD_NUMBER} ."
                }
            }
        }  
         stage('Push Frontend-Gestion to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: '56', usernameVariable: 'DOCKERHUB_USERNAME', passwordVariable: 'DOCKERHUB_PASSWORD')]) {
                    script {
                        bat 'docker login -u %DOCKERHUB_USERNAME% -p %DOCKERHUB_PASSWORD%'
                    }
                    dir('Frontend-Gestion') {
                        bat "docker push ${GESTION_IMAGE_NAME}:${BUILD_NUMBER}"
                    }
                }
            }
        } 
        stage('Push Frontend-Shop to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: '56', usernameVariable: 'DOCKERHUB_USERNAME', passwordVariable: 'DOCKERHUB_PASSWORD')]) {
                    script {
                        bat 'docker login -u %DOCKERHUB_USERNAME% -p %DOCKERHUB_PASSWORD%'
                    }
                    dir('Frontend-Shop') {
                        bat "docker push ${SHOP_IMAGE_NAME}:${BUILD_NUMBER}"
                    }
                }
            }
        }
        stage('Push Backend to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: '56', usernameVariable: 'DOCKERHUB_USERNAME', passwordVariable: 'DOCKERHUB_PASSWORD')]) {
                    script {
                        bat 'docker login -u %DOCKERHUB_USERNAME% -p %DOCKERHUB_PASSWORD%'
                    }
                    dir('Backend') {
                        bat "docker push ${BACKEND_IMAGE_NAME}:${BUILD_NUMBER}"
                    }
                }
            }
        }
    }
    post {
        always {
            bat "docker logout"
        }
    }
}
