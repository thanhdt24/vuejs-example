<template>
  <div>
    <div class="d-flex justify-content-center">
      <div class="p-5">
        <h6><b>Enter words</b></h6>
        <textarea rows="3" v-model="wordStr"></textarea>
      </div>
      <div class="p-5">
        <h6><b>Enter độ khó :))) (easy, normal, hard)</b></h6>
        <textarea rows="3" v-model="difficultStr"></textarea>
      </div>
      <div class="p-5">
        <div class="d-flex mb-3">
          <div class="me-auto p-2">Dễ</div>
          <div class="p-2">
            <input type="number" v-model="easy">
          </div>
        </div>
        <div class="d-flex mb-3">
          <div class="me-auto p-2">Vừa</div>
          <div class="p-2">
            <input type="number" v-model="normal">
          </div>
        </div>
        <div class="d-flex mb-3">
          <div class="me-auto p-2">Khó</div>
          <div class="p-2">
            <input type="number" v-model="hard">
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <input type="button" class="ml-5 btn btn-primary" value="Submit" @click="returnResult()">
      <input type="button" class="ml-5 btn btn-secondary" value="Reset" @click="reset()">
    </div>
    <p class="text-center mt-3" v-if="error">Dữ liệu nhập vào không hợp lệ, kiểm tra lại bạn nhé!</p>
    <h3 class="text-center mt-5">Result</h3>
    <table class="table table-striped mt-5 container">
      <tr>
        <th>#</th>
        <th>Dễ</th>
        <th>Vừa</th>
        <th>Khó</th>
      </tr>
      <template v-for="(r, index) in result" :key="index">
        <tr>
          <td>{{ index }}</td>
          <td>{{ r.easy }}</td>
          <td>{{ r.normal }}</td>
          <td>{{ r.hard }}</td>
        </tr>
      </template>
    </table>
  </div>
</template>
<script>
export default {
  name: "picking-word",
  data() {
    return {
      wordStr: "",
      difficultStr: "",
      words: [],
      difficults: [],
      wordsWithDifficult: [],
      result: [],
      easy: 0,
      normal: 0,
      hard: 0,
      error: false
    };
  },
  methods: {
    returnResult() {
      if (this.wordsWithDifficult.length === 0) {
        this.words = this.wordStr.split(/\r?\n/).filter(word => word.length);
        this.difficults = this.difficultStr.split(/\r?\n/).filter(d => d === 'easy' || d === 'normal' || d === 'hard');
        this.error = this.words.length !== this.difficults.length;
        if (this.error || this.words.length === 0) return;

        for (let i = 0; i < this.words.length; i++) {
          this.wordsWithDifficult.push({
            word: this.words[i],
            difficult: this.difficults[i]
          })
        }
      }

      this.shuffle(this.wordsWithDifficult);
      let easyNum = 0;
      let normalNum = 0;
      let hardNum = 0;
      let easyArr = [];
      let normalArr = [];
      let hardArr = [];
      let wordsRemove = [];
      for (let i = 0; i < this.wordsWithDifficult.length; i++) {
        if (easyNum < this.easy && this.wordsWithDifficult[i].difficult === 'easy') {
          easyArr.push(this.wordsWithDifficult[i].word);
          wordsRemove.push(this.wordsWithDifficult[i]);
          easyNum++;
        }

        if (normalNum < this.normal && this.wordsWithDifficult[i].difficult === 'normal') {
          normalArr.push(this.wordsWithDifficult[i].word);
          wordsRemove.push(this.wordsWithDifficult[i]);
          normalNum++;
        }

        if (hardNum < this.hard && this.wordsWithDifficult[i].difficult === 'hard') {
          hardArr.push(this.wordsWithDifficult[i].word);
          wordsRemove.push(this.wordsWithDifficult[i]);
          hardNum++;
        }
      }

      wordsRemove.forEach(word => {
        let index = this.wordsWithDifficult.indexOf(word);
        while (index !== -1) {
          this.wordsWithDifficult.splice(index, 1);
          index = this.wordsWithDifficult.indexOf(word);
        }
      })

      if (this.wordsWithDifficult.length === 0) {
        this.wordStr = "";
        this.difficultStr = "";
      }

      this.result.push({
        easy: easyArr.join(),
        normal: normalArr.join(),
        hard: hardArr.join(),
      })
    },

    shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }

      return a;
    },

    reset() {
      this.words = [];
      this.difficults = [];
      this.wordsWithDifficult = [];
      this.result = [];
      this.easy = 0;
      this.normal = 0;
      this.hard = 0;
      this.error = false
    }
  }
};
</script>
<style>
textarea {
  width: 300px;
}
</style>