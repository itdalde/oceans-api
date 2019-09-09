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
1. Open Git Bash and execute this command
    - vagrant init ubuntu/bionic64
    (This will setup your vagrant development server)
2. Replace the generated vagrantfile with the you just copied.
    - This is the Vagrant Development Configuration
3. Execute the following command
    - vagrant up
    (This will open your Vagrant Environment)
    - vagrant ssh
    (This is to connect to Vagrant )
4. Once you are in the Development Server, we need to setup your Python Env.
    - python -m venv ~/env
    (This will create Python env)
5. To activate your environment
    - source ~/env/bin/acvitave
    (To deactivate)
    - deactivate

6. Done. :)