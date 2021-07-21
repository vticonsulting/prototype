---
title: Inbox
---

## `AdjusterManager`

| Column     | FK                                 |
| ---------- | ---------------------------------- |
| AdjusterId | FK_AdjusterManager_User_AdjusterId |
| ManagerId  | FK_AdjusterManager_User_ManagerId  |
| CreatedBy  | FK_AdjusterManager_User_CreatedBy  |
| CreatedOn  |                                    |

## `Announcement`

| Column       | FK                          |
| ------------ | --------------------------- |
| Id           |                             |
| Author       | FK_Announcement_User_Author |
| Text         |                             |
| CreatedOn    |                             |
| EndDate      |                             |
| HighPriority |                             |
| IsDeleted    |                             |
| PublishDate  |                             |
| SendEmail    |                             |
| SendSmsEmail |                             |
| Sent         |                             |
| SentOn       |                             |
| Title        |                             |

## `AnnouncementsPublishTo`

| Column                 | FK                                                    |
| ---------------------- | ----------------------------------------------------- |
| Id                     |                                                       |
| AnnouncementId         | FK_AnnouncementsPublishTo_Announcement_AnnouncementId |
| IsAll                  |                                                       |
| IsApplicationUserGroup |                                                       |
| IsArea                 |                                                       |
| IsInsuranceAdjuster    |                                                       |
| IsRegion               |                                                       |
| PublishTo              |                                                       |

## `Appointment`

| Column              | FK                            |
| ------------------- | ----------------------------- |
| Id                  |                               |
| UserId              | FK_Appointment_User_UserId    |
| CreatedBy           | FK_Appointment_User_CreatedBy |
| CreatedOn           |                               |
| Description         |                               |
| EndDate             |                               |
| IsAllDay            |                               |
| RecurrenceException |                               |
| RecurrenceId        |                               |
| RecurrenceRule      |                               |
| Start               |                               |
| Title               |                               |

## `Asset`

| Column                    | FK  |
| ------------------------- | --- |
| Id                        |     |
| AssetName                 |     |
| CreatedBy                 |     |
| CreatedOn                 |     |
| Description               |     |
| FileName                  |     |
| FullPath                  |     |
| IsDeleted                 |     |
| Order                     |     |
| ProjectId                 |     |
| PropertyInspectionFormId  |     |
| AssetFieldId              |     |
| AssetTypeId               |     |
| UpdatedBy                 |     |
| HasMetaData               |     |
| ImageHeightPixels         |     |
| ImageWidthPixels          |     |
| Make                      |     |
| Model                     |     |
| OriginalFileTypeExtension |     |
| SoftwareVersion           |     |
| Xresolution               |     |
| Yresolution               |     |
| CompressedFileSize        |     |
| OriginalPhotoFormSize     |     |
| WasCompressed             |     |

## `AssetAction`

| Column      | FK  |
| ----------- | --- |
| Id          |     |
| Description |     |
| Name        |     |

## `AssetExport`

| Column              | FK                                           |
| ------------------- | -------------------------------------------- |
| Id                  |                                              |
| VendorTypeId        | FK_AssetExport_MasterVendorType_VendorTypeId |
| ExportRunDate       |                                              |
| ProjectId           |                                              |
| AssetsToExportCount |                                              |
| LastStatusMessage   |                                              |
| TransactionId       |                                              |

## `AssetExportItem`

| Column            | FK                                             |
| ----------------- | ---------------------------------------------- |
| Id                |                                                |
| AssetId           | FK_AssetExportItem_Asset_AssetId               |
| AssetExportId     | FK_AssetExportItem_AssetExport_AssetExportId   |
| AssetTypeId       | FK_AssetExportItem_MasterAssetType_AssetTypeId |
| ExportAttempts    |                                                |
| ExportedDate      |                                                |
| IsExported        |                                                |
| LastStatusMessage |                                                |

## `AssetLogItem`

| Column     | FK                          |
| ---------- | --------------------------- |
| Id         |                             |
| UserId     | FK_AssetLogItem_User_UserId |
| ActionId   |                             |
| AssetId    |                             |
| ChangeDate |                             |
| LogData    |                             |
| EmailedTo  |                             |
