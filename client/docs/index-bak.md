---
title: Hancock Claims Consultants
---

## Domain

### ServiceRegion

### ServiceArea

### Project

### User

### UserType


## Patterns

### Global

- Layout
- Navigation
- Notifications

### Analytics

- Charts
- Data states
- Source tables

<!-- -- Data states provide clear and reassuring communication to users about the state of their report. -->

## Components

- Box
- Badge
- Avatar
- Banner
- Button
- Icon
- Image
- Input
- Select
- Switch
- Tabs



## Domain Entities

- Billing
- Billing Status
- Business Unit
- Claim
- Customer (Carrier)
- Project
- Project Status
- Service Area
- Service Type
- Territory (Region)
- User
- User Type
- Vendor


## Database Information

## Data Dictionary
## ERD Diagram
## Flow charts
## SQL Queries and Views
## Stored Procedures



## Domain

### Project

#### Queries

### Project Status
### Claim (Pending, External)
#### Asset
#### Damage Type
#### Service Type
### Customer (Carrier, Company)
### Billing
#### Billing Status
#### Billing Status Type
#### Invoice
#### Asset
### Service
#### Service Area
#### Service Region (Territory)



# RegionController

[[toc]]

## Queries

### Service Region

#### `Fetch(id)`

```csharp
var result = (
  from sa in ctx.ObjectContext.ServiceRegions
  where sa.Id == id
  select new ServiceRegionDTO
    {
      Id = sa.Id,
      Name = sa.Name,
      IsActive = sa.IsActive,
      IsCatastropheRegion = sa.IsCatastropheRegion,
      CreatedBy = sa.CreatedBy,
      CreatedOn = sa.CreatedOn,
      ModifiedBy = sa.CreatedBy,
      ModifiedOn = sa.CreatedOn,
      Timestamp = sa.RowVersion,
      RegionLeadId = sa.RegionLead,
      LeadName = sa.UserRegionLead.FirstName + " " + sa.UserRegionLead.LastName,
    IsDeleted = sa.IsDeleted
  }
).FirstOrDefault();
```

#### `Fetch()`

```csharp
var result = (
  from sa in ctx.ObjectContext.ServiceRegions
  where sa.IsDeleted == false
  select new ServiceRegionDTO
  {
      Id = sa.Id,
      Name = sa.Name,
      IsActive = sa.IsActive,
      IsCatastropheRegion = sa.IsCatastropheRegion,
      CreatedBy = sa.CreatedBy,
      CreatedOn = sa.CreatedOn,
      ModifiedBy = sa.CreatedBy,
      ModifiedOn = sa.CreatedOn,
      Timestamp = sa.RowVersion,
      IsDeleted = sa.IsDeleted
  }
).ToList();
```

#### `FetchForActiveServiceRegions(active)`

```csharp
var result = (
  from sa in ctx.ObjectContext.ServiceRegions
  where sa.IsActive == active && sa.IsDeleted == false
  select new ServiceRegionDTO
  {
      Id = sa.Id,
      Name = sa.Name,
      IsActive = sa.IsActive,
      IsCatastropheRegion = sa.IsCatastropheRegion,
      CreatedBy = sa.CreatedBy,
      CreatedOn = sa.CreatedOn,
      ModifiedBy = sa.CreatedBy,
      ModifiedOn = sa.CreatedOn,
      Timestamp = sa.RowVersion,
      IsDeleted = sa.IsDeleted
  }
).ToList();
```

#### `FetchForRegionLead(leadId)`

```csharp
var result = (
  from sa in ctx.ObjectContext.ServiceRegions
  where sa.RegionLead == leadId
  select new ServiceRegionDTO
  {
      Id = sa.Id,
      Name = sa.Name,
      IsActive = sa.IsActive,
      IsCatastropheRegion = sa.IsCatastropheRegion,
      CreatedBy = sa.CreatedBy,
      CreatedOn = sa.CreatedOn,
      ModifiedBy = sa.CreatedBy,
      ModifiedOn = sa.CreatedOn,
      Timestamp = sa.RowVersion,
      RegionLeadId = sa.RegionLead,
      LeadName = sa.ServiceRegionManagers.FirstOrDefault().ServiceRegionsManagerUser.FirstName + " " + sa.ServiceRegionManagers.FirstOrDefault().ServiceRegionsManagerUser.LastName,
      IsDeleted = sa.IsDeleted
  }
).ToList();
```

