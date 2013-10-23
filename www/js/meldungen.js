jQuery(document).ready(function () {
	
    // set global Variables
    var mMeldung, mAddition, m_key;
    var mLostFound, mTrainNumber, mNumberPersons, mLift, mWheelchair, mEscort, mArrivalStation, mMaPhone, mLiftArrivelTime, mLiftEndedTime, mPoliceInfo, mHospitalInfo, mConcernSecurity;
    var mName, mAddress, mContact;
		
    if (localStorage.getItem("fe_user")) {
        // Set key for Meldung
        m_key = 'm_' + localStorage.getItem("fe_user");
    }
		
    function newMeldung(feUser,mString){
    
        //consoleLog('debug', "Create new Stoerungsmeldung / Start");
        
        var hmac, d, m, data, mDateTime, mPosition, mMeldung, url, request, jqxhr, uid, jmString, mPics, pData, mAddition;
        var m_key = 'm_' + localStorage.getItem("fe_user");
            
        //      hmac = 'a:3:{s:19:"newStoerungsmeldung";a:6:{s:6:"feUser";i:1;s:4:"type";i:1;s:8:"addition";i:1;s:8:"dateTime";i:1;s:7:"geoData";i:1;s:6:"images";i:1;}s:6:"action";i:1;s:10:"controller";i:1;}3ddd27c6a2cbeafbcbcffd18b4458ff35854b91b';
        
        hmac = 'a:3:{s:19:"newStoerungsmeldung";a:21:{s:6:"feUser";i:1;s:4:"type";i:1;s:8:"dateTime";i:1;s:7:"geoData";i:1;s:6:"images";i:1;s:14:"arrivalStation";i:1;s:11:"maPhoneInfo";i:1;s:10:"policeInfo";i:1;s:12:"hospitalInfo";i:1;s:15:"liftArrivelTime";i:1;s:13:"liftEndedTime";i:1;s:15:"concernSecurity";i:1;s:4:"name";i:1;s:7:"address";i:1;s:7:"contact";i:1;s:9:"lostFound";i:1;s:11:"trainNumber";i:1;s:4:"lift";i:1;s:10:"wheelchair";i:1;s:6:"escort";i:1;s:13:"numberPersons";i:1;}s:6:"action";i:1;s:10:"controller";i:1;}d8d5d7f9b88f78e2bfe7c7ac7e27b29c1954f318';
        //mString = '{ "datetime" : "' + mDateTime + '", "position" : "' + mPos + '", "meldung" : "' + mMeldung + '" }';
        
        jmString = JSON.parse(mString);   
        
        mDateTime = jmString[0]["datetime"];
        mPosition = jmString[0]["position"];
        mMeldung = jmString[0].meldung;
        mPics = jmString[0].pics;        
        mLostFound = jmString[0].lostfound;
        mTrainNumber = jmString[0].trainnumber;
        mNumberPersons = jmString[0].numberpersons;
        mLift = jmString[0].lift;
        mWheelchair = jmString[0].wheelchair;
        mEscort = jmString[0].escort;
        mArrivalStation = jmString[0].arrivalstation;
        mMaPhone = jmString[0].maphone;
        mLiftArrivelTime = jmString[0].liftarrivaltime;
        mLiftEndedTime = jmString[0].liftendedtime;
        mPoliceInfo = jmString[0].policeinfo;
        mHospitalInfo = jmString[0].hospitalinfo;
        mConcernSecurity = jmString[0].concernsecurity;
        mName = jmString[0].name;
        mAddress = jmString[0].address; 
        mContact = jmString[0].contact;
        
    
        url = "http://active.mungos-services.at/index.php";

        data = {
            'id': 79,
            'no_cache': 1,
            'type': 97,
            'tx_mungosstoerung_mungosstoerung[action]': "create",
            'tx_mungosstoerung_mungosstoerung[controller]': "Stoerungsmeldung",
            'tx_mungosstoerung_mungosstoerung[__referrer][extensionName]': "MungosStoerung",
            'tx_mungosstoerung_mungosstoerung[__referrer][controllerName]': "Stoerungsmeldung",
            'tx_mungosstoerung_mungosstoerung[__referrer][actionName]': "new",
            'tx_mungosstoerung_mungosstoerung[newStoerungsmeldung][feUser]': feUser,
            'tx_mungosstoerung_mungosstoerung[newStoerungsmeldung][dateTime]': mDateTime,
            'tx_mungosstoerung_mungosstoerung[newStoerungsmeldung][geoData]': mPosition,
            'tx_mungosstoerung_mungosstoerung[newStoerungsmeldung][type]': mMeldung,   
            'tx_mungosstoerung_mungosstoerung[newStoerungsmeldung][images]': mPics, 
            'tx_mungosstoerung_mungosstoerung[newStoerungsmeldung][lostFound]': mLostFound, 
            'tx_mungosstoerung_mungosstoerung[newStoerungsmeldung][trainNumber]': mTrainNumber, 
            'tx_mungosstoerung_mungosstoerung[newStoerungsmeldung][numberPersons]': mNumberPersons, 
            'tx_mungosstoerung_mungosstoerung[newStoerungsmeldung][lift]': mLift, 
            'tx_mungosstoerung_mungosstoerung[newStoerungsmeldung][wheelchair]': mWheelchair, 
            'tx_mungosstoerung_mungosstoerung[newStoerungsmeldung][escort]': mEscort, 
            'tx_mungosstoerung_mungosstoerung[newStoerungsmeldung][arrivalStation]': mArrivalStation, 
            'tx_mungosstoerung_mungosstoerung[newStoerungsmeldung][maPhoneInfo]': mMaPhone, 
            'tx_mungosstoerung_mungosstoerung[newStoerungsmeldung][liftArrivelTime]': mLiftArrivelTime, 
            'tx_mungosstoerung_mungosstoerung[newStoerungsmeldung][liftEndedTime]': mLiftEndedTime, 
            'tx_mungosstoerung_mungosstoerung[newStoerungsmeldung][policeInfo]': mPoliceInfo, 
            'tx_mungosstoerung_mungosstoerung[newStoerungsmeldung][hospitalInfo]': mHospitalInfo, 
            'tx_mungosstoerung_mungosstoerung[newStoerungsmeldung][concernSecurity]': mConcernSecurity, 
            'tx_mungosstoerung_mungosstoerung[newStoerungsmeldung][name]': mName, 
            'tx_mungosstoerung_mungosstoerung[newStoerungsmeldung][address]': mAddress, 
            'tx_mungosstoerung_mungosstoerung[newStoerungsmeldung][contact]': mContact, 
            'tx_mungosstoerung_mungosstoerung[__hmac]': hmac
        };
    
        $.jsonp({
            url: url,
            data: data,
            callbackParameter: 'jsonp_callback',
            success: function() { 
                //alert("Meldung erfolgreich");
                localStorage.removeItem(m_key);
                localStorage.removeItem("pics");   
                jQuery("input[type=text], textarea").val("");
                jQuery("input[type=checkbox]").attr('checked', false);
                jQuery("input[type=radio]").attr('checked', false);
                jQuery("#eingetroffeneStunde").val("");
                jQuery("#eingetroffeneMinute").val("");
                jQuery("#beendetStunde").val("");
                jQuery("#beendetMinute").val("");
            },
            error: function(xOptions, textStatus, error){
                //alert("Meldung fehlgeschlagen: " + JSON.stringify(xOptions) + " " + textStatus + " " + error);
            }
        });               
        
        return false;
        
    }		      
    
    jQuery(".saveMeldung").on('click', function () {
        
        if(jQuery(this).hasClass("meldung01")) {
            mMeldung = "Vandalismus";
        }else if(jQuery(this).hasClass("meldung02")) {
            mMeldung = "Lost & Found";
        }else if(jQuery(this).hasClass("meldung03")) {
            mMeldung = "Unangemeldete Ein-, Ausstieghilfe";            
        }else if(jQuery(this).hasClass("meldung04")) {
            mMeldung = "Aufzugsbefreiung";             
        }else if(jQuery(this).hasClass("meldung05")) {
            mMeldung = "Gewalt an Mitarbeiter";                
        }else if(jQuery(this).hasClass("meldung06")) {
            mMeldung = "Einbruch / Diebstahl";                
        }else if(jQuery(this).hasClass("meldung07")) {
            mMeldung = "Beschwerden / Anfragen";               
        }else if(jQuery(this).hasClass("meldung08")) {
            mMeldung = "Randgruppen";    
        }else if(jQuery(this).hasClass("meldung09")) {
            mMeldung = "Raucherstrafen";   
        }else if(jQuery(this).hasClass("meldung10")) {
            mMeldung = "Verweise / Belehrung";
        }
        
        mLostFound = jQuery(".meRadio:checked").length > 0 ? jQuery(".meRadio:checked").val() : "";
        mTrainNumber = jQuery("#uEzn").val().length > 0 ? jQuery("#uEzn").val() : "";
        mNumberPersons = jQuery("#uEAz").val().length > 0 ? jQuery("#uEAz").val() : "";
        mArrivalStation = jQuery("#uEbh").val().length > 0 ? jQuery("#uEbh").val() : "";
        mLift = jQuery("#Hebelift").prop('checked') ? 1 : 0;
        mWheelchair = jQuery("#Bahnrollstuhl").prop('checked') ? 1 : 0;
        mEscort = jQuery("#Begleitung").prop('checked') ? 1 : 0;
        mMaPhone = jQuery("#maTel").prop('checked') ? 1 : 0;
        mLiftArrivelTime = jQuery("#eingetroffeneStunde").val().length > 0 && jQuery("#eingetroffeneMinute").val().length ? 
            jQuery("#eingetroffeneStunde").val()+":"+jQuery("#eingetroffeneMinute").val() : "";
        mLiftEndedTime = jQuery("#beendetStunde").val().length > 0 && jQuery("#beendetMinute").val().length ? 
            jQuery("#beendetStunde").val()+":"+jQuery("#beendetMinute").val() : "";       
        mConcernSecurity = jQuery("#Konzernsicherheit").prop('checked') ? 1 : 0;
        mName = jQuery("#beschwerdeName").val().length > 0 ? jQuery("#beschwerdeName").val() : ""; 
        mAddress = jQuery("#beschwerdeAdresse").val().length > 0 ? jQuery("#beschwerdeAdresse").val() : ""; 
        mContact = jQuery("#beschwerdeKontakt").val().length > 0 ? jQuery("#beschwerdeKontakt").val() : ""; 
        
        if(jQuery("#wachzimmer").val().length > 0){
            mPoliceInfo = jQuery("#wachzimmer").val();
        }
        else if(jQuery("#gewaltWachzimmer").val().length > 0){
            mPoliceInfo = jQuery("#gewaltWachzimmer").val();
        }        
        else if(jQuery("#gewaltWachzimmer").val().length > 0){
            mPoliceInfo = jQuery("#gewaltWachzimmer").val();
        }  
        else if(jQuery("#einbruchWachzimmer").val().length > 0){
            mPoliceInfo = jQuery("#einbruchWachzimmer").val();
        }  else {
            mPoliceInfo = "";
        }
        
        if(jQuery("#gewaltKrankenhaus").val().length > 0){
            mHospitalInfo = jQuery("#gewaltKrankenhaus").val();
        }  
        else if(jQuery("#einbruchKrankenhaus").val().length > 0){
            mHospitalInfo = jQuery("#einbruchKrankenhaus").val();
        }else {
            mHospitalInfo = "";
        }
             
        
        // opens the confirm dialog
        jQuery.mobile.changePage("#confirmDialog", {
            transition: "slidedown", 
            changeHash: false
        });
            
        // writes the text of the current meldung in the confirm box
        jQuery(".confContent").find("h1").text("Möchten Sie die Meldung \""+mMeldung+"\" abschicken?");     
        
    });
         
    jQuery(".mConfirm").on('click',function () {
        
        var mDateTime, mString, position, mPos, mPics;        
        
        navigator.geolocation.getCurrentPosition(saveLocalMeldung, onGeoError);   
        
        // set Meldungsstring in Localstorage    
        function saveLocalMeldung(position){

            d = new Date();
            m = d.getMonth() + 1;

            mDateTime = d.getHours() + ':' + d.getMinutes() + ':' +  d.getSeconds() + ' ' + d.getDate() + '-' + m + '-' + d.getFullYear();                
            mPos = position.coords.latitude + "," + position.coords.longitude;
            mPics = localStorage.getItem("pics");

            mString = '[{   "datetime" : "' + mDateTime 
                + '", "position" : "' + mPos 
                + '", "meldung" : "' + mMeldung 
                + '", "pics" : "' + mPics 
                + '", "lostfound" : "' + mLostFound 
                + '", "trainnumber" : "' + mTrainNumber 
                + '", "numberpersons" : "' + mNumberPersons 
                + '", "lift" : "' + mLift 
                + '", "wheelchair" : "' + mWheelchair 
                + '", "escort" : "' + mEscort 
                + '", "arrivalstation" : "' + mArrivalStation 
                + '", "maphone" : "' + mMaPhone 
                + '", "liftarrivaltime" : "' + mLiftArrivelTime 
                + '", "liftendedtime" : "' + mLiftEndedTime 
                + '", "policeinfo" : "' + mPoliceInfo 
                + '", "hospitalinfo" : "' + mHospitalInfo 
                + '", "concernsecurity" : "' + mConcernSecurity 
                + '", "name" : "' + mName 
                + '", "address" : "' + mAddress 
                + '", "contact" : "' + mContact 
                + '" }]';

            localStorage.setItem(m_key, mString);    
            
            saveMeldung();
        }  
        
        function saveMeldung() {  
                
            uploadFiles();

            // Set key for Meldung
            m_key = 'm_' + localStorage.getItem("fe_user");   

            newMeldung(localStorage.getItem("fe_user"),localStorage.getItem(m_key));

            jQuery(".meForm").each(function(){
                jQuery(this).slideUp("fast").siblings("a.meldungButtonD").find("img").attr('src', 'img/meldungButtonPlus.png');
            });
        }
        
		function onGeoError(error) {
        
        var d = new Date();
        
        var span_date = '<span>Zeit: ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + '</span>';        
        //jQuery("#permaCheck").append("<span><b>Error</b></span> "+ span_date + "<br><hr>");
        }        
    });
    
    jQuery(".mBreak").on('click', function () {
        m_key = 'm_' + localStorage.getItem("fe_user"); 
        
                localStorage.removeItem(m_key);
                localStorage.removeItem("pics");   
                jQuery("input[type=text], textarea").val("");
                jQuery("input[type=checkbox]").attr('checked', false);
                jQuery("input[type=radio]").attr('checked', false);
                jQuery("#eingetroffeneStunde").val("");
                jQuery("#eingetroffeneMinute").val("");
                jQuery("#beendetStunde").val("");
                jQuery("#beendetMinute").val("");
        
        jQuery(".meForm").slideUp("fast").siblings("a.meldungButtonD").find("img").attr('src', 'img/meldungButtonPlus.png');    
        
    });
    
    jQuery(".showMeForm").on('click', function () {
        if (jQuery(this).next(".meForm").hasClass("active")){
            jQuery(this).next(".meForm").slideUp("fast").removeClass("active");
            jQuery(this).find("img.mbPlus").attr('src', 'img/meldungButtonPlus.png');
        }else {
            jQuery(".meForm").slideUp("fast").removeClass("active");
            jQuery(".showMeForm").find("img.mbPlus").attr('src', 'img/meldungButtonPlus.png')
            jQuery(this).next(".meForm").slideDown("fast").addClass("active");
            jQuery(this).find("img.mbPlus").attr('src', 'img/meldungButtonMinus.png');
        }
    });  
    
});