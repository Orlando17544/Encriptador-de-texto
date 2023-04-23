function encrypt(text) {

	let encryptedText = ""

	for (let letter of text) {
		switch (letter) {
			case "e":
				encryptedText += "enter"
				break
			case "i":
				encryptedText += "imes"
				break
			case "a":
				encryptedText += "ai"
				break
			case "o":
				encryptedText += "ober"
				break
			case "u":
				encryptedText += "ufat"
				break
			default:
				encryptedText += letter
		}
	}

	return encryptedText
}

console.log(encrypt("gato"))
