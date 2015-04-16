var myData = {

  "Process":{
    "DbId":-1,
    "Name":"SendEmailTest",
    "Prefix":"SendEmailTest",
    "PrefixLength":4,
    "Id":"3ba13e61-b1a9-4beb-8d17-c590d134fa0e",
    "StaticName":"SendEmailTest",
    "ProcessTableName":"SendEmailTest",
    "Custom":[
      {
        "Name":"BuildId",
        "Type":"System.String, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089",
        "Value":"",
        "Index":1,
        "Group":"",
        "Size":"64",
        "IsQueryable":false,
        "ReferenceTable":"",
        "ReferenceColumn":""
      }
    ]
  },
  "States":[
    {
      "DbId":-1,
      "Id":"5c418fd2-0379-4330-9f45-faa703633e3f",
      "Name":"StartState1",
      "StaticName":"StartState1",
      "FileRead":false,
      "FileWrite":false,
      "FileDelete":false,
      "Comment":"",
      "SqlCodeAfter":"",
      "SqlDataCode":"",
      "SqlCodeBefore":"",
      "ProcessVariables":[

      ],
      "StaticRoles":[

      ],
      "DynamicRoles":[

      ]
    },
    {
      "DbId":-1,
      "Id":"fdb1c93b-dde4-4432-8062-3614be57fed4",
      "Name":"FirstEmailSent",
      "StaticName":"FirstEmailSent",
      "FileRead":false,
      "FileWrite":false,
      "FileDelete":false,
      "Comment":"",
      "SqlCodeAfter":"",
      "SqlDataCode":"",
      "SqlCodeBefore":"",
      "ProcessVariables":[
        {
          "Name":"BuildId",
          "Read":true,
          "Write":false,
          "DisplayControl":0,
          "ValueSelectionSQL":"",
          "CustomHtml":""
        }
      ],
      "StaticRoles":[
        {
          "Name":"ReportViewer",
          "ListType":0
        }
      ],
      "DynamicRoles":[
        {
          "Name":"All",
          "RoleGuid":"10c1b5dd-060a-4b86-82c5-ebf9e9229830",
          "ListType":1
        }
      ]
    },
    {
      "DbId":-1,
      "Id":"cf7099fa-5373-4cea-a53d-14a8f045979c",
      "Name":"UserState2",
      "StaticName":"UserState2",
      "FileRead":false,
      "FileWrite":false,
      "FileDelete":false,
      "Comment":"",
      "SqlCodeAfter":"",
      "SqlDataCode":"",
      "SqlCodeBefore":"",
      "ProcessVariables":[
        {
          "Name":"BuildId",
          "Read":true,
          "Write":false,
          "DisplayControl":0,
          "ValueSelectionSQL":"",
          "CustomHtml":""
        }
      ],
      "StaticRoles":[
        {
          "Name":"ReportViewer",
          "ListType":0
        }
      ],
      "DynamicRoles":[
        {
          "Name":"All",
          "RoleGuid":"10c1b5dd-060a-4b86-82c5-ebf9e9229830",
          "ListType":1
        }
      ]
    },
    {
      "DbId":-1,
      "Id":"a1bf234e-d8a6-4fb2-9ed5-fee8f6172fcb",
      "Name":"UserState3",
      "StaticName":"UserState3",
      "FileRead":false,
      "FileWrite":false,
      "FileDelete":false,
      "Comment":"",
      "SqlCodeAfter":"",
      "SqlDataCode":"",
      "SqlCodeBefore":"",
      "ProcessVariables":[
        {
          "Name":"BuildId",
          "Read":true,
          "Write":false,
          "DisplayControl":0,
          "ValueSelectionSQL":"",
          "CustomHtml":""
        }
      ],
      "StaticRoles":[
        {
          "Name":"ReportViewer",
          "ListType":0
        }
      ],
      "DynamicRoles":[
        {
          "Name":"All",
          "RoleGuid":"10c1b5dd-060a-4b86-82c5-ebf9e9229830",
          "ListType":1
        }
      ]
    },
    {
      "DbId":-1,
      "Id":"781495d1-bcce-468a-b740-add5a0cc1233",
      "Name":"UserState4",
      "StaticName":"UserState4",
      "FileRead":false,
      "FileWrite":false,
      "FileDelete":false,
      "Comment":"",
      "SqlCodeAfter":"",
      "SqlDataCode":"",
      "SqlCodeBefore":"",
      "ProcessVariables":[
        {
          "Name":"BuildId",
          "Read":true,
          "Write":false,
          "DisplayControl":0,
          "ValueSelectionSQL":"",
          "CustomHtml":""
        }
      ],
      "StaticRoles":[
        {
          "Name":"ReportViewer",
          "ListType":0
        }
      ],
      "DynamicRoles":[
        {
          "Name":"All",
          "RoleGuid":"10c1b5dd-060a-4b86-82c5-ebf9e9229830",
          "ListType":1
        }
      ]
    },
    {
      "DbId":-1,
      "Id":"f2308308-5e43-4dde-a092-c3dc82eb6a4e",
      "Name":"UserState5",
      "StaticName":"UserState5",
      "FileRead":false,
      "FileWrite":false,
      "FileDelete":false,
      "Comment":"",
      "SqlCodeAfter":"",
      "SqlDataCode":"",
      "SqlCodeBefore":"",
      "ProcessVariables":[
        {
          "Name":"BuildId",
          "Read":true,
          "Write":false,
          "DisplayControl":0,
          "ValueSelectionSQL":"",
          "CustomHtml":""
        }
      ],
      "StaticRoles":[

      ],
      "DynamicRoles":[
        {
          "Name":"All",
          "RoleGuid":"10c1b5dd-060a-4b86-82c5-ebf9e9229830",
          "ListType":1
        }
      ]
    }
  ],
  "Events":[
    {
      "DbId":-1,
      "Id":"b10c61aa-4bdd-4d48-8607-74f4e31638d5",
      "Name":"StartSendEmailTestProcess",
      "EventName":"StartSendEmailTestProcess",
      "StaticName":"StartSendEmailTestProcess",
      "FileRead":false,
      "FileWrite":false,
      "FileDelete":false,
      "Comment":"",
      "SqlCodeAfter":"DECLARE @users \t\t\tXML;\nDECLARE @attachments \tXML;\nDECLARE @MailSubject \tNVARCHAR(MAX) \t= '  Test'+char(9)+char(10)+' email '+char(13)+'with dirty message   ';\nSET @users\t\t\t= '<user Email=\"devcodeserver@gmail.com\" />';\nSET @attachments\t= NULL;\n\nSET @MailText = (SELECT REPLACE(@MailText, '_INSTANCEID_', CONVERT( NVARCHAR(16) ,@instanceId)));\n\nif @users is not null\nbegin\n\texec SendMail_AddToScheduleForDelivery @MailSubject, @users, @MailText, 'devcodeserver@gmail.com', 'noreply',@attachments,'MotionIQ';\n\texec SendMail_DeliverScheduledMail;\nend;",
      "SqlDataCode":"",
      "SqlCodeBefore":"",
      "ProcessVariables":[
        {
          "Name":"BuildId",
          "Read":false,
          "Write":true,
          "DisplayControl":0,
          "ValueSelectionSQL":"",
          "CustomHtml":""
        }
      ],
      "StaticRoles":[

      ],
      "DynamicRoles":[
        {
          "Name":"All",
          "RoleGuid":"10c1b5dd-060a-4b86-82c5-ebf9e9229830",
          "ListType":1
        }
      ],
      "SourceState":{
        "DbId":-1,
        "Id":"5c418fd2-0379-4330-9f45-faa703633e3f",
        "Name":"StartState1",
        "StaticName":"StartState1",
        "FileRead":false,
        "FileWrite":false,
        "FileDelete":false,
        "Comment":"",
        "SqlCodeAfter":"",
        "SqlDataCode":"",
        "SqlCodeBefore":"",
        "ProcessVariables":[

        ],
        "StaticRoles":[

        ],
        "DynamicRoles":[

        ]
      },
      "TargetState":{
        "DbId":-1,
        "Id":"fdb1c93b-dde4-4432-8062-3614be57fed4",
        "Name":"FirstEmailSent",
        "StaticName":"FirstEmailSent",
        "FileRead":false,
        "FileWrite":false,
        "FileDelete":false,
        "Comment":"",
        "SqlCodeAfter":"",
        "SqlDataCode":"",
        "SqlCodeBefore":"",
        "ProcessVariables":[
          {
            "Name":"BuildId",
            "Read":true,
            "Write":false,
            "DisplayControl":0,
            "ValueSelectionSQL":"",
            "CustomHtml":""
          }
        ],
        "StaticRoles":[
          {
            "Name":"ReportViewer",
            "ListType":0
          }
        ],
        "DynamicRoles":[
          {
            "Name":"All",
            "RoleGuid":"10c1b5dd-060a-4b86-82c5-ebf9e9229830",
            "ListType":1
          }
        ]
      },
      "Priority":0,
      "ShowStateFormOnCompletion":true,
      "HideInGUI":false,
      "Time":"",
      "If":""
    },
    {
      "DbId":-1,
      "Id":"02054a80-b49d-46a8-9753-f53646160166",
      "Name":"SendEmailWithAttachments",
      "EventName":"SendEmailWithAttachments",
      "StaticName":"SendEmailWithAttachments",
      "FileRead":false,
      "FileWrite":false,
      "FileDelete":false,
      "Comment":"",
      "SqlCodeAfter":"DECLARE @users \t\t\tXML;\nDECLARE @attachments \tXML;\nDECLARE @MailSubject \tNVARCHAR(MAX) \t= '  Test'+char(9)+char(10)+' email '+char(13)+'with dirty message   ';\nSET @users\t\t\t= '<user Email=\"devcodeserver@gmail.com\" />';\nSET @attachments\t= (Select @TempFolder + Name as Attachment, dFileId From (dFile inner join dInstance_dFile on dFile.Id = dInstance_dFile.dFileId) \n\t\t\t\t\t\t\twhere dInstance_dFile.dInstanceId = @instanceID \n\t\t\t\t\t\tfor xml RAW);\nSET @MailText = (SELECT REPLACE(@MailText, '_INSTANCEID_', CONVERT( NVARCHAR(16) ,@instanceId)));\n\nif @users is not null\nbegin\n\texec SendMail_AddToScheduleForDelivery @MailSubject, @users, @MailText, 'devcodeserver@gmail.com', 'noreply',@attachments,'MotionIQ';\n\texec SendMail_DeliverScheduledMail;\nend;",
      "SqlDataCode":"",
      "SqlCodeBefore":"",
      "ProcessVariables":[
        {
          "Name":"BuildId",
          "Read":true,
          "Write":false,
          "DisplayControl":0,
          "ValueSelectionSQL":"",
          "CustomHtml":""
        }
      ],
      "StaticRoles":[

      ],
      "DynamicRoles":[
        {
          "Name":"All",
          "RoleGuid":"10c1b5dd-060a-4b86-82c5-ebf9e9229830",
          "ListType":1
        }
      ],
      "SourceState":{
        "DbId":-1,
        "Id":"fdb1c93b-dde4-4432-8062-3614be57fed4",
        "Name":"FirstEmailSent",
        "StaticName":"FirstEmailSent",
        "FileRead":false,
        "FileWrite":false,
        "FileDelete":false,
        "Comment":"",
        "SqlCodeAfter":"",
        "SqlDataCode":"",
        "SqlCodeBefore":"",
        "ProcessVariables":[
          {
            "Name":"BuildId",
            "Read":true,
            "Write":false,
            "DisplayControl":0,
            "ValueSelectionSQL":"",
            "CustomHtml":""
          }
        ],
        "StaticRoles":[
          {
            "Name":"ReportViewer",
            "ListType":0
          }
        ],
        "DynamicRoles":[
          {
            "Name":"All",
            "RoleGuid":"10c1b5dd-060a-4b86-82c5-ebf9e9229830",
            "ListType":1
          }
        ]
      },
      "TargetState":{
        "DbId":-1,
        "Id":"cf7099fa-5373-4cea-a53d-14a8f045979c",
        "Name":"UserState2",
        "StaticName":"UserState2",
        "FileRead":false,
        "FileWrite":false,
        "FileDelete":false,
        "Comment":"",
        "SqlCodeAfter":"",
        "SqlDataCode":"",
        "SqlCodeBefore":"",
        "ProcessVariables":[
          {
            "Name":"BuildId",
            "Read":true,
            "Write":false,
            "DisplayControl":0,
            "ValueSelectionSQL":"",
            "CustomHtml":""
          }
        ],
        "StaticRoles":[
          {
            "Name":"ReportViewer",
            "ListType":0
          }
        ],
        "DynamicRoles":[
          {
            "Name":"All",
            "RoleGuid":"10c1b5dd-060a-4b86-82c5-ebf9e9229830",
            "ListType":1
          }
        ]
      },
      "Priority":0,
      "ShowStateFormOnCompletion":true,
      "HideInGUI":false,
      "Time":"",
      "If":""
    },
    {
      "DbId":-1,
      "Id":"b90c81bb-776b-4d90-bed5-9512aa5705f0",
      "Name":"SendTemplatedMail",
      "EventName":"SendTemplatedMail",
      "StaticName":"SendTemplatedMail",
      "FileRead":false,
      "FileWrite":false,
      "FileDelete":false,
      "Comment":"",
      "SqlCodeAfter":"DECLARE \t@MailSubject \tNVARCHAR(MAX) \t= '  Test'+char(9)+char(10)+' email '+char(13)+'with dirty message   ';\nDECLARE \t@users\t\t\tXML \t\t\t= '<user Email=\"devcodeserver@gmail.com\" />';\nDECLARE \t@data\t\t\tXML\t\t\t\t= (select @BuildId as 'variableToReplace'\n\t\t\t\t\t\t\t\t\t\t\t\tfor xml raw('item'));\nDECLARE\t\t@template\t\tNVARCHAR(4000)  = 'TestTemplate';\n\nEXEC SendMail @MailSubject, @users, @data, @template;\n",
      "SqlDataCode":"",
      "SqlCodeBefore":"",
      "ProcessVariables":[
        {
          "Name":"BuildId",
          "Read":true,
          "Write":false,
          "DisplayControl":0,
          "ValueSelectionSQL":"",
          "CustomHtml":""
        }
      ],
      "StaticRoles":[

      ],
      "DynamicRoles":[
        {
          "Name":"All",
          "RoleGuid":"10c1b5dd-060a-4b86-82c5-ebf9e9229830",
          "ListType":1
        }
      ],
      "SourceState":{
        "DbId":-1,
        "Id":"cf7099fa-5373-4cea-a53d-14a8f045979c",
        "Name":"UserState2",
        "StaticName":"UserState2",
        "FileRead":false,
        "FileWrite":false,
        "FileDelete":false,
        "Comment":"",
        "SqlCodeAfter":"",
        "SqlDataCode":"",
        "SqlCodeBefore":"",
        "ProcessVariables":[
          {
            "Name":"BuildId",
            "Read":true,
            "Write":false,
            "DisplayControl":0,
            "ValueSelectionSQL":"",
            "CustomHtml":""
          }
        ],
        "StaticRoles":[
          {
            "Name":"ReportViewer",
            "ListType":0
          }
        ],
        "DynamicRoles":[
          {
            "Name":"All",
            "RoleGuid":"10c1b5dd-060a-4b86-82c5-ebf9e9229830",
            "ListType":1
          }
        ]
      },
      "TargetState":{
        "DbId":-1,
        "Id":"a1bf234e-d8a6-4fb2-9ed5-fee8f6172fcb",
        "Name":"UserState3",
        "StaticName":"UserState3",
        "FileRead":false,
        "FileWrite":false,
        "FileDelete":false,
        "Comment":"",
        "SqlCodeAfter":"",
        "SqlDataCode":"",
        "SqlCodeBefore":"",
        "ProcessVariables":[
          {
            "Name":"BuildId",
            "Read":true,
            "Write":false,
            "DisplayControl":0,
            "ValueSelectionSQL":"",
            "CustomHtml":""
          }
        ],
        "StaticRoles":[
          {
            "Name":"ReportViewer",
            "ListType":0
          }
        ],
        "DynamicRoles":[
          {
            "Name":"All",
            "RoleGuid":"10c1b5dd-060a-4b86-82c5-ebf9e9229830",
            "ListType":1
          }
        ]
      },
      "Priority":0,
      "ShowStateFormOnCompletion":true,
      "HideInGUI":false,
      "Time":"",
      "If":""
    },
    {
      "DbId":-1,
      "Id":"17da1350-33b9-4948-bd89-45c236438e84",
      "Name":"SendTemplatedMailWithAttachments",
      "EventName":"SendTemplatedMailWithAttachments",
      "StaticName":"SendTemplatedMailWithAttachments",
      "FileRead":false,
      "FileWrite":false,
      "FileDelete":false,
      "Comment":"",
      "SqlCodeAfter":"DECLARE @MailSubject \tNVARCHAR(MAX) \t= '  Test'+char(9)+char(10)+' email '+char(13)+'with dirty message   ';\nDECLARE\t@users \t\t\tXML \t\t\t= '<user Email=\"devcodeserver@gmail.com\" />';\nDECLARE\t@data \t\t\tXML\t\t\t\t= (select @BuildId as 'variableToReplace'\n\t\t\t\t\t\t\t\t\t\t\t\tfor xml raw('item'));\nDECLARE\t@template \t\tNVARCHAR(4000)\t= 'TestTemplate';\nDECLARE\t@replyTo \t\tNVARCHAR(4000) \t= 'devcodeserver@gmail.com';\nDECLARE\t@accountName \tNVARCHAR(4000) \t= 'noreply';\t\t\t-- Name field from dMailConfig Table\nDECLARE\t@attachments \tXML \t\t\t= (Select @TempFolder + Name as Attachment, dFileId From (dFile inner join dInstance_dFile on dFile.Id = dInstance_dFile.dFileId) \n\t\t\t\t\t\t\t\t\t\t\twhere dInstance_dFile.dInstanceId = @instanceID \n\t\t\t\t\t\t\t\t\t\t\tfor xml RAW);\nDECLARE\t@senderName \tNVARCHAR(4000) \t= 'MotionIQ';\n\nEXEC [SendMail_ScheduleForDelivery] @MailSubject\n\t\t\t\t\t\t\t\t\t,@users\t\t\n\t\t\t\t\t\t\t\t\t,@data\t\t\n\t\t\t\t\t\t\t\t\t,@template\t\n\t\t\t\t\t\t\t\t\t,@replyTo\t\n\t\t\t\t\t\t\t\t\t,@accountName\n\t\t\t\t\t\t\t\t\t,@attachments\n\t\t\t\t\t\t\t\t\t,@senderName;\nEXEC SendMail_DeliverScheduledMail;\t\t\t\t\t\t\t\t\t\n\n",
      "SqlDataCode":"",
      "SqlCodeBefore":"",
      "ProcessVariables":[
        {
          "Name":"BuildId",
          "Read":true,
          "Write":false,
          "DisplayControl":0,
          "ValueSelectionSQL":"",
          "CustomHtml":""
        }
      ],
      "StaticRoles":[

      ],
      "DynamicRoles":[
        {
          "Name":"All",
          "RoleGuid":"10c1b5dd-060a-4b86-82c5-ebf9e9229830",
          "ListType":1
        }
      ],
      "SourceState":{
        "DbId":-1,
        "Id":"a1bf234e-d8a6-4fb2-9ed5-fee8f6172fcb",
        "Name":"UserState3",
        "StaticName":"UserState3",
        "FileRead":false,
        "FileWrite":false,
        "FileDelete":false,
        "Comment":"",
        "SqlCodeAfter":"",
        "SqlDataCode":"",
        "SqlCodeBefore":"",
        "ProcessVariables":[
          {
            "Name":"BuildId",
            "Read":true,
            "Write":false,
            "DisplayControl":0,
            "ValueSelectionSQL":"",
            "CustomHtml":""
          }
        ],
        "StaticRoles":[
          {
            "Name":"ReportViewer",
            "ListType":0
          }
        ],
        "DynamicRoles":[
          {
            "Name":"All",
            "RoleGuid":"10c1b5dd-060a-4b86-82c5-ebf9e9229830",
            "ListType":1
          }
        ]
      },
      "TargetState":{
        "DbId":-1,
        "Id":"781495d1-bcce-468a-b740-add5a0cc1233",
        "Name":"UserState4",
        "StaticName":"UserState4",
        "FileRead":false,
        "FileWrite":false,
        "FileDelete":false,
        "Comment":"",
        "SqlCodeAfter":"",
        "SqlDataCode":"",
        "SqlCodeBefore":"",
        "ProcessVariables":[
          {
            "Name":"BuildId",
            "Read":true,
            "Write":false,
            "DisplayControl":0,
            "ValueSelectionSQL":"",
            "CustomHtml":""
          }
        ],
        "StaticRoles":[
          {
            "Name":"ReportViewer",
            "ListType":0
          }
        ],
        "DynamicRoles":[
          {
            "Name":"All",
            "RoleGuid":"10c1b5dd-060a-4b86-82c5-ebf9e9229830",
            "ListType":1
          }
        ]
      },
      "Priority":0,
      "ShowStateFormOnCompletion":true,
      "HideInGUI":false,
      "Time":"",
      "If":""
    },
    {
      "DbId":-1,
      "Id":"96331a43-f167-492f-84ab-ce31235c7a99",
      "Name":"SendTemplatedMailWithListReplacement",
      "EventName":"SendTemplatedMailWithListReplacement",
      "StaticName":"SendTemplatedMailWithListReplacement",
      "FileRead":false,
      "FileWrite":false,
      "FileDelete":false,
      "Comment":"",
      "SqlCodeAfter":"DECLARE @countProcesses \t\tINT;\nDECLARE @countUsers \t\t\tINT;\nDECLARE @sendTo \t\t\t\tNVARCHAR(128) = 'devcodeserver@gmail.com';\nDECLARE @SystemInfoText\t\t\tNVARCHAR(128) = 'MotionIQ.releases.2.1.local';\n\nSET @countProcesses = (SELECT COUNT (*) FROM dProcess where StaticName <> 'MotionIQSystemReport');\n\nSET @countUsers = (SELECT count (*) FROM dUser);\n\ndeclare @t xml;\n\nselect @t = (SELECT du.lastname + ', ' + du.firstname as 'fullname', du.name as 'username',\n\tconvert(varchar(10),du.createdat, 20) as 'createdat' FROM dUser du \n\torder by du.lastname, du.firstname, du.name for xml raw('t'));\n\ndeclare @users xml; \nselect @users = (select @SendTo as Email for xml raw('tmp'));\ndeclare @data xml, @item xml;\nselect @item = (select @countProcesses as nProcess, @SystemInfoText as SystemInfoText, @countUsers as nUser for xml raw('item'));\n\nselect @data = (select dbo.AddXml(@item,@t));\ndeclare @mailheader varchar(255);\nSET @mailheader = 'MIQ Systeminformation - ' +  @SystemInfoText;\n--exec SendMail_schedulefordelivery @mailheader, @users, @data, 'SystemMail','devcodeserver@gmail.com','noreply','','Devcode NoReply';\nexec sendmail @mailheader, @users, @data, 'SystemMail';\n",
      "SqlDataCode":"",
      "SqlCodeBefore":"",
      "ProcessVariables":[
        {
          "Name":"BuildId",
          "Read":true,
          "Write":false,
          "DisplayControl":0,
          "ValueSelectionSQL":"",
          "CustomHtml":""
        }
      ],
      "StaticRoles":[

      ],
      "DynamicRoles":[
        {
          "Name":"All",
          "RoleGuid":"10c1b5dd-060a-4b86-82c5-ebf9e9229830",
          "ListType":1
        }
      ],
      "SourceState":{
        "DbId":-1,
        "Id":"781495d1-bcce-468a-b740-add5a0cc1233",
        "Name":"UserState4",
        "StaticName":"UserState4",
        "FileRead":false,
        "FileWrite":false,
        "FileDelete":false,
        "Comment":"",
        "SqlCodeAfter":"",
        "SqlDataCode":"",
        "SqlCodeBefore":"",
        "ProcessVariables":[
          {
            "Name":"BuildId",
            "Read":true,
            "Write":false,
            "DisplayControl":0,
            "ValueSelectionSQL":"",
            "CustomHtml":""
          }
        ],
        "StaticRoles":[
          {
            "Name":"ReportViewer",
            "ListType":0
          }
        ],
        "DynamicRoles":[
          {
            "Name":"All",
            "RoleGuid":"10c1b5dd-060a-4b86-82c5-ebf9e9229830",
            "ListType":1
          }
        ]
      },
      "TargetState":{
        "DbId":-1,
        "Id":"f2308308-5e43-4dde-a092-c3dc82eb6a4e",
        "Name":"UserState5",
        "StaticName":"UserState5",
        "FileRead":false,
        "FileWrite":false,
        "FileDelete":false,
        "Comment":"",
        "SqlCodeAfter":"",
        "SqlDataCode":"",
        "SqlCodeBefore":"",
        "ProcessVariables":[
          {
            "Name":"BuildId",
            "Read":true,
            "Write":false,
            "DisplayControl":0,
            "ValueSelectionSQL":"",
            "CustomHtml":""
          }
        ],
        "StaticRoles":[

        ],
        "DynamicRoles":[
          {
            "Name":"All",
            "RoleGuid":"10c1b5dd-060a-4b86-82c5-ebf9e9229830",
            "ListType":1
          }
        ]
      },
      "Priority":0,
      "ShowStateFormOnCompletion":false,
      "HideInGUI":false,
      "Time":"",
      "If":""
    }
  ]
}



