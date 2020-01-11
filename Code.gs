function doGet(e) {
  return HtmlService.createTemplateFromFile("page").evaluate();
}

function userClicked(userInfo) {
   var url = "https://docs.google.com/spreadsheets/d/1OJbBGppj-Ja_n-X-PcyVFTyPCNP9_fB8D3cK3hvABaQ/edit#gid=2127134662";
   var ss = SpreadsheetApp.openByUrl(url);
   var ws = ss.getSheetByName("DataEntered");
   // Logger.log(userInfo);
     
   ws.appendRow([userInfo.property, 
                 userInfo.street, 
                 userInfo.source, 
                 userInfo.transType,
                 userInfo.agent,
                 userInfo.contractDate,
                 userInfo.coeDate,
                 userInfo.salesPrice,
                 userInfo.commission,
                 userInfo.robinsPercent,
                 userInfo.GCI,
                 userInfo.robinsNet,
                 userInfo.tcFee]);
       
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function onEdit(){
   myFunctionFromLibrary();
}

function test() {
  var price = "500.00";
  var comm = "3.00";
  var GCIamount = price * (comm / 100)
  Logger.log(price);
  Logger.log(comm);
  Logger.log(GCIamount);
  
}

function test2() {
  var price = "$5,000.00";
  var comm = "3.00";
  // price.replaceAll("[$,]", "");
  var newprice = price.replace("$", "").replace(",", "");
  Logger.log(price);
  Logger.log(newPrice);
  
}

