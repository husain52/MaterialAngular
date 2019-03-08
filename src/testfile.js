function testa() {}
testa.prototype.testMethod = function testMethod() {
  console.log("hello");
  // var oShell = new ActiveXObject("wscript.shell");
  //     oShell.Run("cmd.exe /k ping 192.168.0.13");
      //oShell.Run("cmd.exe /k ping" + ipAddress);

var shell = WScript.CreateObject("WScript.Shell");
shell.Run("ipconfig");

};
var testmodule = new testa();

export { testmodule };
