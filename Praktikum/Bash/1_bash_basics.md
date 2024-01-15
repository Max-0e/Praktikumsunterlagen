# Bash Basics

## Navigation
`pwd` Print-Working-Directory

`ls` list Stuff

`mkdir test` make Directory

`cd test` change Directory

`touch test.txt` erstelle eine neue Datei

`cd ..` change to parent directory

"." ist ein StartZeichen für einen relativen Pfad.
Wird ein relativer Pfad verwendet wird der Punkt mit dem aktuellen Arbeitsverzeichnis (Working Directory) ersetzt.

".." referenziert den Ordner in dem sich das aktuelle Verzeichnis befindet.

`mkdir test/code` mit einem "/" kann ich einen Pfad in mehreren Schritten beschreiben

`cd test/code` mit einem längeren Pfad kann ich auch navigieren

`cd ../..` mit mehreren ".." kann ich auch mehrere Schritte im Dateisystem zurück gehen

----
## Parameter

`ls -a` Parameter können Befehle konfiguriert werden

`man ls` Manual/Anleitung über das Kommando und mögliche Parameter

`q` für quit um aus dem manual wieder herauszukommen

`--help` / `-h` manche Kommandos können mit diesem Parameter über mögliche Optionen gefragt werden

`mkdir` manche Kommandos geben auch Informationen wieder, wenn man die benötigten Parameter einfach nicht setzt sonden nur das Kommando aufruft

---