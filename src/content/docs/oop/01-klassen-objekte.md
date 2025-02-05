---
title: Klassen und Objekte
description: Einführung in Klassen und Objekte in C#.
---

C# ist eine objektorientierte Programmiersprache. Das bedeutet, dass **Klassen** und **Objekte** eine zentrale Rolle spielen.  
Aber was genau sind Klassen und Objekte?

---

## 📌 1. Was sind Klassen und Objekte?

- Eine **Klasse** ist eine Vorlage (Blueprint) für Objekte. Sie beschreibt, welche **Eigenschaften** (Variablen) und **Fähigkeiten** (Methoden) ein Objekt hat.
- Ein **Objekt** ist eine konkrete Instanz einer Klasse – also ein **exemplarischer Vertreter** mit echten Werten.

**Beispiel: Eine Klasse für Autos 🚗**

```csharp
class Auto
{
    // Eigenschaften (Attribute)
    public string Marke;
    public string Modell;
    public int Baujahr;

    // Methode (Verhalten)
    public void Hupen()
    {
        Console.WriteLine("Huuup! Huuup!");
    }
}
```

Hier ist `Auto` eine Klasse mit drei Attributen (**Marke, Modell, Baujahr**) und einer Methode (**Hupen()**).

## 🏗️ 2. Objekte erstellen und verwenden
Sobald eine Klasse definiert ist, können wir **Objekte** davon erstellen:

```csharp
class Programm
{
    static void Main()
    {
        // Ein Objekt der Klasse Auto erstellen
        Auto meinAuto = new Auto();
        meinAuto.Marke = "BMW";
        meinAuto.Modell = "X5";
        meinAuto.Baujahr = 2022;

        // Werte ausgeben
        Console.WriteLine($"Mein Auto: {meinAuto.Marke} {meinAuto.Modell}, Baujahr {meinAuto.Baujahr}");

        // Methode aufrufen
        meinAuto.Hupen();
    }
}
```

**Ausgabe:**

```
Mein Auto: BMW X5, Baujahr 2022  
Huuup! Huuup!
```

## 🔄 3. Konstruktoren – Objekte effizient initialisieren
Momentan müssen wir jedes Attribut **manuell setzen**. Das geht einfacher mit einem **Konstruktor**.
Ein Konstruktor ist eine Methode, die automatisch aufgerufen wird, wenn ein Objekt erstellt wird.

```csharp
class Auto
{
    public string Marke;
    public string Modell;
    public int Baujahr;

    // Konstruktor
    public Auto(string marke, string modell, int baujahr)
    {
        Marke = marke;
        Modell = modell;
        Baujahr = baujahr;
    }

    public void Hupen()
    {
        Console.WriteLine("Huuup! Huuup!");
    }
}

class Programm
{
    static void Main()
    {
        // Auto-Objekte mit Konstruktor erstellen
        Auto auto1 = new Auto("Tesla", "Model 3", 2023);
        Auto auto2 = new Auto("Mercedes", "C-Klasse", 2021);

        Console.WriteLine($"{auto1.Marke} {auto1.Modell}, Baujahr {auto1.Baujahr}");
        Console.WriteLine($"{auto2.Marke} {auto2.Modell}, Baujahr {auto2.Baujahr}");

        auto1.Hupen();
    }
}
```

## 🔒 4. Zugriffskontrolle: public vs. private
Bisher waren alle Attribute `public`, was bedeutet, dass jeder von außerhalb darauf zugreifen kann.
Meistens ist es besser, **Daten zu kapseln** (`private`) und nur über **Methoden** darauf zuzugreifen:

```csharp
class Auto
{
    private string marke;
    private string modell;
    private int baujahr;

    public Auto(string marke, string modell, int baujahr)
    {
        this.marke = marke;
        this.modell = modell;
        this.baujahr = baujahr;
    }

    // Getter-Methode, um die Marke auszulesen
    public string GetMarke()
    {
        return marke;
    }
}

class Programm
{
    static void Main()
    {
        Auto auto = new Auto("VW", "Golf", 2020);
        Console.WriteLine(auto.GetMarke());  // Zugriff über Methode
    }
}
```

**👉 Warum `private`?**

- Verhindert unerlaubte Änderungen von außen.
- Erhöht die **Sicherheit** und Wartbarkeit des Codes.

## ✅ Fazit   
✔ **Klassen** sind Vorlagen für Objekte.   
✔ **Objekte** sind Instanzen von Klassen.   
✔ **Konstruktoren** helfen bei der Initialisierung.   
✔ `private` vs. `public` regeln den Zugriff auf Daten.

Das ist die Grundlage der **Objektorientierung** in C#! 🚀