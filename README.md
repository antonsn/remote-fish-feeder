
<meta name="google-site-verification" content="5RGJyO6RePAA9Y6gf2l3iBlzw2MW7S8GwedxUORU3v8" />

# Simple remote fish feeder for aquarium with camera using raspberry pi

### Purpose
Be able to feed your fish and watch it when on vacation for exampe using your phone. Usually, feeders, I guess, do not have cameras.  
Very useful if you have a spare raspberry pi and some webcam and some reading tutorials skills.   

### Video description (on click)

[![feeder video](/pic/aquarium_small.jpg)](https://youtu.be/Ey8n5sQXgew)


### Prerequisites

- Be willing to play with raspberry pi CMD and do some very simple soldering.
- Have (buy) a simple feeder Juwel Automatic Feeder (Juwel Easyfeed 15 Euro) or similar. 
- Make app available outside the home network. One can use Dynamic DNS Providers. It is not as scary as it sounds, it is just another tutorial to read.


<img src="/pic/feeder.jpg" width="400" height="600" />

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

<img src="https://images-na.ssl-images-amazon.com/images/I/61xPupca0OL._AC_SL1270_.jpg" data-canonical-src="https://images-na.ssl-images-amazon.com/images/I/61xPupca0OL._AC_SL1270_.jpg" width="150" height="100" />


### Wiring 

<img src="/pic/feeder-wiring1.jpg" />

For this particular feeder `feedPin.writeSync(0)` should be manually start the process.
I used 1k resistor between GPIO pin and switch but it might be unnecessary. 

[+] is connected to PI 3.3V   
[-] connected to PI ground   



### Software 
1. install   <s> [motion](https://motion-project.github.io/) https://tutorials-raspberrypi.com/raspberry-pi-security-camera-livestream-setup/</s>   
 In the end I end up using [mjpeg-streamer](https://github.com/jacksonliam/mjpg-streamer) because it is not using as much CPU as `motion` on my hardware
 but if hardware  is ok with  [motion](https://motion-project.github.io/) go for it


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
Needed to start processes o n startup.


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

After changing configs please run:

`sudo supervisorctl  reread & sudo supervisorctl update`


Some useul supervisorctl commands:     

```
sudo supervisorctl status
sudo supervisorctl stop all
sudo supervisorctl start all

 ```
 

### Configuration

- check/provide your camera stream url in `server.js`, especially, if you are not using `mjpeg-streamer`
- change password  in `server.js` so noone else can access your fish
- change the resolution if needed in [video.conf](https://github.com/antonsn/remote-fish-feeder/blob/main/supervisor_scripts/video.conf)
- do a nasty router config if you do not have a static IP. Check Dynamic DNS Providers tutorials.

For example I used https://www.duckdns.org/ and in `Dynamic DNS Settings` of my router. 


### Questions
If any questions/feedback please leave in video comments. I can also provide image of the raspberry pi OS with everything preinstalled if needed.   



 





