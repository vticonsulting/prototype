# Service Areas and Territories (Index)

Hancock.Business.ServiceAreas.UCC.ServiceAreaSetupUCC
Model.ROServiceRegionList
#ROServiceAreaList

## Add / Edit Service Area (CreateServiceArea)

Hancock.Business.ServiceAreas.UCC.ServiceAreaSetupUCC

Permissions.AddServiceArea
  - Add Service Area
  - Edit Service Area

Form CreateServiceArea POST Region
Add / Edit Service Area

var serviceAreaId = '@Model.ServiceArea.Id'

Google Map Get JS Link

Model.AssignedServiceTechs

ServiceArea.Id
ServiceArea.TimeStamp
ServiceRegionId
serviceRegions, new { @class = "control-label" })
Model.ServiceArea.ServiceRegionId.
Model.ServiceRegions)

Model.ServiceDirectors
#regionLead
#serviceAreas
Model.ServiceAreas

ServiceArea.TimeZoneId
ServiceArea.City
ServiceArea.StateId
ServiceArea.PostalCode
ServiceArea.Longitude, new { @class = "control-label" })
ServiceArea.Latitude, new { @class = "control-label" })
ServiceArea.Radius, new { @class = "control-label" })
#selectServiceTech
#selectedServiceTech
Model.AssignedServiceTechs


        if (Model.ServiceArea.Id > 0)
        {
            @Html.Partial("_ServiceAreaPostalCode")
                @Html.Partial("_ServiceAreaCapacity")
ServiceArea.IsCatastropheArea, new { @class = "m-wrap", @checked = "checked" })



## Edit Service Territory (EditRegion)

Hancock.Business.ServiceAreas.UCC.EditServiceRegionUCC

## New Service Territory (Form POST CreateRegion)

- ServiceRegion.Name
- ServiceDirectors
- #selectRegionManager Territory Manager(s)
- #selectFromRegionManagers
- #removeFromSelectedRegionManagers
- #selectedRegionManager ServiceRegion.RegionManagerList Territory Manager(s) Assigned to this Territory
- #managerIds
- ServiceRegion.RegionLeadId
- Save


## Available Service Techs

- Set marker from address

svt.ServiceStreetAddress1
svt.ServiceStreetAddress2
svt.ServiceCity
svt.ServiceState
svt.ServicePostalCode;
svt.Initials;
svt.IsHAAGCertified



### Service Area Postal Codes (Partial)

<strong>Success!</strong> Success adding postal code for service area
<strong>Success!</strong> Success removing postal code for service area
<strong>Error!</strong> Error deleting postal code for service area


### Service Area Capacities (Partial)

- On `document.ready` Binds change event to ComboBox (`#ServiceAreaCompanyId`)
  - #DemoServiceAreaCapacityV2
- On ServiceAreaCapacity request end, if 'create' or 'update'
  - #DemoServiceAreaCapacity data("kendoGrid").dataSource.read
  - #DemoServiceAreaCapacity show
- On Change CompanyList
  - #DemoServiceAreaCapacityV2 data("kendoGrid").dataSource.read
- On Change CompanyList Selected
  - #DemoServiceAreaCapacityV2 data("kendoGrid").dataSource.read();

### Alerts

| Success | The service area capacity insert/update has been successful
| Error | Error adding or updating service area capacity
| Error | Error adding or updating service area capacity due to invalid start and end times

### Confirmation

- Are you sure you want to remove this entry?

getServiceAreaData()
  return entries
    entry.CompanyId,
    entry.Capacity,
    entry.StartTime,
    entry.EndTime,
    entry.CreatedBy,
    entry.CreatedOn,
    entry.ServiceAreaId,
    entry.Id


```js
function onSave(e) {
  $.ajax({
    type: "POST",
    url: "/Region/ServiceAreaCapacityCreate",

  $.ajax({
    type: "POST",
    url: "/Region/ServiceAreaCapacityUpdate",
    data: {
        id: id,
        capacity: capacity,
        startTime: startTime,
        endTime: endTime,
        startAndEndTimes: getGridEntries()
    }
$.ajax({
    type: "POST",
    url: "/Region/ServiceAreaCapacityDelete",
    data: { id: dataItem.Id }
```
