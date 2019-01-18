  <template>
    <div class="containerPhoto">
      
        <div class="thumbPhoto" v-for="albumd in albumDetails" :key="albumd.id">
          <img class="thumbPhoto" width="250" @click="selectPhoto(albumd.id)" v-bind:src="albumd.thumbnailUrl">
        </div>
        <br>
      
    </div>
  </template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "album-details",
  props: ['albumDetails'],

  created() {
    this.fetchAlbum();
  },
  methods: {
    ...mapActions(["fetchAlbum", "selectAlbum", "selectPhoto"])
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
};
</script>

<style scoped>
  li {
  list-style: none;
  margin: 5px;
  border-radius: 8px;
 }
 .containerPhoto{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
 }
 .thumbPhoto{
   margin: 8px;
   border-radius: 6px;
 }
</style>

