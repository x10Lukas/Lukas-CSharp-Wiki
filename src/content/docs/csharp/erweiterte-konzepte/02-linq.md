---
title: Einführung in LINQ
description: Grundlagen und Beispiele für Language Integrated Query (LINQ) in C#.
---

**LINQ (Language Integrated Query)** ist eine leistungsstarke Funktion in C#, die das **Abfragen und Verarbeiten von Daten** auf eine einheitliche Weise ermöglicht.  
Mit LINQ kannst du **Daten aus Arrays, Listen, Datenbanken, XML und mehr** abrufen und transformieren – direkt im C#-Code!

---

## 🔹1. Warum LINQ?
Vor LINQ musste man Daten manuell mit Schleifen und Bedingungen durchsuchen.  
Mit LINQ wird das **einfacher, lesbarer und effizienter**!  

**Beispiel: Vergleich von Schleife vs. LINQ**  
Ohne LINQ:
```csharp
List<int> zahlen = new List<int> { 1, 2, 3, 4, 5, 6 };
List<int> geradeZahlen = new List<int>();

foreach (int zahl in zahlen)
{
    if (zahl % 2 == 0)
    {
        geradeZahlen.Add(zahl);
    }
}
```

Mit LINQ:

```csharp
List<int> zahlen = new List<int> { 1, 2, 3, 4, 5, 6 };
var geradeZahlen = zahlen.Where(z => z % 2 == 0).ToList();
```

✔ Weniger Code, **besser lesbar und effizienter**!

🔹 2. Grundlagen von LINQ
LINQ-Abfragen können auf **Sammlungen (Collections)** wie Arrays oder Listen angewendet werden.
Sie bestehen aus drei Hauptbestandteilen:

1. **Datenquelle** – Woher kommen die Daten?
2. **Abfrage** – Welche Bedingungen und Transformationen sollen angewendet werden?
3. **Ausführung** – Das Abrufen der Daten.

**2.1 Einfaches LINQ-Beispiel**

```csharp
int[] zahlen = { 10, 20, 30, 40, 50 };

// LINQ-Abfrage
var großeZahlen = from zahl in zahlen
                  where zahl > 20
                  select zahl;

foreach (var zahl in großeZahlen)
{
    Console.WriteLine(zahl);
}
```

✔ "**from – where – select**" ist die typische LINQ-Syntax!

## 🔹 3. LINQ-Methoden (Method Syntax)
LINQ kann auch mit **Methoden** geschrieben werden, was oft bevorzugt wird.

```csharp
List<string> namen = new List<string> { "Anna", "Lukas", "Maria", "Tom" };

var langeNamen = namen.Where(name => name.Length > 4);

foreach (var name in langeNamen)
{
    Console.WriteLine(name);
}
```

✔ Die Methoden-Syntax (`Where`, `Select`, `OrderBy`) ist kompakt und flexibel!

## 🔹 4. Wichtige LINQ-Operatoren
Hier sind die wichtigsten LINQ-Methoden:

| Methode                  | Beschreibung                                              |
|--------------------------|-----------------------------------------------------------|
| `Where`          	       | Filtert Elemente nach einer Bedingung                     |
| `Select`                 | Wählt bestimmte Werte oder berechnet neue Werte           |
| `OrderBy`                | Sortiert die Daten aufsteigend                            |
| `OrderByDescending`      | Sortiert die Daten absteigend                             |
| `GroupBy`                | Gruppiert Elemente nach einem bestimmten Kriterium        |
| `First / FirstOrDefault` | Gibt das erste Element oder null zurück                   |
| `Count`                  | Zählt die Anzahl der Elemente                             | 
| `Distinct`               | Entfernt doppelte Werte                                   |

## 🔹 5. LINQ in der Praxis
**5.1 LINQ mit Objekten**

```csharp
class Student
{
    public string Name { get; set; }
    public int Alter { get; set; }
}

class Programm
{
    static void Main()
    {
        List<Student> studenten = new List<Student>
        {
            new Student { Name = "Anna", Alter = 21 },
            new Student { Name = "Lukas", Alter = 18 },
            new Student { Name = "Tom", Alter = 24 }
        };

        var erwachsene = studenten.Where(s => s.Alter >= 21);

        foreach (var student in erwachsene)
        {
            Console.WriteLine(student.Name);
        }
    }
}
```

## 🔹 6. LINQ mit Listen und Dictionaries
**6.1 LINQ mit `List<T>`**

```csharp
List<int> zahlen = new List<int> { 10, 20, 30, 40 };

var verdoppelt = zahlen.Select(z => z * 2);

foreach (var zahl in verdoppelt)
{
    Console.WriteLine(zahl);
}
```

**6.2 LINQ mit `Dictionary<TKey, TValue>`**

```csharp
Dictionary<int, string> schueler = new Dictionary<int, string>
{
    { 1, "Lukas" },
    { 2, "Anna" },
    { 3, "Tom" }
};

var namen = schueler.Where(kvp => kvp.Key > 1).Select(kvp => kvp.Value);

foreach (var name in namen)
{
    Console.WriteLine(name);
}
```

✔ LINQ kann **auch mit Dictionaries** arbeiten!

## 🔹 7. LINQ mit `GroupBy` (Gruppieren von Daten)

```csharp
var studenten = new List<Student>
{
    new Student { Name = "Anna", Alter = 21 },
    new Student { Name = "Lukas", Alter = 18 },
    new Student { Name = "Tom", Alter = 24 },
    new Student { Name = "Maria", Alter = 21 }
};

var gruppiert = studenten.GroupBy(s => s.Alter);

foreach (var gruppe in gruppiert)
{
    Console.WriteLine($"Alter: {gruppe.Key}");
    foreach (var student in gruppe)
    {
        Console.WriteLine($"  - {student.Name}");
    }
}
```

✔ Gruppiert Studenten **nach Alter**.

## 🔹 8. LINQ mit `Join` (Verknüpfung von Listen)

```csharp
var kunden = new List<(int ID, string Name)>
{
    (1, "Lukas"),
    (2, "Anna"),
    (3, "Tom")
};

var bestellungen = new List<(int KundeID, string Produkt)>
{
    (1, "Laptop"),
    (2, "Smartphone"),
    (1, "Tablet")
};

// Verknüpfung der Listen
var query = from kunde in kunden
            join bestellung in bestellungen on kunde.ID equals bestellung.KundeID
            select new { kunde.Name, bestellung.Produkt };

foreach (var item in query)
{
    Console.WriteLine($"{item.Name} hat {item.Produkt} bestellt.");
}
```

✔ Verknüpft **Kunden und Bestellungen** nach `ID`.

## ✅ Fazit
✔ **LINQ ist leistungsstark und vereinfacht Datenverarbeitung**.  
✔ **Lesbare Syntax, weniger Code und mehr Funktionalität**!  
✔ **Kann auf Listen, Arrays, Dictionaries und Datenbanken angewendet werden**.

LINQ ist ein Muss für jeden C#-Entwickler! 🚀