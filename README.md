# Simple remote fish feeder with camera for aquarium using raspberry pi

### Purpose
Be able to feed your fish and watch it when on vacation. Usually, feeders, I guess, do not have cameras.  
Very useful if you have a spare raspberry pi and some webcam and some reading tutorials skills.   

### Prerequisites

- Be willing to play with raspberry pi CMD and do some very simple soldering.
- Have (buy) a simple feeder Juwel Automatic Feeder (Juwel Easyfeed 15 Euro) or similar. 



<img src="https://images-na.ssl-images-amazon.com/images/I/61xPupca0OL._AC_SL1270_.jpg" data-canonical-src="https://images-na.ssl-images-amazon.com/images/I/61xPupca0OL._AC_SL1270_.jpg" width="300" height="200" />



### Advantages

- It is simple  
- No need to do 3d printing  
- It is cheap, especially, if you have spare old raspberry with some old webcam
- Raspbery powers feeder 
- It looks awesome 

### Hardware 
- Raspbery Pi (I used model B+)
- Juwel Automatic Feeder (just a simplest feeder with buttons around 15 Euro)


### Software 
- install `motion` https://tutorials-raspberrypi.com/raspberry-pi-security-camera-livestream-setup/
- install node v12.21.0

```
sudo wget -O - https://raw.githubusercontent.com/sdesalas/node-pi-zero/master/install-node-v12.21.0.sh | bash
tar -xzf  node-v12.21.0-linux-armv6l.tar.gz.1
cd   node-v12.21.0-linux-armv6l.tar.gz.1
sudo cp -R * /usr/local/

```

- In project folder

```
sudo npm install --unsafe-perm   onoff
npm i
```

//TODO finish
- mention basic auth   
- wiring   
- supervisorctl to start node  





