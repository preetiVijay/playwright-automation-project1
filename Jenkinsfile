pipeline{
    agent any
    stages{

        stage("test"){
            steps{
                sh "npx playwright test"
            }   
        }
    }
    post{
        failure{
            echo "Setup is not done properly"
        }
    }

}