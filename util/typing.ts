const typewriter = (text = "teste") => {
  const iScrollAt = 20; // start scrolling up at this many lines
  let iRow = 0; // initialise current row
  let sContents = ""; // initialise contents variable
  let iIndex = 0; // start printing array at this posision
  const iSpeed = 100; // time delay of print out
  let iTextPos = 0; // initialise text position
  let iArrLength = text[0].length; // the length of the text array
  sContents = " ";
  iRow = Math.max(0, iIndex - iScrollAt);
  const destination = document.getElementById("typedtext");

  while (iRow < iIndex) {
    sContents += text[iRow++] + "<br />";
  }
  if (destination)
    destination.innerHTML =
      sContents + text[iIndex].substring(0, iTextPos) + "_";
  if (iTextPos++ == iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex != text.length) {
      iArrLength = text[iIndex].length;
      setTimeout("typewriter()", 500);
    }
  } else {
    setTimeout("typewriter()", iSpeed);
  }
};

export { typewriter };
