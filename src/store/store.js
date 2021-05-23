import Vue from "vue"

export const store = Vue.observable({
    state: {
      skillsList: ['data','development','euc','leadership','cloud','automation','networking','identity'],
      skillsArray: [
        {
          name: 'data',
          active: false,
          tag: "I'm experienced in databases and data visualisation"
        },
        {
          name: 'development',
          active: false,
          tag: "I'm passionate about software development"
        },
        {
          name: 'euc',
          active: false,
          tag: "I'm an end user computing specialist"
        },
        {
          name: 'leadership',
          active: false,
          tag: "I'm an experienced team leader"
        },
        {
          name: 'cloud',
          active: false,
          tag: "I'm a cloud engineer"
        },
        {
          name: 'automation',
          active: false,
          tag: "I like automating stuff"
        },
        {
          name: 'networking',
          active: false,
          tag: "I know my iptables from my rainbow tables"
        },
        {
          name: 'identity',
          active: false,
          tag: "I can reset passwords, and a bit more"
        }
      ],
      selectedSkill: null
    },
    addSkill: function (skill) {
        console.log("adding skill " + skill)
      this.state.skillsList.push(skill)
    },
    removeSkill: function (skill) {
        console.log("removing skill " + skill)
      this.state.skillsList = this.state.skillsList.filter(x => x != skill)
    },
    toggleSkill: function(skill) {
      var storeSkill = this.state.skillsArray.find(x => x.name === skill)
      storeSkill.active = !storeSkill.active
      
    },
    setSelectedSkill: function (skill) {
      console.log("setting selected skill to " + skill)
      this.state.selectedSkill = this.state.skillsArray.find(x => x.name === skill)
    }
  })