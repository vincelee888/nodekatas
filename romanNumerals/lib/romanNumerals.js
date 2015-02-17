exports = module.exports = {}

var _options

exports.init = function(options) {
	_options = options
}

exports.respond = function(intValue) {
	var output = ""
	var remainder = intValue

	for(var option in _options) {
		_options.forEach(function(option) {
			for (var i = 0; i < Math.floor(remainder / option.intValue); i++) {
				output += option.charValue
				remainder -= option.intValue
			}
		})
	}

	return output
}