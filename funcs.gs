url = "https://docs.google.com/spreadsheets/d/1OJbBGppj-Ja_n-X-PcyVFTyPCNP9_fB8D3cK3hvABaQ/edit#gid=2127134662"
   
   function getSources() {
       var ss = SpreadsheetApp.openByUrl(url);
       var ws = ss.getSheetByName("Options");
       var data = ws.getRange(2,3, ws.getLastRow()-1).getValues();
      
       var sources = {};
       data.forEach(function(v) {
           sources[v[0]] = null;
       });
     
       Logger.log(sources);
       return sources;
   }

