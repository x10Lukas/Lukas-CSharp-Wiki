---
title: Überladung und Rekursion
description: Einführung in Methodenüberladung und Rekursion in C#.
---

In C# gibt es zwei wichtige Konzepte, die dir helfen, flexibel mit Methoden zu arbeiten:

1. **Methodenüberladung (Overloading)** – Eine Methode kann mit demselben Namen, aber unterschiedlichen Parametern definiert werden.
2. **Rekursion** – Eine Methode kann sich selbst aufrufen, um Probleme schrittweise zu lösen.

---

## ⚡ 1. Methodenüberladung (Method Overloading)

Die **Methodenüberladung** erlaubt es, mehrere Methoden mit demselben Namen zu definieren, solange sie sich in der Anzahl oder im Typ der Parameter unterscheiden.

**Beispiel: Überladene Methode zur Addition**

```csharp
class Rechner
{
    // Addition von zwei ganzen Zahlen
    public int Addiere(int a, int b)
    {
        return a + b;
    }

    // Addition von drei ganzen Zahlen
    public int Addiere(int a, int b, int c)
    {
        return a + b + c;
    }

    // Addition von zwei Kommazahlen
    public double Addiere(double a, double b)
    {
        return a + b;
    }
}

class Programm
{
    static void Main()
    {
        Rechner rechner = new Rechner();
        
        Console.WriteLine(rechner.Addiere(5, 3));      // Ausgabe: 8
        Console.WriteLine(rechner.Addiere(5, 3, 2));   // Ausgabe: 10
        Console.WriteLine(rechner.Addiere(2.5, 3.5));  // Ausgabe: 6.0
    }
}
```

**Wichtige Regeln für Methodenüberladung:**   
✔ Die Methode muss sich durch Anzahl oder Typen der Parameter unterscheiden.   
❌ Die Rückgabetypen alleine reichen nicht aus, um eine Methode zu überladen.

## 🔄 2. Rekursive Methoden
Eine **rekursive Methode** ruft sich selbst auf, um eine Aufgabe schrittweise zu lösen. Rekursion wird oft für Probleme verwendet, die sich in kleinere Teile aufteilen lassen, wie z.B. **Fakultät, Fibonacci-Folge oder Baumstrukturen**.

**Beispiel: Fakultät berechnen (n!)**
Die Fakultät einer Zahl ist definiert als:

- `n! = n * (n-1)!`
- `1! = 1` (Basisfall)

```csharp
int Fakultaet(int n)
{
    if (n == 1)  // Basisfall
        return 1;
    else
        return n * Fakultaet(n - 1);  // Rekursiver Aufruf
}

Console.WriteLine(Fakultaet(5)); // Ausgabe: 120
```

**Wie funktioniert die Rekursion?**

- `Fakultaet(5) → 5 * Fakultaet(4)`
- `Fakultaet(4) → 4 * Fakultaet(3)`
- `Fakultaet(3) → 3 * Fakultaet(2)`
- `Fakultaet(2) → 2 * Fakultaet(1)`
- `Fakultaet(1) → 1` **(Basisfall, Rekursion stoppt hier)**

## ⚠️ 4. Gefahren der Rekursion
Rekursion ist mächtig, aber sie kann problematisch sein, wenn:

- **Kein Basisfall definiert ist** → Endlosschleife, Stack Overflow!
- Zu viele rekursive Aufrufe stattfinden → Kann langsam sein.

**Lösung: Iterative Methoden statt Rekursion**
Viele Probleme, die rekursiv lösbar sind, können auch mit einer Schleife (Iteration) gelöst werden.

**Beispiel: Fibonacci ohne Rekursion**

```csharp
int FibonacciIterativ(int n)
{
    if (n == 0) return 0;
    if (n == 1) return 1;

    int a = 0, b = 1, temp;
    for (int i = 2; i <= n; i++)
    {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

Console.WriteLine(FibonacciIterativ(6)); // Ausgabe: 8
```

**Warum iterativ?**

- Spart Speicher, da keine **rekursiven Funktionsaufrufe** im Stack gespeichert werden müssen.
- **Schneller** für große `n`.

## ✅ Fazit

- **Methodenüberladung** erlaubt Methoden mit gleichem Namen, aber unterschiedlichen Parametern.
- **Rekursive Methoden** rufen sich selbst auf und werden für Probleme wie Fakultät oder Fibonacci verwendet.
- **Achtung bei Rekursion:** Ohne Basisfall führt sie zu Endlosschleifen.
- **Alternative:** Iterative Methoden sind oft effizienter.

Jetzt kannst du Methodenüberladung und Rekursion sicher in C# einsetzen! 🚀