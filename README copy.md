# 🚀 Rangos API - Complete Documentation

<img src="https://img.shields.io/badge/Node.js-18.x-green?logo=node.js" alt="Node.js">
<img src="https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript" alt="TypeScript">
<img src="https://img.shields.io/badge/MongoDB-7.x-brightgreen?logo=mongodb" alt="MongoDB">

Online delivery platform connecting customers to local establishments, offering complete order management, menus, and deliveries.

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Data Models](#data-models)
- [Authentication](#authentication)
- [File Uploads](#file-uploads)
- [Error Handling](#error-handling)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contribution](#contribution)
- [License](#license)

---

## Overview

Backend system for a delivery platform featuring:

- Establishment and product management
- Complete order workflow
- JWT Authentication
- Image uploads
- Multiple addresses

**Key Features:**

- 🛍️ Multi-product order creation
- 📦 Order status tracking
- 📷 Image uploads for products/establishments
- 🔐 Secure JWT authentication

---

## Prerequisites

- [Node.js 18.x+](https://nodejs.org/en/)
- [npm v8+](https://www.npmjs.com/)
- [Mongodb 6.x+](https://www.mongodb.com/docs/manual/) (local or [Atlas](https://www.mongodb.com/cloud/atlas))
- [Git](https://git-scm.com/downloads)

---

## Installation

```bash
# Clone repository
git clone https://github.com/Dienay/rangos-backend.git
cd rangos-backend

# Install dependencies
npm i

# Configure environment (based on .env.example)
cp .env.example .env
```

---

## Configuration

### Environment Variables (`.env`)

```ini
NODE_ENV=development
PORT=3000
MONGO_URI=mongodb://user:password@localhost:27017/rangos
JWT_SECRET=super_secret_key
UPLOAD_DIR=./uploads
```

### Useful Commands

```json
{
  "scripts": {
    "dev": "ts-node-dev --watch --respawn --transpile-only --ignore-watch node_modules -r tsconfig-paths/register ./src/app.ts",
    "dev:docker": "docker-compose up --build --force-recreate",
    "start": "node -r module-alias/register dist/app.js",
    "build": "tsc",
    "lint": "eslint .",
    "lint-fix": "eslint . --fix",
    "populate": "ts-node ./src/config/dbPopulate.ts",
    "prettier-format": "prettier --config .prettierrc 'src/**/*.ts' --write"
  }
}
```

---

## Project Structure

```
src/
├── config/          # Global configurations
├── controllers/     # Route logic
├── errors/          # Custom errors
├── middlewares/     # Authentication & validations
├── models/          # MongoDB schemas
├── routes/          # Route definitions
├── uploads/         # Uploaded files
└── app.ts           # Entry point
```

---

## API Documentation

### Main Endpoints

| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| POST   | /signup          | User registration   |
| POST   | /login           | Authentication      |
| GET    | /establishments  | List establishments |
| POST   | /products        | Create product      |
| GET    | /user/:id/orders | Get user orders     |

**[Full API Reference](API_REFERENCE.md)**

---

## Data Models

### Entity Diagram

```mermaid
erDiagram
  USER ||--o{ ORDER : places
  ESTABLISHMENT ||--o{ PRODUCT : offers
  ORDER ||--o{ ORDER_ITEM : contains
```

### Main Entities

- **User**: `name, email, password, type`
- **Product**: `name, price, establishment`
- **Order**: `status, products, total`
- **Address**: `street, city, state`

**[Detailed Model Documentation](MODELS.md)**

---

## Authentication

```http
POST /login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe"
  }
}
```

**[Authentication Guide](AUTH_GUIDE.md)**

---

## File Uploads

### Endpoints

```http
POST /uploads/users            # User avatar
POST /uploads/products         # Product image
POST /uploads/establishments   # Establishment photo
```

**Specifications:**

- Allowed formats: `image/jpeg, image/png`
- Max size: `8MB`
- Field name: `file`

---

## Error Handling

### Common Status Codes

| Code | Type              | Example                 |
| ---- | ----------------- | ----------------------- |
| 400  | Bad Request       | Missing/invalid data    |
| 401  | Unauthorized      | Invalid/missing token   |
| 404  | Not Found         | Resource not found      |
| 413  | Payload Too Large | File exceeds size limit |

**[Complete Error List](ERRORS.md)**

---

## Deployment

### Production Recommendations

1. Use MongoDB Atlas for database
2. Configure proper environment variables
3. Use PM2 for process management
4. Enable HTTPS
5. Configure CORS for specific domains

---

## Contribution

### Guidelines

1. Follow [Style Guide](CONTRIBUTING.md)
2. Use Conventional Commits
3. Maintain test coverage
4. Document new features

**Development Flow:**

```bash
git checkout -b feat/new-feature
git commit -m "feat: add orders endpoint"
git push origin feat/new-feature
```

---

## License

This project is licensed under the [MIT License](LICENSE).

---

# Supplementary Files

1. [API Reference](API_REFERENCE.md) - Detailed endpoint documentation
2. [Data Models](MODELS.md) - MongoDB schemas & relationships
3. [Authentication Guide](AUTH_GUIDE.md) - Complete JWT workflow
4. [Error Handling](ERRORS.md) - Full error codes & messages
5. [Contribution](CONTRIBUTING.md) - Code standards & guidelines

---

**Official Repository:** [github.com/Dienay/rangos-backend](https://github.com/Dienay/rangos-backend)  
**Support:** support@rangos.com
