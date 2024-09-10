const Display=({title,poster,language,director,stars,genre,pageviews,voted})=>{
  return(
    <div className="container">
      <div className="cont-top">
     <div className="cont-left">
      <img src={poster} alt="movies" />
     </div>
     <div className="cont-right">
      <h3>{title}</h3>
      <span>Genre:{genre}</span>
      <span>Director:{director}</span>
      <span>Starring:{stars}</span>
        <span>Mins|{language}|2 Apr</span>
       <span>{pageviews} views| Voted by {voted} people</span>
     </div>
     </div>
     <button>Watch Trailer</button>
    </div>
  )
}
export default Display;