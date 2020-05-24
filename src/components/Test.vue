<template>
    <div class="example">
       dasdasas
    </div>
</template>

<script>
export default {
    name: 'Example',
    data () {
        return {

        }
    },
    created () {
        
    },
    methods: {

    },
    mounted () {
		console.log(this.$refs.main.offsetHeight);
    }
}

</script>

<style scoped>
.main {
    height: 300px;
}
</style>