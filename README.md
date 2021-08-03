# Notes Project

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command


# Endpoints

- `POST: /users/`  Creates a new user with a unique email address. 
```
email: required 
```
- `GET: /users/:id`  Gets the user for specified ID
- `DELETE: /users/:id` Deletes instance of specified user ID

- `POST: /notes/` Creates a note. 
```
title : nullable
subtitle : nullable
content : required
date : timestamp | required
isImportant : false | boolean
user : User ID | required | number
```

- `GET: /users/:id/notes`  Gets all notes  for specified user
- `DELETE: /notes/:id` Deletes instance of specified note ID 
- `GET: /notes/:id` 
Gets the note for specified ID
