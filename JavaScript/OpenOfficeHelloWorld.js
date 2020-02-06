importClass(Packages.com.sun.star.uno.UnoRuntime);
importClass(Packages.com.sun.star.text.XTextDocument);

var oModel = ScriptContext.getDocument(); 
var oTextdoc = UnoRuntime.queryInterface(XTextDocument, oModel);
var oText = oTextdoc.getText(); 
var oCursor = oText.createTextCursor(); 

oText.insertString(oCursor, "Hello World", false);
