# GameHub

**GameHub** is a video game discovery web application that helps you find new and interesting games to play. With GameHub, you can search for games by platform, genre, and more.

> **Live Demo**: [game-hub-opal-nine.vercel.app](https://game-hub-opal-nine.vercel.app)

---

## Features

*  **Browse** games by genre, platform, and search query
*  **Sort** games by relevance, date, name, rating, and more
*  View detailed game info with **trailers and screenshots**
*  **Infinite scrolling** with seamless data fetching
*  Fully **responsive design** for all devices

---

## Technologies Used

* **React**: TypeScript library for building user interfaces.
* **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript.
* **Vite**: Next Generation Frontend Tooling.
* **Chakra UI**: Library for building user interfaces.
* **Axios**: Promise-based HTTP client for making API requests.
* **React Query**: Data-fetching library for React.
* **Zustand**: Bear necessities for state management.
* **React Router**: Declarative routing for React.

---

## Getting Started

### Prerequisites

* **Node.js** and **npm** installed on your machine.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/norangejc/game-hub.git
   cd game-hub
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Obtain a RAWG API key**:

   * Sign up at [RAWG](https://rawg.io/apidocs) to get your API key.

4. **Configure the API key**:
  
    The RAWG API key is hardcoded directly into `api-client.ts`:

    ```ts
      const axiosInstance = axios.create({
        baseURL: "https://api.rawg.io/api/",
        params: {
          key: "3fe2b38cd80a4aa88fca9bc7fa0ef0d6",
        },
      });
      ```

5. **Start the development server**:

   ```bash
   npm run dev
   ```

6. **Open your browser** and navigate to `http://localhost:5173/`.

---

## Author

* **norangejc** – [GitHub](https://github.com/norangejc)

---


