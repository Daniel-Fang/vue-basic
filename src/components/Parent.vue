<template>
	<div class="parent">
		<Child @hook:created="createdHandle" @hook:mounted="mountedHandle"></Child>
	</div>
</template>

<script>
import Child from '@/components/Child.vue';
export default {
	name: 'app',
	components: {
		Child
	},
	data () {
		return {
			show: true
		}
	},
	beforeCreate() {
		console.log('Parent component beforeCreate');
	},
	created() {
		console.log('Parent component created');
	},
	beforeMount() {
		console.log('Parent component beforeMount');
	},
	mounted() {
		console.log('Parent component mounted');
	},
	beforeUpdate() {
		console.log('Parent component beforeUpdate');
	},
	updated() {
		console.log('Parent component updated');
	},
	beforeDestroy() {
		console.log('Parent component beforeDestroy');
	},
	destroyed() {
		console.log('Parent component destroyed');
    },
    methods: {
        createdHandle () {
            console.log('子组件执行了 created 钩子');
        },
        mountedHandle () {
            console.log('子组件执行了 mounted 钩子');
        }
    }
};
</script>