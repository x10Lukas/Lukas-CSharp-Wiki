---
title: Variablen und Datentypen
description: Grundlagen der Variablen und Datentypen in C#.
---

In C# werden **Variablen** verwendet, um Werte zu speichern. Jede Variable hat einen **Datentyp**, der bestimmt, welche Art von Wert gespeichert werden kann.

---

## 🏷️ **1. Was sind Variablen?**
Eine **Variable** ist ein Speicherplatz im Arbeitsspeicher mit einem Namen. In C# wird eine Variable folgendermaßen deklariert:

```csharp
Datentyp Variablenname = Wert;

int zahl = 10;
string text = "Hallo Welt!";
double pi = 3.1415;
```

## 📌 2. Wichtige Datentypen in C#
In C# gibt es verschiedene **primitive Datentypen**:

|Typ        | Beschreibung               | Beispiel                  |
|-----------|----------------------------|---------------------------|
| `int`     | Ganze Zahl                 | `int zahl = 42;`          |
| `double`  | Kommazahl (64-Bit)         | `double pi = 3.14;`       |
| `float`   | Kommazahl (32-Bit)	     | `float f = 3.14f;`        |
| `decimal` | Exakte Dezimalzahl         | `decimal preis = 99.99m;` |
| `char`    | Einzelnes Zeichen          | `char buchstabe = 'A';`   |
| `string`  | Zeichenkette               | `string name = "Lukas";`  |
| `bool`    | Wahrheitswert (true/false) | `bool istAn = true;`      |

## 📝 3. Beispiel: Variablen verwenden

```csharp
using System;

class Program
{
    static void Main()
    {
        int alter = 25;
        double preis = 19.99;
        bool istErwachsen = true;
        string name = "Max";

        Console.WriteLine($"Name: {name}, Alter: {alter}, Preis: {preis}, Erwachsen: {istErwachsen}");
    }
}
```

**💡 Erklärung**:

- `Console.WriteLine(...)` gibt die Werte der Variablen aus
- `$"{variable}"` ist ein String-Interpolationsfeature

## 🔄 4. Variablen ändern
Du kannst den Wert einer Variablen jederzeit ändern:
```sharp
int zahl = 10;
zahl = 20; // Neuer Wert
Console.WriteLine(zahl); // Ausgabe: 20
```

## 🚀 5. Konstanten (`const`)
Wenn eine Variable **niemals verändert** werden soll, nutzt man `const`:

```csharp
const double Pi = 3.1415;
Pi = 3.2; // ❌ Fehler! Pi kann nicht geändert werden.
```

## ✅ Fazit
- Variablen speichern Werte mit einem bestimmten Datentyp
- Primitive Datentypen wie int, string, double sind wichtig
- Konstanten (const) bleiben unverändert

Jetzt bist du bereit, mit Variablen zu arbeiten! 🎯