<template>
	<div id="app">
		<Test v-if="show"></Test>
		<model-demo v-model="show"></model-demo>
	</div>
</template>

<script>
import Observer from '@/utils/observer/index.js';
import Test from '@/components/Test.vue';
import ModelDemo from '@/components/ModelDemo.vue';
export default {
	name: 'app',
	components: {
		Test,
		ModelDemo
	},
	data () {
		return {
			show: true,
			name: true
		}
	}
};
</script>
