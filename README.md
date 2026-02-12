# Runic Translator

React application that translates decimal numbers (1–9999) into a visual runic representation and allows downloading the result as an SVG.

---

## Features

- Input a natural number (1–9999) and instantly validate the input.
- Translate the number into a runic SVG representation.
- Preview the generated runes in the browser.
- Download the generated rune as an SVG file.






--- PL
### Podejście projektowe i implementacyjne

Po dokładnym zapoznaniu się z treścią zadania oraz analizie dostarczonego obrazu z runami zauważyłam, że każda liczba nie jest reprezentowana jako ciąg znaków ustawionych obok siebie, lecz jako jeden złożony znak runiczny, powstający przez nakładanie na siebie kilku run bazowych.
Oznacza to, że niezależnie od wartości liczby, końcowa runa zawsze zajmuje tę samą przestrzeń, a jej kształt jest wynikiem nałożenia poszczególnych elementów.

Analiza dostępnych run wykazała również, że wszystkie one korzystają ze wspólnego układu przestrzennego. Każdą runę można odwzorować na siatkę składającą się z 2 kolumn i 3 rzędów, a elementy graficzne tworzące runy to wyłącznie:

- linie pionowe, poziome lub ukośne,
- umieszczone na krawędziach lub przekątnych pól tej siatki.

Dzięki temu możliwe było potraktowanie run nie jako pojedynczych rysunków, lecz jako kompozycji powtarzalnych elementów geometrycznych.

---
## Biblioteka linii jako fundament systemu

Ponieważ zadanie wymagało zarówno:
- stworzenia biblioteki przekazanych run bazowych, jak i
- dynamicznego generowania nowych run na ich podstawie,

zdecydowałam się rozpocząć od zdefiniowania biblioteki pojedynczych linii, zamiast implementowania kompletnych kształtów run.

Każda linia odpowiada:
- krawędzi jednego lub kilku z pól siatki, lub
- przekątnej danego pola.

Ze względu na niewielką liczbę unikalnych linii oraz ich częste powtarzanie się pomiędzy różnymi runami, takie podejście ogranicza duplikację danych i znacząco upraszcza dalszą rozbudowę rozwiązania.

---
## Mapa run bazowych

Po zdefiniowaniu biblioteki linii stworzyłam mapę run bazowych przekazanych w zadaniu.
Każda runa została opisana jako obiekt, w którym:
- kluczem jest wartość liczbowa odpowiadająca danej runie (np. 6000, 800, 50, 9),
- wartością jest tablica identyfikatorów linii, z których dana runa się składa.

Dzięki temu każda runa jest opisana w sposób deklaratywny, bez bezpośredniego powiązania z logiką renderowania.

---
## Proces tłumaczenia i renderowania

Proces tłumaczenia liczby na jej reprezentację runiczną przebiega następująco:

1. Liczba wejściowa jest rozbijana na tysiące, setki, dziesiątki i jedności, ponieważ tylko takie wartości występują w mapie run bazowych.
2. Dla każdej z tych wartości pobierane są linie odpowiadających im run.
3. Z zebranych linii tworzony jest zbiór unikalnych elementów, aby uniknąć wielokrotnego generowania tych samych linii.
4. Unikalne linie są następnie mapowane na elementy SVG <line>.
5. Końcowy znak runiczny jest renderowany jako pojedynczy element SVG w interfejsie użytkownika.

Ze względu na to, że wiele run bazowych współdzieli te same linie, proces tłumaczenia obejmuje etap deduplikacji, który zapewnia, że każda linia geometryczna jest renderowana w SVG tylko raz.”
