<template>
	<div>
		1
		<ht-button :data="{ type: 'primary', shape: 'round', appearance: 'text' }">
			11
		</ht-button>

		<Action>发布成功</Action>
		<router-view></router-view>
	</div>
</template>

<script setup>
	import { onMounted, provide } from 'vue'
	import qrcode from 'qrcode'
	import Action from './pages/Action.vue'

	provide('qrcode', 11)

	onMounted(() => {
		console.log('App mounted', qrcode)
	})
</script>
