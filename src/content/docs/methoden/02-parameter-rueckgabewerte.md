---
title: Parameter und Rückgabewerte
description: Einführung in die Verwendung von Parametern und Rückgabewerten in C#-Methoden.
---

In C# können Methoden Eingabewerte (Parameter) annehmen und Werte (Rückgabewerte) zurückgeben. Diese Mechanismen machen Methoden flexibel und wiederverwendbar.

---

## 📝 **1. Parameter in Methoden**

Parameter sind Eingabewerte, die an eine Methode übergeben werden, damit sie in der Methode verwendet werden können.

**Syntax:**

```csharp
Datentyp MethodeName(Datentyp parameter1, Datentyp parameter2)
{
    // Code, der mit den Parametern arbeitet
}
```

**Beispiel:**

```csharp
void BegruessePerson(string name, int alter)
{
    Console.WriteLine($"Hallo {name}, du bist {alter} Jahre alt.");
}

BegruessePerson("Lukas", 25);  // Ausgabe: Hallo Lukas, du bist 25 Jahre alt.
```

In diesem Beispiel nimmt die Methode `BegruessePerson` zwei Parameter (`name` und `alter`), die in der Methode verwendet werden.

## 🛠️ 2. Rückgabewerte in Methoden
Ein Rückgabewert ist der Wert, den eine Methode an den Aufrufer zurückgibt. Der Rückgabetyp wird vor dem Methodennamen angegeben.

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

int ergebnis = Addiere(5, 3);  // Ergebnis ist 8
Console.WriteLine(ergebnis);   // Ausgabe: 8
```

Die Methode `Addiere` nimmt zwei `int`-Parameter und gibt die Summe als Rückgabewert zurück.

## 🔄 3. Methoden mit `void` Rückgabetyp
Wenn eine Methode keinen Wert zurückgibt, wird der Rückgabetyp `void` verwendet. In diesem Fall erfolgt keine Rückgabe mit `return`.

**Beispiel:**

```csharp
void SchreibeText(string text)
{
    Console.WriteLine(text);
}

SchreibeText("Hallo, Welt!");  // Ausgabe: Hallo, Welt!
```

Hier gibt die Methode `SchreibeText` keinen Wert zurück, sondern gibt nur den übergebenen Text aus.

## 🔢 4. Rückgabewerte mit unterschiedlichen Datentypen
C#-Methoden können Werte eines beliebigen Datentyps zurückgeben. Du kannst Zahlen, Strings, Objekte und andere Datentypen als Rückgabewerte verwenden.

**Beispiel (Rückgabe eines `string`):**

```csharp
string BegruessePerson(string name)
{
    return $"Hallo {name}!";
}

string begruessung = BegruessePerson("Lukas");  // Begrüßung: "Hallo Lukas!"
Console.WriteLine(begruessung);  // Ausgabe: Hallo Lukas!
```

## ⚡ 5. Mehrere Parameter in einer Methode
Eine Methode kann mehrere Parameter entgegennehmen, die es ihr ermöglichen, flexibler zu arbeiten.

**Beispiel:**

```csharp
double BerechneDurchschnitt(double note1, double note2, double note3)
{
    return (note1 + note2 + note3) / 3;
}

double durchschnitt = BerechneDurchschnitt(2.5, 1.8, 3.0);  // Durchschnitt ist 2.43
Console.WriteLine(durchschnitt);  // Ausgabe: 2.43
```

In diesem Beispiel nimmt die Methode `BerechneDurchschnitt` drei Parameter (`note1`, `note2`, `note3`) und berechnet den Durchschnitt.

## 🔄 6. Parameter mit `ref` und `out`
C# ermöglicht es, Parameter auf zwei spezielle Arten zu übergeben: mit `ref` und `out`. Diese Methoden erlauben es, den Wert von Variablen innerhalb der Methode zu verändern und an den Aufrufer zurückzugeben.

`ref`-Parameter
Ein `ref`-Parameter wird sowohl für die Eingabe als auch für die Ausgabe verwendet. Der Parameter muss vor dem Aufruf der Methode initialisiert werden.

**Beispiel mit `ref`:**

```csharp
void Verdoppeln(ref int zahl)
{
    zahl = zahl * 2;
}

int nummer = 5;
Verdoppeln(ref nummer);  // Nummer wird verdoppelt
Console.WriteLine(nummer);  // Ausgabe: 10
```

`out`-Parameter
Ein `out`-Parameter wird nur zur Ausgabe verwendet. Der Wert des Parameters muss nicht vor dem Aufruf der Methode initialisiert werden, aber er muss innerhalb der Methode zugewiesen werden.

Beispiel mit `out`:

```csharp
void BerechneQuotient(int a, int b, out int quotient)
{
    quotient = a / b;
}

int result;
BerechneQuotient(10, 2, out result);  // Result wird auf 5 gesetzt
Console.WriteLine(result);  // Ausgabe: 5
```

## 🔄 7. Methoden mit variablen Parametern
Wenn du nicht weißt, wie viele Parameter eine Methode erhalten wird, kannst du einen variablen Parameter verwenden. Dies wird durch das Schlüsselwort `params` erreicht.

**Beispiel mit `params`:**

```csharp
void SummiereAlle(params int[] zahlen)
{
    int summe = 0;
    foreach (int zahl in zahlen)
    {
        summe += zahl;
    }
    Console.WriteLine($"Die Summe ist: {summe}");
}

SummiereAlle(1, 2, 3, 4, 5);  // Ausgabe: Die Summe ist: 15
```

In diesem Beispiel kann die Methode `SummiereAlle` beliebig viele `int`-Werte als Parameter entgegennehmen.

## ✅ Fazit
- **Paramete**: Ermöglichen es, Eingabewerte an Methoden zu übergeben.
- **Rückgabewerte**: Erlauben es, das Ergebnis einer Methode an den Aufrufer zurückzugeben.
- `ref` und `out`: Ermöglichen eine erweiterte Verwendung von Parametern, bei denen der Wert innerhalb der Methode verändert werden kann.
- `params`: Ermöglicht das Übergeben einer variablen Anzahl von Parametern an eine Methode.

Mit diesen Konzepten kannst du dynamische und flexible Methoden in C# erstellen! 🚀