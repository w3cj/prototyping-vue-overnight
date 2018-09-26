<template>
  <v-container
    fluid
    grid-list-md
  >
    <v-layout row wrap>
      <v-flex xs4 v-for="board in userBoards" :key="board['.key']">
        <v-card>
          <v-card-title class="board-title">
            <h2>{{board.name}}</h2>
            <v-layout>
              <v-flex xs4 v-for="image in board.images" :key="image['.key']">
                <img :src="image.square_url" />
              </v-flex>
            </v-layout>
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              :to="{ name: 'board', params: { id: board['.key'] }}"
              color="secondary">View Board</v-btn>
            <v-spacer></v-spacer>
            <v-avatar>
              <img
                :src="board.user.photoURL"
                :alt="board.user.displayName"
              >
            </v-avatar>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import firestore from '@/firestore';

export default {
  data: () => ({
    boards: [],
    images: [],
    users: [],
  }),
  firestore() {
    return {
      boards: firestore.collection('boards'),
      images: firestore.collection('images'),
      users: firestore.collection('users'),
    };
  },
  computed: {
    userBoards() {
      return this.boards.map((board) => {
        board.images = this.images.filter(i => i.board_id === board['.key']).slice(0, 3);
        board.user = this.users.find(u => u.uid === board.uid) || {
          photoUrl: '',
          displayName: 'Loading...',
        };
        return board;
      });
    },
  },
};
</script>

<style>
.board-title {
  flex-direction: column;
}
</style>
