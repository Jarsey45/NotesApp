<template >
  <div :style="style">
    <p class="note-title">{{ title }}</p>
    <p class="note-content">{{ content }}</p>
    <button @click="star" class="starButton">Star</button>
    <button @click="deletePost" class="discardButton">Discard</button>
  </div>
</template>


<script>
export default {
  props: ["title", "content", "color", "id"],
  computed: {
    style() {
      return "background-color:" + this.color;
    },
  },
  methods: {
    deletePost() {
      this.$emit("discard-note", this.id);
    },
    star() {
      this.$emit("star-note", this.id);
    },
  },
};
</script>


<style lang="scss" scoped>
@use '../scss/app' as *;

.starButton {
  width: 49%;
  margin-right: 2%;
  height: 2em;
  outline: none;
  cursor: pointer;
  border-radius: 2px;
  border: 1px solid black;
  // color: gold;
  background: none;
  font-family: "Quicksand";
  transition: background 0.2s, border 0.2s;
  //transition: border 0.2s;

  &:hover {
    border: none;
    color: white;
    background: gold;
  }
}
.discardButton {
  width: 49%;
  height: 2em;
  outline: none;
  cursor: pointer;
  border-radius: 2px;
  border: 1px solid black;
  // color: crimson;
  background: none;
  font-family: "Quicksand";
  transition: background 0.2s, border 0.2s;

  &:hover {
    border: none;
    color: white;
    background: crimson;
  }
}
</style>