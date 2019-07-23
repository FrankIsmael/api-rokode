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
|  /api/questions     |     POST       |     empty     | Create new question       |
| /api/questions/:number      |     GET      |     JSON      | Get a question             | 
| /api/answers/  |     GET       |     JSON     | Get all answers  |
| /api/answers  |     POST       |     empty      | Add a answer to the DB    |
| /api/answers/cry  |     GET       |     empty      | Get cry answers    |
| /api/answers/happy  |     GET       |     empty      | Get happy answers    |
| /api/answers/love  |     GET       |     empty      | Get love answers    |
| /api/answers/nothing  |     GET       |     empty      | Get bad/silence answers    |


