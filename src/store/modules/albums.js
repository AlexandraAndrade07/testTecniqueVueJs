import * as types from '@/store/mutation-types';
import {
        fetchAlbumList as fetchAlbumListApi,
        fetchAlbum as fetchAlbumApi,
} from '@/services/albums';

// =================================
// Initial state
// =================================
const state = {
  albumList: [],
  albumListLoading: false,
  albumDetails: [],
  albumLoading: false,
  albumId: 0,
  photoUrl: null,
};

// =================================
// Mutations
// =================================
const mutations = {
  [types.ALBUM_LIST_REQUEST](state) {
    state.albumListLoading = true;
  },
  [types.ALBUM_LIST_SUCCESS](state, albumList) {
    state.albumList = albumList;
    state.albumListLoading = false;
  },
  [types.ALBUM_REQUEST](state) {
    state.albumLoading = true;
    state.photoUrl = null;
  },
  [types.ALBUM_SUCCESS](state, albumDetails) {
    state.albumDetails = albumDetails;
    state.albumLoading = false;
  },
  [types.SELECT_ALBUM](state, albumId) {
    state.albumId = albumId;
  },
  [types.SELECT_PHOTO](state, photoId) {
    let photoKey = 0;
    for (let i = 1; i < state.albumDetails.length; i++) {
      if (state.albumDetails[i].id === photoId) {
        photoKey = i;
      }
    }
    state.photoUrl = state.albumDetails[photoKey].url;
  },
};

// =================================
// Actions
// =================================
const actions = {
  fetchAlbumList({ commit }) {
    commit(types.ALBUM_LIST_REQUEST);
    return fetchAlbumListApi().then(
      albumList => commit(types.ALBUM_LIST_SUCCESS, albumList),
    );
  },
  fetchAlbum({ commit, state }) {
    commit(types.ALBUM_REQUEST);
    return fetchAlbumApi(state.albumId).then(
      albumDetails => commit(types.ALBUM_SUCCESS, albumDetails),
    );
  },
  selectAlbum({ commit, dispatch }, albumId) {
    commit(types.SELECT_ALBUM, albumId);
    dispatch('fetchAlbum');
  },
  selectPhoto({ commit }, photoId) {
    commit(types.SELECT_PHOTO, photoId);
  },
};

export default {
  state,
  mutations,
  actions,
};

