<template>
    <div class="example">
        Test 组件
        <button @click="once">Click once</button>
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
        this.$eventBus.$on(['click', 'tab'], function (arg) {
            console.log(arg);
        });
        this.$eventbus.$once('click', function (arg) {
            console.log('once');
        }, this);
    },
    methods: {
        once () {
            this.$eventbus.$emit('click', 'click');
        }
    }
}

</script>

<style scoped>
</style>