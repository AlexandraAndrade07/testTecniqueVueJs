<template>
    <div>
         <!-- <span class="detailsLink" @click="showAlbum(album.id)"> -->
       <ul>
           <li v-for="fruit in fruits" >
               <button type="button" @click='onClick(fruit)'>{{fruit}}</button>
           </li>
       </ul>   
         <span class="detailsLink" >
            Détails de hé ho {{this.albumId}}
          </span>
    </div>
</template>


<script>
export default {
    props:{
        onClick: Function,
        fruits: Array
        
    }
}
</script>


<style scoped>

</style>

