# AWS Assignment 2 - Virtual Network Communication

## Objective

To create a virtual network and enable communication between EC2 instances using private IP.

## Steps Performed

* Created two EC2 instances (node1 and node2)
* Verified both instances are in same VPC
* Connected to instances using EC2 Instance Connect
* Created a file in node1
* Transferred file to node2 using SCP and private IP
* Verified file transfer on node2

## Commands Used

### Create file on node1

```
echo "Hello from node1" > test.txt
```

### Transfer file to node2

```
scp test.txt ubuntu@<PRIVATE_IP_NODE2>:/home/ubuntu/
```

### Verify on node2

```
cat test.txt
```

## Output

File successfully transferred and displayed:
Hello from node1

## Conclusion

Successfully established communication between EC2 instances using private IP and SCP.
