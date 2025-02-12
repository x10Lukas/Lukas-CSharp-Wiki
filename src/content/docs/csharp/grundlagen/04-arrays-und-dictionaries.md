---
title: Arrays, Listen und Dictionaries
description: Einführung in Arrays, Listen und Dictionaries in C#.
---

In C# gibt es verschiedene Möglichkeiten, mehrere Werte zu speichern. Neben einfachen Variablen können wir **Arrays**, **Listen** und **Dictionaries** verwenden, um Daten strukturiert abzulegen.

---

## 🔢 1. Arrays
Ein **Array** speichert mehrere Werte desselben Typs. Die Größe eines Arrays wird bei der Deklaration festgelegt und kann nicht dynamisch geändert werden.

**Beispiel für ein Array**
```csharp
int[] zahlen = {1, 2, 3, 4, 5};
Console.WriteLine(zahlen[0]); // Ausgabe: 1
```

**Eigenschaften von Arrays:**
- Feste Größe
- Indizierter Zugriff über `[]`
- Enthält nur Elemente desselben Typs

---

## 📋 2. Listen
Eine **Liste** (`List<T>`) ist eine dynamische Sammlung von Werten. Sie kann während der Laufzeit wachsen und schrumpfen.

**Beispiel für eine Liste**
```csharp
using System.Collections.Generic;

List<string> namen = new List<string> {"Anna", "Ben", "Chris"};
namen.Add("David");
Console.WriteLine(namen[2]); // Ausgabe: Chris
```

**Eigenschaften von Listen:**
- Dynamische Größe
- Enthält nur Elemente desselben Typs
- Methoden wie `Add()`, `Remove()` und `Contains()` erleichtern die Arbeit

---

## 🔑 3. Dictionaries
Ein **Dictionary** speichert Werte als Schlüssel-Wert-Paare. Dies ermöglicht einen schnellen Zugriff über den Schlüssel.

**Beispiel für ein Dictionary**
```csharp
using System.Collections.Generic;

Dictionary<string, int> alter = new Dictionary<string, int>
{
    {"Anna", 25},
    {"Ben", 30}
};
Console.WriteLine(alter["Anna"]); // Ausgabe: 25
```

**Eigenschaften von Dictionaries:**
- Speicherung in Schlüssel-Wert-Paaren
- Schneller Zugriff auf Werte über den Schlüssel
- Methoden wie `Add()`, `Remove()` und `ContainsKey()`

---

## ✅ Fazit
- **Arrays** haben eine feste Größe und sind effizient für gleichartige Daten.
- **Listen** sind dynamisch und ermöglichen flexible Datenverwaltung.
- **Dictionaries** speichern Werte anhand eines eindeutigen Schlüssels.

Je nach Anwendungsfall kannst du die passende Struktur wählen! 🚀

