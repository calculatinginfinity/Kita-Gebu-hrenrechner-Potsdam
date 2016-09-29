function berechneKitaGebuehren (json) {

	var ergebnis = 0;
	var gehaltId = -1;
	var stundenAnzahl = radioWert(document.Stundenform.Stundenanzahl);
	var betreuungsArt = radioWert(document.Betreuungsform.Betreuungsart);
	
	var multiplikatorKinderAnzahl = parseFloat(radioWert(document.Kinderform.anzahlKinder));


	/*
	* Berechnet zunächst das Gesamtgehalt und es am Bildschirm auszugeben
	*/
	gehalt1 = parseFloat(document.getElementById("gehalt1").value);
	gehalt2 = parseFloat(document.getElementById("gehalt2").value);

	//falls im anderen Feld keine oder eine ungültige Eingabe steht (=false)
	if (!gehalt1)
	{
		gehalt1 = 0;

	}
	if (!gehalt2)
	{
		gehalt2 = 0;
	}



	//$('#gesamtgehalt').html(gehalt1 + gehalt2);
	//formatiereGesamtgehalt(gehalt1 + gehalt2);

	$('#gesamtgehalt').html(formatiereGesamtgehalt(gehalt1 + gehalt2));
	




	//Ermitteln, in welchem Gehaltsbereich sich das eingegebene Gesamtgehalt befindet
	gehaltId = getGehaltId(gehalt1 + gehalt2);



	/*
	*  Gebühren aus dem JSON-Objekt auslesen
	*/ 
	if (betreuungsArt == 'krippe')
	{			
	
		if (stundenAnzahl == 6)
		{
			ergebnis = json.kitagebueren[gehaltId].krippe.stunden6;
		}
		else if (stundenAnzahl == 8)
		{
			ergebnis = json.kitagebueren[gehaltId].krippe.stunden8;

		}
		else
		{
			ergebnis = json.kitagebueren[gehaltId].krippe.stunden10;
		}
	}
	else if (betreuungsArt == 'kindergarten')
	{

		//alert(betreuungsArt);

		if (stundenAnzahl == 6)
		{
			ergebnis = json.kitagebueren[gehaltId].kindergarten.stunden6;
		}
		else if (stundenAnzahl == 8)
		{
			ergebnis = json.kitagebueren[gehaltId].kindergarten.stunden8;

		}
		else
		{
			ergebnis = json.kitagebueren[gehaltId].kindergarten.stunden10;
		}

	}
	else
	{

		if (stundenAnzahl == 6)
		{
			ergebnis = json.kitagebueren[gehaltId].hort.stunden4;
		}
		else if (stundenAnzahl == 8)
		{
			ergebnis = json.kitagebueren[gehaltId].hort.stunden6;

		}
		else
		{
			ergebnis = json.kitagebueren[gehaltId].hort.stunden8;
		}
	}

	document.getElementById("gebuehr").value = Math.round(ergebnis * multiplikatorKinderAnzahl *100) /100;

}





