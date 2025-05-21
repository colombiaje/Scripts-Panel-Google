function menuScriptings() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Menu Scriptings')
      .addItem('Say Hello', 'helloWorld')
      .addToUi();
}

function helloWorld() {
  Browser.msgBox("Hello World!");
}
