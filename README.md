# Description
This repository provides a modified rule node element for the ThingsBoard rule chain. The element is a copy of the original REST API rule node. I just added the "PATCH"-option to the `rulenode-core-config.js` file to display "PATCH" in the UI of the rule node.  
Since this feature is not added to ThingsBoard yet, I decided to create my own rule chain element implementing the PATCH method.


## Restrictions
The REST API rule node is a little bit complex, implementing credentials and certificates for secure REST API calls. Therefore, I made some restrictions and removed the SAS authentication type. This authentication type would require some more classes to implement. Since this repository is only useful for earlier versions of ThingsBoard and only till the PATCH method will be implemented via feature, I decided to keep this rule node simple.  
You are welcome to create your own fork and implement SAS. 

# How to use it
The rule node is currently build for ThingsBoard 3.5.1.  
If you are using another version of ThingsBoard, you can either build it by yourself or ask if I would make another fork. I have not tested compatibility with higher versions of ThingsBoard, but it might work out of the box.  
You can either use the already built version or build your own from source.

## Build
Install maven.  
To build the project run `mvn clean install`.  
The rule node is created in folder /target.

## Install
Copy `rule-engine-1.0.0-custom-nodes.jar` from `/target` to your ThingsBoard extension folder, e.g.  
`cp /target/rule-engine-1.0.0-custom-nodes.jar /usr/shar/thingsboard/extensions/`

Change the owner of the file to thingsboard, e.g.  
`chown thingsboard:thingsboard /usr/shar/thingsboard/extensions/rule-engine-1.0.0-custom-nodes.jar`  

Restart ThingsBoard service, e.g.   
`systemctl restart thingsboard`

For help see the documentation at the [ThingsBoard website](https://thingsboard.io/docs/pe/user-guide/contribution/rule-node-development/#step-4-import-custom-rule-nodes-to-your-thingsboard-instance) on how to import custom rule nodes.

## Testing the new rule node
### Setting up a REST server
Install Node.js and npm.  
Change to directory `/rest_test`.  
Use `npm install` to install express from package.json.  
Use `node server.js` to start the REST-server.

The server listens to port 5000. It returns a few lines of code depending on the HTTP request. To check if the server is running open [localhost:5000]() in your webbrowser. You will see: "Hi!"

Open ThingsBoard and make a new rule chain. Take a generator and connect it to the new PATCH REST API rule node. Activate debbuging, send a message either with GET, POST or PATCH to `localhost:5000/` 

GET returns `Hi`.  
PATCH adds numbers provided via variables `a` and `b`.  
POST returns variable `a`.




# Sources
The example sceleton structure for this build is from: https://github.com/thingsboard/rule-node-examples  
The original REST API rule node is from [ThingsBoard](https://github.com/thingsboard/thingsboard)  
