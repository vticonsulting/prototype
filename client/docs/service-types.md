---
title: Services Types
---

## View

### Service Type List

Role Permission: ViewServiceTypes​ = 19

- Service Type Names
- Active

#### Fetch List Query

```csharp
var result = ctx.ObjectContext.AvailableServiceTypes
  .Where(s => s.ParentId == null && s.Name != "Other")
  .Select(a => a);

  return result.OrderBy(a => a.Id)
    .ApplyQueryLogic(queryLogic)
    .Select(s => new ServiceTypeListItemDTO(){ }​
```

### Service Type Create

Role Permission: AddServiceType = 39

| Field                 | Validation Rules |
| --------------------- | ---------------- |
| Service Type Name     | required         |
| Short Name            | required         |
| Has Quantity          |                  |
| Is Active             |                  |
| Display Calendar      |                  |
| Requires Date         |                  |
| Requires Phone        |                  |
| Customer Description  |                  |
| On External Form      |                  |
| Deliverables          |                  |
| Duration (in minutes) | required         |

## Tables

### `AvailableServiceType`

| Column              | FK                                                    |
| ------------------- | ----------------------------------------------------- |
| Id                  |                                                       |
| CreatedBy           | FK_AvailableServiceType_User_CreatedBy                |
| CreatedOn           |                                                       |
| CustomerDescription |                                                       |
| HasDescription      |                                                       |
| HasQuantity         |                                                       |
| IsActive            |                                                       |
| Name                |                                                       |
| OnExternalForm      |                                                       |
| ParentId            | FK_AvailableServiceType_AvailableServiceType_ParentId |
| RequiresDate        |                                                       |
| RequiresPhone       |                                                       |
| ShortName           |                                                       |
| RowVersion          |                                                       |
| ShowCalendar        |                                                       |
| Duration            |                                                       |

### `AvailableServiceTypeDeliverable`

| Column                 | FK                                                                             |
| ---------------------- | ------------------------------------------------------------------------------ |
| AvailableServiceTypeId | FK_AvailableServiceTypeDeliverable_AvailableServiceType_AvailableServiceTypeId |
| AssetTypeId            | FK_AvailableServiceTypeDeliverable_MasterAssetType_AssetTypeId                 |
