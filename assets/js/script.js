//end object
var end={"Sony PlaystationPS2Strategy/TacticsAll":
{"text":"Star Track: Conquest","img":"pic.jpg"},

"Sony PlaystationPS2Strategy/TacticsRecent":
{"text": "Dynasty Tactics 2", "img": "pic2.jpg"},

"Sony PlaystationPS2RPGAll":{"text": "Final Fantasy VII"},

"Sony PlaystationPS2RPGRecent":{"text": "Dragon Quest VIII: Journey of the Cursed King"},

"Sony PlaystationPS3Strategy/TacticsAll":{"text": "XCOM: Enemy Unknown"},

"Sony PlaystationPS3Strategy/TacticsAll":{"text": "XCOM: Enemy Unknown"},

"Sony PlaystationPS3Strategy/TacticsRecent":{"text": "Kingdom Under Fire"},

"Sony PlaystationPS3RPGAll":{"text": "Dark Souls"},

"Sony PlaystationPS3RPGRecent":{"text": "Dragon Age: Inqusition"},

"Sony PlaystationPS4Strategy/TacticsAll":{"text": "XCOM: Enemy Unknown"},

"Sony PlaystationPS4Strategy/TacticsRecent":{"text": "Kingdom Under Fire"},

"Sony PlaystationPS4RPGAll":{"text": "Dark Souls"},

"Sony PlaystationPS4RPGRecent":{"text": "Dragon Age: Inqusition"},



"XBoxXbox OneStrategy/TacticsAll":{"text": "XCOM: Enemy Unknown"},

"XBoxXbox OneStrategy/TacticsRecent":{"text": "Kingdom Under Fire"},

"XBoxXbox OneRPGAll":{"text": "Dark Souls"},

"XBoxXbox OneRPGRecent":{"text": "Dragon Age: Inqusition"},


"XBoxXbox360Strategy/TacticsAll":{"text": "XCOM: Enemy Unknown"},

"XBoxXbox360Strategy/TacticsRecent":{"text": "Kingdom Under Fire"},

"XBoxXbox360RPGAll":{"text": "Dark Souls"},

"XBoxXbox360RPGRecent":{"text": "Dragon Age: Inqusition"},

};

function go(dom){
	modernBrowser();

	if(dom=='init'){
		var hold=data[dom];
	}else{
		var hold=data[dom.value];
		//removes old choices
		while(dom != dom.parentNode.lastChild){
			dom.parentNode.removeChild(dom.parentNode.lastChild);
		}
	}

	//dom is a reference to the select that was last selected

	if(hold != undefined){

		//build my select
		//var selEle is now holding <select id="mySelect"></select>
		var selEle=document.createElement('select');
        selEle.setAttribute('style', 'display: block;position:relative;left:0px;');
		//var selEle is now holding <select></select>

		//first, put on any attributes...
		selEle.setAttribute('id',hold[0]);

        //makes onchange work for IE7
		//selEle.setAttribute('onchange','go(this)');
		if (usingIE){
			selEle.setAttribute('onchange', function(){go(this);}); //IE 7
		}else{
			selEle.setAttribute('onchange','go(this)');
		}


		for(i=0; i<hold.length; i++){
			//build an option
		    var option = document.createElement('option');

			//give it attributes
            option.setAttribute('value', hold[i]);

			//put text inside of option
			option.appendChild(document.createTextNode(hold[i]));

			//put the option inside of the select
			selEle.appendChild(option);
		}


		// appending a select to a page
		selEle.className = 'selectmenu';
		var select =document.getElementById('results').appendChild(selEle);
		document.getElementById('selectMenu').appendChild(select);
		//which select to tell to move?
		//last one
		var x=document.getElementsByTagName('select').length;
		slide(document.getElementsByTagName('select')[x-1]);
		//slide(hold[0]);
		//select.setAttribute('id', 'selectmenu');
		

		}else {
			//get all of the selects values
			var allSel=document.getElementsByTagName('select');
			//for loop
			var last='';
			for(var i=0;i<allSel.length;i++){
				last+=allSel[i].value;
			}
            //returns
            var details = end[last]['text'];


            // if local a browser supports local storage
            if(usingIE){
				SetCookie('details', details); // sets cookies if local storage is not supported by a browser

            }
            else{
				localStorage.setItem('details', details); //puts details to local storage
				var detailsHTML = document.getElementById('detailsContent');
				console.log(detailsHTML.firstChild);
				detailsHTML.appendChild(document.createTextNode(details));
			}
			
			if (detailsHTML !== null ){
				var detailsHTML = document.getElementById('detailsContent');
				console.log('detailsDiv is not empty, should remove last child');
				detailsHTML.removeChild(detailsHTML.firstChild);
				detailsHTML.appendChild(document.createTextNode(details));

			}
			else{
			    var detailsHTML= document.getElementById('detailsContent');
				//detailsHTML.appendChild(document.createTextNode(details));
			}
            

            var value = document.getElementsByTagName('select');
            var results = ' ';
            for( i =0; i < value.length; i++){
            	results = results + ' ' + value[i].value;
            }
      
            document.getElementById('results2').style.display="";

            document.getElementById('results3').style.display="";

            document.getElementById('styleChoices').style.display="";

            document.getElementById('resultsChoices').style.display="";

            document.getElementById('formTitleContainer').style.display="";

            var results2 = document.getElementById('results2').appendChild(document.createTextNode(results));
            document.getElementById('choices').appendChild(results2);

            document.getElementById("form2").style.display= "";
		}

}



