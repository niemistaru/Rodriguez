
const MovieArray = (props) => {
  const { data } = props;
  let posterImg;

 //Tarkistetaan, löytyykö leffajulistetta
    const CheckPoster = (props) => {
      let poster = props.src;
      if (poster === "" || poster === null) {
        posterImg = "https://images.freeimages.com/clg/images/45/452257/tape-file-reel-clip-art_f.jpg";
      } else {
        posterImg = poster;
      }
      return (
        <img
          src={posterImg}
          alt="Poster"
          className="img-thumbnail"
          onError={addDefaultSrc}
          width="50%"
          />
      );
    };
    //Poster error
    const addDefaultSrc = (ev) => {
      console.log(ev.target);
      ev.target.src = "https://images.freeimages.com/clg/images/45/452257/tape-file-reel-clip-art_f.jpg";
      ev.onError = null;
    };

    return (
      <div>
        <table className="table table-danger table-striped-columns" id="results">
          <thead>
              <tr key={props.id}>
                <th scope="col">Poster</th>
                <th scope="col">Title</th>
                <th scope="col">Year</th>
                <th scope="col">Writers</th>
                <th scope="col">Plot</th>
              </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr>
                <td key={i} id="pic">
                  <CheckPoster src={item.poster} />
                </td>
                <td id="title"> {item.title}</td>
                <td> {item.year}</td>
                <td> {item.writers}</td>
                <td> {item.plot}</td>
            
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    
};

export default MovieArray;