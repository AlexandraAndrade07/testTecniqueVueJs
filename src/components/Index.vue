<script>
import { mapState, mapActions } from 'vuex';
import AlbumDetails from './AlbumDetails';
export default {
  name: 'index',
  components: {
    AlbumDetails
  },
  data () {
    return {
      msg: 'Test technique Infolegale Je veux un stage stp',
      sampleData: ["apple", "banane"]
    }
  },
  created () {
    this.fetchAlbumList();
  },
  methods: {
    ...mapActions([
      'fetchAlbumList',
      'fetchAlbum',
      'selectAlbum',
      'selectPhoto'

    ]),
    
    showAlbum(albumId) { 
      // console.log("jccdjidi")
      // return axios.get(`${API_BASE_URL}/albums/${albumId}/photos`)
      //   .then(response => 
      //           console.log("TEEEEEEEEEEEEST", response.data[albumId-1].thumbnailUrl));
      //           albumId = response.data.a
    },
    sampleFunction(fruitName){
      alert("you:" + fruitName)
    }
  },
  computed: {
    ...mapState({
      albumListLoading: state => state.albums.albumListLoading,
      albumList: state => state.albums.albumList,
      photoUrl: state => state.albums.photoUrl,
      albumId: state => state.albums.albumId,
      albumDetails: state => state.albums.albumDetails,
    }),
  }
}
</script>
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <div class="containerAlbums">    
          <div class="albumList">
            <h2>Liste des albums</h2><br/>
            <ul>
              <li v-for="album in albumList" :key="album.id">
                {{album.title}} 
                  <span id="detailsLink" @click="selectAlbum(album.id)">
                    Détails de {{album.id}}
                  </span>
              </li><br/>
            </ul>
          </div>
          <div v-show="albumId > 0" class="albumDetails">
            <h2>Liste des Photos</h2>
              <ul>
                <li v-for="albumd in albumDetails" :key="albumd.id">
                    <img @click="selectPhoto(albumd.id)" v-bind:src="albumd.thumbnailUrl"  />
                </li><br/>
              </ul>
            <div class="photoDetails" v-if="photoUrl !== null">
              <img v-bind:src="photoUrl" />
            </div>
            <album-details></album-details> 
          </div>
      </div>  
  </div>
</template>
<style  lang="scss" scoped>
  
h1, h2 {
  font-weight: normal;
}
li {
  list-style: none;
}
a {
  color: #42b983;
}
#detailsLink {
  color: blue;
  cursor: pointer;
  margin-left: 5px;
}
.containerAlbums{
  display: grid;
  grid-template-columns: 1fr, 1fr, 2fr;
  grid-template-rows: 1fr, 1fr;
}
.albumList {
  width: 50vw;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  border-right: 2px solid #BABABA;
}
.albumDetails {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  width: 49vw;
  
}
.photoDetails {
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  width: 49vw;
 
}
</style>
