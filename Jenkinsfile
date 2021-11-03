pipeline {
  agent any
  options {
    timestamps()
    skipStagesAfterUnstable()
    buildDiscarder(logRotator(numToKeepStr: '30'))
  }
  /*
  nvm wrapper has to wrap all steps, interestingly its not supposed to work with the .nvmrc file however if you exclude the version as a blank
  string
  then it passes the blank string as the version and therefore nvm just does its job and uses the .nvmrc file.
  */
  stages {
    stage('Tool Versions') {
      steps {
        nvm('') {
          sh 'node --version'
          sh 'npm --version'
        }
      }
    }
  
    stage('Install') {
      steps {
        nvm('') {
          sh 'npm install -g npm-check'
          sh 'npm install -g @angular/cli'
          sh 'npm ci'
        }
      }
    }

    stage('License Header Check') {
      steps {
        warnError('Missing License Headers') {
          nvm('') {
            sh 'npm run license-check check'
          }
        }
      }
    }
    
    stage('Lint') {
      steps {
        nvm('') {
          catchError(buildResult: 'UNSTABLE', stageResult: 'UNSTABLE') {
            sh 'npm run eslint-report'
          }
        }
      }
      post {
        always {
          recordIssues qualityGates: [[threshold: 1, type: 'TOTAL', unstable: true]], tools: [esLint(pattern: '**/eslint_report.xml')]
        }
      }
    }

    stage('Build') {
      steps {
        nvm('') {
          catchError(buildResult: 'UNSTABLE', stageResult: 'UNSTABLE') {
            sh 'npm run build'
          }
        }
      }
    }
    
    stage('Link into jenkins npm') {
      when {
        branch 'develop'
      }
      steps {
        nvm('') {
          catchError(buildResult: 'UNSTABLE', stageResult: 'UNSTABLE') {
            sh 'npm link'
          }
        }
      }
    }

//    stage('Sonarqube') {
//      when {
//        branch 'develop'
//      }
//      steps {
//        withSonarQubeEnv('JenkinsQube') {
//          nvm('') {
//            catchError(buildResult: 'UNSTABLE', stageResult: 'UNSTABLE') {
//              sh 'npm run sonar'
//            }
//          }
//        }
//      }
//    }

    stage('Publish main branch') {
      when {
        branch 'main'
      }
      steps {
        nvm('') {
          catchError(buildResult: 'UNSTABLE', stageResult: 'UNSTABLE') {
            sh 'npm publish'
          }
        }
      }
    }
  }
  post {
    always {
      outputTestResults()
      zulipNotification(topic: 'mdm-resources')
    }
  }
}
