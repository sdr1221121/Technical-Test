# Project Architecture

## Overview

This document describes the architecture of the "Assimetria" project, including backend, frontend, deployment, automation, and AI model details.

---

## Backend

* **Language & Framework:** Node.js + Express
* **Endpoints:** REST API
* **Port:** `5000` (configurable via `BACKEND_PORT` environment variable)
* **Features:** CRUD operations for articles
* **Data format:** JSON

  ```json
  {
    "id": 123,
    "title": "Sample_title",
    "content": "Sample_content",
    "date": "2025-12-08T22:00:00Z"
  }
  ```
* **CORS:** Enabled for frontend access
* **AI Model Used:** HuggingFaceTB/SmolLM2-135M-Instruct (for article generation logic)

## Frontend

* **Language & Framework:** React.js
* **Port:** `3000` (configurable via `FRONTEND_PORT` environment variable)
* **Requests:** Uses Axios to communicate with backend API
* **Deployment:** Dockerized and hosted on AWS EC2

## Deployment

### AWS Services

* **EC2:** Hosts Dockerized frontend and backend
* **ECR:** Stores Docker images
* **CodeBuild:** Pulls repo, builds Docker images, pushes to ECR
* **Environment Variables:**

  * `BACKEND_PORT=5000`
  * `FRONTEND_PORT=3000`
  * `AWS_ACCOUNT_ID`
  * `AWS_REGION`
  * `ECR_REPO_BACKEND`
  * `ECR_REPO_FRONTEND`
  * `DEPLOY_DIR`
  * `IP` (backend hostname/IP)

### Scripts

* **deploy.sh:** Pulls latest Docker images from ECR and starts containers
* **init-ec2.sh:** Prepares EC2 instance, installs Docker, sets up directories

### Docker

* **Dockerfiles:** Separate for frontend and backend
* **Ports mapping:** 5000 (backend), 3000 (frontend)

### Automation

* **Daily Article Generation:**

  * Uses `node-cron`
  * Generates one new article per day using the HuggingFaceTB/SmolLM2-135M-Instruct model
* **Initial Articles:** Minimum of 3 existing articles

## CodeBuild Flow

1. Push code to GitHub
2. CodeBuild pulls repo, builds Docker images, pushes to ECR
3. EC2 pulls latest images and runs containers
4. Application available via EC2 public IP
