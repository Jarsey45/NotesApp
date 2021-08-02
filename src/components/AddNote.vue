<template >
  <div>
    <input type="text" placeholder="Title" v-model="title" />
    <textarea
      name="content"
      id=""
      cols="16"
      rows="8"
      maxlength="150"
      placeholder="Your note content"
      v-model="content"
    ></textarea>
    <div id="colors">
      <div
        class="color"
        v-for="(col, index) of colors"
        :class="{ active: col.active }"
        :key="index"
        @click="chooseColor(col.hex)"
        :style="{
          background: col.hex,
        }"
      >
        &nbsp;
      </div>
    </div>
    <button @click="getData" class="addButton">Add Note</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      content: "",
      color: "",
      colors: [
        { hex: "#b5eaea", active: false },
        { hex: "#edf6e5", active: false },
        { hex: "#ffbcbc", active: false },
        { hex: "#f38ba0", active: false },
        { hex: "#515151", active: false },
        { hex: "#baca21", active: false },
      ],
    };
  },
  methods: {
    getData() {
      const { title, content, color } = this;
      if (validateNote({ title, content, color })) {
        this.$emit("add-note", { title, content, color });
      }
    },
    chooseColor(color) {
      this.colors.forEach((e) => {
        e.active = false;
      });
      let index = this.colors.findIndex((obj) => obj.hex === color);

      this.colors[index].active = true;
      this.color = color;
    },
  },
};

const validateNote = ({ title, content, color }) => {
  if (
    title.length === 0 ||
    content.length === 0 ||
    color.length === 0 ||
    title.length > 20 ||
    content.length > 150
  )
    return false;
  return true;
};
</script>
<style lang="scss" scoped>
input {
  font-size: 1.2em;
  width: 7.35em;
}

textarea {
  resize: none;
  font-size: 0.8em;
  font-family: "Quicksand";
}

#colors {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;

  .color {
    width: 30px;
    height: 30px;
    margin: 5px;
    float: left;
    border-radius: 50%;
    box-sizing: border-box;
    cursor: pointer;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.4;
    }
  }
  .active {
    //border: 5px solid black;

    cursor: pointer;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  }
}

.addButton {
  width: 100%;
  height: 2em;
  outline: none;
  cursor: pointer;
  border-radius: 2px;
  border: 1px solid black;
  background: none;
  font-family: "Quicksand";
  transition: background 0.2s;

  &:hover {
    border: none;
    color: white;
    background: #515151;
  }
}
</style>