import Vue from "vue"

export const store = Vue.observable({
    state: {
      skillsList: ['data','development','euc','leadership','cloud','automation','networking','identity']
    },
    addSkill: function (skill) {
        console.log("adding skill " + skill)
      this.state.skillsList.push(skill)
    },
    removeSkill: function (skill) {
        console.log("removing skill " + skill)
      this.state.skillsList = this.state.skillsList.filter(x => x != skill)
    }
  })