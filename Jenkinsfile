pipeline {
    agent any
    tools {nodejs "node 22"}
    environment {
        DOCKERHUB_CREDENTIALS = credentials('56')
        IMAGE_NAME = 'artistefx/pharmaco'
    }
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
        /* stage('Deliver') {
            steps {
                // Assuming the scripts are Windows batch files; change permissions not required on Windows
                bat 'call .\\jenkins\\scripts\\deliver.bat'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                bat 'call .\\jenkins\\scripts\\kill.bat'
            }
        } */
        stage('Build Docker Image') {
            steps {
                bat "docker build -t ${IMAGE_NAME}:${BUILD_NUMBER} ."
            }
        }
        stage('Push to DockerHub') {
            steps {
                bat "echo %DOCKERHUB_CREDENTIALS_USR% | docker login --username %DOCKERHUB_CREDENTIALS_USR% --password-stdin"
                bat "docker push ${IMAGE_NAME}:${BUILD_NUMBER}"
            }
        }
        stage('Clean Up Old Docker Images') {
            steps {
                // Remove older images; keeps the latest one
                bat "FOR /f \"skip=1\" %%i IN ('docker images -q ${IMAGE_NAME}') DO docker rmi %%i"
            }
        }
        stage('Deploy Container') {
            steps {
                // Stop and remove the old container if it exists, ignore errors
                bat "docker rm -f app || exit 0"
                bat "docker run --name app -d ${IMAGE_NAME}:${BUILD_NUMBER}"
                // Clean up any stopped containers
                bat "docker container prune -f -y"
            }
        }
    }
    post {
        always {
            bat "docker logout"
        }
    }
}
