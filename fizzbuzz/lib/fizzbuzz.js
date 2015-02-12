exports = module.exports = {}

var _options

exports.init = function(options) {
	_options = options
}

exports.respond = function(intValue) {
	var output = ""
	for(var option in _options) {
		if(intValue % option == 0) {
			output = output + _options[option]
		}
	}
	if(output !== "") return output
	return intValue.toString()
}