---
title: Projects and Claims
---

## Views

- All projects
- Archived
- Billed

## Tables

### `Project`

| Column                          | FK                                                           |
| ------------------------------- | ------------------------------------------------------------ |
| Id                              |                                                              |
| AddressComments                 |                                                              |
| AddressLatitude                 |                                                              |
| AddressLongitude                |                                                              |
| AdjusterAssignedOn              |                                                              |
| AdjusterId                      | FK_Project_User_AdjusterId                                   |
| AdjusterProjectNumber           |                                                              |
| BilledOn                        |                                                              |
| BillingContactId                | FK_Project_User_BillingContactId                             |
| BillingResultMessage            |                                                              |
| BillingStatusId                 | FK_Project_BillingStatusType_BillingStatusId                 |
| CatastrophicEvent               |                                                              |
| City                            |                                                              |
| ClaimComments                   |                                                              |
| ClaimId                         | FK_Project_Claim_ClaimId                                     |
| CompanyId                       | FK_Project_Company_CompanyId                                 |
| CreatedBy                       | FK_Project_User_CreatedBy                                    |
| CreatedOn                       |                                                              |
| DialerSkillId                   |                                                              |
| DialerStatus                    |                                                              |
| FlaggedBy                       | FK_Project_User_FlaggedBy                                    |
| InsuredEmail                    |                                                              |
| InsuredFirstName                |                                                              |
| InsuredLastName                 |                                                              |
| InsuredPrimaryPhone             |                                                              |
| InsuredSecondaryPhone           |                                                              |
| IsMultipleAssign                |                                                              |
| IsReinspect                     |                                                              |
| IsTimeWindow                    |                                                              |
| MasterFormBackUp                |                                                              |
| MultiUnit                       |                                                              |
| Notes                           |                                                              |
| OtherServiceType                |                                                              |
| OtherServiceTypeDescription     |                                                              |
| OtherServiceTypePrice           |                                                              |
| PostalCode                      |                                                              |
| ProjectNumber                   |                                                              |
| ProjectSourceId                 | FK_Project_ProjectSource_ProjectSourceId                     |
| ProjectStatusId                 | FK_Project_ProjectStatus_ProjectStatusId                     |
| ReadBySvt                       |                                                              |
| RequiresHaagInspector           |                                                              |
| SkipGeomniProcessing            |                                                              |
| StateId                         | FK_Project_State_StateId                                     |
| StreetAddress1                  |                                                              |
| StreetAddress2                  |                                                              |
| TimeWindowDuration              |                                                              |
| TimeWindowEnd                   |                                                              |
| TimeWindowStart                 |                                                              |
| EscalationResolutionDescription |                                                              |
| IsEscalation                    |                                                              |
| IsReschedule                    |                                                              |
| RescheduleReasonTypeId          | FK_Project_MasterRescheduleReasonType_RescheduleReasonTypeId |
| EscalationReasonTypeId          | FK_Project_MasterEscalationReasonType_EscalationReasonTypeId |
| BillingContactType              |                                                              |
| ContactDateTime                 |                                                              |
| ContactedByUserId               | FK_Project_User_ContactedByUserId                            |
| HasBeenContacted                |                                                              |

### `ProjectComment`

| Column         | FK                                  |
| -------------- | ----------------------------------- |
| Id             |                                     |
| CommentText    |                                     |
| CreatedBy      | FK_ProjectComment_User_CreatedBy    |
| CreatedOn      |                                     |
| IsSeenByOthers |                                     |
| ProjectId      | FK_ProjectComment_Project_ProjectId |

### `ProjectDamageType`

| Column          | FK                                     |
| --------------- | -------------------------------------- |
| DamageTypeId    |                                        |
| ProjectId       | FK_ProjectDamageType_Project_ProjectId |
| OtherInspection |                                        |

### `ProjectInspection`

| Column                | FK                                                 |
| --------------------- | -------------------------------------------------- |
| Id                    |                                                    |
| Assignable            |                                                    |
| CreatedBy             | FK_ProjectInspection_User_CreatedBy                |
| CreatedOn             |                                                    |
| Duration              |                                                    |
| ProjectId             | FK_ProjectInspection_Project_ProjectId             |
| ScheduleDate          |                                                    |
| ServiceAreaId         | FK_ProjectInspection_ServiceArea_ServiceAreaId     |
| ServiceRegionId       | FK_ProjectInspection_ServiceRegion_ServiceRegionId |
| AssignedRoute         |                                                    |
| RowVersion            |                                                    |
| IsLivegenicInspection |                                                    |

