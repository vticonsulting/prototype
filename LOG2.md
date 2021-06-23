
az account list
az account set --subscription 'my-subscription-name'
az group create --location westus --name MyRG
az vm create -n myVM -g MyRG --image UbuntuLTS --generate-ssh-keys
az group delete -n MyRG


## Log

https://aka.ms/tryfunctions
https://aka.ms/serverless-quickstart
http://aka.ms/dtl

- 2021-06-13 - Reg's Birthday
- 2021-06-12 - Kiwanis' House Warming / Birthday party
- 2021-06 - Drop off vehicle to Braxton Automotive
- 2021-06-08
    - AM Standup
- 2021-06-07
    - AK working on 692
    - No new Service Desks tickets
    - 3 categories of File upload errors:
        - 85 Bad Gateway errors,
        - 202 Internal Server Errors (add try catches)
        - 284 Status 0
    - Scott
        - Further refining changes from Ben's fix
        - File upload
        - Authorization
    - Karthic
        - Will continue to gather ...
    - Karl
        - All External Claims will now go in as Pending Status via Christina
        - Ladder assist will go to Triage
        - Researching Xactware Send Function
    - AM Photo fix push on Friday still error
    - AM Finished Benefits enrollment
- 2021-06-04
    - Deployment on Friday

- Returned rental, Picked up car from Braxton Automotive
- Extended rental
- Watched Entity Core
- Finished LinkedIn Learning's C# Fundamentals Course
- Started LinkedIn Learning's C# Fundamentals Course
- 2021-05- Started Pluaralsight's 6-month's Trial membership
- Created personal Microsoft Azure account for learning. $200 credit for use
- Watched several Microsoft YouTube Channel videos
- Created Private Microsoft Twitter List
- 2021-06-04
    - AM Drove to Lexus Automotive for 2nd opinion, initial diagnoses and recommendation confirm, Drove around 285, Called Gil at Braxton to rescedule upon statisfying 70 - 100 miles
    - 02:00 Chatted with Carlos
        - Show, Don't Tell
        - https://uxplanet.org/ux-infinite-scrolling-vs-pagination-1030d29376f1
- 2021-06-03
    - Staff meeting
    - 2 Exemplar Overview w/Jean Finley Scheduling (Facilitated by Monica Ariza)
        - Slow, Opportunity, TODO Log Adjuster field bug
- 2021-06-02
    - Returned Avis Rental
    - Uber to Braxton Automotive
    - Drove car home
- 2021-06-01
    - 11:00 Eye exam
- Laravel 8 from Scratch
- 2021-05-02 -
- 2021-05-27
    - Exemplar Core Solution Deep Dive
- 2021-05-26
    - Exemplar Solution Deep Dive
- 2021-05-25 - Orientaion w/Michael and David
    - 12:30 Orientation w/Micaheal and David

- 2021-05-24 - First day, in office Met Sadia Kennedy, David, Tedron in person, Carlos, Michael and Kalonji virtually, Orientation w/Joseph
    - 9:30 Orientation w/Sadia Kennedy
    - 2:30 Our Work w/David McCampbell
    - 3:30 Walk-thru Azure DevOps w/ Joseph Ernest

## Workflow

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
