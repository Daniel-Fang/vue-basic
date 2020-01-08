<template>
	<div id="app">
	</div>
</template>

<script>
import Observer from '@/utils/observer/index.js';
export default {
	name: 'app',
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
