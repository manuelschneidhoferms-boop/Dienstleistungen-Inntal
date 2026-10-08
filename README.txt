DIENSTLEISTUNGEN INNTAL – WEBSITE
=================================

DATEIEN
- index.html         Hauptseite
- styles.css         Gestaltung, responsive für Smartphones und Desktop
- script.js          Menü und Formular-Verhalten
- impressum.html     Vorlage – vor Veröffentlichung ausfüllen
- datenschutz.html   Vorlage – an tatsächliche Website-Konfiguration anpassen

WICHTIG VOR DER VERÖFFENTLICHUNG
1. In impressum.html Platzhalter für Namen, Anschrift und Kontaktdaten ersetzen.
2. In datenschutz.html tatsächlichen Hosting-Anbieter und die verwendeten externen Dienste ergänzen.
3. Kontaktformular: Öffnet aktuell das E-Mail-Programm mit vorbereitetem Text, versendet aber nicht automatisch.
   Öffnen Sie index.html und suchen Sie in script.js nach:
       window.location.href = 'mailto:?subject=' + subject + '&body=' + body;
   Ersetzen Sie mailto:? durch mailto:IHRE-EMAIL-ADRESSE, z. B. mailto:kontakt@example.de
   (ersetzen Sie die Beispieladresse durch Ihre echte E-Mail-Adresse).
4. Prüfen Sie vor dem Anbieten, dass die jeweiligen Arbeiten von Ihrer Gewerbeanmeldung,
   Qualifikation, Versicherung und den geltenden Vorschriften gedeckt sind.
5. Der Notdienst wird als "nach Verfügbarkeit" beworben, nicht als 24-Stunden-Garantie.
6. Die Website lädt aktuell Google Fonts und ein Unsplash-Hintergrundbild von externen Servern.
   Das wird in datenschutz.html erwähnt. Für mehr Datenschutz können Sie diese Ressourcen lokal hosten.

KOSTENLOS VERÖFFENTLICHEN MIT GITHUB PAGES
1. Erstellen Sie ein kostenloses Konto auf https://github.com/
2. Erstellen Sie ein neues Repository, zum Beispiel "dienstleistungen-inntal".
3. Laden Sie alle fünf Dateien in das Repository hoch (Add file > Upload files).
4. Öffnen Sie im Repository Settings > Pages.
5. Unter "Build and deployment" wählen Sie "Deploy from a branch".
6. Wählen Sie "main" und den Ordner "/ (root)", speichern Sie.
7. Nach der Veröffentlichung zeigt GitHub Pages eine URL in der Form
   https://IHR-BENUTZERNAME.github.io/dienstleistungen-inntal/
   (die genaue URL hängt von Ihrem Benutzernamen und Repository ab).

ALTERNATIVE: Cloudflare Pages kann ebenfalls einen kostenlosen Einstieg bieten.
Eigene Domainnamen sind normalerweise kostenpflichtig. Hosting-Anbieter und Tarife können
sich ändern; prüfen Sie beim Einrichten die aktuellen Bedingungen.

Diese Dateien sind eine Website-Vorlage, keine Rechtsberatung. Ergänzen Sie Pflichtangaben
und prüfen Sie Inhalte vor dem öffentlichen Start.
