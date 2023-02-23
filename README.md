# HTN-2023-Backend-Application-Challenge

## Usage

### All Users Endpoint

This endpoint will send the information for every user in a .json file, essentially, the entire database. Simply send a GET request to the users endpoint, such as this example request: GET localhost:3000/users/

Additionally, you may retrieve information on a specific user using the name parameter. Simply send a request with the users name, using %20 as a replacement for space due to the way HTTP requests must be formatted. An example request for the name John Doe is GET localhost:3000/users/John%20Doe 

Note, that this is case sensitive, and that this endpoint may return the name of the user rather than all of the information relating to the user.

### Skill Endpoint

The skill endpoint allows you to retrive the amount of times a select skill appears. Simply send a request to 'users/skills/[skill]' where [skill] is a string containing the amount of times that skill appears in the database. This endpoint returns the occurences as an integer. Here is an example call to the endpoint for the skill 'sqlite': GET localhost:3000/users/skills/sqlite

## Compromises

Unfortunately, there were a number of compromises I had to make due to a very busy reading week, approaching midterms, and family commitments. 
1. sqlite was giving me trouble, so to save time, I made my database a .json file to quickly get a 'prototype' working. Had I had more time, I would utilize a proper database, as a local json file is an efficient way to handle this task.
2. I was unable to complete all of the endpoints. I have outlined comments explaining how I would complete the endpoints in the code.
3. I was unable to have a proper and thorough testing process, it is likely that some things do not work that I am not aware of.

However, granted that this was my first time using express and creating my own database, I think it was a good first attempt and opportunity to learn, which is what really matters in the end.
