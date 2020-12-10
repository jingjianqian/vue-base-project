'use strict'
console.log("init Vue Configs")
function resolve(dir){
	return path.join(__dirname,dir);
}


const name defaultSettings.title || 'JokerMan'


module.exports = {
	configureWebpack:{
		name:name,
		resolve:{
			alias:{
				'@':resolve('src')
			}
		}
	}
}