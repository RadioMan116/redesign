1. Устанавливаем nodejs https://nodejs.org/en/download/
2. По инструкции устанавливаем https://yarnpkg.com/lang/en/
3. В терминале для Windows __yarn add global gulp__ и для Unix __sudo yarn add global gulp__
4. Клонируем git clone https://github.com/linedotwww/mockup.git
5. Переходим в папку, там командой yarn install устанавливаем все
6. Временное решение, в файле node_modules/gulp-css-url-adjuster/index.js нужно заменить строчку ```javascript if (url.indexOf('data:') === 0) {``` на ```javascriptif (url.indexOf('data:') === 0 || url.indexOf('http') === 0 || url.indexOf('font') === 0) {```
7. Теперь подключать файлы в templates/main/source/styles/style.scss не нужно, все подключается автоматом
8. Пользовательские стили могут лежать тут templates/main/source/styles/users либо в компонентах
9. В компонентах можно создавать json файлы, пример лежит в меню и потом работать с данными в шаблоне
10. В стилях путь к картинкам не прописываем, только название файла, пути в html файлах можем прописывать как ```html <img src="{{src}}logo.png" alt="" class="logo__pic">```
11. Папка templates/main/source/js/libs и templates/main/source/js/static все содержимое переносится, в libs только библиотеки должны лежать.
12. Этот файл templates/main/source/js/static/frontend-works.js специальный, сюда складываем ajax и т.д, что в будущем программист перенесет на сайт, так как он потом при натяжке подключаться не будет
13. Для иконок svg используется сервис https://icongr.am/ , подключается в стилях просто ```css background: url(https://icongr.am/fontawesome/ambulance.svg?size=34&color=000000);```, плюс использовать можно ```css background: svg-load('auth.svg', fill='#c70000') no-repeat;``` для него файлы svg сохраняем в папку templates/main/source/images/svg-icons
14. Настройки лежат тут main.config.json
15. Две команды есть, gulp и gulp build
