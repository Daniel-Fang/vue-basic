<template>
	<div class="child">child</div>
</template>

<script>
export default {
	name: 'Child',
	beforeCreate() {
		console.log('Child component beforeCreate');
	},
	created() {
		console.log('Child component created');
	},
	beforeMount() {
		console.log('Child component beforeMount');
	},
	mounted() {
		console.log('Child component mounted');
	},
	beforeUpdate() {
		console.log('Child component beforeUpdate');
	},
	updated() {
		console.log('Child component updated');
	},
	beforeDestroy() {
		console.log('Child component beforeDestroy');
	},
	destroyed() {
		console.log('Child component destroyed');
	}
};
</script>

<style scoped>
</style>