/*
 * Ermitteln, in welchem Gehaltsbereich sich das eingegebene Gehalt befindet
 * (vergl. Gebühren aus dem Kita-Satzungs PDF)
*/
function getGehaltId(gesamtgehalt) {

	var gehltId = 0;


	if (gesamtgehalt < 22001) {
		gehaltId = 0;
	}
	else if (gesamtgehalt < 24501) {
		gehaltId = 1;
	}
	else if (gesamtgehalt < 27001) {
		gehaltId = 2;
	}
	else if (gesamtgehalt < 29501) {
		gehaltId = 3;
	}
	else if (gesamtgehalt < 32001) {
		gehaltId = 4;
	}
	else if (gesamtgehalt < 34501) {
		gehaltId = 5;
	}
	else if (gesamtgehalt < 37001) {
		gehaltId = 6;
	}
	else if (gesamtgehalt < 39501) {
		gehaltId = 7;
	}
	else if (gesamtgehalt < 42001) {
		gehaltId = 8;
	}
	else if (gesamtgehalt < 44501) {
		gehaltId = 9;
	}
	else if (gesamtgehalt < 47001) {
		gehaltId = 10;
	}
	else if (gesamtgehalt < 49501) {
		gehaltId = 11;
	}
	else if (gesamtgehalt < 52001) {
		gehaltId = 12;
	}
	else if (gesamtgehalt < 54501) {
		gehaltId = 13;
	}
	else if (gesamtgehalt < 57001) {
		gehaltId = 14;
	}
	else if (gesamtgehalt < 59501) {
		gehaltId = 15;
	}
	else if (gesamtgehalt < 62001) {
		gehaltId = 16;
	}
	else if (gesamtgehalt < 64501) {
		gehaltId = 17;
	}
	else if (gesamtgehalt < 67001) {
		gehaltId = 18;
	}
	else if (gesamtgehalt < 69501) {
		gehaltId = 19;
	}
	else if (gesamtgehalt < 72001) {
		gehaltId = 20;
	}
	else if (gesamtgehalt < 74501) {
		gehaltId = 21;
	}
	else if (gesamtgehalt < 77001) {
		gehaltId = 22;
	}
	else if (gesamtgehalt < 79501) {
		gehaltId = 23;
	}
	else if (gesamtgehalt < 82001) {
		gehaltId = 24;
	}
	else if (gesamtgehalt < 84501) {
		gehaltId = 25;
	}
	else if (gesamtgehalt < 87001) {
		gehaltId = 26;
	}
	else if (gesamtgehalt < 89501) {
		gehaltId = 27;
	}
	else if (gesamtgehalt < 92001) {
		gehaltId = 28;
	}
	else if (gesamtgehalt < 94501) {
		gehaltId = 29;
	}
	else if (gesamtgehalt < 97001) {
		gehaltId = 30;
	}
	else if (gesamtgehalt < 99501) {
		gehaltId = 31;
	}
	else if (gesamtgehalt < 102001) {
		gehaltId = 32;
	}
	else if (gesamtgehalt < 104501) {
		gehaltId = 33;
	}
	else if (gesamtgehalt < 107001) {
		gehaltId = 34;
	}
	else if (gesamtgehalt < 109501) {
		gehaltId = 35;
	}
	else if (gesamtgehalt < 112001) {
		gehaltId = 36;
	}
	else if (gesamtgehalt < 114501) {
		gehaltId = 37;
	}
	else if (gesamtgehalt < 117001) {
		gehaltId = 38;
	}
	else if (gesamtgehalt < 119501) {
		gehaltId = 39;
	}
	else if (gesamtgehalt < 122001) {
		gehaltId = 40;
	}
	else if (gesamtgehalt < 124501) {
		gehaltId = 41;
	}
	else if (gesamtgehalt < 127001) {
		gehaltId = 42;
	}
	else if (gesamtgehalt < 129501) {
		gehaltId = 43;
	}
	else if (gesamtgehalt < 132001) {
		gehaltId = 44;
	}
	else if (gesamtgehalt < 134501) {
		gehaltId = 45;
	}
	else if (gesamtgehalt < 137001) {
		gehaltId = 46;
	}
	else if (gesamtgehalt < 139501) {
		gehaltId = 47;
	}
	else if (gesamtgehalt < 142001) {
		gehaltId = 48;
	}
	else if (gesamtgehalt < 144501) {
		gehaltId = 49;
	}
	else if (gesamtgehalt < 147001) {
		gehaltId = 50;
	}
	else if (gesamtgehalt < 149501) {
		gehaltId = 51;
	}
	else {
		gehaltId = 52;
	}

	return gehaltId;

}




/*
 *  Funktion gibt eine Zahl als String mit Punkten hinter den Millionen- und Tausenderstellen aus
 *  Beispiel: 1000000 -> "1.000.000"
 */
