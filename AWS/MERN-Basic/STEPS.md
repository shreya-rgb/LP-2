# Step-by-Step Guide: AWS Assignment 3 - MERN Stack Deployment

## Objective
Deploy a full MERN (MongoDB, Express, React, Node.js) application on an AWS EC2 instance.

---

## Step 1: Set up MongoDB Atlas (Database)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and log in.
2. Create a new Cluster (Free Tier).
3. Under **Database Access**, create a new database user (e.g., `shreya` with password `Shreya@123`).
4. Under **Network Access**, add the IP address `0.0.0.0/0` to allow access from anywhere (since your EC2 IP might change).
5. Go to **Database** -> **Connect** -> **Connect your application**.
6. Copy the connection string. Replace `<password>` with your user's password.
7. *Note: We have already added the connection string in `backend/server.js` for this exam setup.*

## Step 2: Launch EC2 and Configure Ports
1. Launch an Ubuntu `t2.micro` EC2 instance.
2. In the **Security Group** settings, ensure you have these Inbound Rules:
   - **SSH (Port 22)**: To connect to the terminal.
   - **Custom TCP (Port 3000)**: For the Node.js Backend.
   - **Custom TCP (Port 3001)**: For the React Frontend.
3. Wait for the instance to run and click **Connect**.

## Step 3: Set up EC2 Environment
In your EC2 terminal, install Node.js and Git:
```bash
sudo apt update
sudo apt install nodejs npm git -y
```

## Step 4: Clone the Repository
Clone your GitHub repository directly into the EC2 instance:
```bash
git clone https://github.com/shreya-rgb/cloud-assignments.git
```
Navigate to the Assignment 3 folder:
```bash
cd cloud-assignments/AWS/Assignment3
```

## Step 5: Run the Backend
1. Go into the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node server.js
   ```
   *Output should say "Server running on port 3000". Leave this terminal open!*

## Step 6: Run the Frontend
1. Go to the AWS Console, select your instance, and open a **New Terminal Connection** (so the backend keeps running).
2. Navigate to the frontend folder:
   ```bash
   cd cloud-assignments/AWS/Assignment3/frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the React app:
   ```bash
   npm start
   ```

## Step 7: Test the App
1. Go back to the AWS Console and copy your instance's **Public IPv4 address**.
2. Open a new browser tab and go to: `http://<YOUR_PUBLIC_IP>:3001`
3. Enter a name and click "Add User". This connects to the backend and saves to your MongoDB database! 🎉
