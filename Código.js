function doGet() {
  // Cambiado a minúsculas para coincidir con tu archivo index.html
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle('BuruCRON - IES Sáenz de Buruaga')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}