#### `Insert(ServiceRegionDTO item)`

```csharp
var newItem = new ServiceRegion
{
    Name = item.Name,
    IsActive = item.IsActive,
    IsCatastropheRegion = item.IsCatastropheRegion,
    CreatedOn = item.CreatedOn,
    CreatedBy = item.CreatedBy,

    RegionLead = item.RegionLeadId,
    IsDeleted = item.IsDeleted
};
ctx.ObjectContext.ServiceRegions.AddObject(newItem);
ctx.ObjectContext.SaveChanges();
item.Id = newItem.Id;
```

#### `Update(ServiceRegionDTO item)`

```csharp
var data = (
  from r in ctx.ObjectContext.ServiceRegions
  where r.Id == item.Id
  select r
).FirstOrDefault();

data.Name = item.Name;
data.IsCatastropheRegion = item.IsCatastropheRegion;
data.IsActive = item.IsActive;
data.CreatedOn = item.CreatedOn;
data.CreatedBy = item.CreatedBy;
data.RegionLead = item.RegionLeadId;
data.IsDeleted = item.IsDeleted;
var count = ctx.ObjectContext.SaveChanges();
```

#### `Delete(id)`

```csharp
var data = (
  from r in ctx.ObjectContext.ServiceRegions
  where r.Id == id
  select r
).FirstOrDefault();
```

#### `FetchForUser(userId)`

```csharp
var result = (
  from sr in ctx.ObjectContext.ServiceRegions
  where sr.IsActive && sr.ServiceRegionManagers.Any(r => r.UserId == userId && r.ServiceRegionId == sr.Id) && sr.IsDeleted == false
  select new ServiceRegionDTO
  {
      Id = sr.Id,
      Name = sr.Name,
      IsActive = sr.IsActive,
      IsCatastropheRegion = sr.IsCatastropheRegion,
      CreatedBy = sr.CreatedBy,
      CreatedOn = sr.CreatedOn,
      ModifiedBy = sr.CreatedBy,
      ModifiedOn = sr.CreatedOn,
      Timestamp = sr.RowVersion,
      IsDeleted = sr.IsDeleted
  }
).ToList();
```

#### FetchForSvt2(userId)

```csharp
var result = (
  from sr in ctx.ObjectContext.ServiceRegions
  where sr.IsActive && sr.RegionLead == userId && sr.IsDeleted == false
  select new ServiceRegionDTO
  {
      Id = sr.Id,
      Name = sr.Name,
      IsActive = sr.IsActive,
      IsCatastropheRegion = sr.IsCatastropheRegion,
      CreatedBy = sr.CreatedBy,
      CreatedOn = sr.CreatedOn,
      ModifiedBy = sr.CreatedBy,
      ModifiedOn = sr.CreatedOn,
      Timestamp = sr.RowVersion,
      IsDeleted = sr.IsDeleted
  }
).ToList();
```

### Service Area Capacity

#### `FetchByCompanyServiceArea(serviceAreaId, companyId)`

```csharp
var result = (
  from serviceAreaCapacities in ctx.ObjectContext.ServiceAreaCapacities
  where serviceAreaCapacities.ServiceAreaId == serviceAreaId
    && serviceAreaCapacities.CompanyId == companyId
  select new ServiceAreaCapacityDTO
  {
    Id = serviceAreaCapacities.Id,
    CompanyId = serviceAreaCapacities.CompanyId,
    CreatedBy = serviceAreaCapacities.CreatedBy,
    CreatedOn = serviceAreaCapacities.CreatedOn,
    Capacity = serviceAreaCapacities.Capacity,
    ServiceAreaId = serviceAreaCapacities.ServiceAreaId,
    EndTime = serviceAreaCapacities.EndTime,
    StartTime = serviceAreaCapacities.StartTime
  }
).ToList();
```

#### `Fetch(id)`

```csharp
var result = (
  from sac in ctx.ObjectContext.ServiceAreaCapacities
  where sac.Id == id
  select new ServiceAreaCapacityDTO
  {
    Id = sac.Id,
    CompanyId = sac.CompanyId,
    CreatedBy = sac.CreatedBy,
    CreatedOn = sac.CreatedOn,
    Capacity = sac.Capacity,
    ServiceAreaId = sac.ServiceAreaId,
    EndTime = sac.EndTime,
    StartTime = sac.StartTime
  }
).FirstOrDefault();
```

