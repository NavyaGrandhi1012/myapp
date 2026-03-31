pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/NavyaGrandhi1012/myapp.git'
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
                sh 'docker run -d -p 8081:80 --name friends friends-site'
            }
        }
    }
}