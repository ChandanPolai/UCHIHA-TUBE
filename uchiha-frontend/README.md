<!-- # PlayTube Frontend (YouTube + Twitter)

## Overview

``PlayTube (YOUTUBE + TWITTER)`` is a project designed that have functionality of a video hosting platform similar to YouTube and micro-blogging feature similar to twitter. This project's backend is built using Node.js, Express.js, React.js, MongoDB, and incorporates various other technologies to ensure a robust and system. The project aims to provide a complete features for a video hosting website, featuring essential functionalities such as user authentication, video uploading, liking, disliking, commenting, subscribing/unsubscribing, admin panel, watch history, liked videos etc.It includes features that utilizing standard practices such as JWT, bcrypt, access tokens, and refresh tokens for security. Find more about his project in the documentation below.

## Important links

| Content              | Link                                                                        |
| ---------------------|-----------------------------------------------------------------------------|
| Live Link            | [click here](https://playtube-by-yashpz.vercel.app)                         |
| API Documentation    | [click here](https://documenter.getpostman.com/view/32807699/2sA3XPChSM)    |
| Model                | [click here ](https://app.eraser.io/workspace/cATefMPkrAdzR9c6teox?origin=share) |

## Features

### User Management:

- Registration, login, logout, change password
- Profile management (avatar, cover image, other details)
- Watch history tracking and Clearing Watch History
- Liked videos tracking

### Video Management:

- Video upload
- Canceling Video upload with all resources cleaned up on backend.
- Visibility control (publish/un-publish)
- Video editing and deletion
- Video Search and pagination

### Tweet Management:

- Tweet creation and publishing
- Viewing user tweets
- Updating and deleting tweets
- Liking-disliking tweets

### Subscription Management:

- Subscribing to channels
- Viewing Channel subscriber
- Viewing Subscribed channel lists

### Playlist Management:

- Creating, updating, and deleting playlists
- Adding videos to playlists
- Removing videos from playlists and undoing them
- Viewing user playlists

### Like Management:

- Liking and Un-liking videos, comments, and tweets
- Viewing liked videos

### Comment Management:

- Adding, updating, and deleting comments on videos

### Dashboard:

- Viewing channel statistics (views, subscribers, videos, likes)
- Accessing uploaded videos and Controls
- Viewing Video statistics (PublishStatus, VideoName, DateUploaded, Views, TotalComments, LikeRatings)

### Health Check:

- Endpoint to verify the server's health

## Technologies

- Node.js: The runtime environment for executing JavaScript code server-side.
- Express.js: A web application framework for Node.js.
- MongoDB: A NoSQL database used for storing application data.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.
- JWT: JSON Web Tokens for securely transmitting information between parties as a JSON object.

## Installation and Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Yash-Zanzarukiya/PlayTube-Frontend.git
    ```

2. **Install dependencies:**

    ```bash
    cd PlayTube-Frontend
    npm install
    ```

3. **Set up environment variables:**
    Create a .env in root of project and fill in the required values in the .env file using .env.sample file

4. **Start the server:**

    ```bash
    npm run dev
    ```

## Contact

For any questions or suggestions, please contact me at my socials.

## Acknowledgments

Thanks to all my Instructors.

## License

This project is licensed under [ChaiAurCode](https://www.youtube.com/@chaiaurcode). -->