#### `Insert(serviceAreaCapacity)`

```csharp
var data = new ServiceAreaCapacity
  {
    Id = serviceAreaCapacity.Id,
    CompanyId = serviceAreaCapacity.CompanyId,
    CreatedBy = serviceAreaCapacity.CreatedBy,
    CreatedOn = serviceAreaCapacity.CreatedOn,
    Capacity = (byte)serviceAreaCapacity.Capacity,
    ServiceAreaId = serviceAreaCapacity.ServiceAreaId,
    EndTime = serviceAreaCapacity.EndTime,
    StartTime = serviceAreaCapacity.StartTime
  }

ctx.ObjectContext.ServiceAreaCapacities.AddObject(data)
ctx.ObjectContext.SaveChanges()
serviceAreaCapacity.Id = data.Id;
```

#### `Delete(serviceAreaCapacity)`

```csharp
var data = (from r in ctx.ObjectContext.ServiceAreaCapacities
where r.Id == id
select r).FirstOrDefault();
```

#### `Update`

```csharp
var data = (
  from sac in ctx.ObjectContext.ServiceAreaCapacities
  where sac.Id == serviceAreaCapacity.Id
  select sac
).FirstOrDefault();

data.Id = serviceAreaCapacity.Id;
data.CompanyId = serviceAreaCapacity.CompanyId;
data.CreatedBy = serviceAreaCapacity.CreatedBy;
data.CreatedOn = serviceAreaCapacity.CreatedOn;
data.Capacity = (byte)serviceAreaCapacity.Capacity;
data.ServiceAreaId = serviceAreaCapacity.ServiceAreaId;
data.EndTime = serviceAreaCapacity.EndTime;
data.StartTime = serviceAreaCapacity.StartTime;
var count = ctx.ObjectContext.SaveChanges();
```


### Service Area Tech

#### `Fetch(serviceAreaId)`

```csharp
var result = (
  from sa in ctx.ObjectContext.ServiceAreaTechnicians
  where sa.ServiceAreaId == ServiceAreaId
  select new ServiceAreaTechDTO
  {
    ServiceAreaId = sa.ServiceAreaId,
    UserId = sa.UserId,
    CreatedBy = sa.CreatedBy,
    CreatedOn = sa.CreatedOn,
    ModifiedBy = sa.CreatedBy,
    ModifiedOn = sa.CreatedOn,
    Timestamp = sa.RowVersion
  }
).ToList();
```

#### `Insert(ServiceAreaTechDTO dto)`

```csharp
var data = new ServiceAreaTechnician {
  ServiceAreaId = dto.ServiceAreaId,
  UserId = dto.UserId,
  CreatedBy = dto.CreatedBy,
  CreatedOn = dto.CreatedOn
};

ctx.ObjectContext.ServiceAreaTechnicians.AddObject(data);
var count = ctx.ObjectContext.SaveChanges();
```

#### `Update(ServiceAreaTechDTO dto)`

```csharp
var data = (
  from sa in ctx.ObjectContext.ServiceAreaTechnicians
  where sa.ServiceAreaId == dto.ServiceAreaId
    && sa.UserId==dto.UserId
  select sa
).First();

data.ServiceAreaId = dto.ServiceAreaId;
data.UserId = dto.UserId;
data.CreatedBy = dto.CreatedBy;
data.CreatedOn = dto.CreatedOn;

var count = ctx.ObjectContext.SaveChanges();
```

#### `DeleteAllForArea(ServiceAreaId)`

```csharp
var lstOfServiceAreasTechnicianss = (
  from r in ctx.ObjectContext.ServiceAreaTechnicians
  where r.ServiceAreaId == ServiceAreaId
  select r
).ToList();
```


#### `DeleteAllForUser(userId)`

```csharp
var listOfUserServiceAreass = (
  from r in ctx.ObjectContext.ServiceAreaTechnicians
  where r.UserId == userId
  select r
).ToList();
```

#### `Delete(userId, serviceAreaId)`

```csharp
var item = (
  from r in ctx.ObjectContext.ServiceAreaTechnicians
  where r.UserId == userId && r.ServiceAreaId== serviceAreaId
  select r
).FirstOrDefault();
```


### Service Area

#### `Fetch(id)`

