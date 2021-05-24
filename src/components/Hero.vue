<template>
    <div>
        <div class="hero-header">
            Hi, I'm Matt.
        </div>

            <div class="hero-tagline" :key="tagLine">
                {{ tagLine }}
            </div>

            <div class="hero-hint-box">
                <transition  name="fade">
                    <div class="hero-hint-text" v-if="needsAHint">
                        (click some of the headers below)
                    </div>
                </transition>
            </div>
        

    </div>
</template>

<script>
import { store } from '../store/store.js'

export default {
    name:'hero',
    data() {
        return {
            skillsArray: store.state.skillsArray
        }
    },
    computed: {
        tagLine() {
            if(store.state.selectedSkill !== null){
                return store.state.selectedSkill.tag
            }else{
                return "I'm interested in working with you."
            }
            
        },
        needsAHint() {
            return store.state.needsAHint
        }
    },
    mounted() {
        setTimeout(
            function() {
                if(store.state.selectedSkill == null){
                    store.setNeedsAHint(true)
               }                
            },
            2000
        )

    }

}
</script>

<style>

.hero-header {
    font-size: 5em;
    padding: 0.4em 0;
    color: rgb(230, 230, 230);
}

.hero-tagline {
    font-size: 5vh;
    color: rgb(230, 230, 230);
    padding: 0.5em;
    height:4em;
}

.hero-hint-box {
    height:1.2em;
}

.hero-hint-text {
    font-size: 1.2em;
    padding: 0.4em 0;
    color: rgb(230, 230, 230);
}

.fade-enter-active {
  transition: opacity 0.8s;
}

.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>