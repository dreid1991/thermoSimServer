java -jar SoyToJsSrcCompiler.jar --outputPathFormat mainPageTemplates.js --srcs mainPage.soy

java -jar ../compiler.jar ^
--compilation_level SIMPLE_OPTIMIZATIONS ^
--language_in ECMASCRIPT5 ^
--js soyutils.js ^
--js mainPageTemplates.js ^
--js main.js ^
--js_output_file compiled-server.js