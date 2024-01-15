# Start
## WSL (Windows Subsystem for Linux) 
WSL ist ein Computer in einem Computer. Dieser ermöglicht es dir ein Linux-Betriebssystem zu verwenden. Wären du eigentlich Windows auf deinem Computer installiert hast.

Install WSL2 via Powershell:

Windows-Taste drücken "Poweshell" suchen und starten.

``` powershell
wsl --install
```

Den oberen Befehl kopieren und ein das geöffnete Powershell-Fenster einfügen und dann Enter drücken.


## Visual Studio Code (VS Code)
VS Code ist ein Text-Editor den wir für das Bearbeiten von unserem Code benutzen.

[Install VS Code](https://code.visualstudio.com/)

## Install Node in WSL
Node ist unsere Runtime und stellt unseren Interpreter/Compiler dar.
Node kann unseren Code in für den Computer lesbare/ausführbare Anweisungen übersetzen.

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
```

```
nvm install --lts
```