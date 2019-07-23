# api-rokode


## Clone Repository  
Git clone - repositorie's link -  

## Install dependencies  
npm install  

## Create .env file  
In this file put: PORT and conection string from MondoDB Cloud Cluster 

## Routes of the API  
|       URL       |    HTTP Verb  | Request body  |            Action           |
| -------------   | ------------- | ------------- | --------------------------- |
|  /api/questions     |     POST       |     JSON     | Create new question       |
| /api/questions/:number      |     GET      |     empty      | Get a question             | 
| /api/answers/  |     GET       |     empty     | Get all answers  |
| /api/answers  |     POST       |     JSON      | Add a answer to the DB    |
| /api/answers/cry  |     GET       |     empty      | Get cry answers    |
| /api/answers/happy  |     GET       |     empty      | Get happy answers    |
| /api/answers/love  |     GET       |     empty      | Get love answers    |
| /api/answers/neutral  |     GET       |     empty      | Get neutral answers    |


