---
title: Delegates und Events
description: Einführung in Delegates und Events in C#.
order: 10
---

**Delegates** und **Events** sind wichtige Konzepte in C#, die für **flexible und erweiterbare Anwendungen** verwendet werden. Sie ermöglichen die Implementierung des **Observer-Musters**, das oft in GUI-Programmierung, Ereignissteuerung und Callback-Mechanismen genutzt wird.

---

## 🔹1. Was sind Delegates?
Ein **Delegate** ist eine Art Platzhalter für Methoden. Er kann Methoden referenzieren und zur Laufzeit aufrufen.

**1.1 Definition eines Delegates**
```csharp
// Definition eines Delegates
delegate void BegruessungDelegate(string name);

// Klasse mit Methode, die zum Delegate passt
class Begruessung
{
    public static void Hallo(string name)
    {
        Console.WriteLine($"Hallo, {name}!");
    }

    public static void Tschuess(string name)
    {
        Console.WriteLine($"Tschüss, {name}!");
    }
}

class Programm
{
    static void Main()
    {
        // Erstellen eines Delegate-Objekts und Zuweisung der Methode
        BegruessungDelegate begruessung = Begruessung.Hallo;
        begruessung("Lukas");

        // Wechsel der Methode
        begruessung = Begruessung.Tschuess;
        begruessung("Lukas");
    }
}
```

**1.2 Erklärung**  
✔ `BegruessungDelegate` kann jede Methode referenzieren, die einen `string-Parameter` hat.  
✔ Methoden können zur Laufzeit **ausgetauscht** werden.  
✔ **Flexibilität** durch dynamisches Aufrufen von Methoden.

## 🔹 2. Anonyme Methoden und Lambda-Ausdrücke
In C# kannst du Delegates mit **anonymen Methoden** oder **Lambda-Ausdrücken** nutzen.

**2.1 Anonyme Methoden**

```csharp
BegruessungDelegate begruessung = delegate (string name)
{
    Console.WriteLine($"Willkommen, {name}!");
};

begruessung("Lukas");
```

**2.2 Lambda-Ausdrücke**

```csharp
BegruessungDelegate begruessung = name => Console.WriteLine($"Willkommen, {name}!");
begruessung("Lukas");
```

✔ **Lambda-Ausdrücke** machen den Code **kürzer und lesbarer**!

## 🔹 3. Multicast Delegates – Mehrere Methoden aufrufen
Ein **Multicast-Delegate** kann mehrere Methoden speichern und sie alle nacheinander aufrufen.

```csharp
class Begruessung
{
    public static void Hallo(string name) => Console.WriteLine($"Hallo, {name}!");
    public static void Tschuess(string name) => Console.WriteLine($"Tschüss, {name}!");
}

class Programm
{
    static void Main()
    {
        BegruessungDelegate begruessung = Begruessung.Hallo;
        begruessung += Begruessung.Tschuess; // Methode hinzufügen

        begruessung("Lukas"); // Ruft beide Methoden auf
    }
}
```

✔ **Mehrere Methoden** werden mit `+=` hinzugefügt und mit `-=` entfernt.

## 🔹 4. Was sind Events?
Ein **Event** ist eine spezielle Form eines Delegates, das nur von der **besitzenden Klasse** ausgelöst werden kann.

**4.1 Event-Definition und -Nutzung**

```csharp
class Alarm
{
    public delegate void AlarmDelegate(string nachricht);
    public event AlarmDelegate AlarmAusgeloest; // Event

    public void Ausloesen()
    {
        if (AlarmAusgeloest != null)
        {
            AlarmAusgeloest("Feueralarm! Verlassen Sie das Gebäude!");
        }
    }
}

class Programm
{
    static void Warnung(string nachricht)
    {
        Console.WriteLine($"⚠ {nachricht}");
    }

    static void Main()
    {
        Alarm feuerAlarm = new Alarm();
        feuerAlarm.AlarmAusgeloest += Warnung; // Event abonnieren

        feuerAlarm.Ausloesen(); // Löst das Event aus
    }
}
```

✔ `event` sorgt dafür, dass das Event nur von `Alarm` ausgelöst werden kann.  
✔ Methoden können sich mit `+=` registrieren und mit `-=` entfernen.

## 🔹 5. EventHandler – Standardisierte Events
C# bietet `EventHandler<T>` als **vorgefertigten** Mechanismus für Events.

**5.1 Verwendung von EventHandler**

```csharp
class Alarm
{
    public event EventHandler<string> AlarmAusgeloest;

    public void Ausloesen()
    {
        AlarmAusgeloest?.Invoke(this, "Feueralarm!");
    }
}

class Programm
{
    static void Main()
    {
        Alarm feuerAlarm = new Alarm();
        feuerAlarm.AlarmAusgeloest += (sender, nachricht) => Console.WriteLine($"⚠ {nachricht}");

        feuerAlarm.Ausloesen();
    }
}
```

✔ `EventHandler<T>` macht Events **einheitlich und sicherer**.

## ✅ Fazit
✔ **Delegates** ermöglichen flexible Methodenaufrufe.  
✔ **Events** erlauben ein sicheres Beobachter-Muster.  
✔ **Lambda-Ausdrücke** vereinfachen die Nutzung von Delegates.  
✔ **EventHandler<T>** ist der bevorzugte Weg für Events in modernen C#-Anwendungen.

Diese Mechanismen machen C# **mächtig und erweiterbar**! 🚀