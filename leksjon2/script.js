// Viser feilmelding under et felt
function visFeil(input, feilboksId, melding) {
  const feilboks = document.getElementById(feilboksId);
  input.setCustomValidity(melding); // gjør at feltet blir "ugyldig"
  if (feilboks) {
    feilboks.textContent = melding;
  }
}

// Fjerner feilmeldingen igjen
function fjernFeil(input, feilboksId) {
  input.setCustomValidity("");
  const feilboks = document.getElementById(feilboksId);
  if (feilboks) {
    feilboks.textContent = "";
  }
}

// Sluttdato må være etter startdato
// Dette går ikke an å sjekke bare med HTML, så derfor JS her
function sjekkDatoIntervall(startInput, sluttInput, feilboksId) {
  const start = startInput.value;
  const slutt = sluttInput.value;

  if (start && slutt && slutt <= start) {
    visFeil(sluttInput, feilboksId, "Sluttdato må være etter startdato.");
  } else {
    fjernFeil(sluttInput, feilboksId);
  }
}

// Sjekker at man ikke melder på flere enn det er plass til
function sjekkAntallPlasser(antallInput, maksPlasser, feilboksId) {
  const antall = parseInt(antallInput.value, 10);

  if (!isNaN(antall) && antall > maksPlasser) {
    visFeil(
      antallInput,
      feilboksId,
      `Kun ${maksPlasser} ledige plass(er) igjen på denne turen.`
    );
  } else {
    fjernFeil(antallInput, feilboksId);
  }
}

// Sjekker at passord og bekreft-passord matcher
// (brukes ikke i disse to skjemaene enda, men greit å ha klar)
function sjekkPassordLikhet(passordInput, bekreftInput, feilboksId) {
  if (bekreftInput.value && passordInput.value !== bekreftInput.value) {
    visFeil(bekreftInput, feilboksId, "Passordene er ikke like.");
  } else {
    fjernFeil(bekreftInput, feilboksId);
  }
}