### `ProjectInspectionTechnician`

| Column              | FK                                                                   |
| ------------------- | -------------------------------------------------------------------- |
| ProjectInspectionId | FK_ProjectInspectionTechnician_ProjectInspection_ProjectInspectionId |
| UserId              | FK_ProjectInspectionTechnician_User_UserId                           |

### `ProjectInspectionTravelTime`

| Column               | FK  |
| -------------------- | --- |
| ProjectInspection1Id |     |
| ProjectInspection2Id |     |
| TimeInMinutes        |     |
| CreatedOn            |     |

### `ProjectLogItem`

| Column                               | FK                                              |
| ------------------------------------ | ----------------------------------------------- |
| Id                                   |                                                 |
| ChangeDate                           |                                                 |
| ChangedProperties                    |                                                 |
| CreatedBy                            | FK_ProjectLogItem_User_CreatedBy                |
| CreatedOn                            |                                                 |
| Description                          |                                                 |
| ProjectId                            | FK_ProjectLogItem_Project_ProjectId             |
| ProjectStatusId                      | FK_ProjectLogItem_ProjectStatus_ProjectStatusId |
| UserId FK_ProjectLogItem_User_UserId |                                                 |

### `ProjectRoofAssessmentForm`

| Column                            | FK                                             |
| --------------------------------- | ---------------------------------------------- |
| ID                                |                                                |
| ACUnitDamage                      |                                                |
| ACUnitDamageDesc                  |                                                |
| AdditionalItem1Damage             |                                                |
| AdditionalItem1DamageDesc         |                                                |
| AdditionalItem1DamageIntExt       |                                                |
| AdditionalItem1DamageText         |                                                |
| AdditionalItem2Damage             |                                                |
| AdditionalItem2DamageDesc         |                                                |
| AdditionalItem2DamageIntExt       |                                                |
| AdditionalItem2DamageText         |                                                |
| AdditionalItem3Damage             |                                                |
| AdditionalItem3DamageDesc         |                                                |
| AdditionalItem3DamageIntExt       |                                                |
| AdditionalItem3DamageText         |                                                |
| AdditionalItem4Damage             |                                                |
| AdditionalItem4DamageDesc         |                                                |
| AdditionalItem4DamageIntExt       |                                                |
| AdditionalItem4DamageText         |                                                |
| AdditionalItem5Damage             |                                                |
| AdditionalItem5DamageDesc         |                                                |
| AdditionalItem5DamageIntExt       |                                                |
| AdditionalItem5DamageText         |                                                |
| AdditionalSummary                 |                                                |
| AdjusterOnLadder                  |                                                |
| AdjusterOnRoof                    |                                                |
| AdjusterOnRoofEdge                |                                                |
| AdjusterPresent                   |                                                |
| AllPhotosTaken                    |                                                |
| AwningMaterial                    |                                                |
| AwningMaterialOther               |                                                |
| AwningsPatioCoverDamageDesc       |                                                |
| AwningsPatioCovers                |                                                |
| AwningsSqFt                       |                                                |
| BoxVentDamaged                    |                                                |
| BoxVentMaterial                   |                                                |
| BoxVentPainted                    |                                                |
| BoxVents                          |                                                |
| BoxVentTotal                      |                                                |
| BrittlenessTest                   |                                                |
| BrittlenessTestEast               |                                                |
| BrittlenessTestEastResult         |                                                |
| BrittlenessTestNorth              |                                                |
| BrittlenessTestNorthResult        |                                                |
| BrittlenessTestSouth              |                                                |
| BrittlenessTestSouthResult        |                                                |
| BrittlenessTestWest               |                                                |
| BrittlenessTestWestResult         |                                                |
| BrittleTestDamage                 |                                                |
| CanVentDamaged                    |                                                |
| CanVentPainted                    |                                                |
| CanVents                          |                                                |
| CanVentTotal                      |                                                |
| CarportDamage                     |                                                |
| CarportDamageDesc                 |                                                |
| ChimneyCapDamaged                 |                                                |
| ChimneyCapPainted                 |                                                |
| ChimneyCaps                       |                                                |
| ChimneyCapTotal                   |                                                |
| ChimneyFlashing                   |                                                |
| ChimneyFlashingDamaged            |                                                |
| ChimneyFlashingLargeQty           |                                                |
| ChimneyFlashingMediumQty          |                                                |
| ChimneyFlashingSize               |                                                |
| ChimneyFlashingSmallQty           |                                                |
| ChimneyFlashingTotal              |                                                |
| ContractorPresent                 |                                                |
| ContractorPresentInspection       |                                                |
| ContractorPresentRoof             |                                                |
| CreatedBy                         | FK_ProjectRoofAssessmentForm_User_CreatedBy    |
| CreatedOn                         |                                                |
| DamagePresent                     |                                                |
| DamagePresentOtherDamaged         |                                                |
| DamagePresentOtherDesc            |                                                |
| DeckDamageDesc                    |                                                |
| DeckMaterial                      |                                                |
| DeckPainted                       |                                                |
| Decks                             |                                                |
| DeckSqFt                          |                                                |
| DeckStained                       |                                                |
| DeckTotal                         |                                                |
| DiagramRoof                       |                                                |
| DirectionalityEast                |                                                |
| DirectionalityNorth               |                                                |
| DirectionalitySouth               |                                                |
| DirectionalityWest                |                                                |
| DoorDamageDesc                    |                                                |
| DoorsDamage                       |                                                |
| DownspoutDamage                   |                                                |
| DownspoutDamageDesc               |                                                |
| DownspoutDamageEastLf             |                                                |
| DownspoutDamageNorthLf            |                                                |
| DownspoutDamageSouthLf            |                                                |
| DownspoutDamageWestLf             |                                                |
| DownspoutMaterial                 |                                                |
| DownspoutsDamage                  |                                                |
| DownspoutsDamageFeet              |                                                |
| DownspoutSize                     |                                                |
| DownspoutSizeOther                |                                                |
| DownspoutsPainted                 |                                                |
| DripEdge                          |                                                |
| DripEdgeDamaged                   |                                                |
| DripEdgeEaves                     |                                                |
| DripEdgeEavesPainted              |                                                |
| DripEdgeItem                      |                                                |
| DripEdgePainted                   |                                                |
| DripEdgeRake                      |                                                |
| DripEdgeRakePainted               |                                                |
| DripEdgeTotal                     |                                                |
| EagleviewProvided                 |                                                |
| Eaves                             |                                                |
| FasciaDamage                      |                                                |
| FasciaDamageEastLf                |                                                |
| FasciaDamageNorthLf               |                                                |
| FasciaDamageSouthLf               |                                                |
| FasciaDamageWestLf                |                                                |
| FasciaMaterial                    |                                                |
| FasciaMaterialOther               |                                                |
| FasciaPainted                     |                                                |
| FasciaSize                        |                                                |
| FasciaSizeOther                   |                                                |
| Felt                              |                                                |
| FeltQuantity                      |                                                |
| FeltQuantityDamaged               |                                                |
| FeltType                          |                                                |
| FenceDamageDesc                   |                                                |
| FenceMaterial                     |                                                |
| FencePainted                      |                                                |
| FencesDamaged                     |                                                |
| FencesOrDecks                     |                                                |
| FenceSqFt                         |                                                |
| FenceStained                      |                                                |
| FencesTotal                       |                                                |
| FlashingDamaged                   |                                                |
| FlashingPainted                   |                                                |
| Flashings                         |                                                |
| FlashingTotal                     |                                                |
| FlashingType                      |                                                |
| GableVentDamaged                  |                                                |
| GableVentPainted                  |                                                |
| GableVents                        |                                                |
| GableVentTotal                    |                                                |
| GroundLevelDamage                 |                                                |
| GroundLevelDamageReason           |                                                |
| GutterDamage                      |                                                |
| GutterDamageDesc                  |                                                |
| GutterDamageEastLf                |                                                |
| GutterDamageFeet                  |                                                |
| GutterDamageNorthLf               |                                                |
| GutterDamageSouthLf               |                                                |
| GutterDamageWestLf                |                                                |
| GutterMaterial                    |                                                |
| GutterMaterialOther               |                                                |
| Gutters                           |                                                |
| GuttersDamaged                    |                                                |
| GutterSize                        |                                                |
| GutterSizeOther                   |                                                |
| GuttersPainted                    |                                                |
| GuttersTotal                      |                                                |
| HailDamageEast                    |                                                |
| HailDamageNorth                   |                                                |
| HailDamageSouth                   |                                                |
| HailDamageWest                    |                                                |
| HailNotes                         |                                                |
| HailSize                          |                                                |
| HailTestSqSizeE                   |                                                |
| HailTestSqSizeN                   |                                                |
| HailTestSqSizeS                   |                                                |
| HailTestSqSizeW                   |                                                |
| HandRailMaterial                  |                                                |
| HandRailPainted                   |                                                |
| HandRailsDamaged                  |                                                |
| HandRailSqFt                      |                                                |
| HandRailStained                   |                                                |
| HandRailTotal                     |                                                |
| HVAC4Vents                        |                                                |
| HVAC4VentsDamaged                 |                                                |
| HVAC4VentsPainted                 |                                                |
| HVAC4VentsTotal                   |                                                |
| HVAC6Vents                        |                                                |
| HVAC6VentsDamaged                 |                                                |
| HVAC6VentsPainted                 |                                                |
| HVAC6VentsTotal                   |                                                |
| HVAC8Vents                        |                                                |
| HVAC8VentsDamaged                 |                                                |
| HVAC8VentsPainted                 |                                                |
| HVAC8VentsTotal                   |                                                |
| HVACVentDamaged                   |                                                |
| HVACVentPainted                   |                                                |
| HVACVents                         |                                                |
| HVACVentTotal                     |                                                |
| IceWaterShield                    |                                                |
| IceWaterShieldDamaged             |                                                |
| IceWaterShieldItem                |                                                |
| IceWaterShieldPainted             |                                                |
| IceWaterShieldTotal               |                                                |
| InstallationError                 |                                                |
| InstallationErrorOtherText        |                                                |
| InstallationErrorReason           |                                                |
| InteriorAdditional1ItemSqFt       |                                                |
| InteriorAdditional2ItemSqFt       |                                                |
| InteriorAdditional3ItemSqFt       |                                                |
| InteriorAdditional4ItemSqFt       |                                                |
| InteriorAdditional5ItemSqFt       |                                                |
| InteriorAtticDamage               |                                                |
| InteriorAtticDamageDesc           |                                                |
| InteriorAtticSqFt                 |                                                |
| InteriorBasementDamage            |                                                |
| InteriorBasementDamageDesc        |                                                |
| InteriorBasementSqFt              |                                                |
| InteriorBathroom2Damage           |                                                |
| InteriorBathroom2DamageDesc       |                                                |
| InteriorBathRoom2SqFt             |                                                |
| InteriorBathroom3Damage           |                                                |
| InteriorBathroom3DamageDesc       |                                                |
| InteriorBathRoom3SqFt             |                                                |
| InteriorBedroom2ClosetSqFt        |                                                |
| InteriorBedroom2Damage            |                                                |
| InteriorBedroom2DamageDesc        |                                                |
| InteriorBedroom2SqFt              |                                                |
| InteriorBedroom3ClosetSqFt        |                                                |
| InteriorBedroom3Damage            |                                                |
| InteriorBedroom3DamageDesc        |                                                |
| InteriorBedroom3SqFt              |                                                |
| InteriorBedroom4ClosetSqFt        |                                                |
| InteriorBedroom4Damage            |                                                |
| InteriorBedroom4DamageDesc        |                                                |
| InteriorBedroom4SqFt              |                                                |
| InteriorBR2ClosetDamage           |                                                |
| InteriorBR2ClosetDamageDesc       |                                                |
| InteriorBR3ClosetDamage           |                                                |
| InteriorBR3ClosetDamageDesc       |                                                |
| InteriorBR4ClosetDamage           |                                                |
| InteriorBR4ClosetDamageDesc       |                                                |
| InteriorBreakfastAreaDamage       |                                                |
| InteriorBreakfastAreaDamageDesc   |                                                |
| InteriorBreakfastAreaSqFt         |                                                |
| InteriorContentDamageDesc         |                                                |
| InteriorContentsDamage            |                                                |
| InteriorCrawlspaceDamage          |                                                |
| InteriorCrawlspaceDamageDesc      |                                                |
| InteriorCrawlspaceSqFt            |                                                |
| InteriorDamaged                   |                                                |
| InteriorDamageDescription         |                                                |
| InteriorDiningRoomDamage          |                                                |
| InteriorDiningRoomDamageDesc      |                                                |
| InteriorDiningRoomSqFt            |                                                |
| InteriorFaimlyRoomDamageDesc      |                                                |
| InteriorFamilyRoomDamage          |                                                |
| InteriorFamilyRoomSqFt            |                                                |
| InteriorFoyerDamage               |                                                |
| InteriorFoyerDamageDesc           |                                                |
| InteriorFoyerSqFt                 |                                                |
| InteriorGameRoomDamage            |                                                |
| InteriorGameRoomDamageDesc        |                                                |
| InteriorGameRoomSqFt              |                                                |
| InteriorGarageDamage              |                                                |
| InteriorGarageDamageDesc          |                                                |
| InteriorGarageSqFt                |                                                |
| InteriorHallClosetDamage          |                                                |
| InteriorHallClosetDamageDesc      |                                                |
| InteriorHallClosetSqFt            |                                                |
| InteriorHallDamage                |                                                |
| InteriorHallDamageDesc            |                                                |
| InteriorHallSqFt                  |                                                |
| InteriorInspected                 |                                                |
| InteriorKitchenSqFt               |                                                |
| InteriorKitchinDamage             |                                                |
| InteriorKitchinDamageDesc         |                                                |
| InteriorLivingRoomDamage          |                                                |
| InteriorLivingRoomDamageDesc      |                                                |
| InteriorLivingRoomSqFt            |                                                |
| InteriorMasterBathDamage          |                                                |
| InteriorMasterBathDamageDesc      |                                                |
| InteriorMasterBathSqFt            |                                                |
| InteriorMasterBedroomClosetSqFt   |                                                |
| InteriorMasterBedroomDamage       |                                                |
| InteriorMasterBedroomDamageDesc   |                                                |
| InteriorMasterBedroomSqFt         |                                                |
| InteriorMBRClosetDamage           |                                                |
| InteriorMBRClosetDamageDesc       |                                                |
| InteriorOfficeStudyDamage         |                                                |
| InteriorOfficeStudyDamageDesc     |                                                |
| InteriorOfficeStudySqFt           |                                                |
| InteriorPantryDamage              |                                                |
| InteriorPantryDamageDesc          |                                                |
| InteriorPantrySqFt                |                                                |
| InteriorUtilityClosetDamage       |                                                |
| InteriorUtilityClosetDamageDesc   |                                                |
| InteriorUtilitySqFt               |                                                |
| LAAccompanied                     |                                                |
| LadderAssistIntro                 |                                                |
| LadderAssistPresent               |                                                |
| LadderAssistPresentInspection     |                                                |
| LadderAssistPresentRoof           |                                                |
| LAOnTime                          |                                                |
| LayerType                         |                                                |
| LayerTypeOther                    |                                                |
| ListPhotosTaken                   |                                                |
| MailboxDamage                     |                                                |
| MailboxDamageDesc                 |                                                |
| Masthead                          |                                                |
| MastheadDamaged                   |                                                |
| MastheadPainted                   |                                                |
| MastheadTotal                     |                                                |
| MeasureRoof                       |                                                |
| MiscNotes                         |                                                |
| ModifiedBy                        |                                                |
| ModifiedOn                        |                                                |
| NeighborhoodDamage                |                                                |
| NumberLayers                      |                                                |
| NumberStories                     |                                                |
| NumberStoriesOther                |                                                |
| OAInitialsRequired                |                                                |
| OAInitialsUrl                     |                                                |
| OAReviewRAF                       |                                                |
| OldOAInitialsUrl                  |                                                |
| OtherConditionBlisters            |                                                |
| OtherConditionCuppedCurled        |                                                |
| OtherConditionDebris              |                                                |
| OtherConditionExcessiveWeathering |                                                |
| OtherConditionExposedFasteners    |                                                |
| OtherConditionFlashing            |                                                |
| OtherConditionGranuleLoss         |                                                |
| OtherConditionImproperInstalltion |                                                |
| OtherConditionInsectRodent        |                                                |
| OtherConditionNailPop             |                                                |
| OtherConditionRoofDecking         |                                                |
| OtherConditions                   |                                                |
| OtherConditionsDesc               |                                                |
| OtherConditionSpatterMarks        |                                                |
| OtherFlashingNotes                |                                                |
| OtherItemPainted                  |                                                |
| OtherItems                        |                                                |
| OtherItemsDamaged                 |                                                |
| OtherItemTotal                    |                                                |
| OtherManufacturedDamage           |                                                |
| OtherMechanicalDamage             |                                                |
| OtherPresent                      |                                                |
| OtherPresentInspection            |                                                |
| OtherPresentName                  |                                                |
| OtherPresentRoof                  |                                                |
| OtherPriorRepairs                 |                                                |
| OtherPriorRepairsNotes            |                                                |
| OtherRoofMaterialDesc             |                                                |
| OtherRoofTypeDesc                 |                                                |
| OutBuildingDamage                 |                                                |
| OutBuildingNotes                  |                                                |
| OutsideAdjusterPresent            |                                                |
| OutsideAdjusterPresentInspection  |                                                |
| OutsideAdjusterPresentRoof        |                                                |
| OutsideTemp                       |                                                |
| OxidationDirectionEast            |                                                |
| OxidationDirectionNorth           |                                                |
| OxidationDirectionSouth           |                                                |
| OxidationDirectionWest            |                                                |
| OxidationRemoved                  |                                                |
| PatioDamage                       |                                                |
| PatioDamageDesc                   |                                                |
| PatioFurniture                    |                                                |
| PipebootDamaged                   |                                                |
| PipebootMaterial                  |                                                |
| PipebootPainted                   |                                                |
| Pipeboots                         |                                                |
| PipebootTotal                     |                                                |
| PoolEnclosure                     |                                                |
| PoolEnclosureDamageDesc           |                                                |
| PowerVentMaterial                 |                                                |
| PowerVentPainted                  |                                                |
| PowerVents                        |                                                |
| PowerVentsDamaged                 |                                                |
| PowerVentsTotal                   |                                                |
| PredominantRoofPitch              |                                                |
| PresentDuringInspection           |                                                |
| PresentDuringInspectionOnRoof     |                                                |
| PriorRepairEast                   |                                                |
| PriorRepairNorth                  |                                                |
| PriorRepairs                      |                                                |
| PriorRepairsEast                  |                                                |
| PriorRepairsNorth                 |                                                |
| PriorRepairSouth                  |                                                |
| PriorRepairsSouth                 |                                                |
| PriorRepairsWest                  |                                                |
| PriorRepairWest                   |                                                |
| ProjectID                         | FK_ProjectRoofAssessmentForm_Project_ProjectID |
| PublicAdjusterOnRoof              |                                                |
| PublicAdjusterPresent             |                                                |
| PublicAdjusterPresentInspection   |                                                |
| PublicAdjusterPresentRoof         |                                                |
| RainDiverters                     |                                                |
| RainDivertersDamaged              |                                                |
| RainDivertersPainted              |                                                |
| RainDivertersTotal                |                                                |
| RakeQuantity                      |                                                |
| RakeQuantityDamaged               |                                                |
| RakeStarter                       |                                                |
| RefrigerationCoils                |                                                |
| RefrigerationCoilsQty             |                                                |
| RidgeShingleDamaged               |                                                |
| RidgeShingleQuantity              |                                                |
| RidgeShingles                     |                                                |
| RidgeShingleType                  |                                                |
| RidgeVentDamaged                  |                                                |
| RidgeVentMaterial                 |                                                |
| RidgeVentPainted                  |                                                |
| RidgeVents                        |                                                |
| RidgeVentTotal                    |                                                |
| RoofAge                           |                                                |
| RoofArea                          |                                                |
| RoofAreaUnit                      |                                                |
| RoofDamage                        |                                                |
| RoofDamageDesc                    |                                                |
| RoofMaterial                      |                                                |
| RoofMetalAccNotes                 |                                                |
| RoofObservations                  |                                                |
| RoofSqFtFirstStory                |                                                |
| RoofSqFtPitch12                   |                                                |
| RoofSqFtPitch6                    |                                                |
| RoofSqFtPitch9                    |                                                |
| RoofSqFtSecondStory               |                                                |
| RoofType                          |                                                |
| RopeHarnessUsed                   |                                                |
| Satellite                         |                                                |
| SatelliteDamaged                  |                                                |
| SatelliteTotal                    |                                                |
| ShingleType                       |                                                |
| SidingDamage                      |                                                |
| SidingEastSqFt                    |                                                |
| SidingMaterial                    |                                                |
| SidingMaterialOther               |                                                |
| SidingNorthSqFt                   |                                                |
| SidingNotes                       |                                                |
| SidingSouthSqFt                   |                                                |
| SidingWestSqFt                    |                                                |
| SkylightDamaged                   |                                                |
| Skylights                         |                                                |
| SkylightsPainted                  |                                                |
| SkylightTotal                     |                                                |
| SoffitVentDamaged                 |                                                |
| SoffitVentPainted                 |                                                |
| SoffitVents                       |                                                |
| SoffitVentTotal                   |                                                |
| StormDamage                       |                                                |
| StormDirection                    |                                                |
| Subrogation                       |                                                |
| TarpInstall                       |                                                |
| TarpRemoveReset                   |                                                |
| TreesFlowersShubs                 |                                                |
| TurbineDamaged                    |                                                |
| TurbinePainted                    |                                                |
| Turbines                          |                                                |
| TurbineTotal                      |                                                |
| ValleyMetal                       |                                                |
| ValleyMetalDamaged                |                                                |
| ValleyMetalMaterial               |                                                |
| ValleyMetalPainted                |                                                |
| ValleyMetalTotal                  |                                                |
| ValleyType                        |                                                |
| WindDamageEast                    |                                                |
| WindDamageEastFacet1              |                                                |
| WindDamageEastFacet2              |                                                |
| WindDamageEastFacet3              |                                                |
| WindDamageEastFacet4              |                                                |
| WindDamageEastFacet5              |                                                |
| WindDamageNorth                   |                                                |
| WindDamageNorthFacet1             |                                                |
| WindDamageNorthFacet2             |                                                |
| WindDamageNorthFacet3             |                                                |
| WindDamageNorthFacet4             |                                                |
| WindDamageNorthFacet5             |                                                |
| WindDamageSouth                   |                                                |
| WindDamageSouthFacet1             |                                                |
| WindDamageSouthFacet2             |                                                |
| WindDamageSouthFacet3             |                                                |
| WindDamageSouthFacet4             |                                                |
| WindDamageSouthFacet5             |                                                |
| WindDamageWest                    |                                                |
| WindDamageWestFacet1              |                                                |
| WindDamageWestFacet2              |                                                |
| WindDamageWestFacet3              |                                                |
| WindDamageWestFacet4              |                                                |
| WindDamageWestFacet5              |                                                |
| WindNotes                         |                                                |
| WindowDamageDesc                  |                                                |
| Windows                           |                                                |
| WindowScreenDamageDesc            |                                                |
| WindowScreenSizeLargeQty          |                                                |
| WindowScreenSizeMediumQty         |                                                |
| WindowScreenSizeSmallQty          |                                                |
| WindowScreenSizeXLQty             |                                                |
| WindowSizeLargeQty                |                                                |
| WindowSizeMediumQty               |                                                |
| WindowSizeOtherQty                |                                                |
| WindowSizeSmallQty                |                                                |
| WindowSizeXLQty                   |                                                |
| WindowsScreens                    |                                                |
| DownspoutDamagedEast              |                                                |
| DownspoutDamagedNorth             |                                                |
| DownspoutDamagedSouth             |                                                |
| DownspoutDamagedWest              |                                                |

