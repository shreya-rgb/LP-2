# Step-by-Step Guide: AWS Assignment 1 - Website Hosting

This guide outlines the exact steps to create an EC2 instance and host a static HTML website using Apache2.

## Step 1: Launch an EC2 Instance
1. Log in to the **AWS Management Console**.
2. Navigate to **EC2** under the "Compute" services.
3. Click on the **Launch Instance** button.
4. **Name**: Enter a name for your instance (e.g., `Shreya-WebServer`).
5. **AMI**: Select **Ubuntu Server** (e.g., Ubuntu Server 22.04 LTS or 24.04 LTS) from the Quick Start list.
6. **Instance Type**: Select `t2.micro` (Free Tier eligible).
7. **Key Pair**: Create a new key pair (e.g., `aws-key.pem`) or select an existing one. Save it securely on your computer.

## Step 2: Configure Network & Security Group
1. Under **Network settings**, check the boxes for:
   - **Allow SSH traffic from** -> **Anywhere** (or your IP)
   - **Allow HTTP traffic from the internet** (This automatically opens Port 80, which is required for the website).
2. Click **Launch Instance** and wait for the instance state to become `Running`.

## Step 3: Connect to the EC2 Instance
1. Select your running instance and copy its **Public IPv4 address**.
2. Click the **Connect** button at the top.
3. You can use **EC2 Instance Connect** (the easiest way directly from the browser) or use SSH from your terminal/command prompt:
   ```bash
   ssh -i "aws-key.pem" ubuntu@<YOUR_PUBLIC_IP>
   ```

## Step 4: Install Apache2 Web Server
Once connected to the terminal of your Ubuntu instance, run the following commands to install the Apache server:

1. Update the package list:
   ```bash
   sudo apt update
   ```
2. Install Apache2:
   ```bash
   sudo apt install apache2 -y
   ```
3. Check if the Apache service is running:
   ```bash
   sudo systemctl status apache2
   ```

## Step 5: Deploy the HTML Website
Now, you need to replace the default Apache landing page with your own `index.html`.

1. Navigate to the Apache web directory:
   ```bash
   cd /var/www/html
   ```
2. Remove the default `index.html` file:
   ```bash
   sudo rm index.html
   ```
3. Create your new `index.html` file:
   ```bash
   sudo nano index.html
   ```
4. **Copy and paste** the HTML code provided in the `index.html` file of this repository.
5. Save and exit the nano editor:
   - Press `Ctrl + O`, then `Enter` to save.
   - Press `Ctrl + X` to exit.

## Step 6: Test the Hosted Website
1. Go back to the AWS Management Console.
2. Copy the **Public IPv4 address** of your EC2 instance.
3. Open a new tab in your web browser and paste the IP address: `http://<YOUR_PUBLIC_IP>`
4. You should see your website with the message **"Hello, I'm Shreya"** and the **"Click Me"** button! 🎉
