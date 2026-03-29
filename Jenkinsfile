pipeline {
    agent any
    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t myflaskapp .'
            }
        }
        stage('Stop Old Container') {
            steps {
                sh 'docker stop myflaskapp-container || true'
                sh 'docker rm myflaskapp-container || true'
            }
        }
        stage('Deploy Container') {
            steps {
                sh 'docker run -d --name myflaskapp-container -p 5000:5000 myflaskapp'
            }
        }
    }
    post {
        success {
            echo 'Deployment Successful!'
        }
        failure {
            echo 'Something went wrong!'
        }
    }
}
