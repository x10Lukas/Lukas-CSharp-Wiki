---
title: Arrays, Listen und Dictionaries in C#
description: Einführung in Arrays, Listen und Dictionaries mit Beispielen.
order: 13
---

In C# gibt es verschiedene Möglichkeiten, mehrere Werte in **einer einzigen Datenstruktur** zu speichern.  
Die wichtigsten sind:
- **Arrays**: Feste Größe, schneller Zugriff  
- **Listen** (`List<T>`): Dynamisch veränderbar  
- **Dictionaries** (`Dictionary<TKey, TValue>`): Schlüssel-Wert-Speicherung  

---

## 🔹1. Arrays – Feste Größe
Ein **Array** speichert mehrere Werte **des gleichen Typs** in einer festen Reihenfolge.

**1.1 Ein Array erstellen**
```csharp
int[] zahlen = new int[3]; // Array mit 3 Plätzen
zahlen[0] = 10;
zahlen[1] = 20;
zahlen[2] = 30;
```

oder kürzer:

```csharp
int[] zahlen = { 10, 20, 30 };
```

✔ **Arrays haben eine feste Länge** – sie können nicht dynamisch wachsen.

**1.2 Elemente aus einem Array auslesen**

```csharp
Console.WriteLine(zahlen[0]); // Ausgabe: 10
```

💡 **Wichtig**: Der Index beginnt bei **0** (`zahlen[0]` ist das erste Element).

**1.3 Ein Array durchlaufen (`for` & `foreach`)**

```csharp
for (int i = 0; i < zahlen.Length; i++)
{
    Console.WriteLine(zahlen[i]);
}
```

oder einfacher mit `foreach`:

```csharp
foreach (int zahl in zahlen)
{
    Console.WriteLine(zahl);
}
```

✔ `foreach` **ist bequemer**, wenn du nur Werte lesen willst.

## 🔹 2. Listen (`List<T>`) – Dynamische Arrays
Listen (`List<T>`) sind flexibler als Arrays – sie können wachsen und schrumpfen.

**2.1 Eine Liste erstellen**

```csharp
List<string> namen = new List<string>();
namen.Add("Lukas");
namen.Add("Anna");
```

oder direkt befüllen:

```csharp
List<string> namen = new List<string> { "Lukas", "Anna", "Tom" };
```

✔ **Listen sind dynamisch** – sie können beliebig viele Elemente speichern.

**2.2 Elemente aus einer Liste auslesen**

```csharp
Console.WriteLine(namen[0]); // Ausgabe: Lukas
```

**2.3 Eine Liste durchlaufen**

```csharp
foreach (string name in namen)
{
    Console.WriteLine(name);
}
```

✔ **Listen unterstützen alle Array-Methoden** (`Add`, `Remove`, `Count`, `Contains` usw.).

**2.4 Elemente hinzufügen & entfernen**

```csharp
namen.Add("Maria");  // Fügt "Maria" hinzu
namen.Remove("Anna"); // Entfernt "Anna"
Console.WriteLine(namen.Count); // Anzahl der Elemente
```

✔ **Listen wachsen automatisch**, wenn neue Elemente hinzugefügt werden.

## 🔹 3. Dictionaries – Schlüssel-Wert-Speicher
Ein **Dictionary** speichert Daten in **Schlüssel-Wert**-Paaren.

**3.1 Ein Dictionary erstellen**

```csharp
Dictionary<int, string> schueler = new Dictionary<int, string>();
schueler.Add(1, "Lukas");
schueler.Add(2, "Anna");
```

oder kürzer:

```csharp
var schueler = new Dictionary<int, string>
{
    { 1, "Lukas" },
    { 2, "Anna" }
};
```

✔ **Jeder Schlüssel ist eindeutig** – doppelte Schlüssel sind nicht erlaubt.

**3.2 Werte aus einem Dictionary auslesen**

```csharp
Console.WriteLine(schueler[1]); // Ausgabe: Lukas
```

💡 **Fehler vermeiden**:
Versuche nicht, einen **nicht existierenden Schlüssel** zu lesen – nutze `TryGetValue`:

```csharp
if (schueler.TryGetValue(3, out string name))
{
    Console.WriteLine(name);
}
else
{
    Console.WriteLine("Schlüssel nicht gefunden!");
}
```

✔ **Verhindert Fehler**, falls der Schlüssel nicht existiert.

**3.3 Ein Dictionary durchlaufen**

```csharp
foreach (var eintrag in schueler)
{
    Console.WriteLine($"ID: {eintrag.Key}, Name: {eintrag.Value}");
}
```

✔ **Perfekt für Zuordnungen** wie **ID** → **Name** oder **Produktnummer** → **Preis**.

**3.4 Elemente hinzufügen & entfernen**

```csharp
schueler[3] = "Tom"; // Fügt neuen Schüler hinzu
schueler.Remove(1); // Entfernt Lukas
Console.WriteLine(schueler.Count); // Anzahl der Einträge
```

✔ **Dictionaries sind extrem effizient** für schnelle Suchvorgänge.

|Typ        | Eigenschaften                                          |
|-----------|--------------------------------------------------------|
|Array      | Festgelegte Größe, schneller Zugriff                   |  
|List<T>    | Dynamisch, flexibel, unterstützt viele Methoden        |
|Dictionary	| Schlüssel-Wert-Speicherung, ideal für Nachschlagewerke |

✔ **Arrays sind für feste Datenmengen gut.**  
✔ **Listen sind flexibler und einfacher zu verwalten.**  
✔ **Dictionaries eignen sich für schnelle Suchen nach Schlüsseln.**

Je nach Anwendungsfall solltest du die **richtige Datenstruktur wählen**! 🚀