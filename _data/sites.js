module.exports = {
	danfil: {
		name: "Danfil", // optional, falls back to object key
		description: "Danfil.cz web site",
		options: {
			frequency: 60 * 24, // 24 hours
			freshChrome: "site",
		},
		urls: [
			"https://www.danfil.cz/",
			"https://www.danfil.cz/nausnice/dite/",
			"https://www.danfil.cz/detske-nausnicky-danfil-srdicka-c2160-ze-zluteho-zlata-s-kaminky-white-zapinani-brizura-11147/",
			"https://www.danfil.cz/konfigurator/",
			"https://www.danfil.cz/konfigurator/detske-nausnicky-danfil-kyticky-c1945-ze-zluteho-zlata-s-kaminkem-white-zapinani-brizura-3621/",
		]
	},
	brilianty: {
		name: "Brilianty", // optional, falls back to object key
		description: "Brilianty.cz web site",
		options: {
			frequency: 60 * 24, // 24 hours
			freshChrome: "site"
		},
		urls: [
			"https://www.brilianty.cz/",
			"https://www.brilianty.cz/prsteny/",
			"https://www.brilianty.cz/zlaty-zasnubni-prsten-df-2947-bile-zlato-s-briliantem-9909/",
		]
	},
	dfprsteny: {
		name: "DFprsteny", // optional, falls back to object key
		description: "Dfprsteny.cz web site",
		options: {
			frequency: 60 * 24, // 24 hours
			freshChrome: "site"
		},
		urls: [
			"https://www.dfprsteny.cz/",
			"https://www.dfprsteny.cz/cz/kolekce/basic/",
			"https://www.dfprsteny.cz/cz/snubni-prsteny-ze-zluteho-zlata-1-7-mm-pulkulaty-par-4i17-p115/",
		]
	}
};