### `ProjectPropertyInspectionForm`

| Column                            | FK                                                    |
| --------------------------------- | ----------------------------------------------------- |
| ExteriorMailboxDamageDesc         |                                                       |
| ExteriorPatioCoveringDamage       |                                                       |
| ExteriorPatioCoveringDamageDesc   |                                                       |
| ExteriorPatiosDamage              |                                                       |
| ExteriorPatiosDamageDesc          |                                                       |
| ExteriorPoolEncloseDamage         |                                                       |
| ExteriorPoolEncloseDamageDesc     |                                                       |
| ExteriorRoofDamage                |                                                       |
| ExteriorRoofDamageDesc            |                                                       |
| ExteriorScreensDamage             |                                                       |
| ExteriorScreensDamageDesc         |                                                       |
| ExteriorShedOutbuildingDamage     |                                                       |
| ExteriorShedoutbuildingDamageDesc |                                                       |
| ExteriorSidingDamage              |                                                       |
| ExteriorSidingDamageDesc          |                                                       |
| ExteriorWindowsDamage             |                                                       |
| ExteriorWindowsDamageDesc         |                                                       |
| InsuredOnPremises                 |                                                       |
| InteriorAtticDamage               |                                                       |
| InteriorAtticDamageDesc           |                                                       |
| InteriorBasementDamage            |                                                       |
| InteriorBasementDamageDesc        |                                                       |
| InteriorBathroom2Damage           |                                                       |
| InteriorBathroom2DamageDesc       |                                                       |
| InteriorBathroom3Damage           |                                                       |
| InteriorBathroom3DamageDesc       |                                                       |
| InteriorBedroom2Damage            |                                                       |
| InteriorBedroom2DamageDesc        |                                                       |
| InteriorBedroom3Damage            |                                                       |
| InteriorBedroom3DamageDesc        |                                                       |
| InteriorBedroom4Damage            |                                                       |
| InteriorBedroom4DamageDesc        |                                                       |
| InteriorBr2ClosetDamage           |                                                       |
| InteriorBr2ClosetDamageDesc       |                                                       |
| InteriorBr3ClosetDamage           |                                                       |
| InteriorBr3ClosetDamageDesc       |                                                       |
| InteriorBr4ClosetDamage           |                                                       |
| InteriorBr4ClosetDamageDesc       |                                                       |
| InteriorBreakfastAreaDamage       |                                                       |
| InteriorBreakfastAreaDamageDesc   |                                                       |
| InteriorContentDamageDesc         |                                                       |
| InteriorContentsDamage            |                                                       |
| InteriorCrawlspaceDamage          |                                                       |
| InteriorCrawlspaceDamageDesc      |                                                       |
| InteriorDiningRoomDamage          |                                                       |
| InteriorDiningRoomDamageDesc      |                                                       |
| InteriorFaimlyRoomDamageDesc      |                                                       |
| InteriorFamilyRoomDamage          |                                                       |
| InteriorFoyerDamage               |                                                       |
| InteriorFoyerDamageDesc           |                                                       |
| InteriorGameRoomDamage            |                                                       |
| InteriorGameRoomDamageDesc        |                                                       |
| InteriorGarageDamage              |                                                       |
| InteriorGarageDamageDesc          |                                                       |
| InteriorHallClosetDamage          |                                                       |
| InteriorHallClosetDamageDesc      |                                                       |
| InteriorHallDamage                |                                                       |
| InteriorHallDamageDesc            |                                                       |
| InteriorInspected                 |                                                       |
| InteriorKitchinDamage             |                                                       |
| InteriorKitchinDamageDesc         |                                                       |
| InteriorLivingRoomDamage          |                                                       |
| InteriorLivingRoomDamageDesc      |                                                       |
| InteriorMasterBathDamage          |                                                       |
| InteriorMasterBathDamageDesc      |                                                       |
| InteriorMasterBedroomDamage       |                                                       |
| InteriorMasterBedroomDamageDesc   |                                                       |
| InteriorMBRClosetDamage           |                                                       |
| InteriorMBRClosetDamageDesc       |                                                       |
| InteriorOfficeStudyDamage         |                                                       |
| InteriorOfficeStudyDamageDesc     |                                                       |
| InteriorPantryDamage              |                                                       |
| InteriorPantryDamageDesc          |                                                       |
| InteriorUtilityClosetDamage       |                                                       |
| InteriorUtilityClosetDamageDesc   |                                                       |
| OthersPremises                    |                                                       |
| OthersPresentDuringDi             |                                                       |
| ProjectId                         | FK_ProjectPropertyInspectionForm_Project_ProjectId    |
| CreatedByUserId                   | FK_ProjectPropertyInspectionForm_User_CreatedByUserId |
