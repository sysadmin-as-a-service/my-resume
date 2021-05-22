<template>
<div>

    <div class="skill-toggle" v-for="skill in skillsList" :key="skill">
        <button v-on:click="toggleSkill(skill)">{{ skill }}</button>
    </div>
    

</div>
  
</template>

<script>
import { store } from '../store/store.js'

export default {
    name: 'toggle',
    data() {
        return {
            skillsList: store.state.skillsList
        }
    },
    // data() {
    //     return {
    //         skillsList: store.state.skillsList
    //     }
    // },
    methods: {
        toggleSkill(skill) {
            if(store.state.skillsList.includes(skill)){
                store.removeSkill(skill)
            }else{
                store.addSkill(skill)
            }
        }
    }

}
</script>

<style>
.skill-toggle {
    display: inline
}
</style>