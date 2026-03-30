pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git 'YOUR_GITHUB_REPO_LINK'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t friends-site .'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker stop friends || true'
                sh 'docker rm friends || true'
                sh 'docker run -d -p 8080:80 --name friends friends-site'
            }
        }
    }
}