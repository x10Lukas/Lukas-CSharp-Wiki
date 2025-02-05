---
title: Operatoren und Ausdrücke
description: Eine Einführung in die Verwendung von Operatoren und Ausdrücken in C#.
---

In C# werden **Operatoren** verwendet, um **Ausdrücke** zu erstellen, die verschiedene Berechnungen oder logische Operationen durchführen. Operatoren arbeiten auf **Variablen** oder **Werten**.

---

## ➗ **1. Arithmetische Operatoren**
Arithmetische Operatoren werden für mathematische Berechnungen verwendet:

| Operator | Beschreibung   | Beispiel     |
|----------|----------------|--------------|
| `+`      | Addition       | `a + b`      |
| `-`      | Subtraktion    | `a - b`      |
| `*`      | Multiplikation | `a * b`      |
| `/`      | Division       | `a / b`      |
| `%`      | Modulo (Rest)  | `a % b`      |

**Beispiel:**

```csharp
int a = 10;
int b = 3;
Console.WriteLine(a + b); // Ausgabe: 13
Console.WriteLine(a - b); // Ausgabe: 7
Console.WriteLine(a * b); // Ausgabe: 30
Console.WriteLine(a / b); // Ausgabe: 3
Console.WriteLine(a % b); // Ausgabe: 1 (Rest)
```

## 🔢 2. Vergleichsoperatoren
Vergleichsoperatoren vergleichen zwei Werte und liefern einen `bool`-Wert (`true` oder `false`):

| Operator | Beschreibung         | Beispiel      |
|----------|----------------------|---------------|
| `==`     | Gleichheit           | `a == b`      |
| `!=`     | Ungleichheit         | `a != b`      |
| `>`      | Größer als           | `a > b`       |
| `<`      | Kleiner als          | `a < b`       |
| `>=`     | Größer oder gleich   | `a >= b`      |
| `<=`     | Kleiner oder gleich  | `a <= b`      |

**Beispiel:**

```csharp
int a = 10;
int b = 3;
Console.WriteLine(a == b); // Ausgabe: false
Console.WriteLine(a != b); // Ausgabe: true
Console.WriteLine(a > b);  // Ausgabe: true
Console.WriteLine(a < b);  // Ausgabe: false
Console.WriteLine(a >= b); // Ausgabe: true
Console.WriteLine(a <= b); // Ausgabe: false
```

## 🧑‍⚖️ 3. Logische Operatoren
Logische Operatoren werden verwendet, um **Bedingungen zu kombinieren**:

| Operator | Beschreibung                 | Beispiel  |
|----------|------------------------------|-----------|
| `&&`     | Und (beide müssen wahr sein) | `a && b`  |
| `        |                              | `         |
| `!`      | Nicht (invertiert den Wert)  | `!a`      |

**Beispiel:**

```csharp
bool a = true;
bool b = false;
Console.WriteLine(a && b); // Ausgabe: false
Console.WriteLine(a || b); // Ausgabe: true
Console.WriteLine(!a);     // Ausgabe: false
```

## 🧮 4. Zuweisungsoperatoren

Zuweisungsoperatoren werden verwendet, um Werte zu Variablen zuzuweisen oder mit bestehenden Werten zu arbeiten:

| Operator | Beschreibung               | Beispiel             |
|----------|----------------------------|----------------------|
| `=`      | Einfache Zuweisung         | `a = 5`              |
| `+=`     | Addiere und weise zu       | `a += 3` (a = a + 3) |
| `-=`     | Subtrahiere und weise zu   | `a -= b` (a = a - 3) |
| `*=`     | Multipliziere und weise zu | `a *= b` (a = a * 3) |
| `/=`     | Teile und weise zu         | `a /= b` (a = a / 3) |
| `%=`     | Modulo und weise zu        | `a %= b` (a = a % 3) |

**Beispiel:**

```csharp
int a = 10;
a += 5; // a = a + 5, a ist jetzt 15
a *= 2; // a = a * 2, a ist jetzt 30
Console.WriteLine(a); // Ausgabe: 30
```

## 💡 5. Bedingte Operatoren (Ternärer Operator)

Der **ternäre Operator** ist eine verkürzte Form der `if`-Abfrage und hat die folgende Struktur:

```csharp
Bedingung ? WertWennWahr : WertWennFalsch;
```

**Beispiel:**

```csharp
int a = 10;
string ergebnis = (a > 5) ? "Größer als 5" : "Kleiner oder gleich 5";
Console.WriteLine(ergebnis); // Ausgabe: "Größer als 5"
```

## 🚀 6. Weitere Operatoren

- **Inkrement (`++`) und Dekrement (`--`)**: Erhöhen oder verringern eine Zahl um 1.

```sharp
int a = 5;
a++; // a wird zu 6
a--; // a wird zu 5
```

- **Null-Koaleszenzoperator (`??`)**: Gibt den ersten Wert zurück, der nicht `null` ist.

```csharp
string name = null;
string ergebnis = name ?? "Unbekannt";
Console.WriteLine(ergebnis); // Ausgabe: "Unbekannt"
```

## ✅ Fazit

- **Arithmetische Operatoren**: Grundlegende Mathematik
- **Vergleichsoperatoren**: Vergleiche zwischen Werten
- **Logische Operatoren**: Kombinieren von Bedingungen
- **Zuweisungsoperatoren**: Variablenwertänderungen
- **Bedingte (ternäre) Operatoren**: Kurzform von if-Abfragen

Mit diesen Operatoren kannst du in C# eine Vielzahl von Berechnungen und logischen Operationen durchführen! 🚀