function formatiereGesamtgehalt(zahl) {

	
	zahl = Math.round(zahl)

	var gesamtgehaltMillionen = Math.floor((zahl)/1000000);
	var gesamtgehaltTausender = Math.floor((zahl)/1000);
	var gesamtgehaltHunderter = (zahl)%1000;
	var gesamtgehaltHunderterString = "";
	var gesamtgehaltTausenderString = "";

	gesamtgehaltTausender = gesamtgehaltTausender%1000;

	//die letzten drei Ziffern korrekt darstellen
	if ((gesamtgehaltHunderter > 0 && gesamtgehaltHunderter < 10 && gesamtgehaltTausender>0) || (gesamtgehaltHunderter > 0 && gesamtgehaltHunderter < 10 && gesamtgehaltMillionen>0))
	{
		gesamtgehaltHunderterString = "00" + String(gesamtgehaltHunderter);
	}
	else if ((gesamtgehaltHunderter > 0 && gesamtgehaltHunderter < 100 && gesamtgehaltTausender>0) || (gesamtgehaltHunderter > 0 && gesamtgehaltHunderter < 100 && gesamtgehaltMillionen>0))
	{
		gesamtgehaltHunderterString = "0" + String(gesamtgehaltHunderter);
	}
	else if (((gesamtgehaltHunderter == 0 && gesamtgehaltTausender>0) || (gesamtgehaltHunderter == 0 && gesamtgehaltMillionen>0))) 
	{
		gesamtgehaltHunderterString = "000";
	}
	else
	{
		gesamtgehaltHunderterString = String(gesamtgehaltHunderter);
	}




	//die Tausenderziffern korrekt darstellen
	if (gesamtgehaltTausender > 0 && gesamtgehaltTausender < 10 && gesamtgehaltMillionen>0) 
	{
		gesamtgehaltTausenderString = "00" + String(gesamtgehaltTausender);
	}
	else if (gesamtgehaltTausender > 0 && gesamtgehaltTausender < 100 && gesamtgehaltMillionen>0) 
	{
		gesamtgehaltTausenderString = "0" + String(gesamtgehaltTausender);
	}
	else if (gesamtgehaltTausender == 0 && gesamtgehaltMillionen>0) 
	{
		gesamtgehaltTausenderString = "000";
	}
	else
	{
		gesamtgehaltTausenderString = String(gesamtgehaltTausender);
	}


	//den Ausgabestring zusammensetzen und ausgeben
	if (gesamtgehaltMillionen>0)
	{
		return String(gesamtgehaltMillionen) + "." + gesamtgehaltTausenderString + "." + gesamtgehaltHunderterString;
	}
	else if (gesamtgehaltTausender>0)
	{
		return gesamtgehaltTausenderString + "." + gesamtgehaltHunderterString;
	}
	else
	{
		return gesamtgehaltHunderterString;
	}

}





//liest die Auswahl der Radion-Buttons aus
function radioWert(rObj) {

	for (var i=0; i<rObj.length; i++) if (rObj[i].checked) return rObj[i].value;
	return false;
}





/*
 *	Initialisierunt, danach
 *	löst diese Funktion alle Events aus 
 */ 
$( document ).ready(function() {

	/* Initial auf Null */
	$('#gebuehr').html('0');
	$('#gesamtgehalt').html('0');
	var gehalt1 = 0;
	var gehalt2 = 0;
	var gebuehrenjson;


	//Lädt die externe JSON-Datei in Variable
	$.getJSON("gebuehren.json", function(json) {
		gebuehrenjson = json;
	});


	/* Stundenanzahl ändern */
	$('input[name="Betreuungsart"]').on('change', function() {
	
		switch ($(this).val()) {

			case 'hort':
				//console.log('HORT');
				$('#stunden-1').html('4');
				$('#stunden-2').html('6');
				$('#stunden-3').html('8');
				break;

			default:
				//console.log('ANDERES');
				$('#stunden-1').html('6');
				$('#stunden-2').html('8');
				$('#stunden-3').html('10');
				break;
		}

	});



	$('input[id="gehalt1"]').on('change, keyup', function(){
		berechneKitaGebuehren(gebuehrenjson);
	})


	$('input[id="gehalt2"]').on('change, keyup', function(){
		berechneKitaGebuehren(gebuehrenjson);
	})

 	//change, keyup und mousup lassen sich nicht kombinieren???
 	//deshalb die Blöcke nun doppelt
	$('input[id="gehalt1"]').on('mouseup', function(){
		berechneKitaGebuehren(gebuehrenjson);
	})


	$('input[id="gehalt2"]').on('mouseup', function(){
		berechneKitaGebuehren(gebuehrenjson);
	})

	/* Änderungen im Formular */
	$('input[name="Betreuungsart"], input[name="Stundenanzahl"], input[name="anzahlKinder"]').on('change', function(){

		berechneKitaGebuehren(gebuehrenjson);

	});

});
