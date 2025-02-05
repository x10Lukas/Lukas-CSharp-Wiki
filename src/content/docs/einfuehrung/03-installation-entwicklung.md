---
title: Installation und Einrichtung
description: Wie du eine C#-Entwicklungsumgebung mit Visual Studio oder VS Code einrichtest.
---

Um mit C# zu programmieren, benötigst du eine geeignete Entwicklungsumgebung. In diesem Guide erfährst du, wie du **Visual Studio** oder **Visual Studio Code** einrichtest.

---

## 🖥️ **1. Installation von Visual Studio (Empfohlen)**  
Visual Studio ist die offizielle IDE von Microsoft für C#-Entwicklung.

### **Schritt 1: Visual Studio herunterladen**  
📥 [Visual Studio Community Edition herunterladen](https://visualstudio.microsoft.com/) (kostenlos)  

### **Schritt 2: Visual Studio installieren**  
- Starte das **Installationsprogramm**  
- Wähle die Workload **"Entwicklung mit .NET-Desktop"**  
- Klicke auf **Installieren**  

### **Schritt 3: Erstes C#-Projekt erstellen**  
1. Öffne Visual Studio  
2. Erstelle ein neues **Konsolenprojekt** mit **.NET Core**  
3. Schreibe folgenden Code:  

```csharp
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hallo, Welt!");
    }
}
