<template>
    <div>
        <div class="hero-header">
            Hi, I'm Matt.
        </div>

        <div class="hero-tagline">
            {{ tagLine }}
        </div>

        <transition  name="fade">
            <div class="hero-hint" v-if="needsAHint">
                (click some of the headers below)
            </div>
        </transition>

    </div>
</template>

<script>
import { store } from '../store/store.js'

export default {
    name:'header',
    data() {
        return {
            needsAHint: false
        }
    },
    computed: {
        tagLine() {
            if(store.state.selectedSkill === 'euc'){
                return "I'm an end user computing specialist"              
            }else if(store.state.selectedSkill === 'data'){
                return "I'm experienced in databases & data visualisation"
            }else if(store.state.selectedSkill === 'development'){
                return "I'm passionate about software development"
            }else if(store.state.selectedSkill === 'leadership'){
                return "I'm an experienced team leader"
            }else if(store.state.selectedSkill === 'cloud'){
                return "I'm a cloud engineer"
            }else if(store.state.selectedSkill === 'automation'){
                return "I like automating stuff"
            }else if(store.state.selectedSkill === 'networking'){
                return "I know my iptables from my rainbow tables"
            }else if(store.state.selectedSkill === 'identity'){
                return "I can reset passwords, and a bit more."
            }else{
                return "I'm interested in working with you."
            }
        }
    },
    mounted() {
        if(store.state.selectedSkill === null) {
            this.needsAHint = true
            setTimeout(
                function(){
                    this.needsAHint = false
                },
                3000
            )
        }
    }

}
</script>

<style>

.hero-header {
    font-size: 4em;
    padding: 0.4em 0;
    color: rgb(230, 230, 230);
}

.hero-tagline {
    font-size: 3em;
    color: rgb(230, 230, 230);
}

.hero-hint {
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