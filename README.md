<img 
  src="public/images/banner.png" 
  alt="Topical banner" 
  width="1350" 
  height="100"
/>

App for scanning the New York Times and creating collections of articles based on specific 
topics of interest. It is a project application done for module 4 of Flatiron School. 
This project has several unfinsihed features and bugs that will be worked out in the future.
To-dos include: 
  - repair functionality of React Router
  - add custom validation error messages
  - enhance styling

## Authors
  - Lisa LaRochelle | [lilaro](https://github.com/lilaro)
  - Dan Romans | [dangrammer](https://github.com/dangrammer)

<<<<<<< HEAD
## Frontend Repository
  - [Topical Client](https://github.com/dangrammer/topical-frontend)

## Ruby Version
  - ruby 2.6.1

## Rails Version
  - rails ~> 6.0.0

## Database
  - postgreSQL

## Gem Dependencies
  - active_model_serializers ~> 0.10.0
  - rest-client ~> 2.1.0
  - rack-cors
  - bcrypt ~> 3.1.7
  - jwt ~> 2.2, >= 2.2.1
  - dotenv-rails
=======
## Backend Repository
  - [Topical API](https://github.com/dangrammer/topical-backend)

## Languages/Libraries:

  - HTML5 (JSX)
  - CSS3
  - ES6 JavaScript
  - React ^16.11.0 
  - React-Dom ^16.11.0 
  - React-Router ^5.1.2 
  - React-Router-Dom ^5.1.2 
  - React-Bootstrap ^1.0.0-beta.14
  - React-Scripts ^3.2.0 
  - Bootstrap ^4.3.1
>>>>>>> 6d39fc365940fd391cd938f22f11605f4da674a1

## Live Demo
  Link to walkthrough video with narration:
  <br/>
  <a href="https://www.youtube.com/watch?v=A3ZJxHjNVtE&feature=youtu.be" target="_blank">
    <img 
      src="public/images/homepage.png" 
      alt="Topical walkthrough demo link to Youtube" 
      width="300" 
      height="200"
    />
  </a>  

## Screenshots

  Login/Signup
  <br/>
<<<<<<< HEAD
  ![Login/Signup Demo](public/gifs/login_signup.gif)

  Filter Articles
  <br/>
  ![Filter Demo](public/gifs/filter_article.gif)

  Add, Edit, and Delete Collection
  <br/>
  ![Collections Demo](public/gifs/add_edit_delete_collection.gif)

  Add and Edit Articles and Notes
  <br/>
  ![Articles Demo](public/gifs/add_edit_collection_and_notes.gif)


## How To Install and Run

  1. fork (optional) then clone or download this repository to local machine
  2. use text editor and/or terminal to navigate into `topical-backend` directory
  3. run `bundle install` (or `bundle i`) in terminal to install necessary dependencies
  4. run `rails db:create` in terminal to create database
  5. run `rails db:migrate` in terminal to initialize database
  6. create secret keys:
      - create a `.env` file in root directory
      - write secret keys for JWT and NYT API in `.env` file:
        ```
        JWT_SECRET_KEY=KEY_HERE
        NYT_API_KEY=KEY_HERE
        # see note below
        ```
  7. run `rails db:seed` in terminal to seed database with article data
  8. run `rails s` in terminal to run server in browser at http://localhost:3000/
  9. install and run [Topical frontend](https://github.com/dangrammer/topical-frontend)

  *_Note:_ `KEY_HERE` _should be characters of your choice for_ `JWT_SECRET_KEY` _and an
  individually assigned key from the New York Times developer portal for_ `NYT_API_KEY` _.
  An API key for the NYT website can be attained by signing up with the_ [NYT Developer Network](https://developer.nytimes.com/)_. It is simple and free to do so._ **Always include** `.env` **file in** `.gitignore` **file**.
=======
  ![Login/Signup Demo](public/gifs/loginSignup.gif)

  Filter Articles
  <br/>
  ![Filter Demo](public/gifs/filterArticle.gif)

  Add, Edit, and Delete Collection
  <br/>
  ![Collections Demo](public/gifs/addEditDeleteCollection.gif)

  Add and Edit Articles and Notes
  <br/>
  ![Articles Demo](public/gifs/addEditCollectionAndNotes.gif)

## How To Install and Run 

  1. install and run [Topical backend API](https://github.com/dangrammer/topical-backend)
  2. fork (optional) then clone or download this repository to local machine
  3. use text editor and/or terminal to navigate into `topical-frontend` directory
  4. run `npm install` (or `npm i`) in terminal to install necessary dependencies
  5. run `npm start` in terminal to launch the app in browser

  *_Note: If backend server is already running, it will be running on http://localhost:3000/. After 
  running_ `npm start`_, follow prompt and enter_ `y` _in terminal to run frontend on alternate port._



>>>>>>> 6d39fc365940fd391cd938f22f11605f4da674a1
