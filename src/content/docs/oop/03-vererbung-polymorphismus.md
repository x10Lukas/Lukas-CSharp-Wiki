---
title: Vererbung und Polymorphismus
description: Einführung in Vererbung und Polymorphismus in C#.
---

C# ist eine **objektorientierte** Sprache, in der **Vererbung** und **Polymorphismus** wichtige Konzepte sind.  
Diese Mechanismen helfen, **Code wiederverwendbar** und **flexibel** zu gestalten.

---

🔹 **1. Vererbung – Was ist das?**

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
