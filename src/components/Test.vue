<template>
    <div class="main">
        <ul>
            <li v-for="item in list" :key="item" @mouseenter.self="mouseenterHandle" @mouseleave="mouseleaveHandle">
                <button @click="id = item" :class="{click: id === item, hover: isHover > 1}">Click</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Test',
    data () {
        return {
            list: [1],
            id: 0,
            isHover: false
        }
    },
    methods: {
        mouseenterHandle () {
            console.log('enter')
            // this.id = 0;
            this.isHover = this.isHover + 1;
        },
        mouseleaveHandle () {
            // this.isHover = (this.isHover + 1) % 4;
        }
    },
    watch: {
        isHover () {
        },
        id () {
            // console.log(this.i)
        }
    }
}
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
}

ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
}

li {
    width: 33.33%;
    padding: 30px;
    height: 300px;
    box-sizing: border-box;
    background: #ccc;
}


button {
    width: 56px;
    height: 28px;
    background: yellow;
}

button.click {
    visibility: hidden;
}

button.click.hover {
    visibility: visible;
    background: red;
}
</style>