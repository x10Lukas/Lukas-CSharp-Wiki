---
title: Datenbanken mit Entity Framework
description: Einführung in die Arbeit mit Datenbanken in C# unter Verwendung von Entity Framework.
---

**Entity Framework (EF)** ist ein leistungsfähiges **Object-Relational Mapping (ORM)**-Tool für .NET, das Entwicklern hilft, mit Datenbanken zu arbeiten, ohne direkt SQL schreiben zu müssen.  
Es ermöglicht das Arbeiten mit Daten als **Objekte**, die mit einer relationalen Datenbank verbunden sind.

---

## 🔹1. Was ist Entity Framework?
Entity Framework (EF) ist ein Framework, das die Kommunikation zwischen einer Anwendung und einer Datenbank erleichtert, indem es eine Abstraktionsebene hinzufügt.  

**1.1 Vorteile von EF:**
- Automatische **Generierung von SQL** aus C#-Code
- **Datenbankinteraktionen über Objekte** (z.B. Klassen)
- Unterstützt **LINQ** (Language Integrated Query) für Abfragen

---

## 🔹 2. Entity Framework Core
**EF Core** ist die **moderne Version** von Entity Framework, die plattformübergreifend funktioniert und **leichtergewichtig** ist.  
Es unterstützt sowohl **relationalen** als auch **nicht-relationalen Datenbanken**.

**2.1 Installation von Entity Framework Core**
Um EF Core in deinem Projekt zu verwenden, musst du das NuGet-Paket installieren:

1. Öffne die **Paket-Manager-Konsole** in Visual Studio.
2. Gib folgenden Befehl ein:

```bash
Install-Package Microsoft.EntityFrameworkCore.SqlServer
```

Für eine andere Datenbank wie SQLite oder MySQL musst du den entsprechenden Provider installieren (z.B. `Microsoft.EntityFrameworkCore.Sqlite`).

## 🔹 3. Erstellen eines Datenmodells

Das Datenmodell besteht aus **C#-Klassen**, die die Tabellenstruktur deiner Datenbank abbilden.

**3.1 Beispiel: Eine einfache Klasse `Person`**

```csharp
public class Person
{
    public int Id { get; set; } // Primärschlüssel
    public string Name { get; set; }
    public int Alter { get; set; }
}
```

✔ Jede **Eigenschaft** einer Klasse entspricht einer **Spalte** in der Datenbanktabelle.

**3.2 Erstellen des DbContext**

Der **DbContext** ist der zentrale Einstiegspunkt für den Zugriff auf die Datenbank.

```csharp
public class AppDbContext : DbContext
{
    public DbSet<Person> Personen { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
    {
        options.UseSqlServer("DeineVerbindungszeichenfolge");
    }
}
```

✔ `DbSet<T>` repräsentiert eine Tabelle in der Datenbank.

## 🔹 4. Migrationen und Datenbankerstellung

Mit Migrationen kannst du Änderungen am Datenmodell verfolgen und die Datenbank entsprechend aktualisieren.

**4.1 Migrationen erstellen**

Um Migrationen zu erstellen, öffne die **Paket-Manager-Konsole** und führe folgenden Befehl aus:

```bash
Add-Migration InitialCreate
```

Dieser Befehl erstellt eine **Migration**, die die **Datenbankstruktur** basierend auf deinem Modell beschreibt.

**4.2 Datenbank aktualisieren**

Um die Migration auf die Datenbank anzuwenden:

```bash
Update-Database
```

Dieser Befehl erstellt die Datenbank (falls sie noch nicht existiert) oder aktualisiert sie basierend auf den Änderungen am Modell.

## 🔹 5. Daten hinzufügen und abfragen

Jetzt kannst du mit der Datenbank interagieren, indem du **Daten hinzufügst**, **abfragst** oder **bearbeitest**.

**5.1 Daten hinzufügen**

```csharp
using (var context = new AppDbContext())
{
    var person = new Person
    {
        Name = "Lukas",
        Alter = 25
    };
    context.Personen.Add(person);
    context.SaveChanges(); // Änderungen in der Datenbank speichern
}
```

✔ `Add()` fügt ein neues Objekt hinzu, und `SaveChanges()` speichert die Änderungen in der Datenbank.

**5.2 Daten abfragen**

```csharp
using (var context = new AppDbContext())
{
    var personen = context.Personen.ToList(); // Alle Personen abrufen
    foreach (var person in personen)
    {
        Console.WriteLine($"{person.Name}, {person.Alter}");
    }
}
```

✔ Du kannst auch **LINQ** verwenden, um komplexere Abfragen zu stellen:

```csharp
var jungePersonen = context.Personen
    .Where(p => p.Alter < 30)
    .ToList();
```

## 🔹 6. Daten bearbeiten und löschen

EF ermöglicht dir auch, Daten zu **bearbeiten** oder **zu löschen**.

**6.1 Daten bearbeiten**

```csharp
using (var context = new AppDbContext())
{
    var person = context.Personen.First(p => p.Id == 1);
    person.Alter = 26;
    context.SaveChanges();
}
```

✔ **Änderungen werden in der Datenbank gespeichert**, sobald du `SaveChanges()` aufrufst.

**6.2 Daten löschen**

```csharp
using (var context = new AppDbContext())
{
    var person = context.Personen.First(p => p.Id == 1);
    context.Personen.Remove(person);
    context.SaveChanges();
}
```

✔ `Remove()` löscht das Objekt, und `SaveChanges()` wendet die Änderung in der Datenbank an.

## 🔹 7. Abfragen optimieren
Entity Framework Core unterstützt auch die **Lazy Loading** und **Eager Loading**, um mit verwandten Daten zu arbeiten.

**7.1 Eager Loading**
Eager Loading lädt alle verwandten Daten sofort mit der Abfrage.

```csharp
var bestellungen = context.Kunden
    .Include(k => k.Bestellungen)
    .ToList();
```

✔ `Include()` sorgt dafür, dass auch die **verknüpften Bestellungen** zusammen mit den Kunden abgerufen werden.

**7.2 Lazy Loading**
Lazy Loading lädt verwandte Daten nur, wenn sie benötigt werden. Dies wird durch das Setzen von Navigationseigenschaften mit `virtual` erreicht.

```csharp
public class Kunde
{
    public int Id { get; set; }
    public string Name { get; set; }
    public virtual ICollection<Bestellung> Bestellungen { get; set; }
}
```

✔ Lazy Loading benötigt, dass die Navigationseigenschaften **virtual** sind und die Daten erst beim Zugriff abgerufen werden.

## ✅ Fazit
| Konzept                    | Beschreibung                                                         |
|----------------------------|----------------------------------------------------------------------|
| **DbContext**              | Repräsentiert eine Verbindung zur Datenbank und verwaltet Entitäten  |
| **Migrationen**            | Verwalten Änderungen am Datenmodell und aktualisieren die Datenbank  |
| **LINQ**                   | Verwende LINQ-Abfragen für flexible und effiziente Datenbankabfragen |
| **Eager und Lazy Loading** | Optimiert das Laden von Daten mit verwandten Entitäten               |

✔ **Entity Framework** vereinfacht die Arbeit mit Datenbanken, indem es **Objekte** und **Datenbanktabellen** miteinander verbindet.  
✔ Nutze **Migrationen** zur Verwaltung von Datenbankänderungen und **LINQ** für leistungsstarke Abfragen. 🚀