<template>
    <div class="example">
        {{ count }}
    </div>
</template>

<script>
export default {
    name: 'Example',
    data () {
        return {
            count: 0
        }
    },
    mounted () {
        this.count++;
        this.count++;
        this.count++;
    },
    watch: {
        count () {
            console.log(this.count); // 只会执行一次，结果为 3,即最后一个操作的结果。
        }
    }
}

</script>

<style scoped>
</style>