---
title: Arbeiten mit Dateien – Lesen und Schreiben in C#
description: Wie man in C# mit Dateien arbeitet – vom Öffnen bis zum Schreiben und Lesen.
---

In C# gibt es viele Methoden, um mit Dateien zu arbeiten. Du kannst sowohl **Textdateien** lesen als auch **Daten in Dateien schreiben**. In diesem Abschnitt lernst du die grundlegenden Methoden zum Arbeiten mit Dateien.

---

## 🔹1. Dateien Lesen
C# stellt verschiedene Klassen bereit, um Dateien zu lesen, darunter **`StreamReader`** und **`File.ReadAllText()`**.

**1.1 Datei mit `StreamReader` lesen**
Der **`StreamReader`** ermöglicht das Zeilenweise Lesen einer Datei.

```csharp
using System.IO;

class Programm
{
    static void Main()
    {
        using (StreamReader reader = new StreamReader("datei.txt"))
        {
            string zeile;
            while ((zeile = reader.ReadLine()) != null)
            {
                Console.WriteLine(zeile);
            }
        }
    }
}
```

✔ Der `using`-**Block** sorgt dafür, dass die Datei nach dem Lesen automatisch geschlossen wird.

**1.2 Ganze Datei mit `File.ReadAllText()` lesen**
Wenn du die gesamte Datei auf einmal einlesen möchtest, kannst du `File.ReadAllText()` verwenden.

```csharp
using System.IO;

class Programm
{
    static void Main()
    {
        string inhalt = File.ReadAllText("datei.txt");
        Console.WriteLine(inhalt);
    }
}
```

✔ **Einfacher Zugriff** auf den gesamten Inhalt der Datei.  
✔ Verwende diese Methode, wenn du **nicht zeilenweise** lesen musst.

## 🔹 2. Dateien Schreiben
Es gibt verschiedene Möglichkeiten, Daten in Dateien zu schreiben, wie `StreamWriter` oder `File.WriteAllText()`.

**2.1 In eine Datei mit `StreamWriter` schreiben**
Verwende den `StreamWriter`, um Daten in eine Datei zu schreiben, und wenn die Datei nicht existiert, wird sie erstellt.

```csharp
using System.IO;

class Programm
{
    static void Main()
    {
        using (StreamWriter writer = new StreamWriter("neuedatei.txt"))
        {
            writer.WriteLine("Das ist eine neue Zeile.");
            writer.WriteLine("Dies ist eine weitere Zeile.");
        }
    }
}
```

✔ Mit `StreamWriter` kannst du Daten zeilenweise schreiben.  
✔ Der `using`-**Block** sorgt dafür, dass der Writer korrekt geschlossen wird.

**2.2 In eine Datei mit `File.WriteAllText()` schreiben**
Wenn du den gesamten Inhalt in einer Datei ersetzen möchtest, kannst du `File.WriteAllText()` verwenden.

```csharp
using System.IO;

class Programm
{
    static void Main()
    {
        string text = "Dies ist der gesamte Text, der in die Datei geschrieben wird.";
        File.WriteAllText("neuedatei.txt", text);
    }
}
```

✔ Diese Methode überschreibt die Datei, falls sie bereits existiert.

**2.3 An eine Datei mit `StreamWriter` anhängen**
Um an eine bestehende Datei anzuhängen, kannst du den `StreamWriter` mit dem Parameter `true` öffnen.

```csharp
using System.IO;

class Programm
{
    static void Main()
    {
        using (StreamWriter writer = new StreamWriter("neuedatei.txt", true))
        {
            writer.WriteLine("Neue Zeile am Ende der Datei.");
        }
    }
}
```

✔ **Anhängen** an eine bestehende Datei ohne sie zu überschreiben.

## 🔹 3. Dateien Überprüfen
Bevor du mit einer Datei arbeitest, solltest du sicherstellen, dass sie **existiert** und du darauf zugreifen kannst.

**3.1 Überprüfen, ob eine Datei existiert**

```csharp
using System.IO;

class Programm
{
    static void Main()
    {
        string dateiPfad = "neuedatei.txt";
        
        if (File.Exists(dateiPfad))
        {
            Console.WriteLine("Die Datei existiert.");
        }
        else
        {
            Console.WriteLine("Die Datei existiert nicht.");
        }
    }
}
```

✔ `File.Exists()` prüft, ob eine Datei vorhanden ist.

## 🔹 4. Fehlerbehandlung beim Arbeiten mit Dateien
Es ist wichtig, Fehler zu behandeln, die beim Arbeiten mit Dateien auftreten können (z.B. Dateizugriffsfehler, fehlende Berechtigungen).

```csharp
using System;
using System.IO;

class Programm
{
    static void Main()
    {
        try
        {
            string text = File.ReadAllText("nichtvorhandeneDatei.txt");
            Console.WriteLine(text);
        }
        catch (FileNotFoundException ex)
        {
            Console.WriteLine($"Fehler: {ex.Message}");
        }
        catch (UnauthorizedAccessException ex)
        {
            Console.WriteLine($"Zugriffsfehler: {ex.Message}");
        }
    }
}
```

✔ Die `try-catch`-Struktur hilft, Fehler zu fangen, die beim Dateioperationen auftreten können.

## ✅ Fazit
| Methode                   | Zweck                                           |
|---------------------------|-------------------------------------------------|
| `StreamReader`            | Zeilenweises Lesen einer Datei                  |
| `File.ReadAllText()`      | Gesamtes Lesen einer Datei                      |
| `StreamWriter`            | Zeilenweises Schreiben in eine Datei            |
| `File.WriteAllText()`     | Gesamtes Schreiben in eine Datei (Überschreibt) |
| `File.Exists()`           | Überprüft, ob eine Datei existiert              |
| `StreamWriter` mit `true` | Anhängen an eine bestehende Datei               |

✔ **Mit diesen Techniken kannst du effektiv mit Dateien arbeiten**, egal ob du sie **lesen**, **schreiben** oder **überprüfen** musst! 🚀