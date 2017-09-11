#!/bin/bash
echo 'Hello World!'

# get prompt values
USERNAME=$1
URL=$2
PASSWORD=$3

# Get all the information for the remove server
# things like the protocol and the port will be defaults.

# Information to collect :
# 1. Username
# 2. URL
# 3. Password

# $url = sftp://<url>:1970/home/<username>/www

# $user = <username>

# $password = <password>

# set up config for git-ftp
# What is the Url for the domain ? ( Default : 217.115.119.177 )
# git config git-ftp.url <input>

# What is the username ? 
# git config git-ftp.username <input>

# What is the password?
# git config git-ftp.password <input>

# if [ has already been initiated] 
# git ftp push
# else
# git ftp-init
# fi

