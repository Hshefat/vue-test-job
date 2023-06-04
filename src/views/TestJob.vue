<template>
        <form>
            <label>Two Way Binding:</label>
            <input type="text"   v-model="state.textChange">
            <p>Message Show: {{ state.textChange}}</p>
        </form>
</template>

<script lang="ts">
// import { defineComponent } from '@vue/composition-api'
import { defineComponent, reactive, ref } from 'vue'; // must include

export default defineComponent({
    name: "Test-Page",

    setup() {
        let state=ref<any>({
            textChange:"hsasf"
        })
      
        return { state }
    },
})
</script>
