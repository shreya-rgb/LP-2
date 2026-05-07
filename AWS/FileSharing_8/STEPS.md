# Step-by-Step Guide: AWS Assignment 2 - Virtual Network Communication

One thing to be aware of:
Both instances must be in the same Security Group or the Security Group of node2 must allow SSH (port 22) inbound from node1's private IP — otherwise the SCP command will fail. Your steps don't explicitly mention this, but in most default AWS setups it works automatically since both instances share the default Security Group.

## Objective
Create a virtual network and enable communication between two EC2 instances using their Private IP addresses.

---

## Step 1: Launch Two EC2 Instances
1. Log in to the **AWS Management Console**.
2. Navigate to **EC2** and click **Launch Instance**.
3. Launch **Instance 1**:
   - **Name**: `node1`
   - **AMI**: Ubuntu Server
   - **Instance Type**: `t2.micro`
   - **Key Pair**: Select your existing key pair (e.g., `aws-key.pem`)
4. Launch **Instance 2**:
   - Repeat the same steps to launch a second instance named `node2`.
   - Use the **same key pair**.
5. Wait for both instances to be in the `Running` state.

## Step 2: Get node2's Private IP
1. In the EC2 Dashboard, click on **`node2`**.
2. In the details pane, copy the **Private IPv4 address** (e.g., `172.31.x.x`). Save this for later.

## Step 3: Connect to node1 and Create a File
1. Select **`node1`** and click **Connect**.
2. Use **EC2 Instance Connect** to open the terminal.
3. Create a test file:
   ```bash
   echo "Hello from node1" > test.txt
   ```
4. Verify the file exists:
   ```bash
   cat test.txt
   ```

## Step 4: Add Your SSH Key to node1
To securely transfer files to `node2`, `node1` needs your SSH key.
1. Open your `.pem` key file on your local computer and copy all its text.
2. In the `node1` terminal, create the key file:
   ```bash
   nano mykey.pem
   ```
3. Paste the key text, then save and exit (`Ctrl + O`, `Enter`, `Ctrl + X`).
4. Give the key the correct secure permissions:
   ```bash
   chmod 400 mykey.pem
   ```

## Step 5: Transfer the File using SCP
Transfer the file from `node1` to `node2` using `node2`'s Private IP.
1. Run the SCP command (replace with your node2 Private IP):
   ```bash
   scp -i mykey.pem test.txt ubuntu@<NODE2_PRIVATE_IP>:/home/ubuntu/
   ```
2. If prompted `Are you sure you want to continue connecting?`, type `yes` and press Enter.

## Step 6: Verify on node2
1. Go back to the AWS Console, select **`node2`**, and click **Connect**.
2. Open the terminal for `node2`.
3. Check if the file is there:
   ```bash
   ls
   ```
4. Read the file to confirm successful transfer:
   ```bash
   cat test.txt
   ```
   *Expected Output: `Hello from node1`* 🎉
