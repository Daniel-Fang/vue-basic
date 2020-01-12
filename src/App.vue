<template>
	<div id="app">
		<Test v-if="show"></Test>
		<button @click="show = !show">Click</button>
	</div>
</template>

<script>
import Observer from '@/utils/observer/index.js';
import Test from '@/components/Test.vue';
export default {
	name: 'app',
	components: {
		Test
	},
	data () {
		return {
			show: true
		}
	},
};
</script>
