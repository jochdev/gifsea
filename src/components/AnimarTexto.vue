<template>
	<v-typical
	class="blink"
	:steps="['Stickers',3000,'Gifs',3000]"
	:loop="Infinity"
	:wrapper="'span'"
	></v-typical>
</template>

<script>
import VTypical from'vue-typical'

export default {
	components:{
		VTypical
	}
};
</script>

<style></style>
