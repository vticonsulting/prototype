# Microsoft Ecosystem

[[toc]]

## Azure Functions

<https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-node?tabs=v2#node-version>

## Azure Static Web Apps

### Roles

Every user who accesses a static web app belongs to one or more roles. There are two built-in roles that users can belong to:

- anonymous: All users automatically belong to the anonymous role.
- authenticated: All users who are logged in belong to the authenticated role.

Beyond the built-in roles, you can create new roles, assign them to users via invitations, and reference them in the `staticwebapp.config.json` file.

#### Role management

##### Add a user to a role

To add a user to a role, you generate invitations that allow you to associate users to specific roles.

Roles are defined and maintained in the`staticwebapp.config.json` file.

<https://docs.microsoft.com/en-us/azure/static-web-apps>

### Preview URLs

Sometimes you want to see your changes in a staging site before publishing to the live web site. Azure Static Web Apps lets you see preview your changes through preview URLs. You can create a preview URL by creating a pull request against the branch that your GitHub Action is watching. Your live web site won't be affected. Instead, a new staging version of your app is created. If you go back and check your pull request on GitHub you'll notice that a link to the staging version posted in the Conversation tab.

The following table shows how Azure Static Web Apps will publish your app to different URLs. Your app publishes to one URL while a pull request to the same branch publishes to another URL.

| Source          | Description       | URL                                                  |
| --------------- | ----------------- | ---------------------------------------------------- |
| main branch     | Live web site URL | https://purple-rain-062d03304.azurestaticapps.net/   |
| Pull Request #5 | Preview URL       | https://purple-rain-062d03304-5.azurestaticapps.net/ |

You're currently working in the api branch. You'll make a pull request from your api branch to the main branch. When you create the pull request against the main branch, the GitHub Action publishes the app to a preview URL.

Once the workflow has completed building and deploying your app, the GitHub bot adds a comment to your pull request, which contains the URL of the pre-production environment. You can click on this link to see your staged changes.


## Blazor
## CSLA
## Entity Framework

The database context is the main class that coordinates Entity Framework functionality for a data model. This class is created by deriving from the Microsoft.EntityFrameworkCore.DbContext class.

## LINQ
## Minimal Web APIs
## Razor Pages
## SignalR
## Windows 11
