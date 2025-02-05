---
title: Fehlerbehandlung in C#
description: Einführung in die Fehlerbehandlung mit try-catch-finally in C#.
---

Fehler (Exceptions) treten in jedem Programm auf. C# bietet leistungsstarke Mechanismen, um Fehler **sicher zu behandeln** und Abstürze zu vermeiden.  

✅ **Fehlerbehandlung sorgt für stabilere Programme und bessere Benutzererfahrung.**  

---

## 🔹1. Was sind Exceptions?
Eine **Exception (Ausnahme)** tritt auf, wenn ein unerwarteter Fehler zur Laufzeit passiert.  

Beispiele:
- Zugriff auf ein **nicht vorhandenes Array-Element**
- Division durch **null**
- Öffnen einer **nicht existierenden Datei**  

**Beispiel: Unbehandelte Exception**
```csharp
int zahl1 = 10;
int zahl2 = 0;
int ergebnis = zahl1 / zahl2; // Fehler: Division durch Null!
```

✔ Wenn der Fehler nicht behandelt wird, **stürzt das Programm ab**.

## 🔹 2. Fehler abfangen mit `try-catch`
Die `try-catch`-**Struktur** fängt Fehler ab und verhindert Abstürze.

```csharp
try
{
    int zahl1 = 10;
    int zahl2 = 0;
    int ergebnis = zahl1 / zahl2; // Fehler
}
catch (DivideByZeroException ex)
{
    Console.WriteLine("Fehler: Division durch Null ist nicht erlaubt!");
}
```

✔ Der Fehler wird **abgefangen** und das Programm läuft weiter!

## 🔹 3. Mehrere `catch`-Blöcke für verschiedene Fehler
Du kannst **mehrere** `catch`-**Blöcke** verwenden, um verschiedene Fehler unterschiedlich zu behandeln.

```csharp
try
{
    int[] zahlen = { 1, 2, 3 };
    Console.WriteLine(zahlen[5]); // Fehler: Index außerhalb des Bereichs
}
catch (IndexOutOfRangeException ex)
{
    Console.WriteLine("Fehler: Der Index ist außerhalb des gültigen Bereichs!");
}
catch (Exception ex) // Allgemeiner Fehler
{
    Console.WriteLine($"Ein Fehler ist aufgetreten: {ex.Message}");
}
```

✔ **Spezifische Fehlerbehandlung** für bessere Kontrolle.  
✔ Der **allgemeine** `Exception`-**Block** fängt alle anderen Fehler ab.

## 🔹 4. `finally` – Code immer ausführen
Der `finally`-**Block** wird **immer ausgeführt**, egal ob eine Exception auftritt oder nicht.

```csharp
try
{
    Console.WriteLine("Öffne Datei...");
    `throw` new Exception("Dateifehler!"); // Simulierter Fehler
}
catch (Exception ex)
{
    Console.WriteLine($"Fehler: {ex.Message}");
}
finally
{
    Console.WriteLine("Schließe Datei..."); // Wird immer ausgeführt!
}
```

✔ Gut für **Aufräumarbeiten** wie das Schließen von Dateien oder Datenbanken.

## 🔹 5. Eigene Exceptions erstellen
Manchmal ist es sinnvoll, **eigene Fehlerklassen** zu definieren.

```csharp
class UngueltigeZahlException : Exception
{
    public UngueltigeZahlException(string message) : base(message) { }
}

class Programm
{
    static void TestZahl(int zahl)
    {
        if (zahl < 0)
        {
            `throw` new UngueltigeZahlException("Negative Zahlen sind nicht erlaubt!");
        }
    }

    static void Main()
    {
        try
        {
            TestZahl(-5);
        }
        catch (UngueltigeZahlException ex)
        {
            Console.WriteLine($"Benutzerdefinierter Fehler: {ex.Message}");
        }
    }
}
```

✔ Eigene Exceptions helfen, **spezifische Fehlerfälle besser zu behandeln**.

Mit `throw` kannst du bewusst einen Fehler auslösen.

```csharp
static void TestAlter(int alter)
{
    if (alter < 18)
    {
        throw new Exception("Mindestalter ist 18 Jahre!");
    }
}

try
{
    TestAlter(16);
}
catch (Exception ex)
{
    Console.WriteLine($"Fehler: {ex.Message}");
}
```

✔ Nützlich für **Validierungen** und **Regelüberprüfungen**.

## 🔹 7. `using` für automatische Ressourcenfreigabe
Mit `using` kannst du sicherstellen, dass Dateien oder Datenbankverbindungen automatisch geschlossen werden.

```csharp
using (StreamReader reader = new StreamReader("datei.txt"))
{
    string inhalt = reader.ReadToEnd();
    Console.WriteLine(inhalt);
} // Datei wird automatisch geschlossen!
```

✔ Automatische **Freigabe von Ressourcen** – kein `finally` nötig!

## ✅ Fazit
✔ `try-catch-finally` verhindert Abstürze und verbessert die Programmsicherheit.  
✔ **Spezifische Fehlerbehandlung** macht den Code lesbarer und robuster.  
✔ **Eigene Exceptions** helfen, Fehlerfälle besser zu definieren.  
✔ `using` **sorgt für automatische Ressourcenfreigabe**.

Fehler passieren – mit **guter Fehlerbehandlung** bleibt dein Programm **stabil und zuverlässig**! 🚀