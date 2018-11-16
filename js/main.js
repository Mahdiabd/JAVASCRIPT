function GRAS() {document.getElementById("TUN").style.fontWeight = "bold";}
function INCL() {document.getElementById("TUN").style.fontStyle = "italic";}
function SOUS() {document.getElementById("TUN").style.textDecoration = "underline";}

function SIZE()
    {   
		switch(document.getElementById("choice").value) 
		{
			case "12":
				document.getElementById("TUN").style.fontSize="12px";
				break;
			case "14":
				document.getElementById("TUN").style.fontSize="14px";
				break;
			case "16":
				document.getElementById("TUN").style.fontSize="16px";
				break;
			case "18":
				document.getElementById("TUN").style.fontSize="18px";
				break;				
		}
    }
    
    function styleT()
    { 	switch(document.getElementById("police").value) 
		{
			case "1":
				document.getElementById("TUN").style.fontFamily="Helvetica";
				break;
			case "2":
				document.getElementById("TUN").style.fontFamily="Optima";
				break;
			case "3":
				document.getElementById("TUN").style.fontFamily="tahoma";
				break;
			case "4":
				document.getElementById("TUN").style.fontFamily="verdana";
				break;				
		}
	}
	