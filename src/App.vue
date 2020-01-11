<template>
	<div id="app">
		<Test></Test>
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
	created () {
		let data = {
			name: 'daniel',
			obj: {
				age: '20'
			},
			list: [1, 2, 3, 4]
		};

		new Observer(data);
		data.obj.age;
		data.obj.age = '21';
	}
};
</script>
