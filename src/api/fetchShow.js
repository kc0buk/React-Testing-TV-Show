import axios from 'axios'

export const fetchShow = () => {
  return  axios
      .get(
        "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
      )
      .then(res => {
        console.log(res)
        return res
      })
      .catch(err => {
          console.log(`There was an error fetching data from the API`, err.message)
          return err
      })
  }
