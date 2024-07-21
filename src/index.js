import { getMoviesData } from "./data.js";
const movieReviewData = getMoviesData()

function init(){
    paintStats()
    movieStats()
}
    

function paintStats(){
    const flatMovieReviewData = movieReviewData.flat()
    const totalMovies = flatMovieReviewData.length
    console.log(`totalMovies: ${totalMovies}`)

    const totalReviews = flatMovieReviewData.length;
    console.log(`totalReviews: ${totalReviews}`)

    const totalRating = flatMovieReviewData.reduce((acc , curr) => {
        return acc + curr.rating
    }, 0)
    console.log(`totalRating: ${totalRating}`)

    const avgRating = (totalRating/totalReviews).toFixed(2)
    console.log(`avgRating: ${avgRating}`)

    const spanElem = document.getElementById("tMovies")
    spanElem.classList.add("text-2xl")
    spanElem.innerText = totalMovies

    const span = document.getElementById("aRating")
    span.classList.add("text-2xl")
    span.innerText = avgRating

    const spanEl = document.getElementById("tReviews")
    spanEl.classList.add("text-2xl")
    spanEl.innerText = totalReviews
}


function movieStats(){
    const flatMovieReviewData = movieReviewData.flat()

    const movieListEl = document.querySelector("#movieList UL")
    
    flatMovieReviewData.map((movie) => {
        
        const liElem = document.createElement("li")
        liElem.classList.add("bg-gray-300", "border-black", "p-4", "rounded-md", "mb-2")

        const titleElem = document.createElement("p")
        titleElem.classList.add("text-xl" , "mb-2")
        titleElem.innerText = `${movie.title} - ${movie.rating}` 
        liElem.appendChild(titleElem)

        
        const reviewElem = document.createElement("p")
        reviewElem.classList.add("text-xl" , "mb-2")
        reviewElem.innerText = movie.content 
        liElem.appendChild(reviewElem)
        
        const byElem = document.createElement("p")
        byElem.classList.add("text-xl" , "mb-2")
        const date = new Date(movie.on)
        byElem.innerText = `by ${movie.by} on ${date}`
        liElem.appendChild(byElem)
        
        
        movieListEl.appendChild(liElem)
    })
}

init()

