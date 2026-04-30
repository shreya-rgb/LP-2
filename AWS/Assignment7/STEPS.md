# Step-by-Step Guide: AWS Assignment 7 - MERN Task Management Application

## Objective
Deploy a MERN-based task management system where users can create, update, and delete tasks. Ensure the frontend communicates with the backend API and the database is hosted properly.

---

## Step 1: Set up MongoDB Atlas (Database)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and log in.
2. (If you've done previous assignments, use the same cluster).
3. The connection string is already configured in `backend/server.js`.
4. *Note: MongoDB will automatically create a `tasks` collection for this to-do list app.*

## Step 2: Launch EC2 and Configure Ports
1. Launch an Ubuntu `t2.micro` EC2 instance.
2. In the **Security Group** settings, ensure you have these Inbound Rules:
   - **SSH (Port 22)**: To connect.
   - **Custom TCP (Port 3000)**: For the Backend API.
   - **Custom TCP (Port 3001)**: For the Frontend Interface.
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
Navigate to the Assignment 7 folder:
```bash
cd cloud-assignments/AWS/Assignment7
```

## Step 5: Run the Backend API
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
   *Output should say "Task Manager Backend running". Leave this terminal open!*

## Step 6: Run the Frontend Interface
1. Go to the AWS Console, select your instance, and open a **New Terminal Connection**.
2. Navigate to the frontend folder:
   ```bash
   cd cloud-assignments/AWS/Assignment7/frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the React app:
   ```bash
   npm start
   ```

## Step 7: Test the Task Manager
1. Go back to the AWS Console and copy your instance's **Public IPv4 address**.
2. Open a new browser tab and go to: `http://<YOUR_PUBLIC_IP>:3001`
3. You can now **Add**, **Update** (click to toggle complete/incomplete), and **Delete** tasks! ✅
