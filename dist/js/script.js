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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKXtcclxuICAgIGxldCBjb25uZXhpb24gPSBuZXcgTW92aWVEQigpO1xyXG4gICAgY29ubmV4aW9uLnJlcXVldGVEZXJuaWVyRmlsbSgpO1xyXG59KTtcclxuXHJcblxyXG5jbGFzcyBNb3ZpZURCIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbmV3IE1vdmllREIoKScpO1xyXG4gICAgICAgIHRoaXMuYXBpS2V5ID0gXCJjNWRhYWY2NDk3MmU5YTFhMGM5MGFmYWFhNjMyMGIxOFwiO1xyXG4gICAgICAgIHRoaXMubGFuZyA9IFwiZnItQ0FcIjtcclxuICAgICAgICB0aGlzLmJhc2VVcmwgPSBcImh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvXCI7XHJcbiAgICAgICAgdGhpcy5pbWdQYXRoID0gXCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9cIjtcclxuICAgICAgICB0aGlzLnRvdGFsRmlsbSA9IDg7XHJcbiAgICB9XHJcblxyXG4gICAgcmVxdWV0ZURlcm5pZXJGaWxtKCl7XHJcbiAgICAgICAgbGV0IHJlcXVldGUgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICByZXF1ZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlbmQnLCB0aGlzLnJldG91clJlcXVldGVEZXJuaWVyc0ZpbG0uYmluZCh0aGlzKSlcclxuICAgICAgICByZXF1ZXRlLm9wZW4oJ0dFVCcsIHRoaXMuYmFzZVVybCArICdtb3ZpZS9ub3dfcGxheWluZz9hcGlfa2V5PScgKyB0aGlzLmFwaUtleSArICcmbGFuZ3VhZ2U9JyArIHRoaXMubGFuZyArICcmcGFnZT0xJyk7XHJcbiAgICAgICAgcmVxdWV0ZS5zZW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0b3VyUmVxdWV0ZURlcm5pZXJzRmlsbShldnQpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjYSBtYXJjaGUnKTtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gZXZ0LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHRhcmdldC5yZXNwb25zZVRleHQpLnJlc3VsdHM7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWZmaWNoZURlcm5pZXJGaWxtKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGFmZmljaGVEZXJuaWVyRmlsbShkYXRhKXtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoIDsgaSsrKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YVtpXS50aXRsZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFbaV0ub3ZlcnZpZXcpO1xyXG4gICAgfVxyXG4gICAgfVxyXG5cclxufSJdLCJmaWxlIjoic2NyaXB0LmpzIn0=