jsPlumb.ready(function() {
	buildGraphView();
});

function buildGraphView(){
	var Objs = localStorage.getItem("plumbTestPositions");  //Get saved positions
	Objs = JSON.parse(Objs);
	
	buildGraphNodes(Objs);
	buildGraphConnectors();
}

function buildGraphConnectors(){
	var events = myData.Events;
	$(events).each(function(){
		var source = this.SourceState;
		var target = this.TargetState;
		
		jsPlumb.connect({
  		  source: source.Id,
  		  target: target.Id,
  		  paintStyle: {lineWidth:2, strokeStyle:'rgb(189,11,11)'},
  		  anchor: "Continuous",
  		  endpoint:"Rectangle",
  		  overlays:[
		            "Arrow", 
		            [ "Label", {label: this.EventName, id:"label", cssClass: "arrowLabel"}]
		          ] 
  		});
	});
}

	
function buildGraphNodes(Objs){
	var states = myData.States;
	$(states).each(function(index){
		var stateNode = document.createElement("div");
		stateNode.id = this.Id,
		stateNode.className = "plumbNodeItem",
		stateNode.innerHTML = "<span>"+ this.StaticName +"</span>"
		
		$("#diagramContainer").append(stateNode);
		
		jsPlumb.draggable(this.Id);
		
		
		if(Objs == undefined){
			if(index > 0){
				var previousItemLeft = $("#" + states[index -1].Id).css('left');
				var previousItemWidth = $("#" + states[index -1].Id).css('width');
				var previousItemTop = $("#" + states[index -1].Id).css('top');
				
				var leftValue = function(){
					var value;
					if(index % 2 == 0){
						value = "20px";
					}
					else if(index % 2 == 1){
						value = "45%";
					}
					
					return value;
				}
				
				var topValue = (index % 2 == 0 ? parseInt(previousItemTop) + 250 + "px" : parseInt(previousItemTop) + "px");
				
				$("#" + states[index].Id).css({
					'left': leftValue,
					'top': topValue
				});
			}
			
		}
		else{
			$("#" + states[index].Id).css({
				'left': Objs[index].left,
				'top': Objs[index].top
			});
		}
			
	});
}


