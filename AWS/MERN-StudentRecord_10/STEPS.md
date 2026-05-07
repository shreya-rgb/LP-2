# Step-by-Step Guide: AWS Assignment 5 - Cloud-Based Student Record Management System

## Objective
Deploy a web application that stores and manages student records using a database and backend API. Users can perform operations such as adding, updating, and retrieving student data.

---

## Step 1: Set up MongoDB Atlas (Database)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and log in.
2. Create a new Cluster (Free Tier) if you haven't already.
3. Under **Database Access**, create a new database user.
4. Under **Network Access**, add the IP address `0.0.0.0/0` to allow access from anywhere.
5. Go to **Database** -> **Connect** -> **Connect your application**.
6. Copy the connection string.
7. *Note: The connection string is already in `backend/server.js`. The app will automatically create a `students` collection in your database!*

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
Navigate to the Assignment 5 folder:
```bash
cd cloud-assignments/AWS/Assignment5
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
   *Output should say "Student Backend running". Leave this terminal open!*

## Step 6: Run the Frontend Interface
1. Go to the AWS Console, select your instance, and open a **New Terminal Connection**.
2. Navigate to the frontend folder:
   ```bash
   cd cloud-assignments/AWS/Assignment5/frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the React app:
   ```bash
   npm start
   ```

## Step 7: Test the Application
1. Go back to the AWS Console and copy your instance's **Public IPv4 address**.
2. Open a new browser tab and go to: `http://<YOUR_PUBLIC_IP>:3001`
3. You can now **Add**, **View**, and **Update** Student Records! 🎉
