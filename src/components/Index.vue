<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="albumList">
      <h2>Liste des albums</h2><br/>
      <ul>
        <li v-for="album in albumList" :key="album.id">
          {{album.title}} 
            <span class="detailsLink" @click="selectAlbum(album.id)">
              Détails de {{album.id}}
            </span>

            <album-details v-bind:onClick="sampleFunction" :fruits="sampleData">
            </album-details>

        </li><br/>
      </ul>
    </div>
    <div v-show="true" id="albumDetails">
      <!-- <div id="albumDetails"> -->
      <h2>Liste des Photos</h2>

        <ul>
        <li v-for="albumd in albumDetails" :key="albumd.id">
          {{albumd.title}} 
            <img v-bind:src="albumd.thumbnailUrl" />
        </li><br/>
      </ul>






      <div id="photoDetails" v-if="photoUrl !== null">
        <img v-bind:src="photoUrl" />
      <album-details></album-details>
      </div>
    </div>
    <album-details></album-details>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState, mapActions } from 'vuex';
import AlbumDetails from './AlbumDetails';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

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
      'selectAlbum'
    ]),
    
    showAlbum(albumId) { 
      console.log("jccdjidi")
      return axios.get(`${API_BASE_URL}/albums/${albumId}/photos`)
        .then(response => 
                console.log("TEEEEEEEEEEEEST", response.data[albumId-1].thumbnailUrl));
                albumId = response.data.a
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

<style scoped>
h1, h2 {
  font-weight: normal;
}
li {
  list-style: none;
}
a {
  color: #42b983;
}
.detailsLink {
  color: blue;
  cursor: pointer;
  display: inline-block;
  margin-left: 20px;
}
#albumList {
  width: 49%;
  display: inline-block;
  border-right: 2px solid #BABABA;
}
#albumDetails {
  width: 49%;
  display: inline-block;
}
</style>
