let mix = require('laravel-mix')

mix.setPublicPath('./')
  .sass('assets/sass/popup.scss', 'dist/css')
  .js('assets/js/background.js', 'dist/js')
  .js('assets/js/popupjs', 'dist/js').vue()
  .options({
    processCssUrls: false
  })