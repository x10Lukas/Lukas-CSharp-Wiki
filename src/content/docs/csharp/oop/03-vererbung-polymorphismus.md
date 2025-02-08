---
title: Vererbung und Polymorphismus
description: Einführung in Vererbung und Polymorphismus in C#.
---

C# ist eine **objektorientierte** Sprache, in der **Vererbung** und **Polymorphismus** wichtige Konzepte sind.  
Diese Mechanismen helfen, **Code wiederverwendbar** und **flexibel** zu gestalten.

---

## 🔹 1. Vererbung – Was ist das?

Die **Vererbung** ermöglicht es, dass eine Klasse (Unterklasse) die Eigenschaften und Methoden einer anderen Klasse (Basisklasse) übernimmt.  
Das reduziert **duplizierten Code** und ermöglicht eine bessere Struktur.

### **Beispiel: Basisklasse "Fahrzeug" und abgeleitete Klasse "Auto"**
```csharp
// Basisklasse
class Fahrzeug
{
    public string Marke;
    public int Geschwindigkeit;

    public void Fahren()
    {
        Console.WriteLine($"{Marke} fährt mit {Geschwindigkeit} km/h.");
    }
}

// Abgeleitete Klasse
class Auto : Fahrzeug
{
    public int Türen;

    public void Hupen()
    {
        Console.WriteLine("Huuup! Huuup!");
    }
}

class Programm
{
    static void Main()
    {
        Auto meinAuto = new Auto();
        meinAuto.Marke = "BMW";
        meinAuto.Geschwindigkeit = 100;
        meinAuto.Türen = 4;

        meinAuto.Fahren();  // Methode aus der Basisklasse
        meinAuto.Hupen();   // Methode der Unterklasse
    }
}
```

## 🔹 2. Konstruktoren in der Vererbung
Der Konstruktor der Basisklasse kann mit `base()` aufgerufen werden.

```csharp
class Fahrzeug
{
    public string Marke;

    // Konstruktor der Basisklasse
    public Fahrzeug(string marke)
    {
        Marke = marke;
    }
}

class Auto : Fahrzeug
{
    public int Türen;

    // Konstruktor der Unterklasse ruft Konstruktor der Basisklasse auf
    public Auto(string marke, int türen) : base(marke)
    {
        Türen = türen;
    }
}

class Programm
{
    static void Main()
    {
        Auto auto1 = new Auto("Audi", 4);
        Console.WriteLine($"{auto1.Marke} mit {auto1.Türen} Türen.");
    }
}
```

## 🔹 3. Überschreiben von Methoden (Method Overriding)
Eine Unterklasse kann Methoden der Basisklasse überschreiben, indem sie `virtual` und `override` verwendet.

```csharp
class Fahrzeug
{
    public virtual void Fahren()
    {
        Console.WriteLine("Das Fahrzeug fährt.");
    }
}

class Auto : Fahrzeug
{
    public override void Fahren()
    {
        Console.WriteLine("Das Auto fährt schnell!");
    }
}

class Programm
{
    static void Main()
    {
        Auto auto = new Auto();
        auto.Fahren();  // "Das Auto fährt schnell!"
    }
}
```

✔ Die Methode `Fahren()` aus `Fahrzeug` wird in `Auto` **überschrieben**.

## 🔹 4. Polymorphismus – Ein Objekt, mehrere Formen
Ein Objekt kann auf verschiedene Arten verwendet werden, abhängig vom Kontext.

```csharp
class Fahrzeug
{
    public virtual void Fahren()
    {
        Console.WriteLine("Das Fahrzeug bewegt sich.");
    }
}

class Auto : Fahrzeug
{
    public override void Fahren()
    {
        Console.WriteLine("Das Auto fährt mit hoher Geschwindigkeit!");
    }
}

class Fahrrad : Fahrzeug
{
    public override void Fahren()
    {
        Console.WriteLine("Das Fahrrad fährt langsam.");
    }
}

class Programm
{
    static void Main()
    {
        Fahrzeug[] fahrzeuge = { new Auto(), new Fahrrad() };

        foreach (Fahrzeug f in fahrzeuge)
        {
            f.Fahren(); // Unterschiedliche Ausgabe je nach Typ
        }
    }
}
```

**Ausgabe:**

```
Das Auto fährt mit hoher Geschwindigkeit!
Das Fahrrad fährt langsam.
```

## ✅ Fazit
✔ **Vererbung** ermöglicht Code-Wiederverwendung.  
✔ **Methoden überschreiben** (`override`) passt Verhalten an.  
✔ **Polymorphismus** sorgt für flexible und erweiterbare Programme.

Diese Konzepte machen deinen Code effizienter und skalierbarer! 🚀