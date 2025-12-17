import qrcode

# Deine GitHub Pages URL
url = "https://rphlstck.github.io/geschenk/"

# Konfiguration des QR-Codes
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)

qr.add_data(url)
qr.make(fit=True)

# Erstelle das Bild (Farben kannst du hier anpassen)
img = qr.make_image(fill_color="black", back_color="white")

# Speichere die Datei
img.save("weihnachts_raetsel_qr.png")

print("QR-Code wurde erfolgreich als 'weihnachts_raetsel_qr.png' gespeichert!")