```csharp
var result = (
  from sa in ctx.ObjectContext.ServiceAreas
  where sa.Id == id
  select new ServiceAreaDTO
  {
    Id = id,
    Name = sa.Name,
    IsActive = sa.IsActive,
    IsCatastropheArea = sa.IsCatastropheArea,
    Street = sa.StreetAddress,
    City = sa.City,
    StateId = (int)sa.StateId,
    PostalCode = sa.PostalCode,
    Latitude = sa.Latitude,
    Longitude = sa.Longitude,
    AddressLatitude = sa.AddressLatitude,
    AddressLongitude = sa.AddressLongitude,
    Radius = sa.Radius,
    ServiceRegionId = sa.ServiceRegionId,
    TimeZoneId = sa.TimeZoneId,
    CreatedBy = sa.CreatedBy,
    CreatedOn = sa.CreatedOn,
    ModifiedBy = sa.CreatedBy,
    ModifiedOn = sa.CreatedOn,
    Timestamp = sa.RowVersion,
    IsDeleted = sa.IsDeleted
  }
).FirstOrDefault();
```

#### `FetchForClosest(latitude, longitude)`

```csharp
var result = (
  from sa in ctx.ObjectContext.spGetClosestServiceAreas(latitude, longitude)
  select new ServiceAreaDTO {
    Id = sa.Id,
    Name = sa.Name,
    IsActive = sa.IsActive,
    IsCatastropheArea = sa.IsCatastropheArea,
    Street = sa.StreetAddress,
    City = sa.City,
    StateId = (int)sa.StateId,
    PostalCode = sa.PostalCode,
    Latitude = sa.Latitude,
    Longitude = sa.Longitude,
    AddressLatitude = sa.AddressLatitude,
    AddressLongitude = sa.AddressLongitude,
    Radius = sa.Radius,
    ServiceRegionId = sa.ServiceRegionId,
    TimeZoneId = sa.TimeZoneId,
    CreatedBy = sa.CreatedBy,
    CreatedOn = sa.CreatedOn,
    ModifiedBy = sa.CreatedBy,
    ModifiedOn = sa.CreatedOn,
    Timestamp = sa.RowVersion,
  }
).FirstOrDefault();
```

#### `FetchForSuperDashboard()`

```csharp
var result = (
  from sa in ctx.ObjectContext.ServiceAreas
  where sa.IsActive && !sa.IsDeleted
  select sa
);

return result.Select(
  sa => new ServiceAreaDTO {
    IsCatastropheArea = sa.IsCatastropheArea,
    Radius = sa.Radius,
    AddressLatitude = sa.AddressLatitude,
    AddressLongitude = sa.AddressLongitude
  }
).ToList();
```

#### `Fetch()`

```csharp
var result = (
  from sa in ctx.ObjectContext.ServiceAreas
  where !sa.IsDeleted
  select sa
);

int userId = Convert.ToInt32((ApplicationContext.User.Identity as ClaimsIdentity).Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier).Value);
int userLevel = Convert.ToInt32((ApplicationContext.User.Identity as ClaimsIdentity).Claims.FirstOrDefault(c => c.Type == "UserLevel").Value);

if (userLevel == (int)Utility.Enums.Roles.ServiceManager) {
  var regions = ctx.ObjectContext.ServiceRegionManagers.Where(srm => srm.UserId == userId);
  result = result.Where(m => regions.Any(r => r.ServiceRegionId == m.ServiceRegionId));
} else if (userLevel == (int)Utility.Enums.Roles.ServiceTech2) {
  result = result.Where(m => m.ServiceRegion.RegionLead == userId);
} else {
  return result.Select(
    sa => new ServiceAreaDTO {
      Id = sa.Id,
      Name = sa.Name,
      IsActive = sa.IsActive,
      IsCatastropheArea = sa.IsCatastropheArea,
      Latitude = sa.Latitude,
      Longitude = sa.Longitude,
      Radius = sa.Radius,
      Street = sa.StreetAddress,
      City = sa.City,
      StateId = (int)sa.StateId,
      PostalCode = sa.PostalCode,
      ServiceRegionId = sa.ServiceRegionId,
      TimeZoneId = sa.TimeZoneId,
      CreatedBy = sa.CreatedBy,
      CreatedOn = sa.CreatedOn,
      ModifiedBy = sa.CreatedBy,
      ModifiedOn = sa.CreatedOn,
      Timestamp = sa.RowVersion,
      AddressLatitude = sa.AddressLatitude,
      AddressLongitude = sa.AddressLongitude,
      IsDeleted = sa.IsDeleted
    }
  ).ToList();
}

var result2 = result.Select(
  sa => new ServiceAreaDTO {
    Id = sa.Id,
    Name = sa.Name,
    IsActive = sa.IsActive,
    IsCatastropheArea = sa.IsCatastropheArea,
    Latitude = sa.Latitude,
    Longitude = sa.Longitude,
    AddressLatitude = sa.AddressLatitude,
    AddressLongitude = sa.AddressLongitude,
    Radius = sa.Radius,
    Street = sa.StreetAddress,
    City = sa.City,
    StateId = (int)sa.StateId,
    PostalCode = sa.PostalCode,
    ServiceRegionId = sa.ServiceRegionId,
    TimeZoneId = sa.TimeZoneId,
    CreatedBy = sa.CreatedBy,
    CreatedOn = sa.CreatedOn,
    ModifiedBy = sa.CreatedBy,
    ModifiedOn = sa.CreatedOn,
    Timestamp = sa.RowVersion,
    IsDeleted = sa.IsDeleted
  }
);

return result2.ToList();
```

