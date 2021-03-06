var bs = require("browser-sync").create();

bs.watch(['*.*', 'css/*.css', 'images/*.*', 'scripts/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./"
});