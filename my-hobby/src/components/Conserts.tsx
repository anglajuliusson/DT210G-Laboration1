// Typdefinition för ett konsert-objekt
// Varje konsert innehåller en textsträng, ett heltal och en boolean
type Consert = {
    artist: string
    year: number
    seen: boolean
}

function Conserts() {
    // Array med konsert-objekt som representerar mitt fritidsintresse
    const consertsArr: Consert[] = [
        { artist: "Håkan Hellström", year: 2015, seen: true },
        { artist: "Zara Larsson", year: 2025, seen: false },
        { artist: "Ken Ring", year: 2021, seen: true },
        { artist: "Kent", year: 2025, seen: true },
        { artist: "Thomas Stenström", year: 2026, seen: false },
        { artist: "Albin Lee Meldau", year: 2026, seen: false }
    ]

    return (
        <ul>
            {
                // map används för att dynamiskt skapa en lista baserad på arrayen ovan
                consertsArr.map((consert, index) => (
                    <li key={index}>
                        Artist eller grupp: {consert.artist} <br /> 
                        År: {consert.year} <br/>
                        {/* if/else för att visa olika text beroende på boolean */}
                        Sett: {consert.seen ? "Ja" : "Nej"}
                    </li>
                ))
            }
        </ul>
    )
    }

export default Conserts;