#### `FetchByRegion(regionId)`

```csharp
var result = (
  from sa in ctx.ObjectContext.ServiceAreas
  where sa.ServiceRegionId == regionId
    && !sa.IsDeleted
  select new ServiceAreaDTO {
    Id = sa.Id,
    Name = sa.Name,
    IsActive = sa.IsActive,
    IsCatastropheArea = sa.IsCatastropheArea,
    Latitude = sa.Latitude,
    Longitude = sa.Longitude,
    AddressLatitude = sa.AddressLatitude,
    AddressLongitude = sa.AddressLongitude,
    Radius = sa.Radius,
    Street = sa.StreetAddress,
    City = sa.City,
    StateId = (int)sa.StateId,
    PostalCode = sa.PostalCode,
    ServiceRegionId = sa.ServiceRegionId,
    TimeZoneId = sa.TimeZoneId,
    CreatedBy = sa.CreatedBy,
    CreatedOn = sa.CreatedOn,
    ModifiedBy = sa.CreatedBy,
    ModifiedOn = sa.CreatedOn,
    Timestamp = sa.RowVersion,
    IsDeleted = sa.IsDeleted
  }
).ToList();
```

#### `FetchByUser(userId)`

```csharp
var result = (
  from sa in ctx.ObjectContext.ServiceAreas
  where sa.ServiceAreaTechnicians.Any(m => m.UserId == userId)
    && !sa.IsDeleted
  select new ServiceAreaDTO {
    Id = sa.Id,
    Name = sa.Name,
    IsActive = sa.IsActive,
    IsCatastropheArea = sa.IsCatastropheArea,
    Latitude = sa.Latitude,
    Longitude = sa.Longitude,
    AddressLatitude = sa.AddressLatitude,
    AddressLongitude = sa.AddressLongitude,
    Radius = sa.Radius,
    Street = sa.StreetAddress,
    City = sa.City,
    StateId = (int)sa.StateId,
    PostalCode = sa.PostalCode,
    ServiceRegionId = sa.ServiceRegionId,
    TimeZoneId = sa.TimeZoneId,
    CreatedBy = sa.CreatedBy,
    CreatedOn = sa.CreatedOn,
    ModifiedBy = sa.CreatedBy,
    ModifiedOn = sa.CreatedOn,
    Timestamp = sa.RowVersion,
    RegionName = sa.ServiceRegion.Name,
    IsDeleted = sa.IsDeleted
  }
).ToList();
```

#### `Insert(ServiceAreaDTO item)`

```csharp
var newItem = new ServiceArea {
  Name = item.Name,
  StreetAddress = item.Street,
  City = item.City,
  StateId = item.StateId,
  PostalCode = item.PostalCode,
  IsActive = item.IsActive,
  IsCatastropheArea = item.IsCatastropheArea,
  Latitude = item.Latitude,
  Longitude = item.Longitude,
  Radius = item.Radius,
  ServiceRegionId = item.ServiceRegionId,
  TimeZoneId = item.TimeZoneId,
  CreatedOn = item.CreatedOn,
  CreatedBy = item.CreatedBy,
  RowVersion = item.Timestamp,
  AddressLongitude = item.AddressLongitude,
  AddressLatitude = item.AddressLatitude,
  IsDeleted = item.IsDeleted
};
ctx.ObjectContext.ServiceAreas.AddObject(newItem);
ctx.ObjectContext.SaveChanges();
item.Id = newItem.Id;
item.Timestamp = newItem.RowVersion;
```

