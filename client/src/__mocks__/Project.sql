DROP TABLE [dbo].[Project];
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: sequences, indices, triggers. Do not use it as a backup.

CREATE TABLE [dbo].[Project] (
    [Id] int,
    [AddressComments] varchar,
    [AddressLatitude] float,
    [AddressLongitude] float,
    [AdjusterAssignedOn] datetime DEFAULT (getdate()),
    [AdjusterId] int,
    [AdjusterProjectNumber] int,
    [BilledOn] datetime DEFAULT (getdate()),
    [BillingContactId] int,
    [BillingResultMessage] varchar,
    [BillingStatusId] int,
    [CatastrophicEvent] bit DEFAULT ((0)),
    [City] varchar,
    [ClaimComments] varchar,
    [ClaimId] int,
    [CompanyId] int,
    [CreatedBy] int,
    [CreatedOn] datetime DEFAULT (getdate()),
    [DialerSkillId] int,
    [DialerStatus] varchar,
    [FlaggedBy] int,
    [InsuredEmail] varchar,
    [InsuredFirstName] varchar,
    [InsuredLastName] varchar,
    [InsuredPrimaryPhone] varchar,
    [InsuredSecondaryPhone] varchar,
    [IsMultipleAssign] bit DEFAULT ((0)),
    [IsReinspect] bit DEFAULT ((0)),
    [IsTimeWindow] bit DEFAULT ((0)),
    [MasterFormBackUp] varchar,
    [MultiUnit] bit DEFAULT ((0)),
    [Notes] varchar,
    [OtherServiceType] bit DEFAULT ((0)),
    [OtherServiceTypeDescription] varchar,
    [OtherServiceTypePrice] decimal,
    [PostalCode] varchar,
    [ProjectNumber] varchar,
    [ProjectSourceId] int,
    [ProjectStatusId] int,
    [ReadBySvt] int,
    [RequiresHaagInspector] bit DEFAULT ((0)),
    [SkipGeomniProcessing] bit DEFAULT ((0)),
    [StateId] int,
    [StreetAddress1] varchar,
    [StreetAddress2] varchar,
    [TimeWindowDuration] int,
    [TimeWindowEnd] datetime DEFAULT (getdate()),
    [TimeWindowStart] datetime DEFAULT (getdate()),
    [RowVersion] timestamp,
    [EscalationResolutionDescription] varchar,
    [IsEscalation] bit DEFAULT ((0)),
    [IsReschedule] bit DEFAULT ((0)),
    [RescheduleReasonTypeId] int,
    [EscalationReasonTypeId] int,
    [BillingContactType] varchar DEFAULT (N''),
    [ContactDateTime] datetime,
    [ContactedByUserId] int,
    [HasBeenContacted] bit,
    CONSTRAINT [FK_Project_User_AdjusterId] FOREIGN KEY ([AdjusterId]) REFERENCES [dbo].[User]([Id]),
    CONSTRAINT [FK_Project_User_BillingContactId] FOREIGN KEY ([BillingContactId]) REFERENCES [dbo].[User]([Id]),
    CONSTRAINT [FK_Project_BillingStatusType_BillingStatusId] FOREIGN KEY ([BillingStatusId]) REFERENCES [dbo].[BillingStatusType]([Id]),
    CONSTRAINT [FK_Project_Claim_ClaimId] FOREIGN KEY ([ClaimId]) REFERENCES [dbo].[Claim]([Id]),
    CONSTRAINT [FK_Project_User_CreatedBy] FOREIGN KEY ([CreatedBy]) REFERENCES [dbo].[User]([Id]),
    CONSTRAINT [FK_Project_User_FlaggedBy] FOREIGN KEY ([FlaggedBy]) REFERENCES [dbo].[User]([Id]),
    CONSTRAINT [FK_Project_ProjectSource_ProjectSourceId] FOREIGN KEY ([ProjectSourceId]) REFERENCES [dbo].[ProjectSource]([Id]),
    CONSTRAINT [FK_Project_ProjectStatus_ProjectStatusId] FOREIGN KEY ([ProjectStatusId]) REFERENCES [dbo].[ProjectStatus]([Id]),
    CONSTRAINT [FK_Project_State_StateId] FOREIGN KEY ([StateId]) REFERENCES [dbo].[State]([Id]),
    CONSTRAINT [FK_Project_Company_CompanyId] FOREIGN KEY ([CompanyId]) REFERENCES [dbo].[Company]([Id]) ON DELETE 1,
    CONSTRAINT [FK_Project_MasterRescheduleReasonType_RescheduleReasonTypeId] FOREIGN KEY ([RescheduleReasonTypeId]) REFERENCES [dbo].[MasterRescheduleReasonType]([Id]),
    CONSTRAINT [FK_Project_MasterEscalationReasonType_EscalationReasonTypeId] FOREIGN KEY ([EscalationReasonTypeId]) REFERENCES [dbo].[MasterEscalationReasonType]([Id]),
    CONSTRAINT [FK_Project_User_ContactedByUserId] FOREIGN KEY ([ContactedByUserId]) REFERENCES [dbo].[User]([Id]),
    PRIMARY KEY ([Id])
);

