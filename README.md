# DT210G – Laboration 1

Detta projekt är en enkel webbplats byggd med **React** och **TypeScript**.  
Webbplatsen representerar ett fritidsintresse (konserter) och är uppdelad i flera återanvändbara komponenter.

## Beskrivning av lösningen
Applikationen består av ett sidhuvud, ett huvudinnehåll och en sidfot.

- **Header**
  - Visar sidans titel och en bannerbild
  - Titeln skickas som en prop från `App.tsx`
  - Använder inline-CSS för komponentspecifik styling

- **Huvudinnehåll**
  - Består av en lista med konserter
  - Listan skapas dynamiskt med `map()` från en array av objekt
  - Varje objekt innehåller en textsträng, ett heltal och en boolean
  - Conditional operator används för att visa om en konsert är sedd eller inte
  - Layouten är responsiv och anpassar sig efter skärmstorlek

- **Footer**
  - Visar information om kurs, student och år
  - Använder inline-CSS

## Tekniker som används
- React
- TypeScript
- JSX
- CSS (inline och komponentspecifik CSS)
- Vite

## Starta projektet lokalt
1. Klona repositoryt
2. Installera beroenden:
   ```bash
   npm install
## Starta utvecklingsservern:
3. npm run dev

Applikationen körs därefter på http://localhost:5173.

## Publicering
Projektet är publicerat och tillgängligt för testkörning via: https://dt210g-laboration1.netlify.app/
