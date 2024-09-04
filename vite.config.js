import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'

export default defineConfig({
	base: '/deploy_test/',
	server: {
		port: 8888,
	},
	plugins: [vuePlugin()],
})
