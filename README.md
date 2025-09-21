# URL Shortener Service

Welcome to the **URL Shortener Service**, a simple yet powerful solution to shorten long URLs and track their usage with detailed analytics.

## Features

- **URL Shortening**: Quickly shorten long URLs into compact links.  
- **Detailed Analytics**:  
  - Track total clicks.  
  - View the original URL, creation date, and expiry.  
  - Access detailed visiting history including timestamp, referrer, and location.  

## Tech Stack

- **Backend Framework**: [Express.js](https://expressjs.com/)  
- **Database**: [MongoDB](https://www.mongodb.com/)  
- **Unique ID Generator**: [ShortID](https://www.npmjs.com/package/shortid) or [Nanoid](https://github.com/ai/nanoid)  
- **Environment Management**: [dotenv](https://github.com/motdotla/dotenv)  
- **Request Logging**: [Morgan](https://www.npmjs.com/package/morgan)  

---

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (Latest version recommended)  
- [MongoDB](https://www.mongodb.com/) (Local or cloud instance like MongoDB Atlas)
- [ENV] (PORT and MONGOURI)

##Note - Due to time limit I hardcoded the MongoURI which i know is not good practice.
