pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git scm
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("mini-clock-app:${env.BUILD_NUMBER}", "./mini-clock-app")
                }
            }
        }
        stage('Run Docker Container') {
            steps {
                script {
                    // Stop and remove any existing container
                    sh 'docker stop mini-clock-container || true'
                    sh 'docker rm mini-clock-container || true'

                    // Run the new Docker image, mapping port 3000 (container) to 8080 (host)
                    dockerRunCommand = "docker run -d --name mini-clock-container -p 8080:3000 mini-clock-app:${env.BUILD_NUMBER}"
                    sh "$dockerRunCommand"
                    echo "Mini Clock application running at http://localhost:8080"
                }
            }
        }
    }
}