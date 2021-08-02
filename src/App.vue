<template>
  <div id="container">
    <AddNote id="addNote" @add-note="addNote"></AddNote>
    <Note
      v-for="note of notes.reverse()"
      :key="note.id"
      :title="note.title"
      :content="note.content"
      :color="note.color"
      :id="note.id"
      class="note-card"
      :class="{ starred: note.starred }"
      @discard-note="discardNote"
      @star-note="starNote"
    >
    </Note>
  </div>
</template>

<script>
import Note from "./components/Note.vue";
import AddNote from "./components/AddNote.vue";

export default {
  data() {
    return {
      notes: [
        {
          id: 0,
          title: "Welcome !",
          content:
            "Go ahead and try to add new note, you can discard this one too!",
          color: "#f38ba0",
          starred: false,
        },
      ],
      lastId: 0,
    };
  },
  name: "App",
  components: {
    Note,
    AddNote,
  },
  methods: {
    addNote(note) {
      this.notes.push({
        id: this.lastId + 1,
        title: note.title,
        content: note.content,
        color: note.color,
        starred: false,
      });
      this.lastId++;
    },
    discardNote(id) {
      this.notes = this.notes.filter((el) => el.id !== id);
    },
    starNote(id) {
      let index = this.notes.findIndex((el) => el.id === id);
      this.notes[index].starred = !this.notes[index].starred;
    },
  },
};
</script>

<style lang='scss' >
@use 'scss/app' as *;

#container {
  @include theme($background-color);

  margin: 10vh 15vw 5vh 10vw;
  padding: 0;
  max-height: 80vh;

  font-family: $font-family;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  //justify-content: space-around;

  // align-items: center;

  .starred {
    border: 1px solid gold !important;
    box-shadow: 2px 2px 5px gold !important;
  }

  .note-card {
    width: $note-width;
    margin: 10px 10px auto;
    border: 1px solid rgb(0, 0, 0);
    box-shadow: 5px 2px 6px 0px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    padding: 15px;
    transition: box-shadow 0.3s;

    .note-title {
      font-weight: bolder;
      font-size: 1.5em;
    }
    .note-content {
      text-align: left;
      word-wrap: break-word;
    }

    &:hover {
      box-shadow: 0 2px 15px rgba(0, 0, 0, 0.5);
    }
  }

  #addNote {
    font-family: $font-family;
    width: $note-width;
    margin: 10px 10px auto;
    border: 1px solid rgb(0, 0, 0);
    border-radius: 3px;
    padding: 15px;
  }
}
</style>
