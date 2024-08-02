# consta-vision
A basic NestJS based app for storing constituent info.

Author: kris-king007
Created: 2024-08-01

## Dev Environment Instructions
**1. Install nvm**

We'll use the nvm package manage to install Node to ensure our Node and npm versions remain in sync.

````bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
````

Running either the above command downloads a script and runs it. The script clones the nvm repository to `~/.nvm`, and attempts to add the source lines from the snippet below to the correct profile file (`~/.bash_profile`, `~/.zshrc`, `~/.profile`, or `~/.bashrc`).

````bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
````

Visit https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating for more installation details.

**2. Use nvm to install the latest version of Node.js**

````bash
nvm install node
````

Note: This app was written using `v22.5.1`.

**3. Install NestJS**

````bash
npm i -g @nestjs/cli
````

**4. Install Docker**

Visit https://docs.docker.com/engine/install/ to download for your operating system.
This installs Docker Desktop which includes Docker Compose.

**5. Install App**

```bash
npm install
```

**6. Build App**

```bash
npm run build
```

**7. Run Docker**

From consta-nest run:

````bash
docker compose up
````

For more information on Docker Compose CLI see https://docs.docker.com/compose/compose-application-model/#cli 


**8. Run the app**

From within the top level of consta-vision run:

````bash
npm run start
````

Open your browser and navigate to http://localhost:3000/


## Tips

### MacOs Shell
The default shell for MacOs is now zsh instead of bash. However, the nvm installer expects bash to be used.
If you attempt to follow the standard instructions for installing node in bash while using zsh you will run into problems.
While there are some workarounds to be found, for simplicity sake, it is suggested you use the bash terminal to run this.

**To switch the default shell for your user on macOS**

To switch to bash:

````bash
chsh -s /bin/bash
````

To switch back to default zsh shell:

````bash
chsh -s /bin/zsh
````

### to create a new Nest Project

From the directory you want your new project to reside:

````bash
nest new project-name
````

Select `npm` (the default selection) as the package manager.

### To create a new Nest Resource

````bash
nest g resource constituents
````

In the above example, `constituents` is the name of the new resource. Nest expects the resource to be in its plural form. 
It will automatically use the singular form of the name when creating DTOs and the entity file.

Visit https://docs.nestjs.com/recipes/crud-generator#crud-generator for more information.

**Resources in this application were created using the Rest API approach.**

### To manually generate typescript files based off graphql schema (shema first)

1. Globally Install ts-node

````bash
npm i -g ts-node
````

2. Generate Typings

````bash
ts-node generate-typings
````



