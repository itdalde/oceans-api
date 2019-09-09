# Oceans API

Oceans API

# System Requirements
1. Git Bash
2. Virtual Box
3. Vagrant
4. ModHeaders (On Chrome)
5. Install all Requirements


# Development Configuration
Before anything else, make a copy of Vagrantfile
1. Open Git Bash and execute this command, This will setup your vagrant development server
    > vagrant init ubuntu/bionic64
2. Replace the generated vagrantfile with the you just copied.
    > This is the Vagrant Development Configuration
3. Execute the following command
    > vagrant up
    -
    > vagrant ssh
4. Once you are in the Development Server, we need to setup your Python Env. (This will create Python env)
    > python -m venv ~/env
5. To activate your environment
    > source ~/env/bin/acvitave
6. To deactivate
    > deactivate
7. Done. :)