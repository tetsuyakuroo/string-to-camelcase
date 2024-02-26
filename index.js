module.exports.toCamelCase = function(str) {
	var regExp=/[-_]\w/ig;
    return str.replace(regExp,function(match){
        return match.charAt(1).toUpperCase();
    });
}