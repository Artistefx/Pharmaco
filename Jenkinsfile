pipeline {
    agent any
    tools {
        nodejs "node 22"
        maven "maven-3.9.7"
    }
    environment {
        DOCKERHUB_CREDENTIALS = credentials('56')
        GESTION_IMAGE_NAME = 'artistefx/pharmaco-gestion'
        SHOP_IMAGE_NAME = 'artistefx/pharmaco-shop'
        BACKEND_IMAGE_NAME = 'artistefx/pharmaco-backend'
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
        /* stage('Build Docker Image for Frontend-Shop') {
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
        } */
        stage('Push Frontend-Gestion to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: '56', usernameVariable: 'DOCKERHUB_USERNAME', passwordVariable: 'DOCKERHUB_PASSWORD')]) {
                    dir('Frontend-Gestion') {
                        bat "echo ${DOCKERHUB_PASSWORD} | docker login --username ${DOCKERHUB_USERNAME} --password-stdin"
                        bat "docker push ${GESTION_IMAGE_NAME}:${BUILD_NUMBER}"
                    }
                }
            }
        }
        /* stage('Push Frontend-Shop to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: '56', usernameVariable: 'DOCKERHUB_USERNAME', passwordVariable: 'DOCKERHUB_PASSWORD')]) {
                    dir('Frontend-Shop') {
                        bat "echo ${DOCKERHUB_PASSWORD} | docker login --username ${DOCKERHUB_USERNAME} --password-stdin"
                        bat "docker push ${SHOP_IMAGE_NAME}:${BUILD_NUMBER}"
                    }
                }
            }
        }
        stage('Push Backend to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: '56', usernameVariable: 'DOCKERHUB_USERNAME', passwordVariable: 'DOCKERHUB_PASSWORD')]) {
                    dir('Backend') {
                        bat "echo ${DOCKERHUB_PASSWORD} | docker login --username ${DOCKERHUB_USERNAME} --password-stdin"
                        bat "docker push ${BACKEND_IMAGE_NAME}:${BUILD_NUMBER}"
                    }
                }
            }
        }
        stage('Clean Up Old Docker Images') {
            steps {
                bat "FOR /f \"skip=1\" %%i IN ('docker images -q ${GESTION_IMAGE_NAME}') DO docker rmi %%i"
                bat "FOR /f \"skip=1\" %%i IN ('docker images -q ${SHOP_IMAGE_NAME}') DO docker rmi %%i"
                bat "FOR /f \"skip=1\" %%i IN ('docker images -q ${BACKEND_IMAGE_NAME}') DO docker rmi %%i"
            }
        }
        stage('Deploy Backend Container') {
            steps {
                // Stop and remove the old backend container if it exists, ignore errors
                bat "docker rm -f backend || exit 0"
                bat "docker run --name backend -d ${BACKEND_IMAGE_NAME}:${BUILD_NUMBER}"
            }
        }
        stage('Deploy Frontend-Gestion Container') {
            steps {
                // Stop and remove the old frontend-gestion container if it exists, ignore errors
                bat "docker rm -f frontend-gestion || exit 0"
                bat "docker run --name frontend-gestion -d --link backend:backend ${GESTION_IMAGE_NAME}:${BUILD_NUMBER}"
            }
        }
        stage('Deploy Frontend-Shop Container') {
            steps {
                // Stop and remove the old frontend-shop container if it exists, ignore errors
                bat "docker rm -f frontend-shop || exit 0"
                bat "docker run --name frontend-shop -d --link backend:backend ${SHOP_IMAGE_NAME}:${BUILD_NUMBER}"
                // Clean up any stopped containers
                bat "docker container prune -f -y"
            }
        } */
    }
    post {
        always {
            bat "docker logout"
        }
    }
}
