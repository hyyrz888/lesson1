<script setup>
	import { onMounted, h, ref, nextTick, inject } from 'vue'

	const getClientWidth = _elem => {
		if (_elem) {
			return _elem.clientWidth
		}
		return (
			window.innerWidth ||
			document.documentElement.clientWidth ||
			document.body.clientWidth
		)
	}

	const actionData = {
		// direction: 'row-reverse',
		// lineLimit: 2,
		showLine: true,
		list: [
			{
				content: '按钮1',
				description: '按钮内容',
				icon: 'el-icon-edit',
				type: 'primary',
				btnType: 'primary',
				children: [
					{
						label: '按钮-1',
						value: '点击了按钮-1',
						onClick() {
							console.log('点击了按钮-1')
						},
					},
					{
						label: '按钮-2',
						value: '点击了按钮-2',
						onClick() {
							console.log('点击了按钮-2')
						},
					},
				],
			},
			{
				content: '按钮2',
				description: '按钮内容',
				icon: 'el-icon-edit',
				type: 'primary',
				btnType: 'success',
			},
		],
	}
	const Test = (props, ctx) => {
		console.log(props, ctx)
		return h(
			'p',
			{
				key: 1,
				class: 'test-p',
				style: {
					color: 'blue',
				},
			},
			[
				ctx.slots.default(1),
				ctx.slots.slot1({ a: '我是作用域插槽内容' }),
				h(
					'span',
					{
						style: 'color:green',
					},
					'测试文本'
				),
			]
		)
	}
	console.log(Test)
	const actionRef = ref(null)
	const htActionRef = ref(null)
	onMounted(() => {
		const nodes = actionRef.value

		const childNodes = nodes.children
		console.dir(childNodes)
		console.log(getClientWidth(childNodes[0]))
	})

	const handleOnAction = (action, index) => {
		console.log('handleOnAction', action, index)
	}

	const form = inject('qrcode')

	console.log(form)
</script>

<template>
	<div ref="actionRef">
		<div class="divTest">
			<p>actionRef</p>
		</div>
		<hr />
		<HtAction
			:data="actionData"
			ref="htActionRef"
			@onAction="handleOnAction"
		></HtAction>
		<hr />
		发布成功
		<hr />
		<Test>
			<p>我是defalut插槽内容</p>

			<template #slot1="{ a }">
				<p>我是slot1插槽内容{{ a }}</p>
			</template>
		</Test>
	</div>
</template>

<style lang="scss" scoped></style>
