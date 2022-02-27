<template>
<div>

    <div class="skill-toggle" v-for="skill in skillsList" :key="skill">
    
        <button 
            @click="toggleSkill(skill);setSelectedSkill(skill)"
            @mouseover="setSelectedSkill(skill)"
            @mouseleave="setSelectedSkill(null)"
            :class="isSkillActive(skill)"
        >{{ skill }}</button>
    
    </div>
    
</div>
  
</template>

<script>
import { store } from '../store/store.js'

export default {
    name: 'toggle',
    data() {
        return {
            // do this in data instead of computed so its not responsive i.e. buttons
            // don't disappear when we click them...
            skillsList: store.state.skillsArray.map(x => x.name)
        }
    },
    methods: {
        toggleSkill(skill) {
            store.toggleSkill(skill)
        },
        isSkillActive(skill) {
            if(store.state.skillsArray.find(x => x.name === skill).active){
                return "skill-button-active"
            }else{
                return "skill-button-inactive"
            }
        },
        setSelectedSkill(skill) {
            store.setSelectedSkill(skill)
        }
    }

}
</script>

<style>
.skill-toggle {
    display: inline-block;
}

.skill-button-active {
    background: none;
    border: none;
    padding: 10px;
    color: rgb(230, 230, 230);
    font-size: 2em;
}

.skill-button-active:hover, .skill-button-inactive:hover {
    color: rgb(255, 255, 255);
    text-shadow: 0px 0px 0.5px;
}

.skill-button-inactive {
    background: none;
    border: none;
    padding: 10px;
    color: rgb(100, 100, 100);
    font-size: 2em;
}

</style>