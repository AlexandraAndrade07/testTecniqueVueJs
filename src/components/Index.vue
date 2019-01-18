<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="containerAlbums">
      <div class="albumList">
        <h2>Liste des albums</h2>
        <br>
        <ul>
          <li v-for="album in albumList" :key="album.id">
            {{album.title}}
            <span id="detailsLink" @click="selectAlbum(album.id)">
                Détails de {{album.id}}
            </span>
          </li>
          <br>
        </ul>
      </div>
      <div v-show="albumId > 0" class="albumDetails">
        <h2>Photo details</h2>
        <div class="photoDetails" v-if="photoUrl !== null">
          <img class="photoDetail" v-bind:src="photoUrl">
        </div>
        <h2>Liste des Photos {{albumId}} </h2>
        <album-details albumDetails="albumDetails"></album-details>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import AlbumDetails from "./AlbumDetails";
export default {
  name: "index",
  components: {
    AlbumDetails
  },
  data() {
    return {
      msg: "Test technique Infolegale"
    };
  },
  created() {
    this.fetchAlbumList();
  },
  methods: {
    ...mapActions([
      "fetchAlbumList",
      "fetchAlbum",
      "selectAlbum",
      "selectPhoto"
    ]),

    showAlbum(albumId) {
      this.selectAlbum(albumId);
    },
    sampleFunction(fruitName) {
      alert("you:" + fruitName);
    }
  },
  computed: {
    ...mapState({
      albumListLoading: state => state.albums.albumListLoading,
      albumList: state => state.albums.albumList,
      photoUrl: state => state.albums.photoUrl,
      albumId: state => state.albums.albumId,
      albumDetails: state => state.albums.albumDetails
    })
  }
};
</script>

<style  lang="scss" scoped>
h1,h2 {
  font-weight: normal;
}
li {
  list-style: none;
  margin: 5px;
  border-radius: 8px;
  font-size: 1em;
}
a {
  color: #42b983;
}
#detailsLink {
  color: blue;
  cursor: pointer;
  margin-left: 5px;
}
.containerAlbums {
  display: grid;
  grid-template-columns: 1fr, 1fr;
  grid-template-rows: 1fr, 1fr;
}
.albumList {
  width: 50vw;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  border-right: 2px solid #bababa;
}
.albumDetails {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  width: 49vw;

  .photoDetails {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    width: 49vw;
  }
.photoDetail{
  margin: 5px;
  border-radius: 7px;
}
}
</style>
