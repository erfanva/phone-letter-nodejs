# Phone Combinations API

## About

The Phone Letter Combinations API is a simple HTTP server that provides an endpoint to generate all possible letter combinations for a given phone number. This is based on the standard phone keypad mapping, where each number corresponds to a set of letters (e.g., 2 corresponds to "abc"). This application is built using Node.js and Express.js, and it is fully containerized using Docker, allowing for easy deployment and scalability.

## How to Run?

### Prerequisites

- Docker
- Docker compose

### Steps

#### 1) Clone repository

```bash
git clone https://github.com/erfanva/phone-letter-combinations.git
```

#### 2) Run docker compose

```bash
docker compose up -d
```

After running this command the API will be accessible at http://localhost:4000. You can change this port through modifying `docker-compose.yml`.

## How to Test?

### Prerequisites

- Nodejs
- NPM

### Steps

#### 1) Install dependencies

```bash
npm install --include=dev
```

#### 2) Run tests

```bash
npm run test
```

## Endpoints

### `POST /combinations`

#### Description:

Generate all possible letter combinations for a given phone number.

#### Request body:

```json
{
  "phoneNumber": "23"
}
```

#### Response:

```json
{
  "combinations": ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
}
```

#### Invalid Phone Number Response:

```json
{
  "status": "error",
  "message": "Invalid phone number"
}
```

#### Status Codes:

- `200 OK`: Successful request.
- `400 Bad Request`: Invalid input.

## How to Configure the Github Actions Workflow?

You can use this repository Github Actions Workflow to deploy it on your own server automatically after each push. This action use SSH connection.

### Workflow file parameters:

There are some parameters you should set on your own repository Github Actions' setting.

Navigate to `Settings > Secrets and variables > Actions > New repository secret.` and set parameters below.

- SSH_PRIVATE_KEY
- SSH_SERVER
- SSH_PORT
- SSH_USERNAME

## A Sample Instance

A running instance is accesible through `http://botsapi.erfanva.com:4000`.

## Todo

- Implement integration test.
