import Vue from "vue"

export const store = Vue.observable({
    state: {
      skillsArray: [
        {
          name: 'automation',
          active: false,
          tag: "I like automating stuff"
        },
        {
          name: 'development',
          active: false,
          tag: "I'm passionate about software development"
        },
        {
          name: 'cloud',
          active: false,
          tag: "I'm a cloud engineer"
        },
        {
          name: 'monitoring',
          active: false,
          tag: "Quis custodiet ipsos custodes?"
        },
        {
          name: 'euc',
          active: false,
          tag: "I'm an end user computing specialist"
        },
        {
          name: 'identity',
          active: false,
          tag: "I can reset passwords, and a bit more"
        },
        {
          name: 'data',
          active: false,
          tag: "I'm experienced in databases & visualisation"
        },
        {
          name: 'networking',
          active: false,
          tag: "I know my iptables from my rainbow tables"
        },
        {
          name: 'leadership',
          active: false,
          tag: "I'm an experienced team leader"
        },
      ],
      selectedSkill: null,
      needsAHint: false
    },
    toggleSkill: function(skill) {
      var storeSkill = this.state.skillsArray.find(x => x.name === skill)
      console.log("toggleSkill: found skill - " + storeSkill.name)
      storeSkill.active = !storeSkill.active
      
    },
    setSelectedSkill: function (skill) {
      console.log("setting selected skill to " + skill)
      if(skill === null){
        this.state.selectedSkill = null
      }else{
        this.state.selectedSkill = this.state.skillsArray.find(x => x.name === skill)
      }    
      
    },
    setNeedsAHint (bool) {
      this.state.needsAHint = bool
    }
  })