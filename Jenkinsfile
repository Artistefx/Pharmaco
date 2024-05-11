pipeline {
    agent any
    tools {nodejs "node 22"}
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
        stage('Deliver') {
            steps {
                // Assuming the scripts are Windows batch files; change permissions not required on Windows
                bat 'call .\\jenkins\\scripts\\deliver.bat'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                bat 'call .\\jenkins\\scripts\\kill.bat'
            }
        }
    }
}
