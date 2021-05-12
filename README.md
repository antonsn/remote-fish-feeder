# Simple remote fish feeder for aquarium with camera for aquarium using raspberry pi

### Purpose
Be able to feed your fish and watch it when on vacation for exampe using your phone. Usually, feeders, I guess, do not have cameras.  
Very useful if you have a spare raspberry pi and some webcam and some reading tutorials skills.   

### Prerequisites

- Be willing to play with raspberry pi CMD and do some very simple soldering.
- Have (buy) a simple feeder Juwel Automatic Feeder (Juwel Easyfeed 15 Euro) or similar. 
- Make app available outside the home network. One can use Dynamic DNS Providers. It is not as scary as it sounds, it is just another tutorial to read.


<img src="https://images-na.ssl-images-amazon.com/images/I/61xPupca0OL._AC_SL1270_.jpg" data-canonical-src="https://images-na.ssl-images-amazon.com/images/I/61xPupca0OL._AC_SL1270_.jpg" width="300" height="200" />


### Features

- uses proper feeding device 
- no need to do 3d printing  
- it is cheap, especially, if you have spare old raspberry with some old webcam
- raspberry pi powers feeder 
- it looks awesome 
- you can see you fish
- uses basic authentication so noone else can feed your fish


### Hardware 
- Raspbery Pi (I used model B+)
- Juwel Automatic Feeder (Juwel Easyfeed) or with similar approach 3 Volt (2 x 1.5v batteries) which has a button for manual feeding.


### Software 
1. install   <s> `motion` https://tutorials-raspberrypi.com/raspberry-pi-security-camera-livestream-setup/</s>   
 In the end I end up using [mjpeg-streamer](https://github.com/jacksonliam/mjpg-streamer) because it is not using as much CPU as `motion` on my hardware
 but if your hardcare is ok with motion go with it


2. install node v12.21.0

```
sudo wget -O - https://raw.githubusercontent.com/sdesalas/node-pi-zero/master/install-node-v12.21.0.sh | bash
tar -xzf  node-v12.21.0-linux-armv6l.tar.gz.1
cd   node-v12.21.0-linux-armv6l.tar.gz.1
sudo cp -R * /usr/local/

```

3. Install app

In project folder
```
sudo git clone <this repo>
cd <this repo>
sudo npm install --unsafe-perm   onoff
sudo npm i
```

4. install supervisorctl

```
sudo apt-get install supervisor

```

Point supervisorctl config to the location of your app
```
sudo nano /etc/supervisor/supervisord.conf
```

```
[include]
files = /home/pi/remote-fish-feeder/supervisor_scripts/*.conf

```

### Configuration

- check/provide your camera stream url in `server.js`, especially, if you are not using `mjpeg-streamer`
- change password  in `server.js` so noone else can access your fish
- do a nasty router config if you do not have a static IP. (Dynamic DNS Providers)

//TODO 

- wiring   





