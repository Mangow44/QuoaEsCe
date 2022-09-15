import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	assets: new Set(["albedo.png","edward.png","erza.png","favicon.png","gaara.png","gon.png","guts.png","joseph.png","kuwabara.png","l.png","leo.jpg","light_yagami.webp","livai.png","mayuri.jpg","mikasa.png","mob.png","nami.png","neferupito.png","netero.png","nezuko.png","sacha.png","saitama.png","sakura.png","sanji.png","senku.png","shinon.png","tanjiro.png","tortue_geniale.png","zoro.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".webp":"image/webp"},
	_: {
		entry: {"file":"_app/immutable/start-025384ff.js","imports":["_app/immutable/start-025384ff.js","_app/immutable/chunks/index-59ac3d19.js","_app/immutable/chunks/singletons-2f3696b2.js"],"stylesheets":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
