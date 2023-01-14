This is the frontend of my team final Project from Pace Fall 2022, to demonstrate what we learnt over the course.
Date: Jan 2022 - Dec 2022

# Food-pantry

## Steps to work on this project

1. Always pull for the main branch when starting to work on a new feature
2. Make sure to not overwrite others' work by force push request (never use force option) and make sure not to over write your own work by pulling from a back dated branch
3. Always push your changes to a new branch and let tech lead handle merges 
4. Names for braches should follow naming convention: dev-<featuurename>-<feature_version>-<developer_name>
5. For DB and server code we will have separate repos
    
example  wrokflow for dev.

//start of work
    
git init
    
git remote add origin https://github.com/chrispaladin7/Food_Pantry_Frontend.git
    
git pull origin main

npm i

//check out branch to work on !!!important!!! do not skip
    
git checkout -b dev-foodpackage-v1-yash

//when ready to push changes (stopping work for the session or feature is ready)

//add and commit changes to local repo
    
git add .

//use imperative language for message  
    
    
some change
    
git commit -m 'message'

//push changes to remote repo
    
git push origin dev-foodpackage-v1-yash


\<Project Description>

\---Do Later---

# Build
To clone this repository, you'll need [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com/)) and Ionic installed on your computer. From your command line:
```bash
# Clone this repository
git clone https://github.com/Aleksandar-Evgeniy-Kamenev/food-pantry.git

# Navigate into the repository
cd food-pantry

# Install dependencies
npm install

# Start
ionic serve

if you have a problem with running the app after npm install, npm fund and npm start you may need to manualy install a missing package.
Please read the error message google the missing package and npm install it as per the instructions on the package page.
```

You can now view ``food-patry`` in the browser by default at [http://localhost:8100/](http://localhost:8000/)

# Contribution Guidelines
- Use camelCase for variable names
- Checkout separate branches for feature implementations. Please do not build new features in master.
- Use an ESLint linter extension to flag programming errors, bugs, stylistic errors, and suspicious constructs.(*Optional, but recommended*)
- Destructive operations are to be avoided and pull requests are only to be managed by tech lead. 
- Pull from master when starting work on a new feature.
- Push changes to a separate branch dedicated to that feature and do not push straight to master.

- If a css class exists (eg. ``'.backgroundPrimaryColor'``) that internally implements global css variables (eg. ``'var(--primaryColor)'``), using the css class takes higher priority. 
    Example:
    ```css
    /* index.css */
    :root {
        /* Global variables */
      --primaryColor: #29B2CF;
    }

    .primaryBackgroundColor : {
        /* Global classes*/
        backgroundColor: 'var(--primaryColor)';
    }
    ```
    ```html
    <!-- Referring to the global class in your component definition -->
    <div className="navBarWrapper primaryBackgroundColor">
    ```
    is more preferable than
    ```javascript
    // Referring directly to the global style in index.css *in the specific case that a class already exists*
    // Avoid this implementation
    style={{backgroundColor: 'var(--primaryColor)' }}
    ```
    ```javascript
    // Directly writing the value of the global variable, rather than referring to the global variable itself.
    // Avoid this implementation
    style={{backgroundColor: '#29B2CF' }}
    ```
