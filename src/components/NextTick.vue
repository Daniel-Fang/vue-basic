<template>
    <div class="example" ref="example">
        {{ message }}
    </div>
</template>

<script>
export default {
    name: 'Example',
    data () {
        return {
            message: 'Hello'
        }
    },
    mounted () {
        this.message = 'World';
        console.log(this.$refs.example.innerHTML); // Hello
        this.$nextTick(function () {
            console.log(this.$refs.example.innerHTML); // World
        });
    }
}

</script>