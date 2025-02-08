---
title: Methoden erstellen und aufrufen
description: Einführung in das Erstellen und Aufrufen von Methoden in C#.
---

Methoden in C# sind wiederverwendbare Codeblöcke, die eine bestimmte Aufgabe ausführen. Sie helfen dabei, Code zu organisieren, zu strukturieren und wiederzuverwenden.

---

## 📝 1. Eine einfache Methode erstellen

In C# wird eine Methode mit einer bestimmten **Signatur** deklariert, die den Rückgabewert, den Methodennamen und die Parameter (falls vorhanden) umfasst.

**Syntax:**

```csharp
Rückgabewert MethodeName(Parameter)
{
    // Code, der ausgeführt wird
}
```

- `Rückgabewert`: Der Datentyp, den die Methode zurückgibt (z.B. `void`, `int`, `string`).
- `MethodeName`: Der Name der Methode.
- `Parameter`: Optional, die Eingabewerte, die an die Methode übergeben werden.

**Beispiel:**

```csharp
void Begruesse()
{
    Console.WriteLine("Hallo, willkommen bei C#!");
}

Begruesse(); // Methode aufrufen
```

Die Methode Begruesse gibt einfach eine Begrüßung aus.

## 🔢 2. Methoden mit Rückgabewerten
Manchmal müssen Methoden einen Wert zurückgeben. Der Rückgabewert wird durch den Rückgabetyp der Methode definiert.

**Syntax:**

```csharp
Datentyp MethodeName(Parameter)
{
    return Rückgabewert;
}
```

**Beispiel:**

```csharp
int Addiere(int a, int b)
{
    return a + b;
}

int ergebnis = Addiere(5, 3); // Ergebnis wird 8 sein
Console.WriteLine(ergebnis); // Ausgabe: 8
```

## ⚙️ 3. Methoden mit Parametern
Methoden können **Parameter** annehmen, die es ermöglichen, die Methode dynamisch mit verschiedenen Werten auszuführen.

**Syntax:**

```csharp
Datentyp MethodeName(Datentyp parameter1, Datentyp parameter2)
{
    // Methode verwendet Parameter
}
```

**Beispiel:**

```csharp
void BegruessePerson(string name)
{
    Console.WriteLine($"Hallo, {name}!");
}

BegruessePerson("Lukas"); // Ausgabe: Hallo, Lukas!
```

Die Methode `BegruessePerson` nimmt einen `string`-Parameter und gibt eine personalisierte Begrüßung aus.

## 🔄 4. Überladen von Methoden
Du kannst mehrere Methoden mit dem gleichen Namen, aber unterschiedlichen Parametern erstellen. Dies nennt man **Methodenüberladung**.

**Beispiel:**

```csharp
int Addiere(int a, int b)
{
    return a + b;
}

double Addiere(double a, double b)
{
    return a + b;
}

Console.WriteLine(Addiere(5, 3));       // Ausgabe: 8
Console.WriteLine(Addiere(2.5, 3.5));   // Ausgabe: 6
```

Hier gibt es zwei Methoden `Addiere`, eine für `int` und eine für `double`.

## 🌀 5. Rekursive Methoden
Eine **rekursive Methode** ruft sich selbst auf, um eine Aufgabe schrittweise zu lösen. Dies wird oft verwendet, um Probleme wie die Berechnung von Fakultäten oder die Traversierung von Datenstrukturen zu lösen.

**Beispiel (Fakultät):**

```csharp
int Fakultaet(int n)
{
    if (n == 1) // Basisfall
        return 1;
    else
        return n * Fakultaet(n - 1); // Rekursiver Aufruf
}

Console.WriteLine(Fakultaet(5)); // Ausgabe: 120
```

Die Methode `Fakultaet` berechnet das Produkt aller positiven Ganzzahlen bis zu `n`.

## ⚡ 6. Parameter mit Standardwerten
Du kannst Methoden so definieren, dass sie einen Standardwert für einen Parameter haben. Wenn der Parameter beim Aufruf nicht übergeben wird, wird der Standardwert verwendet.

**Beispiel:**

```csharp
void BegruessePerson(string name = "Gast")
{
    Console.WriteLine($"Hallo, {name}!");
}

BegruessePerson("Lukas"); // Ausgabe: Hallo, Lukas!
BegruessePerson();        // Ausgabe: Hallo, Gast!
```

In diesem Beispiel hat der Parameter `name` einen Standardwert von "Gast", der verwendet wird, wenn kein Wert übergeben wird.

## 🚀 7. Methoden in einer Klasse
In C# gehören Methoden oft zu einer **Klasse**. Eine Methode wird innerhalb einer Klasse deklariert und durch eine Instanz der Klasse oder die Klasse selbst aufgerufen.

**Beispiel:**

```csharp
class Rechner
{
    public int Addiere(int a, int b)
    {
        return a + b;
    }
}

Rechner rechner = new Rechner();
int ergebnis = rechner.Addiere(5, 3); // Ergebnis wird 8 sein
Console.WriteLine(ergebnis); // Ausgabe: 8
```

Die Methode `Addiere` gehört zur Klasse `Rechner` und wird durch ein Objekt der Klasse aufgerufen.

## ✅ Fazit

- **Methoden** helfen, Code wiederzuverwenden und zu strukturieren.
- **Rückgabewerte** und **Parameter** machen Methoden dynamisch.
- **Methodenüberladung** ermöglicht mehrere Methoden mit dem gleichen Namen.
- **Rekursive Methoden** können Probleme schrittweise lösen.
- **Standardwerte für Parameter** bieten Flexibilität bei der Nutzung von Methoden.

Mit diesen Grundlagen kannst du effektiv Methoden erstellen und in deinem C#-Code einsetzen! 🚀