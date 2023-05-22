//Tämä oli alkuperäistä testailua varten

const film = {
    title: 'Planet Terror',
    year: 2007,
    poster: "https://m.media-amazon.com/images/M/MV5BODdmNmM2ZTgtODM1MS00ZGMxLTk3MTMtMGQ1ODZhMTQ1NWEwL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_SX677_AL_.jpg"
};

//Luodaan komponentti
const Film = () => {
    return (
        <div>
            <table>
                <tr>
                    <td>
                    {film.title}
                    </td>
                    <td>{film.year}</td>
                    <td> <img src= {film.poster} alt="Pic missing" />
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default Film;
