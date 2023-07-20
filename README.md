#  Blog Application Assignment - Enverx

A simple blog application's RESTful API built using Node.js, Express.js, and MongoDB.

## Table of Contents

- [Blog Application Assignment - Enverx](#blog-application-assignment---enverx)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
  - [API Endpoints](#api-endpoints)

## Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running locally or an accessible MongoDB connection URI.

## Getting Started

### Installation

1. Clone the repository:
 ```bash
   git clone https://github.com/shaik11r/enverx-be-developer-assignment.git
   cd src
```
1.Install dependencies

```bash 
npm install
```
2.configuration
```bash
PORT=3000  
```
## API Endpoints

The API supports the following endpoints:

**GET** `/api/posts`

Get all blog posts.

**GET** `/api/posts/:id`

Get a specific blog post by its ID.


**POST** `/api/posts`

Create a new blog post.

### title: should be more than 2 letters
### conent: should be more than 10 words

**PUT** `/api/posts/:id`

Updates the blog with specific ID

**DELETE** `/api/posts/:id`

Deletes the blog with specific ID



**Request Body**:
```json
 {
  "title": "Intro",
  "content": "Hi my name is shaik mahammed nadeen and this is a blog example ."
}
```

