<template>
	<div id="app">
		<parent></parent>
	</div>
</template>

<script>
import Parent from '@/components/Parent.vue';
export default {
	name: 'app',
	components: {
		Parent
	},
};
</script>