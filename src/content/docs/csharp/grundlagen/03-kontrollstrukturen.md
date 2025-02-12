---
title: Kontrollstrukturen
description: Einführung in Kontrollstrukturen wie if, switch und Schleifen in C#.
---

Kontrollstrukturen ermöglichen es, den Ablauf eines Programms zu steuern. Sie helfen, **Bedingungen** zu überprüfen und **Wiederholungen** durchzuführen.

## 🔲 Code-Blöcke in C#

In C# werden **Code-Blöcke** mit **geschweiften Klammern `{}`** definiert. Sie gruppieren mehrere Anweisungen und sorgen dafür, dass sie gemeinsam ausgeführt werden.

**Beispiel:**

```csharp
if (true)
{
    Console.WriteLine("Dieser Code gehört zum if-Block.");
}
```

---

## ✅ 1. Bedingte Anweisungen (if, else, else if)

Die `if`-Anweisung führt Code aus, wenn eine Bedingung wahr ist. Du kannst auch `else` und `else if` verwenden, um alternative Codeabschnitte auszuführen.

**Syntax:**

```csharp
if (Bedingung)
{
    // Code, wenn die Bedingung wahr ist
}
else if (AndereBedingung)
{
    // Code, wenn die andere Bedingung wahr ist
}
else
{
    // Code, wenn keine der Bedingungen wahr ist
}
```

**Beispiel:**

```csharp
int zahl = 10;

if (zahl > 0)
{
    Console.WriteLine("Die Zahl ist positiv.");
}
else if (zahl < 0)
{
    Console.WriteLine("Die Zahl ist negativ.");
}
else
{
    Console.WriteLine("Die Zahl ist null.");
}
```

## 🔄 2. Switch-Anweisung
Die `switch-Anweisung` wird verwendet, um den Wert einer Variablen mit mehreren möglichen Optionen zu vergleichen. Sie ist eine Alternative zur Verwendung mehrerer `if`-Anweisungen.

**Syntax:**

```csharp
switch (Variable)
{
    case Wert1:
        // Code für Wert1
        break;
    case Wert2:
        // Code für Wert2
        break;
    default:
        // Code, wenn kein Fall zutrifft
        break;
}
```

**Beispiel:**

```csharp
int tag = 3;

switch (tag)
{
    case 1:
        Console.WriteLine("Montag");
        break;
    case 2:
        Console.WriteLine("Dienstag");
        break;
    case 3:
        Console.WriteLine("Mittwoch");
        break;
    default:
        Console.WriteLine("Ungültiger Tag");
        break;
}
```

## 🔁 3. Schleifen

Schleifen ermöglichen es, einen Codeblock mehrfach auszuführen, solange eine Bedingung wahr ist. Es gibt verschiedene Arten von Schleifen in C#:

**3.1. `for`-Schleife**

Die `for`-Schleife eignet sich für eine bekannte Anzahl von Wiederholungen.

**Syntax:**

```csharp
for (Initialisierung; Bedingung; Inkrement/ Dekrement)
{
    // Code, der wiederholt ausgeführt wird
}
```

**Beispiel:**

```csharp
for (int i = 1; i <= 5; i++)
{
    Console.WriteLine(i); // Ausgabe: 1, 2, 3, 4, 5
}
```

**3.2. `while`-Schleife**

Die `while`-Schleife führt einen Codeblock so lange aus, wie die Bedingung wahr ist. Falls die Bedingung von Anfang an `false` ist, wird der Codeblock **kein einziges Mal** ausgeführt.

**Syntax:**

```csharp
while (Bedingung)
{
    // Code, der wiederholt ausgeführt wird
}
```

**Beispiel:**

```csharp
int i = 1;
while (i <= 5)
{
    Console.WriteLine(i); // Ausgabe: 1, 2, 3, 4, 5
    i++;
}
```

**3.3. `do-while`-Schleife**

Die `do-while`-Schleife führt den Code **mindestens einmal** aus, auch wenn die Bedingung zu Beginn `false` ist.

**Syntax:**

```csharp
do
{
    // Code, der ausgeführt wird
} while (Bedingung);
```

**Beispiel:**

```csharp
int i = 1;
do
{
    Console.WriteLine(i); // Ausgabe: 1, 2, 3, 4, 5
    i++;
} while (i <= 5);
```

**3.4. `foreach`-Schleife**

Die `foreach`-Schleife wird verwendet, um **Elemente einer Sammlung** (wie Arrays oder Listen) nacheinander zu durchlaufen.

**Syntax:**

```csharp
foreach (Datentyp element in Sammlung)
{
    // Code für jedes Element
}
```

**Beispiel:**

```csharp
string[] namen = {"Anna", "Ben", "Chris"};
foreach (string name in namen)
{
    Console.WriteLine(name);
}
// Ausgabe: Anna, Ben, Chris
```

## 🔄 4. Schleifen mit break und continue

- `break`: Beendet die Schleife sofort, unabhängig von der Bedingung.
- `continue`: Überspringt den Rest des aktuellen Schleifendurchgangs und fährt mit dem nächsten fort.

**Beispiel mit `break` und `continue`:**

```csharp
for (int i = 1; i <= 10; i++)
{
    if (i == 5)
        break; // Schleife wird bei i = 5 beendet
    Console.WriteLine(i); // Ausgabe: 1, 2, 3, 4
}

for (int i = 1; i <= 5; i++)
{
    if (i == 3)
        continue; // Überspringt die Ausgabe für i = 3
    Console.WriteLine(i); // Ausgabe: 1, 2, 4, 5
}
```

## ✅ Fazit
- **Code-Blöcke** werden mit `{}` definiert.
- `if`, `else` und `else if`: Verwenden wir, um Bedingungen zu überprüfen.
- `switch`: Besser geeignet, wenn es mehrere mögliche Werte für eine Variable gibt.
- **Schleifen**: Erlauben uns, Code wiederholt auszuführen. Nutze `for`, `while`, `do-while` oder `foreach` je nach Bedarf.
- `break` und `continue`: Steuern den Ablauf innerhalb von Schleifen.

Mit diesen Kontrollstrukturen kannst du den Ablauf deines Programms präzise steuern! 🎯