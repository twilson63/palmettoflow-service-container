# Palmetto Flow Services Container Example

This is an example or template of a palmetto flow
service container.

The purpose of the service container is to initialize one or more services and pass the commit-log or pub/sub adapter to the services.

## Usage example

``` sh
npm i json -g
# clone service container template and give it a project name
git clone https://github.com/twilson63/services-container.git [container_name]
cd container_name
# remove current origin
git remote rm origin
# install services
npm i svc1
npm i svc2
# install adapter
npm i palmettoflow-couchdb
# setup configuration
json -I -f config/common.json -e 'this.palmetto.adapter = "palmettoflow-couchdb"'
json -I -f config/common.json -e 'this.palmetto.options = { "endpoint": "http://localhost:5984", "app": "app_log"}'
# run service
npm start
```


## Configuration

The configuration for service containers is located in the `config/common.json` file, when each service is installed, a post-install task is run to place the service name in the config/json common.json file.

