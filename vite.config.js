import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'

export default defineConfig({
	base: '/lesson1/',
	server: {
		port: 8888,
	},
	plugins: [vuePlugin()],
})
