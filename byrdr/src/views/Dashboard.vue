<template>
  <v-container
    fluid
    grid-list-md
  >
    <v-layout row wrap>
      <v-flex xs4 v-for="board in userBoards" :key="board['.key']">
        <v-card>
          <v-card-title>
            <v-layout>
              <v-flex xs12>
                <h2>{{board.name}}</h2>
                <v-btn
                  :to="{ name: 'board', params: { id: board['.key'] } }"
                  color="primary">View Board</v-btn>
              </v-flex>
            </v-layout>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card>
          <v-card-title>
            <v-layout>
              <v-flex xs12>
                <v-form @submit.prevent="createBoard()">
                  <v-text-field
                    v-model="newBoard.name"
                    label="Name"
                    required
                  ></v-text-field>
                  <v-btn type="submit" color="success">Create Board</v-btn>
                </v-form>
              </v-flex>
            </v-layout>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import firestore from '@/firestore';

export default {
  props: ['user'],
  data: () => ({
    boards: [],
    newBoard: {
      name: '',
    },
  }),
  firestore() {
    return {
      /* eslint-disable no-underscore-dangle */
      boards: firestore.collection('boards'),
    };
  },
  computed: {
    userBoards() {
      return this.boards.filter(b => b.uid === this._props.user.uid);
    },
  },
  methods: {
    async createBoard() {
      console.log(this.$firestore);
      await this.$firestore.boards.add({
        ...this.newBoard,
        uid: this._props.user.uid,
      });

      this.newBoard = {
        name: '',
      };
    },
  },
};
</script>

<style>

</style>
