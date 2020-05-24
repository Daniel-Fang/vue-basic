<template>
    <div class="model-view">
        <input type="checkbox" :checked="checked" @change="changeHandle" />
    </div>
</template>

<script>
export default {
    name: 'model-demo',
    model: {
        prop: 'checked', // 自定义 prop
        event: 'change'  // 自定义 event
    },
    props: {
        checked: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        changeHandle (e) {
            this.$emit('change', e.target.checked);
        }
    }
}
</script>