import tumblr from './embedders/tumblr.js';
const embedders = [tumblr];

export default function embed(link) {
	for (const e in embedders) {
		const match = link.match(e.urlPattern);
		if (match === null) continue;
		return e.handler(match);
	}
	return null;
}