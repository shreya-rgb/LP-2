# Step-by-Step Guide: Student Record Management (2 Instances)

## Objective
Deploy a cloud-based student record management system using **2 separate AWS EC2 instances** — one for the Backend and one for the Frontend.

---

## Step 1: Set up MongoDB Atlas (Database)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and log in.
2. Create a new Cluster (Free Tier).
3. Under **Database Access**, create a new database user (e.g., `shreya` with password `Shreya@123`).
4. Under **Network Access**, add the IP address `0.0.0.0/0` to allow access from anywhere.
5. Go to **Database** -> **Connect** -> **Connect your application**.
6. Copy the connection string.
7. *Note: Connection string is already in `backend/server.js`.*

## Step 2: Launch 2 EC2 Instances

### Instance 1: Backend
1. Launch an Ubuntu `t2.micro` EC2 instance. Name it `Student-Backend`.
2. **Security Group** Inbound Rules:
   - **SSH (Port 22)**: To connect to the terminal.
   - **Custom TCP (Port 3000)**: For the Node.js Backend API.

### Instance 2: Frontend
1. Launch **another** Ubuntu `t2.micro` EC2 instance. Name it `Student-Frontend`.
2. **Security Group** Inbound Rules:
   - **SSH (Port 22)**: To connect to the terminal.
   - **Custom TCP (Port 3001)**: For the React Frontend.

3. **Note down both Public IPv4 addresses:**
   - `BACKEND_IP` = Backend instance's Public IP
   - `FRONTEND_IP` = Frontend instance's Public IP

## Step 3: Set up Backend Instance
1. Click on **Student-Backend** instance → **Connect** (browser terminal).
2. Install Node.js and Git:
   ```bash
   sudo apt update
   sudo apt install nodejs npm git -y
   ```
3. Clone the repository:
   ```bash
   git clone https://github.com/shreya-rgb/LP-2.git
   ```
4. Navigate to backend:
   ```bash
   cd LP-2/AWS/MERN-StudentRecord_10/backend
   ```
5. Install dependencies and start:
   ```bash
   npm install
   node server.js
   ```
   *Output should say "Server running on port 3000". Leave this terminal open!*

## Step 4: Set up Frontend Instance
1. Click on **Student-Frontend** instance → **Connect** (browser terminal).
2. Install Node.js and Git:
   ```bash
   sudo apt update
   sudo apt install nodejs npm git -y
   ```
3. Clone the repository:
   ```bash
   git clone https://github.com/shreya-rgb/LP-2.git
   ```
4. Navigate to frontend:
   ```bash
   cd LP-2/AWS/MERN-StudentRecord_10/frontend
   ```

## Step 5: Update API URL to Point to Backend IP ⚠️ CRITICAL
The frontend needs to know the Backend instance's IP (not `localhost`):
```bash
# First, check which files have 'localhost':
grep -r "localhost" src/

# Replace localhost with your Backend EC2's Public IP:
sed -i 's/http:\/\/localhost:3000/http:\/\/BACKEND_IP:3000/g' src/App.js
```
> Replace `BACKEND_IP` with your actual Backend instance's Public IPv4 address!

## Step 6: Start the Frontend
```bash
npm install
npm start
```

## Step 7: Test the Student Record App
1. Open your browser and go to: `http://FRONTEND_IP:3001`
2. Add, view, update, or delete student records! The frontend (Instance 2) talks to the backend (Instance 1), which saves to MongoDB Atlas! 🎉

---

## Architecture
```
User Browser → Frontend EC2 (port 3001) → Backend EC2 (port 3000) → MongoDB Atlas
```
