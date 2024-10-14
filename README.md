# Breast Cancer Detection WebApp

This is a web application that uses a machine learning model to predict whether a breast cancer is benign or malignant.

## Tech Stack

### Frontend :

- Next.js 14
- React 18
- Tailwind CSS

### Backend :

- Python 3.10
- Flask
- Tensorflow

## How to run the app using Docker

1. Install Docker
2. Clone the repo
3. Run `docker-compose up --build`

NOTE: App not working in Docker yet

## How to run the each service separately

### Frontend

1. `cd client`
2. `npm install`
3. `npm run start`
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Backend

1. `cd server`
2. `pip install -r requirements.txt`
3. `python main.py`
4. Open [http://localhost:3300](http://localhost:3300) with your browser to see the result.

## Status

- Frontend : Working Fine.
- Backend : Not working, due to some issues with the package versions, which requires building model from scratch.
