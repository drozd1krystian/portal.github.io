
# Humorystyczny portal społecznościowy

## Opis:
  Portal społęcznościowy skupiający użytkowników zajmujących się tworzeniem własnych "memów" bądź osób które poszukują chwili odstresowania, rozluźnienia i zabicia czasu, a przy tym pośmiania się lub porozmawiania na różne tematy w komentarzach. Portal oferuje możliwość dodawania obrazków, oceniania prac innych osób, komentowania oraz udostępniania prac na innych portalach społecznościowych np. Facebook'u.
  Każdy zarejestrowany i zalogowany użytkownik posiada własny profil oraz możliwość dodawania obrazków. Dodatkowo na portalu będzie moderator czuwający nad odpowiednim poziomem treści umieszczanych na potralu.
  
## Funkcjonalności:
- Logowanie
- Rejestracja
- Dodawanie obrazków
- Dodawanie komentarzy
- Ocena obrazka
- Mój profil
- Tagi
- Udostępnij na facebook'u


## Technologia:
- Angular + js + firebase

Framework pozwala na szybkie i efektowne postawienie front i back-endu. Do celu jakim jest stworzenie naszej strony Angular będzie odpowienim narzędziem. Do operacji typu CRUD wykorzystamy framework Firebase oraz TypeScript do obsługi.

- Firebase Realtime Database – baza danych NoSQL w postaci JSON. Wszystkie tworzone obiekty w bazie są synchronizowane natychmiast dzięki Service Workers na wszystkich platformach (Web, Android, iOS). Dzięki Firebase nie trzeba tworzyć swoich customowych Service Workerów – to jest wbudowane. Dodawanie i edycja danych jest natychmiastowa, bez zbędnych requestów i oczekiwania na odpowiedzi serwera. Każdy zapis (add, update, delete) wywołuje automatycznie pobranie zaktualizowanych danych z  bazy aplikacji, dzięki czemu nie trzeba już martwić się o to, by pobrać ponownie te dane lub je odświeżyć. Takie działanie można zaobserwować np. w Google Docs, gdzie kilka osób edytuje ten sam dokument tekstowy, a zmiany są natychmiast synchronizowane i wyświetlane wszystkim użytkownikom, którzy wyświetlają aktualnie ten plik u siebie.

## Zasady bezpieczeństwa i prywatności
Za bezpieczeństwo danych użytkowników będzie odpowiadał framework Firebase. Każdy kto chce będzie posiadał własne konto użytkownika, które umożliwia działanie w serwisie, czyli np. komentowanie, ocenianie itp. Osoby niezalogowane mogą tylko oglądać treści.

- Firebase Authentication – funkcjonalność obsługująca autoryzację użytkowników i zarządzanie nimi. Jest to zaawansowane narzędzie do kontrolowania zalogowanych użytkowników. Udostępniony jest wgląd do tego kiedy dany użytkownik się zalogował, zarejestrował i jaką metodą. Istnieje możliwość określenia formatu e-maila, który zostanie automatycznie wysłany po zarejestrowaniu się nowego użytkownika, a także zdefiniowanie czy użytkownicy powinni potwierdzić rejestrację przez taki e-mail. Kolejną rzeczą są metody logowania. Przez intuicyjny panel jest możliwość włączenia odpowiednich metod logowania się użytkowników. Jest ich dość sporo: klasyczny email i hasło, Facebook, Google, Twitter, GitHub, z potwierdzeniem telefonicznym, a także jako anonim. Taki admin panel pozwala również na blokowanie i usuwanie użytkowników, dzięki czemu nie ma potrzeby do  aplikacji dopisywać tej funkcjonalności.

## Skalowalność strony
Strona jest nieskomplikowana i pozwala na kilka operacji, więc duża ilość użytkowników nie powinna zagrozić działaniu strony. Wiele będzie zależeć od serwera na jakim strona zostanie postawiona. Dzięki użyciu narzędzi od Firebase zostanie zapewniona stabilna baza danych oraz zabezpieczenia, a dzięki temu że są to nowoczesne narzędzia, to posiadają pełne wsparcie techniczne, które w razie potrzeby może wesprzeć aplikację. Kod programu zostanie napisany w przejrzysty i czytelny sposób, który w razie potrzeby umożliwi szybką jego rozbudowę aby odpowiedzieć na zapotrzebowanie rozrastającego się grona uzytkowników.


## Aktywność i oś czasu
Na stronie będzie możliwość wyświetlania treści od najnowszej do najstarszej. Wszystkie informacje przechowywane będą w bazie danych i dzięki odpowiednim narzędziom będzie możliwość dostarczenia użytkownikom wszystkich treści w odpowiedni sposób.


