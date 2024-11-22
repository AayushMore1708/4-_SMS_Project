Type.registerNamespace('Mscrm');Mscrm.EntityPropUtil=function(){};Mscrm.EntityPropUtil.isActivityTypeCode=function(iObjectType){switch (parseInt(iObjectType, 10)) {case 4206 : case 4406 : case 4209 : case 4402 : case 4210 : case 4202 : case 4212 : case 4207 : case 4214 : case 4216 : case 4208 : case 4401 : case 4211 : case 4201 : case 4204 : case 4251 : case 4200 :  return true;default: return false;}};Mscrm.EntityPropUtil.isActivityType=function(entityName){switch (entityName) {case 'incidentresolution' : case 'bulkoperation' : case 'orderclose' : case 'campaignactivity' : case 'phonecall' : case 'email' : case 'task' : case 'letter' : case 'serviceappointment' : case 'socialactivity' : case 'opportunityclose' : case 'campaignresponse' : case 'quoteclose' : case 'appointment' : case 'fax' : case 'recurringappointmentmaster' : case 'activitypointer' :  return true;default: return false;}};Mscrm.EntityPropUtil.isQueueItemTypeCode=function(iObjectType){switch (parseInt(iObjectType, 10)) {case 4216 : case 4210 : case 4251 : case 4212 : case 4207 : case 4401 : case 4402 : case 4202 : case 4204 : case 4201 : case 112 : case 4214 :  return true;default: return false;}};Mscrm.EntityPropUtil.isImportableTypeCode=function(iObjectType){switch (parseInt(iObjectType, 10)) {case 10000 : case 1038 : case 9 : case 9702 : case 10004 : case 1022 : case 4503 : case 4216 : case 1089 : case 1083 : case 4009 : case 4210 : case 9508 : case 9703 : case 9603 : case 4211 : case 1080 : case 123 : case 1024 : case 2020 : case 4208 : case 9701 : case 1088 : case 99 : case 2013 : case 8 : case 4251 : case 4212 : case 9105 : case 10002 : case 2 : case 1084 : case 4502 : case 5 : case 9502 : case 1091 : case 1013 : case 1070 : case 1011 : case 4207 : case 1071 : case 127 : case 4 : case 4209 : case 1010 : case 132 : case 4401 : case 3234 : case 4402 : case 4001 : case 1026 : case 4206 : case 4202 : case 1090 : case 9700 : case 9602 : case 1016 : case 3 : case 4400 : case 1055 : case 2029 : case 9600 : case 4204 : case 4201 : case 10001 : case 1036 : case 2011 : case 129 : case 1 : case 112 : case 10 : case 10003 : case 1085 : case 4300 : case 4000 : case 4214 :  return true;default: return false;}};Mscrm.EntityPropUtil.EntityTypeName2CodeMap = {'sdkmessagerequestfield' : 4614,'processstage' : 4724,'msdyn_postalbum' : 10000,'salesliterature' : 1038,'mailbox' : 9606,'publisheraddress' : 7102,'ribboncontextgroup' : 1115,'subscriptiontrackingdeletedobject' : 35,'picklistmapping' : 4418,'slaitem' : 9751,'emailsearch' : 4299,'childincidentcount' : 113,'template' : 2010,'team' : 9,'timezonerule' : 4811,'monthlyfiscalcalendar' : 2003,'ownermapping' : 4420,'unresolvedaddress' : 2012,'processtrigger' : 4712,'sdkmessageresponsefield' : 4611,'entitlementtemplate' : 9702,'msdyn_wallsavedqueryusersettings' : 10004,'pricelevel' : 1022,'customeropportunityrole' : 4503,'import' : 4410,'socialactivity' : 4216,'postrole' : 8001,'salesorderdetail' : 1089,'opportunityproduct' : 1083,'integrationstatus' : 3000,'resourcespec' : 4006,'convertruleitem' : 9301,'partnerapplication' : 1095,'resourcegroupexpansion' : 4010,'activityparty' : 135,'userqueryvisualization' : 1112,'relationshiprolemap' : 4501,'site' : 4009,'phonecall' : 4210,'reportvisibility' : 9103,'userentityinstancedata' : 2501,'ribboncommand' : 1116,'webwizard' : 4800,'imagedescriptor' : 1007,'ribbondiff' : 1130,'sharepointdocumentlocation' : 9508,'audit' : 4567,'ribboncustomization' : 1120,'plugintypestatistic' : 4603,'serviceendpoint' : 4618,'entitlementtemplatechannel' : 9703,'traceassociation' : 8051,'systemapplicationmetadata' : 7000,'recurrencerule' : 4250,'calendarrule' : 4004,'principalobjectaccessreadsnapshot' : 90,'metric' : 9603,'quoteclose' : 4211,'reportentity' : 9101,'privilegeobjecttypecodes' : 31,'calendar' : 4003,'discounttype' : 1080,'systemuserprincipals' : 14,'userform' : 1031,'documentindex' : 126,'activitymimeattachment' : 1001,'semiannualfiscalcalendar' : 2001,'sla' : 9750,'columnmapping' : 4417,'fieldsecurityprofile' : 1200,'competitor' : 123,'bulkdeleteoperation' : 4424,'teamtemplate' : 92,'principalobjectattributeaccess' : 44,'savedquery' : 1039,'relationshiprole' : 4500,'product' : 1024,'queue' : 2020,'convertrule' : 9300,'applicationfile' : 4707,'competitoraddress' : 1004,'opportunityclose' : 4208,'entitlementchannel' : 9701,'privilege' : 1023,'quarterlyfiscalcalendar' : 2002,'queueitemcount' : 2023,'roletemplate' : 1037,'salesorder' : 1088,'socialprofile' : 99,'ribbontabtocommandmap' : 1113,'territory' : 2013,'systemuser' : 8,'reportcategory' : 9102,'workflow' : 4703,'postcomment' : 8005,'recurringappointmentmaster' : 4251,'task' : 4212,'transactioncurrency' : 9105,'msdyn_postruleconfig' : 10002,'savedqueryvisualization' : 1111,'contact' : 2,'resource' : 4002,'quote' : 1084,'constraintbasedgroup' : 4007,'customerrelationship' : 4502,'annotation' : 5,'sharepointsite' : 9502,'invoicedetail' : 1091,'traceregarding' : 8052,'importdata' : 4413,'dependencynode' : 7106,'duplicaterecord' : 4415,'rollupfield' : 9604,'timezonedefinition' : 4810,'license' : 2027,'invaliddependency' : 7107,'discount' : 1013,'publisher' : 7101,'attributemap' : 4601,'tracelog' : 8050,'authorizationserver' : 1094,'sharepointdocument' : 9507,'sdkmessageprocessingstep' : 4608,'salesliteratureitem' : 1070,'importentitymapping' : 4428,'leadaddress' : 1017,'contractdetail' : 1011,'entitymap' : 4600,'letter' : 4207,'businessunitmap' : 6,'dependencyfeature' : 7108,'interprocesslock' : 4011,'customeraddress' : 1071,'importjob' : 9107,'notification' : 4110,'kbarticle' : 127,'post' : 8000,'owner' : 7,'importfile' : 4412,'lead' : 4,'solution' : 7100,'emailserverprofile' : 9605,'orderclose' : 4209,'businessprocessflowinstance' : 4725,'resourcegroup' : 4005,'metadatadifference' : 4231,'contract' : 1010,'bulkoperation' : 4406,'usersettings' : 150,'subscriptionsyncinfo' : 33,'businessunitnewsarticle' : 132,'uomschedule' : 1056,'lookupmapping' : 4419,'postregarding' : 8002,'campaignresponse' : 4401,'connection' : 3234,'internaladdress' : 1003,'connectionrole' : 3231,'connectionroleobjecttypecode' : 3233,'salesprocessinstance' : 32,'filtertemplate' : 30,'workflowwaitsubscription' : 4702,'reportlink' : 9104,'bulkoperationlog' : 4405,'multientitysearchentities' : 9911,'duplicaterulecondition' : 4416,'transformationparametermapping' : 4427,'recordcountsnapshot' : 91,'report' : 9100,'campaignactivity' : 4402,'sharepointdata' : 9509,'attachment' : 1002,'service' : 4001,'dependency' : 7105,'wizardaccessprivilege' : 4803,'userentityuisettings' : 2500,'sdkmessagerequest' : 4609,'productpricelevel' : 1026,'incidentresolution' : 4206,'organizationui' : 1021,'userapplicationmetadata' : 7001,'webresource' : 9333,'clientupdate' : 36,'email' : 4202,'duplicaterule' : 4414,'routingruleitem' : 8199,'fixedmonthlyfiscalcalendar' : 2004,'sdkmessageprocessingstepimage' : 4615,'sdkmessage' : 4606,'importlog' : 4423,'invoice' : 1090,'displaystringmap' : 4101,'entitlement' : 9700,'timezonelocalizedname' : 4812,'queuemembercount' : 2024,'replicationbacklog' : 1140,'goalrollupquery' : 9602,'sqlencryptionaudit' : 9613,'kbarticletemplate' : 1016,'opportunity' : 3,'mailmergetemplate' : 9106,'campaign' : 4400,'uom' : 1055,'queueitem' : 2029,'userfiscalcalendar' : 1086,'subscription' : 29,'mailboxstatistics' : 9607,'postfollow' : 8003,'multientitysearch' : 9910,'workflowlog' : 4706,'importmap' : 4411,'goal' : 9600,'fax' : 4204,'wizardpage' : 4802,'appointment' : 4201,'msdyn_postconfig' : 10001,'sitemap' : 4709,'role' : 1036,'pluginassembly' : 4605,'subscriptionclients' : 1072,'commitment' : 4215,'contracttemplate' : 2011,'subject' : 129,'asyncoperation' : 4700,'processsession' : 4710,'ribbonrule' : 1117,'account' : 1,'incident' : 112,'businessunit' : 10,'userquery' : 4230,'postlike' : 8006,'msdyn_wallsavedquery' : 10003,'quotedetail' : 1085,'principalattributeaccessmap' : 43,'fieldpermission' : 1201,'complexcontrol' : 9650,'annualfiscalcalendar' : 2000,'plugintype' : 4602,'sdkmessageresponse' : 4610,'organization' : 1019,'sdkmessageprocessingstepsecureconfig' : 4616,'bulkdeletefailure' : 4425,'activitypointer' : 4200,'emailhash' : 4023,'kbarticlecomment' : 1082,'sdkmessagefilter' : 4607,'isvconfig' : 4705,'transformationmapping' : 4426,'organizationstatistic' : 4708,'sdkmessagepair' : 4613,'list' : 4300,'workflowdependency' : 4704,'routingrule' : 8181,'exchangesyncidmapping' : 4120,'solutioncomponent' : 7103,'socialinsightsconfiguration' : 1300,'equipment' : 4000,'serviceappointment' : 4214,'systemform' : 1030,'displaystring' : 4102};Mscrm.EntityPropUtil.registerClass('Mscrm.EntityPropUtil');