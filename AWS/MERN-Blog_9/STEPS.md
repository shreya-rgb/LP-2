# Step-by-Step Guide: AWS Assignment 4 - Online Blog Application

## Objective
Deploy a full-stack blog application (frontend, backend, and database) on a cloud platform. Configure the server environment so that users can create, view, and manage blog posts through a web interface.

---

## Step 1: Set up MongoDB Atlas (Database)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and log in.
2. Create a new Cluster (Free Tier).
3. Under **Database Access**, create a new database user (e.g., `shreya` with password `Shreya@123`).
4. Under **Network Access**, add the IP address `0.0.0.0/0` to allow access from anywhere.
5. Go to **Database** -> **Connect** -> **Connect your application**.
6. Copy the connection string.
7. *Note: We have already added the connection string in `backend/server.js`. The Blog app will automatically create a `posts` collection in your existing database!*

## Step 2: Launch EC2 and Configure Ports
1. Launch an Ubuntu `t2.micro` EC2 instance.
2. In the **Security Group** settings, ensure you have these Inbound Rules:
   - **SSH (Port 22)**: To connect.
   - **Custom TCP (Port 3000)**: For the Backend.
   - **Custom TCP (Port 3001)**: For the Frontend.
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
Navigate to the Assignment 4 folder:
```bash
cd cloud-assignments/AWS/Assignment4
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
   *Output should say "Blog Backend running". Leave this terminal open!*

## Step 6: Run the Frontend
1. Go to the AWS Console, select your instance, and open a **New Terminal Connection**.
2. Navigate to the frontend folder:
   ```bash
   cd cloud-assignments/AWS/Assignment4/frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the React app:
   ```bash
   npm start
   ```

## Step 7: Test the Blog App
1. Go back to the AWS Console and copy your instance's **Public IPv4 address**.
2. Open a new browser tab and go to: `http://<YOUR_PUBLIC_IP>:3001`
3. Enter a Blog Title and Content, and click "Add Post"! 🎉
