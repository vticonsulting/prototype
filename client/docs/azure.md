## Azure CLI

az account list
az account set --subscription 'my-subscription-name'
az group create --location westus --name MyRG
az vm create -n myVM -g MyRG --image UbuntuLTS --generate-ssh-keys
az group delete -n MyRGx`

docker run -it mcr.microsoft.com/azure-cli
docker run -it -v ${HOME}/.ssh:/root/.ssh mcr.microsoft.com/azure-cli

docker pull mcr.microsoft.com/azure-cli
docker rmi mcr.microsoft.com/azure-cli

## Workflow

az account list
az account set --subscription 'my-subscription-name'
az group create --location westus --name MyRG
az vm create -n myVM -g MyRG --image UbuntuLTS --generate-ssh-keys
az group delete -n MyRG
