# Structura proiectului

In folderul models/ se gasesc modelele pentru interactiunea cu baza de date MongoDB. Fiecare fisier din acest folder
reprezinta un obiect pe care il vom folosi in website-ul nostru. Specific, avem create doar obiectele User si Recipe.

In fisierul index.js definim conexiunea cu un MongoDB instalat local, iar apoi cream o aplicatie ExpressJS care va 
defini diferite endpointuri:
    - /api/recipes, un request HTTP POST pe acest endpoint va crea o noua reteta.
    - /api/recipes, un request HTTP GET pe acest endpoint va lua toate retetele din baza de date.
    - /api/auth/register, un request HTTP POST pe acest endpoint va crea un nou utilizator folosind datele specificate in body-ul requestului.
    - /api/auth/login, un request HTTP POST pe acest endpoint va da login utilizatorului cu emailul si parola specificate in body-ul requestului.
    

Apoi pornim serverul ExpressJS pe portul 3000.

# Instructiuni de rulare

in fisierul backend, dupa instalarea proiectului, se porneste serverul prin comanda:
`npm start`

pentru a reusi comanda, va trebui sa aveti MongoDB Community instalat si ruland local.

Dupa aceea se foloseste Postman pentru a trimite requesturile dorite la endpointurile respective.

# Ce am invatat

Am invatat despre requesturi HTTP, endpointuri, baza de date MongoDB si cum se interactioneaza cu ea din JavaScript, prin intermediul
librariei mongoose. 
