# RegionController

- Permissions ViewRegionsMenu

## CreateModel(modelType)

- return `GetServiceRegionSetupUCC()`, if ServiceRegionSetupUCC
- return `GetReadOnlyRoot()`, if EditServiceRegionUCC
- return `GetServiceAreaSetupUCC()`, if ServiceAreaSetupUCC
- else return `Activator.CreateInstance(modelType)`


## GetServiceAreasForRegion JsonResult

## Index (GET /Region) ""

### Actions

- New Service Territory
  - Validations
    - Name is required
    -

## CreateRegion (GET /Region/CreateRegion)

Redirects to Index

- Create/Edit

## CreateRegion(model, managerIds) (POST /Region/CreateRegion)

- Validates
- Converts managerIds to List
- Remove `RegionManagerId`, if List empty
- `GetServiceRegionMangerList(model.ServiceRegionId)`
- Loop through managerIds, if `ServiceRegionManagerList` contains


## EditRegion(id?) (POST /RegionEditRegion)

- if `id` return View for region `GetReadOnlyRoot(id.Value)`
- otherwise redirect to `Index`

## EditRegion(model, managerIds) (POST /Region/EditRegion)

- if `ServiceRegion` is deleted or inActive
  - `ROServiceAreaList.GetROServiceAreaList(model.ServiceRegion.Id)`
  - `ProjectsList.GetNameValueList(modelServiceAreas.Select(sa => sa.Id).ToList())`

## CreateServiceArea (GET /Region/CreateServiceArea)

- Permissions (AddServiceArea)

## CreateServiceArea(model, techIds, formCollection) (POST /Region/CreateServiceArea)

- Permissions (AddServiceArea)


## GetAvailableTechs(regionId, serviceAreaId) (POST)

-


## ServiceAreaCapacity
## ServiceAreaCapacityRead(request, serviceAreaId, companyId)

- gridModels
-

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
