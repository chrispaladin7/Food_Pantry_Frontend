pipeline {
  agent {
    label 'qa'
  }

  tools {
    nodejs 'NodeJS 18.9.1'
  }

  stages {
    stage('NodeJS') {
      steps {
        echo 'NodeJS Check....'
        sh 'echo "Build steps"'
        sh 'npm --version'
        sh 'node --version'
      }
    }

    stage('NPM Install') {
      steps {
        echo 'NPM install....'
        sh 'npm install'
        sh 'npm install -g cordova'
        sh 'npm i -g @ionic/cli'
        sh 'npm install --save @capacitor/core @capacitor/cli'
      }
    }

    stage('Ionic Check') {
      steps {
        echo 'Ionic Check....'
        sh 'ionic --version'
      }
    }

    stage('Build') {
      steps {
        sh '''
        sudo ionic build --prod
        '''
      }
    }

    stage('Test') {
      steps {
        echo 'No test...'
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploy...'
        sh '''
        sudo npm run deploy-qa
        '''
      }
    }
  }
  post {
        always {
            emailext body: 'A Test EMail', recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], subject: 'Test'
        }
    }
}
