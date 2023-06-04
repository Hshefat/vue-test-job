<template>
    <Nav />
    <div class="wrraper">
        <div class="left-content">
            <SideBar />
        </div>
        <div class="right-content">
            <router-view />
        </div>
    </div>
</template>


<script>
import { defineComponent } from '@vue/composition-api'
import Nav from '@/components/Nav.vue'
import SideBar from '@/components/SideBar.vue'


export default defineComponent({
    name: 'AdminPage',
    components: { Nav, SideBar },


    setup() {
      

        
        return{ }
    },
})
</script>
 

<style>

</style>