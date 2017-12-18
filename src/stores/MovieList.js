import { observable, action } from 'mobx'
import axios from 'axios'

export default class MovieList {
    @observable movielist
    @observable loading = false
    @observable type = 'download_count'

    @action
    callApi = () => {
        axios.get(`http://yts.ag/api/v2/list_movies.json?sort_by=${this.type}`)
            .then(response => response.json())
            .then(json => this.movielist = json)
            .catch(error => console.error(error))
    }
}