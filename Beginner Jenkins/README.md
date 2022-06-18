# Beginner Jenkins

## Notes
It's better to install Jenkins in a Docker container rather than directly on the system. 

## Commands

### Installation in Docker
1. `docker pull jenkins/jenkins:lts`
2. `docker run $(pwd)/jenkins_home:/var/jenkins_home -p 8080:8080 -p 50000:50000 -p 9080:9080 -e JENKINS_OPTS="--httpPort=9080" --name jenkins jenkins/jenkins:lts`
	- `run` creates a container.
	- `-d` detaches the container to run it in the background of the terminal.
	- `-v` mounts the current working directory into the container.
	- `$(pwd)/jenkins_home:/var/jenkins_home` links the local `jenkins_home` with the folder `jenkins_home` of the Docker container.
	- `-p` redirects the port of the local machine to the container port
	- `-p 8080:8080` 
	- `-p 50000:50000` provides information about the installation.
	- `-p 9080:9080` will be the port in which Jenkins will be hosted.
	- `-e JENKINS_OPTS="--httpPort=9080"` indicates that Jenkins will be operative in the port 9080 and not in the port 8080.
	- `--name jenkins` indicates the name of the container.
	- `jenkins/jenkins:lts` name of the image on which the container is going to be based.
3. `docker ps` for checking that the container has been correctly created.
4. Now, if we go to `localhost:9080`, Jenkins will ask us for the **administrator password**. To retrieve it, we can execute any of these steps:
	- `docker logs -f jenkins`
	- `cat /var/jenkins_home/secrets/initialAdminPassword`
5. Select `Install sugested plugins`, although you can choose `Select plugins to install` for a custom installation.

### CLI commands
- Root command: `java -jar jenkins-cli.jar -s http://localhost:9080/ -auth admin:admin`. Bear in mind that the path of the `jenkins-cli.jar` depends on your current directory.
- In order to avoid writing the root command every time we want to execute something, we can store it as an `alias` with `alias jenkinscli= java -jar jenkins-cli.jar -s http://localhost:9080/ -auth admin:admin`
- `jenkinscli version` outputs the Jenkins version installed.
- `jenkinscli session-id` retrieves the ID of the current version.
- `jenkinscli who-am-i` prints the current user logged and its permissions.
- `jenkinscli list-jobs` lists all jobs created.
- `jenkinscli shutdown` shuts down Jenkins unsafely.
- `jenkinscli safe-shutdown` waits until there are no more tasks running for shutting down Jenkins.
- `jenkinscli restart` restarts Jenkins.