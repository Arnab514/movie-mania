import { getMoviesData } from "./data.js";
const movieReviewData = getMoviesData()

function init(){
    paintStats()
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

init()

