# drones go burr

## Frontend
Frontend design: there will be two main pages: 
- localhost:3000/, which is the landing page. The source code for this page is located in pages/index.js
- localhost:3000/workflow, which is the page where you upload footage and query it. The source code for this page is located in pages/workflow.js

To run the frontend:
```
cd client
npm install
npm run dev
```

## Backend
To run the backend:
First make a virtual environment and download dependencies
```
virtualenv env
source env/bin/activate
pip install -r requirements.txt
```

Next, run the server
```
python3 manage.py migrate
python3 manage.py runserver
```

## Backend Endpoints

### POST /api/project/
- Request
  - description (string, required): description of project
  - email (string, required): email of project owner
  - name (string, required): name of the project
- Response:
  - id: the project's id
  - description: description of project
  - email: email of project owner
  - name: name of the project

### GET /api/project/:id/ 
- Request
  - :id (query param) is the id of the project
- Response:
  - id: the project's id
  - description: description of project
  - email: email of project owner
  - name: name of the project

### POST /api/image/
- Request
  - project (string, required): the project's id
  - s3_link (string, required): the image's S3 url
  - description (string, optional): description for image
- Response:
  - id: the image's id 
  - project: the project's id
  - s3_link: the image's S3 url
  - description: description for image

### GET /api/image/:id/
- Request
  - :id (query param) is the id of the image 
- Response:
  - id: the image's id 
  - project: the project's id
  - s3_link: the image's S3 url
  - description: description for image

### POST /api/search/
- Request
  - query (string, required): the prompt to search for
  - project (string, required): the project to search within
- Response:
  - JSON array of images (refer to GET request)
