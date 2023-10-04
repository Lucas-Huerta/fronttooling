const path = require("path");
import vue from "@vitejs/plugin-vue";

export default {
	plugins: [vue()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src")
		}
	}, 
	css: {
		preprocessorOptions: {
			scss: {
				implementation: require("sass"),
				// additionalData: "@import \"@/styles/index.scss\";"
			}
		}
	}
};