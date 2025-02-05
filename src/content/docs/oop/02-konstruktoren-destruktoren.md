---
title: Konstruktoren und Destruktoren
description: Einführung in Konstruktoren und Destruktoren in C#.
---

Konstruktoren und Destruktoren sind spezielle Methoden in C#, die beim Erstellen und Zerstören eines Objekts aufgerufen werden. Sie helfen dabei, Objekte richtig zu initialisieren und Ressourcen freizugeben.

---

## 🔹 1. Konstruktoren – Was sind sie?
Ein **Konstruktor** ist eine spezielle Methode, die automatisch aufgerufen wird, wenn ein Objekt einer Klasse erstellt wird.  
Er hat **den gleichen Namen wie die Klasse** und benötigt **keinen Rückgabetyp**.

**1.1 Standardkonstruktor**
Wenn du keinen Konstruktor angibst, erstellt C# automatisch einen **Standardkonstruktor**, der nichts tut.

```csharp
class Auto
{
    public string Marke;
    public string Modell;
    public int Baujahr;
}

class Programm
{
    static void Main()
    {
        Auto meinAuto = new Auto(); // Automatischer leerer Konstruktor
    }
}
```

**🔹 2. Benutzerdefinierte Konstruktoren**
Wir können eigene Konstruktoren definieren, um Werte direkt zu initialisieren.

```csharp
class Auto
{
    public string Marke;
    public string Modell;
    public int Baujahr;

    // Benutzerdefinierter Konstruktor
    public Auto(string marke, string modell, int baujahr)
    {
        Marke = marke;
        Modell = modell;
        Baujahr = baujahr;
    }
}

class Programm
{
    static void Main()
    {
        Auto auto1 = new Auto("Tesla", "Model 3", 2023);
        Auto auto2 = new Auto("Mercedes", "C-Klasse", 2021);

        Console.WriteLine($"{auto1.Marke} {auto1.Modell}, Baujahr {auto1.Baujahr}");
        Console.WriteLine($"{auto2.Marke} {auto2.Modell}, Baujahr {auto2.Baujahr}");
    }
}
```

**Erklärung**   
✔ Der Konstruktor sorgt dafür, dass die Werte direkt beim Erstellen eines Objekts gesetzt werden.   
✔ Kein umständliches Setzen der Werte nach der Objekterstellung mehr.

## 🔹 3. Überladung von Konstruktoren
Eine Klasse kann mehrere Konstruktoren mit unterschiedlicher Parameteranzahl haben (Konstruktor-Überladung).

```csharp
class Auto
{
    public string Marke;
    public string Modell;
    public int Baujahr;

    // Konstruktor mit allen Werten
    public Auto(string marke, string modell, int baujahr)
    {
        Marke = marke;
        Modell = modell;
        Baujahr = baujahr;
    }

    // Konstruktor nur mit Marke und Modell, Baujahr bekommt Standardwert
    public Auto(string marke, string modell)
    {
        Marke = marke;
        Modell = modell;
        Baujahr = 2020;
    }
}

class Programm
{
    static void Main()
    {
        Auto auto1 = new Auto("BMW", "X5", 2022);
        Auto auto2 = new Auto("Audi", "A4"); // Baujahr wird automatisch 2020

        Console.WriteLine($"{auto1.Marke} {auto1.Modell}, Baujahr {auto1.Baujahr}");
        Console.WriteLine($"{auto2.Marke} {auto2.Modell}, Baujahr {auto2.Baujahr}");
    }
}
```

**✔ Flexibilität durch mehrere Konstruktoren!**

## 🔹 4. Destruktoren – Objekte aufräumen
Ein **Destruktor** ist eine Methode, die aufgerufen wird, wenn ein Objekt zerstört wird.
Er hat den gleichen Namen wie die Klasse, aber mit einer **Tilde (~) davor**.

**Wann brauche ich Destruktoren?**
Wenn dein Objekt **externe Ressourcen** wie Dateien oder Datenbankverbindungen nutzt.
In C# übernimmt der **Garbage Collector** die Speicherverwaltung, aber du kannst den Destruktor für spezielle Aufräumaktionen nutzen.

**Beispiel für einen Destruktor**

```csharp
class Auto
{
    public string Marke;

    // Konstruktor
    public Auto(string marke)
    {
        Marke = marke;
        Console.WriteLine($"{Marke} wurde erstellt.");
    }

    // Destruktor
    ~Auto()
    {
        Console.WriteLine($"{Marke} wird zerstört.");
    }
}

class Programm
{
    static void Main()
    {
        Auto auto1 = new Auto("Toyota");
    }
}
```

**Mögliche Ausgabe:**

```
Toyota wurde erstellt.
Toyota wird zerstört.
```

**Wichtige Punkte zu Destruktoren**  
✔ Wird **automatisch** aufgerufen, wenn das Objekt vom Garbage Collector entfernt wird.  
✔ Wird **nicht manuell** aufgerufen.  
✔ Nützlich für das **Freigeben von Ressourcen** wie Dateien oder Datenbankverbindungen.

## ✅ Fazit
✔ **Konstruktoren** helfen, Objekte direkt mit sinnvollen Werten zu erstellen.  
✔ **Konstruktor-Überladung** ermöglicht verschiedene Initialisierungsmöglichkeiten.  
✔ **Destruktoren** helfen beim Aufräumen von Ressourcen, wenn ein Objekt zerstört wird.

Das ist essenziell für das Verständnis von **Objektlebenszyklen** in C#! 🚀