#### `Update(ServiceAreaDTO item)`

```csharp
var data = (
  from r in ctx.ObjectContext.ServiceAreas
  where r.Id == item.Id
  select r).FirstOrDefault();

if (data == null) {
  throw new DataNotFoundException("ServiceAreas");
}
if (!data.RowVersion.Matches(item.Timestamp)) {
  throw new ConcurrencyException("ServiceAreas");
}
int? state;
if (item.StateId == 0) {
  state = null; }
else {
  state = item.StateId;
}

data.Name = item.Name;
data.StreetAddress = item.Street;
data.City = item.City;
data.StateId = state;
data.ServiceRegionId = item.ServiceRegionId;
data.TimeZoneId = item.TimeZoneId;
data.PostalCode = item.PostalCode;
data.Latitude = item.Latitude;
data.Longitude = item.Longitude;
data.Radius = item.Radius;
data.IsCatastropheArea = item.IsCatastropheArea;
data.IsActive = item.IsActive;
data.RowVersion = item.Timestamp;
data.AddressLatitude = item.AddressLatitude;
data.AddressLongitude = item.AddressLongitude;
data.IsDeleted = item.IsDeleted;

var count = ctx.ObjectContext.SaveChanges();
```

#### `Delete(id)`

```csharp
var data = (
  from r in ctx.ObjectContext.ServiceAreas
  where r.Id == id
  select r
).FirstOrDefault();

if (data != null) {
  ctx.ObjectContext.ServiceAreas.DeleteObject(data);
  ctx.ObjectContext.SaveChanges();
}
```

#### `ServiceAreaWorkLoad(id)`

```csharp
var regions = ctx.ObjectContext.ServiceRegionManagers.Where(srm => srm.UserId == id);

var data = (
  from area in ctx.ObjectContext.ServiceAreas
  where area.IsActive
    && !area.IsDeleted
    && area.ServiceRegion.IsActive
    && !area.ServiceRegion.IsDeleted
    && area.ServiceAreaTechnicians.Any(m => m.UserId == id)
  select new ServiceAreaDTO {
    Id = area.Id,
    Name = area.Name,
    ServiceRegionId = area.ServiceRegionId,
    RegionName = area.ServiceRegion.Name,
    WorkLoad = area.ProjectInspections.Where(m => m.Project.ProjectStatusId != (int)ProjectStates.Closed
    && m.Project.ProjectStatusId != (int)ProjectStates.Archived
    && m.Project.ProjectStatusId != (int)ProjectStates.Billed
    && m.ProjectInspectionTechnician.Any(a => a.Id == id)).Select(a => a.ProjectId).Distinct().Count(),
    Unassignable = area.ServiceAreaTechnicians.Any(m => m.UserId == id)
  }
).Distinct();
return data.ToList();
```

#### `FetchServiceAreaPostalCodes(serviceAreaId)`

```csharp
var results = (
  from sapc in ctx.ObjectContext.ServiceAreaPostalCodes
  join sa in ctx.ObjectContext.ServiceAreas on sapc.ServiceAreaId equals sa.Id
  where sapc.ServiceAreaId == serviceAreaId
  select new ServiceAreaPostalCodeDTO {
    Id = sapc.Id,
    PostalCode = sapc.PostalCode,
    ServiceAreaId = sapc.ServiceAreaId,
    ServiceArea = sa.Name
  }
).OrderBy(p => p.PostalCode).ToList();
```

#### `InsertServiceAreaPostalCode(ServiceAreaPostalCodeDTO serviceAreaPostalCodeDTO)`

```csharp
var newItem = new ServiceAreaPostalCode {
  PostalCode = serviceAreaPostalCodeDTO.PostalCode,
  ServiceAreaId = serviceAreaPostalCodeDTO.ServiceAreaId
};
ctx.ObjectContext.ServiceAreaPostalCodes.AddObject(newItem);
ctx.ObjectContext.SaveChanges();
```