function savePlumbState(){
		alterButton("savePlumbState", "Saving", "add", "loading");
	
	    Objs = [];
	    $('.plumbNodeItem').each(function() {
	        Objs.push({id:$(this).attr('id'), html:$(this).html(),left:$(this).css('left'),top:$(this).css('top'),width:$(this).css('width'),height:$(this).css('height')});
	    });
	    console.log(Objs);
	    
	    localStorage.removeItem("plumbTestPositions");
	    localStorage.setItem("plumbTestPositions", JSON.stringify(Objs));
	    
	    setTimeout(function(){
	    	alterButton("savePlumbState", "Save state", "remove", "loading");
	    }, 400);
}

function loadPlumbState(){
	$('#diagramContainer').html('');
	localStorage.removeItem("plumbTestPositions");
	buildGraphView();
}

function alterButton(id, label, state, className){
	$("#" + id).html(label);
	if(className != undefined && state == "add"){
		$("#" + id).addClass(className);
	}
	else if(className != undefined && state == "remove"){
		$("#" + id).removeClass(className);
	}
	
}

function showInfo(){
	$("#infoContainer").show();
	$("#overlay").fadeIn(100);
	$("#infoContainer").animate({
		'top': '75px'
	})
}

function hideInfo(){
	$("#overlay, #infoContainer").fadeOut(100);
	
	
	$("#infoContainer").animate({
		'top': '-300px'
	})
}













