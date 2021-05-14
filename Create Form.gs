var ssId = ScriptProperties.getProperty('ssId');
 if(ssId == null){
 var ss = SpreadsheetApp.create('Spreadsheet');
 ssId = ss.getId();
 ScriptProperties.setProperty('ssId',ssId);
 }
 function createForm(){
 var formID = ScriptProperties.getProperty('formId');
 var form = FormApp.create('Form');
 form.addTextItem().setTitle('What is your last name ?').setRequired(true);
 form.setDestination(FormApp.DestinationType.SPREADSHEET, ssId);
 form.addTextItem().setTitle('Enter your email').setRequired(true);
 form.addDateItem().setTitle('When were you born?');
 form.addCheckboxItem()
 .setTitle('What attracts you more?')
 .setChoiceValues(['Computer science', 'History and law', 'Psychology'])
 .setRequired(true);
 form.addMultipleChoiceItem()
 .setTitle('What is your favorite subject?')
 .setChoiceValues(['Mathematics','Philosophy','Economy','History'])
 .showOtherOption(true)
 form.addGridItem()
 .setTitle('Evaluate three subjects')
 .setRows(['Mathematics', 'Economy', 'History'])
 .setColumns(['annoying', 'no opinion', 'exciting']);
 ScriptProperties.setProperty('formId',form.getId());
 ss.getSheets()[0].getRange(1,1,4,2).setValues([['form Url',form.getPublishedUrl()],
 ['form Edit Url',form.getEditUrl()],['formID',formID],['Spreadsheet Url',ss.getUrl()]]);
 ss.getSheets()[1].setColumnWidth(1,200).setColumnWidth(2,800);
 }