#### `DeleteServiceAreaPostalCode(id)`

```csharp
var data = (
  from sapc in ctx.ObjectContext.ServiceAreaPostalCodes
  where sapc.Id == id
  select sapc
).FirstOrDefault();

if (data != null) {
  ctx.ObjectContext.ServiceAreaPostalCodes.DeleteObject(data);
  ctx.ObjectContext.SaveChanges();
}
```


```csharp
var data = (
  from sapc in ctx.ObjectContext.ServiceAreaPostalCodes
  where sapc.Id == id
  select sapc
).FirstOrDefault();

if (data != null) {
  ctx.ObjectContext.ServiceAreaPostalCodes.DeleteObject(data);
  ctx.ObjectContext.SaveChanges();
}
```

:tada: :100:


| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |


::: tip
This is a tip
:::


```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```

::: warning
This is a warning
:::


```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

::: danger
This is a dangerous warning
:::




#### Service Type

## People / User Types

- Insured
- Customer
- User
- Inbound Customer Support Representative
- Outbound Customer Support Representative
- Field Technician

## Patterns

### Global

- Layout
- Navigation
- Notifications

### Analytics

- Charts
- Data states
- Source tables

<!-- -- Data states provide clear and reassuring communication to users about the state of their report. -->

## Components

Box
Badge
Avatar
Banner
Button
Icon
Image
Input
Select
Switch
Tabs


## UI Design Comps

- [Dashboard](https://xd.adobe.com/view/1ccaa3fb-6e83-4f01-65fe-119b51af049d-6afb/)
- [Collapsed Side-Nav](https://xd.adobe.com/view/1ccaa3fb-6e83-4f01-65fe-119b51af049d-6afb/screen/213bbfd1-031f-4382-8c5b-01544228b65e)
- [Announcements](https://xd.adobe.com/view/1ccaa3fb-6e83-4f01-65fe-119b51af049d-6afb/screen/c13f04d8-e61b-4dbf-b1a1-b874e33c780f)
- [Reports](https://xd.adobe.com/view/1ccaa3fb-6e83-4f01-65fe-119b51af049d-6afb/screen/0bf51314-06b2-4955-b15a-90c3ef53d404)
- [Calendar](https://xd.adobe.com/view/1ccaa3fb-6e83-4f01-65fe-119b51af049d-6afb/screen/8aec80b9-a195-46f7-a186-d240f3af826b)
- [Customers](https://xd.adobe.com/view/1ccaa3fb-6e83-4f01-65fe-119b51af049d-6afb/screen/3ecfc7be-bfea-44b2-a1d6-43ebbed4e53b)
- [Project Details](https://xd.adobe.com/view/1ccaa3fb-6e83-4f01-65fe-119b51af049d-6afb/screen/c4348e65-13ec-4e6c-b0f2-91ae9a790228)
- [Project Details v2](https://xd.adobe.com/view/1ccaa3fb-6e83-4f01-65fe-119b51af049d-6afb/screen/e15684c2-f8d9-4b15-9a51-5583bb7676fe)
- [Project Details History Tab](https://xd.adobe.com/view/1ccaa3fb-6e83-4f01-65fe-119b51af049d-6afb/screen/c3e8452e-2a21-4514-b6a2-e1e4eae5a835)
- [Project Details Comments](https://xd.adobe.com/view/1ccaa3fb-6e83-4f01-65fe-119b51af049d-6afb/screen/cb5fc81a-3d31-4078-af7e-87f7f224202a)
- [Add Customer](https://xd.adobe.com/view/1ccaa3fb-6e83-4f01-65fe-119b51af049d-6afb/screen/a0672825-8eea-40c0-a908-e032a931dc41)
- [Schedule Tab](https://xd.adobe.com/view/1ccaa3fb-6e83-4f01-65fe-119b51af049d-6afb/screen/8384a6e0-862b-4090-95b3-b7ec3a73d4ae)
- [History Tab](https://xd.adobe.com/view/1ccaa3fb-6e83-4f01-65fe-119b51af049d-6afb/screen/6980f6f5-8d78-4da6-b1c5-43588aec69b8)
- [Comments Tab](https://xd.adobe.com/view/1ccaa3fb-6e83-4f01-65fe-119b51af049d-6afb/screen/ded10744-9c77-467a-a259-377fd291bba9)
