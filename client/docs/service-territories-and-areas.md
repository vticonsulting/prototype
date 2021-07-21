---
title: Service Territories and Areas
---

## RegionController

- Permissions ViewRegionsMenu

### `CreateModel(modelType)`

- return `GetServiceRegionSetupUCC()`, if ServiceRegionSetupUCC
- return `GetReadOnlyRoot()`, if EditServiceRegionUCC
- return `GetServiceAreaSetupUCC()`, if ServiceAreaSetupUCC
- else return `Activator.CreateInstance(modelType)`

### GetServiceAreasForRegion JsonResult

## Index (GET /Region) ""

### Actions

- New Service Territory
  - Validations
    - Name is required

### CreateRegion (GET /Region/CreateRegion)

Redirects to Index

- Create/Edit

### CreateRegion(model, managerIds) (POST /Region/CreateRegion)

- Validates
- Converts managerIds to List
- Remove `RegionManagerId`, if List empty
- `GetServiceRegionMangerList(model.ServiceRegionId)`
- Loop through managerIds, if `ServiceRegionManagerList` contains

### EditRegion(id?) (POST /RegionEditRegion)

- if `id` return View for region `GetReadOnlyRoot(id.Value)`
- otherwise redirect to `Index`

### EditRegion(model, managerIds) (POST /Region/EditRegion)

- if `ServiceRegion` is deleted or inActive
  - `ROServiceAreaList.GetROServiceAreaList(model.ServiceRegion.Id)`
  - `ProjectsList.GetNameValueList(modelServiceAreas.Select(sa => sa.Id).ToList())`

### CreateServiceArea (GET /Region/CreateServiceArea)

- Permissions (AddServiceArea)

### CreateServiceArea(model, techIds, formCollection) (POST /Region/CreateServiceArea)

- Permissions (AddServiceArea)

## GetAvailableTechs(regionId, serviceAreaId) (POST)

-

## ServiceAreaCapacity

## ServiceAreaCapacityRead(request, serviceAreaId, companyId)

- gridModels

## ServiceAreaCapacityCreate()

## ServiceAreaCapacityUpdate

## ServiceAreaCapacityDelete

## GetCompanyList

GetRegionManagerAndLead
GetAvailableRegionManagers

ServiceAreaPostalCodeRead
ServiceAreaPostCodeCreate
ServiceAreaPostalCodeUpdate
ServiceAreaPostalCodeDestroy

AreStartTimeEndTimesValid

## Hancock.Business.ServiceAreas.UCC

### ServiceRegionSetupUCC

- RegionLeads
- ServiceDirectors
- ROServiceRegionList ("Service Territories")
- ServiceRegion

GetServiceRegionSetupUCC()
GetActiveServiceRegionSetupUCC(active)
    - ROServiceRegionList
    - ServiceRegion
    - RegionLeads
    - ServiceDirectors

## Tables

### `ServiceArea`

| Column                                    | FK                                             |
| ----------------------------------------- | ---------------------------------------------- |
| Id                                        |                                                |
| ServiceRegionId                           | (FK_ServiceArea_ServiceRegion_ServiceRegionId) |
| StateId                                   | (FK_ServiceArea_State_StateId)                 |
| TimeZoneId                                | (FK_ServiceArea_Timezone_TimeZoneId)           |
| AddressLatitude                           |                                                |
| AddressLongitude                          |                                                |
| City                                      |                                                |
| CreatedBy (FK_ServiceArea_User_CreatedBy) |                                                |
| CreatedOn                                 |                                                |
| IsActive                                  |                                                |
| IsCatastropheArea                         |                                                |
| IsDeleted                                 |                                                |
| Latitude                                  |                                                |
| Longitude                                 |                                                |
| Name                                      |                                                |
| PostalCode                                |                                                |
| Radius                                    |                                                |
| StreetAddress                             |                                                |

### `ServiceAreaAvailabilities`

| Column      | FK  |
| ----------- | --- |
| Id          |     |
| WindowStart |     |
| WindowEnd   |     |

### `ServiceAreaCapacity`

| Column        | FK                                                 |
| ------------- | -------------------------------------------------- |
| Id            |                                                    |
| ServiceAreaId | (FK_ServiceAreaCapacity_ServiceArea_ServiceAreaId) |
| CompanyId     | (FK_ServiceAreaCapacity_Company_CompanyId)         |
| CreatedBy     | (FK_ServiceAreaCapacity_User_CreatedBy)            |
| CreatedOn     |                                                    |
| Capacity      |                                                    |
| EndTime       |                                                    |
| StartTime     |                                                    |

### `ServiceAreaPostalCode`

| Column        | FK                                                   |
| ------------- | ---------------------------------------------------- |
| Id            |                                                      |
| ServiceAreaId | (FK_ServiceAreaPostalCode_ServiceArea_ServiceAreaId) |
| PostalCode    |                                                      |

### `ServiceAreaTechnician`

| Column        | FK                                                   |
| ------------- | ---------------------------------------------------- |
| ServiceAreaId | (FK_ServiceAreaTechnician_ServiceArea_ServiceAreaId) |
| UserId        | (FK_ServiceAreaTechnician_User_UserId)               |
| CreatedBy     | (FK_ServiceAreaTechnician_User_CreatedBy)            |
| CreatedOn     |

### `ServiceRegion`

| Column              | FK                                |
| ------------------- | --------------------------------- |
| Id                  |                                   |
| CreatedBy           | (FK_ServiceRegion_User_CreatedBy) |
| RegionLead          |                                   |
| Name                |                                   |
| CreatedOn           |                                   |
| IsActive            |                                   |
| IsCatastropheRegion |                                   |
| IsDeleted           |                                   |

### `ServiceRegionManager`

| Column          | FK                                                      |
| --------------- | ------------------------------------------------------- |
| ServiceRegionId | (FK_ServiceRegionManager_ServiceRegion_ServiceRegionId) |
| UserId          | (FK_ServiceRegionManager_User_UserId)                   |
| CreatedBy       | (FK_ServiceRegionManager_User_CreatedBy)                |
| CreatedOn       |                                                         |

### `FieldTechAvailability`

| Column          | FK                                                   |
| --------------- | ---------------------------------------------------- |
| Id              |                                                      |
| ServiceAreaId   | (FK_FieldTechAvailability_ServiceArea_ServiceAreaId) |
| FieldTechUserId | (FK_FieldTechAvailability_User_FieldTechUserId)      |
| CreatedBy       | (FK_FieldTechAvailability_User_CreatedBy)            |
| CreatedOn       |                                                      |
| EndDate         |                                                      |
| IsAvailable     |                                                      |
| StartDate       |                                                      |
