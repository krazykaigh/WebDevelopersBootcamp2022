/*jshint esversion: 8 */
const fitbutt = {
  height : 5.3,
  weight : 135,
  age    : 35,
  name   : 'Sheila'
};
console.log(fitbutt);

console.log(`fitbutt.weight =  ${fitbutt.weight}`);

console.log(`fitbutt.height = ${fitbutt['height']}`);

const midterms = {
  'danielle': 96,
  'thomas': 78
};
console.log(midterms);

midterms.thomas = 79;
console.log(midterms);
midterms.danielle='A';
midterms.thomas='C';
console.log(midterms);
midterms.ezra = 'B+';
midterms['Antonio']="A-";
console.log(midterms);

// An array of objects
const shoppingCart = [
  {
    product : 'Jenga Classic',
    price   : 6.88,
    quantity: 2
  },
  {
    product : 'Google Nest',
    price   : 179.99,
    quantity: 1
  },
  {
    product : 'Google Chromecast',
    price: 49.99,
    quantity: 2

  }
];
console.log(shoppingCart);
// Reference Google Chromecast
console.log(`Reference product in 3d object of array = ${shoppingCart[2].product}`);


// An object storing an array and another objectg
const student = {
  firstName: 'David',
  lastName: 'Cooper',
  strengths: ['Music', 'Art'],
  exams : {
    midterm: 89,
    final: 92
  }
};
console.log(student);
// Reference Music
console.log(`Reference strengths[0] = ${student.strengths[0]}`);
console.log(`Reference midterm = ${student.exams.midterm}`);

const longIssue =
{
  "timestamp": 1679861899679, 
  "title": ['Disk Used % > 75 for at least 10 minutes on e1eestpedbatx08.testpe.ee-test.mp.cmscloud.local (/opt/cms/logs)'], 
  "mergeReason": "", 
  "unAcknowledgedBy": null, 
  "labels.originalAccountIds": ['1292947'], 
  "totalIncidents": 1, 
  "realTimestamp": 1679861899679, 
  "entities": [{'id':'MTI5Mjk0N3xJTkZSQXxOQXw3NDc0MDM5MjY1MTI4ODU3ND', 'name':'e1eestpedbatx08.testpe.ee-test.mp.cmscloud.local (/opt/cms/logs)', 'type':'Host'}], 
  "priority": "CRITICAL", 
  "parentMergeId": null, 
  "acknowledgedAt": null, 
  "correlationRuleDescriptions": null, 
  "unAcknowledgedAt": null, 
  "acknowledgedByChannel": null, 
  "labels.policyIds": ['1074758'], 
  "closedAt": null, 
  "updatedAt": 1679861899679, 
  "correlatedBy": null, 
  "nrAccountId": 1292947, 
  "labels.accountIds": ['1292947'], 
  "closedBy": null, 
  "mutingState": "NOT_MUTED", 
  "createdAt": 1679861899676, 
  "activatedAt": 1679861899677, 
  "labels.priority": ['3'], 
  "closedByChannel": null, 
  "isCorrelated": false, 
  "labels.conditionId": ['15986226'], 
  "labels.aggregationKeys": ['3c3648a32e5a6e3129667d8209cde847123f3f6c'], 
  "isIdle": false, 
  "issueId": "2dfbcc9f-6b24-4e86-8b75-54cf6fbfd007", 
  "description": [{'Policy': 'all_testpe_opt_mount_full', 'Condition': 'ee_testpe_opt_mount_full'}], 
  "incidentIdsEventId": "a8f1ad1a-0d2e-4ec9-8868-03a3f72ca981", 
  "correlationRuleNames": null, 
  "acknowledgedBy": null, 
  "dataMLModules": {'components':['storage'], 'golden-signals':['saturation']}, 
  "triggerEvent": "ATTRIBUTES_UPDATED", 
  "sources": ['newrelic'], 
  "realIssueCount": 1, 
  "correlationRuleIds": null, 
  "annotations": {'description':[{'Policy': 'all_testpe_opt_mount_full', 'Condition ': 'ee_testpe_opt_mount_full'}], 'title':['Disk Used % > 75 for at least 10 minutes on e1eestpedbatx08.testpe.ee-test.mp.cmscloud.local (/opt/cms/logs)'], 'degradationStartTime':['1679861280000']}, 
  "labels": {'priority':['3'], 'accountId':['1292947'], 'originalAccountId':['1292947'], 'policyId':['1074758'], 'conditionFamilyId':['16164727'], 'aggregationKey':['3c3648a32e5a6e3129667d8209cde847123f3f6c'], 'entityId':['MTI5Mjk0N3xJTkZSQXxOQXw3NDc0MDM5MjY1MTI4ODU3NDI'], 'entityName':['e1eestpedbatx08.testpe.ee-test.mp.cmscloud.local (/opt/cms/logs)'], 'entityType':['Host'], 'violationId':['4221779004'], 'conditionId':['15986226'], 'targetId':['747403926512885742//opt/cms/logs'], 'nrIncidentId':['1167457898']}, 
  "state": "ACTIVATED", 
  "incidentIds": ['497aa0d0-fb6d-4059-abea-3917093b680c']
};

console.log(longIssue.description[1]);
console.log(longIssue.entities[0].id);
console.log(longIssue.annotations.description[0]["Condition "]);