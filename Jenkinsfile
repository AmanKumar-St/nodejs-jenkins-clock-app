pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm // This will use the SCM configuration from the Jenkins job
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("mini-clock-app:${env.BUILD_NUMBER}", "./") // Assuming Dockerfile is in the root of the checked-out repo
                }
            }
        }
        stage('Run Docker Container') {
            steps {
                script {
                    sh 'docker stop mini-clock-container || true'
                    sh 'docker rm mini-clock-container || true'
                    sh "docker run -d --name mini-clock-container -p 8080:3000 mini-clock-app:${env.BUILD_NUMBER}"
                    echo "Mini Clock application running at http://localhost:8080"
                }
            }
        }
    }
}