//function that validates form2 
function ValidateForm(){
       var name = document.form2.name;
       var email = document.form2.email;
       var comment = document.form2.comments;
       var valueForm =true;

       if (name.value == "")
       {
         document.getElementById("errorName").style.display= "";
         name.focus();
         valueForm = false;
       }

       else{
       	 document.getElementById("errorName").style.display="none";
       }

       if (email.value == "")
       {
         document.getElementById("errorEmail").style.display= "";
         email.focus();
         valueForm = false;
       }
       else{
       	 document.getElementById("errorEmail").style.display="none";
       }

       if (email.value.indexOf("@", 0) < 0)
        {
          document.getElementById("errorEmail").style.display= "";
          email.focus();
          valueForm = false;
        }
        else{
       	 document.getElementById("errorEmail").style.display="none";
        }


        if (email.value.indexOf(".", 0) < 0)
        {
          document.getElementById("errorEmail").style.display= "";
          email.focus();
          valueForm = false;
        }
        else{
       	 document.getElementById("errorEmail").style.display="none";
        }
        return valueForm;
    }

//checks a local storage 
function checkStorage(){

  	   if(usingIE){
			//turn on resultsChoices
			var details = GetCookie('details');
			if(details == null){
				console.log("IE - storage empty");				            
			}
			else{
			document.getElementById('detailsContent').appendChild(document.createTextNode(details));  
			console.log("IE - storage not empty");
            var detailsHTML = document.getElementById('detailsContent');
            }
  	    } 
  	    else {	       
  	   	   var details = localStorage.getItem('details', details);
  	   	   if(details == null){
  	   	   	  console.log(" Not IE - storage empty");       	   	   	  
  	   	   }
  	   	   else{
  	   	   document.getElementById('detailsContent').appendChild(document.createTextNode(details));
  	   	   console.log("Not IE - stotage not empty");
  	   	   var detailsHTML = document.getElementById('detailsContent');
	  	   }
	   }

  }

//redirects to a modern browser
function modernBrowser(){
		if (!document.getElementById){
			alert('Outdated Browser, Please Update to Firefox');
			window.location = "https://www.mozilla.org/en-US/firefox/new/";
		}else{
			return;
		}
	}

// slider function - DHTML
function slide(dom){
		//var dom=document.getElementById(id);
		if(parseInt(dom.style.left) < 30){
				dom.style.left=parseInt(dom.style.left)+ 3+ 'px';
				//this calls the function slide(id) in 30 milliseconds
				setTimeout( function(){slide(dom);}, 30);
			}
		}

function clearReset(){
	 document.getElementById("errorName").style.display="none";
	 document.getElementById("errorEmail").style.display="none";

}