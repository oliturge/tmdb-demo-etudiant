document.addEventListener("DOMContentLoaded", function(){
    let connexion = new MovieDB();
    connexion.requeteDernierFilm();
});


class MovieDB {

    constructor() {
        console.log('new MovieDB()');
        this.apiKey = "c5daaf64972e9a1a0c90afaaa6320b18";
        this.lang = "fr-CA";
        this.baseUrl = "https://api.themoviedb.org/3/";
        this.imgPath = "https://image.tmdb.org/t/p/";
        this.totalFilm = 8;
    }

    requeteDernierFilm(){
        let requete = new XMLHttpRequest();
        requete.addEventListener('loadend', this.retourRequeteDerniersFilm.bind(this))
        requete.open('GET', this.baseUrl + 'movie/now_playing?api_key=' + this.apiKey + '&language=' + this.lang + '&page=1');
        requete.send();
    }

    retourRequeteDerniersFilm(evt){
        console.log('ca marche');
        let target = evt.currentTarget;
        let data = JSON.parse(target.responseText).results;
        console.log(data);

        this.afficheDernierFilm(data);
    }

    afficheDernierFilm(data){
        for (let i = 0; i < data.length ; i++){
            console.log(data[i].title);
            console.log(data[i].overview);
    }
    }

}