## Reklama
Treści będą udostępnione na innych portalach jak Facebook, Instagram, Twitter
Jeśli strona zdobędzie użytkowników, to sama będzie się promować poprzez przesyłanie treści portalu między osobami nawet spoza portalu. Mem udostępniony na innej stronie będzie widziany przez jego znajomych, którzy również mogą zdecydować się na odwiedzenie naszego portalu.


### Diagram przypadków użycia
![Diagram przypadków użycia](https://github.com/drozd1krystian/drozd1krystian.github.io/blob/master/diagram_przypadkow_uzycia.png)

### Diagram ERD
![Diagram ERD](https://github.com/drozd1krystian/drozd1krystian.github.io/blob/master/ERD_portal.jpg)


## Portal:
- Administrator

Na portalu administrator ma rozszerzone możliwości oprócz standardowych funkcjonalności użytkownika, a mianowicie banowanie użytkowników, kasowanie niewłaściwych memów, kasowanie komentarzy.

![Profil admina](https://github.com/drozd1krystian/portal.github.io/blob/master/profil_admina.png)
![Admin_logowanie](https://github.com/drozd1krystian/portal.github.io/blob/master/admin_logowanie.png)
![Uzytkownicy_ban](https://github.com/drozd1krystian/portal.github.io/blob/master/uzytkownicy_ban.png)

- Użytkownik

Ma możliwość komentowania postów, oceniania obrazków, dodawania nowych postów do wybranej kategorii. Każdy mem posiada swoje komentarze oraz możliwość udostępnienia obrazka na innym portalu jak Facebook czy Twitter.
Konto można stworzyć bezpośrednio na portalu wpisując niezbędne dane lub też używając konta Google/Facebooka.

![Profil_uzytkownika](https://github.com/drozd1krystian/portal.github.io/blob/master/profil_uzytkownika.png)
![Aktualnosci](https://github.com/drozd1krystian/portal.github.io/blob/master/aktualnosci.png)
![Upload](https://github.com/drozd1krystian/portal.github.io/blob/master/upload.PNG)
![Komentarze](https://github.com/drozd1krystian/portal.github.io/blob/master/komentarze.png)

- Gość

Jako osoba spoza grona użytkowników portalu może przeglądać treści portalu oraz w każdej chwili zarejestrować się na nim, aby poszerzyć swoje możliwości użytkowe.

![Rejestracja](https://github.com/drozd1krystian/portal.github.io/blob/master/rejestracja.PNG)

## Tutoriale, źródła:

Szybki tutorial angulara:
  - https://angular-templates.io/tutorials/about/learn-angular-from-scratch-step-by-step

Logowanie:

  - Logowanie Google Auth: https://fireship.io/lessons/angularfire-google-oauth/ (bad tut)
  
Crud:
  - https://www.positronx.io/angular-7-firebase-5-crud-operations-with-reactive-forms/

Crud, Angular Material, Firebase user add/edit/delete, Firebase selecty:
  - https://angular-templates.io/tutorials/about/angular-crud-with-firebase


Obsługa memów:
  - Dropbox + upload wielu memów jednocześnie: https://fireship.io/lessons/angular-firebase-storage-uploads-multi/
  - dropbox - jeden mem + wybieranie ręczne pliku https://angularfirebase.com/lessons/firebase-storage-with-angularfire-dropzone-file-uploader/
  
Reszta:
Zwrócenie użytkownika z Firestore jako Promise: https://fireship.io/snippets/get-angularfire-userid-as-promise/

Firebase (Firestore) database model, architektura, dobre praktyki:

  - https://proandroiddev.com/working-with-firestore-building-a-simple-database-model-79a5ce2692cb

  - https://highlyscalable.wordpress.com/2012/03/01/nosql-data-modeling-techniques/

Responsywny layout:

  - https://medium.com/@tomastrajan/how-to-build-responsive-layouts-with-bootstrap-4-and-angular-6-cfbb108d797b

Wyswietlenie komponentu po kliknieciu buttona (przydatne do dropboxa)
https://stackoverflow.com/questions/44264354/display-a-component-after-a-clickevent-angular-4

Komentarze i lajki:
https://stackoverflow.com/questions/48820787/getting-list-of-all-posts-with-user-like-and-total-likes-for-each-post-in-firest?rq=1&fbclid=IwAR2EqpaqTtv_RpJnLh0GdlRyaeaggNt8Md_n7mvvQwkXYhjgw29lf1jd4bI#comment84674391_48828762
