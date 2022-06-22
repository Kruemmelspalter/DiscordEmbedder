const embedders = [ require('embedders/tumblr')];

module.exports = function embed(link) {
	for (const e in embedders) {
		const match = link.match(e.urlPattern);
		if (match === null) continue;
		return e.handler(match);
	}
	return null;
};