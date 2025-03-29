# 🌍 Node.js Backend App

This is a simple backend application built using **Node.js**. It serves dynamic web pages by reading HTML templates and injecting data from a JSON file. The application handles different routes like **overview**, **product**, and **API**.

## 🚀 Features

- ✅ **Node.js HTTP Server** - Serves web pages and API responses.
- ✅ **File System (fs)** - Reads and serves HTML templates and JSON data.
- ✅ **Dynamic Content Injection** - Uses a function to replace placeholders with real data.
- ✅ **Routing System** - Handles multiple routes (`/overview`, `/product`, `/api`).
- ✅ **JSON Data Parsing** - Reads a local JSON file and formats it for web pages.

## 🛠 Tech Stack

- **Node.js** - Backend runtime environment.
- **HTTP Module** - Creates the web server.
- **FS Module** - Reads files for dynamic content.
- **URL Module** - Parses request URLs.

## 🏗 Setup & Installation

### 1️⃣ Clone the repository  
```sh
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
```

### 2️⃣ Install dependencies (if needed)
```sh
npm install
```

### 3️⃣ Run the server
```sh
node index.js
```

### 4️⃣ Access the application  
- Open [http://localhost:8000](http://localhost:8000) in your browser.  
- Try visiting `/overview`, `/product`, or `/api` routes.  

## 🎯 How It Works

1. The **server** listens on `port 8000`.  
2. When a request is made, it checks the URL and serves the correct content.  
3. The `replaceTemplate()` function dynamically injects product data into the templates.  
4. JSON data is read and converted into valid HTML responses.  
 
---

🔥 **Built with Node.js** 🚀
