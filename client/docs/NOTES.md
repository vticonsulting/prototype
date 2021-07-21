Catharine Chapman
- Re
---


Customer Service - Call Queue, Schedule
Scheduling Support - Triage, Pending, Schedule, Call Queue
Field Services - Assigned, Confirmed, Working
Claims Services - Review, Complete
Estimating Services
Billing / Collections - Billed, Closed


# Actions

- Submit a Claim
- Schedule Unaccompanied field inspection
- Make a Payment


# User Types
- Adjuster
- Billing Contact



# Statuses

- Assigned
- Billed
- Call Queue
- Closed
- Complete
- Confirmed

User Story 684


0
https://www.paulolyslager.com/why-users-blame-themselves-designers-mistakes/



The database context is the main class that coordinates Entity Framework functionality for a data model. This class is created by deriving from the Microsoft.EntityFrameworkCore.DbContext class.

## Let's Learn .NET: Web APIs

https://channel9.msdn.com/Shows/lets-learn-dotnet/Web-APIs#comments

https://graph.microsoft.com/v1.0/me
https://collectionapi.metmuseum.org/public/collection/v1/departments


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


# Personas / User Types

- Technician (Inspector)
- Customer Service Rep
- Adjuster
- Insured
- Field Manager
- Customer
- Service Tech
- Insurance Adjuster

## Navigation

- Projects


## Views/Pages

- Closed Projects
- Complete Claims
- Unpaid Invoices
- Claim Request
- Settings (Service Types, Announcements, FAQs, Territories, IA Firms, What's New, Tokens)
- Profile

## UI

- Claim Information
- Service Type
- Adjuster Information
- Billing Information

## Model or Attribute

- Adjuster
- Appointment
- Assignment
- Carrier
- Claim
- Department
- Estimate
- Inspection
- Invoice
- Pending Claim
- Permission
- Project
- Project Service Type
- Project Source
- Project Status
- Property
- Region
- Report
- Role
- RolePermission
- Schedule
- Service
- Service Area
- Service Area Postal Code
- Service Area Technician
- Service Region
- Service Region Manager
- Service Type
- Territory
- User
- UserType

## Department

- Customer Service
- Scheduling Support
- Field Services
- Claim Services
- Estimating Services
- Billing / Collections

## Status

- Call Queue
- Schedule
- Triage
- Pending
- **Assigned** Claim has been assigned to a technician to complete the inspection
- **Confirmed** Technician has confirmed appointment with adjuster/insured
- **Working** Technician on-site
- **Review** Claim must be reviewed for required documentation and quality review checkpoints
- **Complete** Passes all quality checkpoints and documentation sent to adjuster
- **Billed** Claims invoice has been sent to the customer
- **Closed** Claim submitted to Hancock

## Service Type

- Direct Inspect
- Virtual Inspect
- Emergency Tarp
- Estimate
- Ladder Assist


## Carriers

- Esurance
- Encompass
- California State Auto Association
- Liberty Mutual

## Vendors

- Xactware
- Symbility
- Xactimate Estimates
- XactAnalysis Qualify Assurance
- Hover
- EagleView

## Workflow

The claim starts when the adjuster calls in and submits a claim with a representative over the web portal. With all the necessary information (Claim Information, Service Type, Adjuster's Contact Information, and billing information).

Once the claim has been submitted with the assistance of the customer service representative, the claim is then pushed to Exemplar.

Customer support is part of the customer service department.  The customer service representatives are required to make outbound calls to insureds on behalf of the insurance carriers, to schedule unaccompanied field inspections.

## Icons

- inbox-in
- ticket
- tag
- support
- photograph
- newspaper
- document
- document-text
- dots-horizontal
- document-report
- credit-card
- cog
- folder -
- collection - projects
- clipboard-list
- clipboard-copy
- clipboard
- clipboard-check
- calendar - schedule
- camera
- briefcase
- archive
- adjustments
- calculator - estimate

## Actions

- Close Billed Projects
- Export to QBXML
- Export to CSV
- Reset Billed to Complete
- Reset List
- Add Application User
- Add Service Tech
- Add Insurance Adjuster
- Add Project
- Export to CSV
- Bulk Assign
- Accept
- Add Appoinment Button
- Add Customer
- Add Business Unit


## Projects

- All projects
- Archived
- Billed
