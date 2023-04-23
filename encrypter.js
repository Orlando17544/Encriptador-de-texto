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

function decrypt(text) {

	let decryptedText = text

	decryptedText = decryptedText.replace("enter", "e")
	decryptedText = decryptedText.replace("imes", "i")
	decryptedText = decryptedText.replace("ai", "a")
	decryptedText = decryptedText.replace("ober", "o")
	decryptedText = decryptedText.replace("ufat", "u")

	return decryptedText
}

console.log(encrypt("gato"))
console.log(decrypt("gaitober"))
