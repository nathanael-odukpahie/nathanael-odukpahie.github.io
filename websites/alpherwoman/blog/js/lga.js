﻿$(document).ready(function() {

    $(function(){
        var chbxs = $(':checkbox[required]');
        var namedChbxs = {};
        chbxs.each(function(){
            var name = $(this).attr('name');
            namedChbxs[name] = (namedChbxs[name] || $()).add(this);
        });
        chbxs.change(function(){
            var name = $(this).attr('name');
            var cbx = namedChbxs[name];
            if(cbx.filter(':checked').length>0){
                cbx.removeAttr('required');
            }else{
                cbx.attr('required','required');
            }
        });
    });

    $('.optional').attr('required',false);
    $('select#state').niceSelect('destroy');
    $('select#lga').niceSelect('destroy');
    $('select#gender').niceSelect('destroy');
    $('select#gender2').niceSelect('destroy');
    $("select#state").select2();
    $("select#lga").select2();
    $("select#gender").select2();
    $("select#religion").select2();
    $('#preligion').change(function () {
        $('.optional').attr('required',false);
        if($(this).val() == 'oth'){
            $('#other-religion').attr('required',true);
            $('#other-religion').show();
        }
        else{
            $('#other-religion').hide();
        }
    })
    $("select#education").select2();
    $("select#gender2").select2();
    $('.bus').hide();
    $('.prof').hide();
    $('.oths').hide();
    $('#who').change(function () {
        $('.optional').attr('required',false);
        if($(this).val() == 'professional'){
            $('.bus').hide();
            $('.oths').hide();
            $('.prof').show();
            $('#other-occupation').hide();
            $('#organ').attr('required',true);
            $('#job').attr('required',true);
            $('#org-ind').attr('required',true);
            $('#education').attr('required',true);
        }
        else if($(this).val() == 'business'){
            $('.prof').hide();
            $('.oths').hide();
            $('.bus').show();
            $('#other-occupation').hide();
            $('#bname').attr('required',true);
            $('#btitle').attr('required',true);
            $('#bus-ind').attr('required',true);
            $('#quest1').attr('required',true);
            $('#quest2').attr('required',true);
            $('#brief-desc').attr('required',true);
        }
        else if($(this).val() == 'others'){
            $('.bus').hide();
            $('.prof').hide();
            $('.oths').show();
            $('#other-occupation').attr('required',true);
        }
    })
    $('select#who').select2();
    $('select#pstate').select2();
    $('select#pgender').select2();
    $('select#preligion').select2();
    $('select#quest1').select2();
    $('select#quest2').select2();
    $('select#org-ind').select2();
    $('select#bus-ind').select2();
    $('select#hear').select2();
    $('#hear').change(function () {
        $('.optional').attr('required',false);
        if($(this).val() == 'other'){
            $('#other-reason').attr('required',true);
            $('#other-reason').show();
        }
        else{
            $('#other-reason').attr('required',false);
            $('#other-reason').hide();
        }
    })
    var input1 = document.querySelector(".phone");
    window.intlTelInput(input1, {
      preferredCountries: ['ng'],
      utilsScript: "blog/js/utils.js",
    });
    var input2 = document.querySelector(".phones");
    window.intlTelInput(input2, {
      preferredCountries: ['ng'],
      utilsScript: "blog/js/utils.js",
    });
    // $("#state").change(function() {
    //     var state=$(this).val();
    //     switch (state) {
    //         case "Abia": var data=['Select LGA', 'Aba North', 'Aba South', 'Arochukwu', 'Bende', 'Ikwuano', 'Isiala Ngwa North', 'Isiala Ngwa South', 'Isuikwuato', 'Obi Ngwa', 'Ohafia', 'Osisioma', 'Ugwunagbo', 'Ukwa East', 'Ukwa West', 'Umuahia North', 'muahia South', 'Umu Nneochi'];
    //         break;
    //         case "Adamawa": var data=['Select LGA', 'Demsa', 'Fufure', 'Ganye', 'Gayuk', 'Gombi', 'Grie', 'Hong', 'Jada', 'Larmurde', 'Madagali', 'Maiha', 'Mayo Belwa', 'Michika', 'Mubi North', 'Mubi South', 'Numan', 'Shelleng', 'Song', 'Toungo', 'Yola North', 'Yola South'];
    //         break;
    //         case "AkwaIbom": var data=['Select LGA', 'Abak', 'Eastern Obolo', 'Eket', 'Esit Eket', 'Essien Udim', 'Etim Ekpo', 'Etinan', 'Ibeno', 'Ibesikpo Asutan', 'Ibiono-Ibom', 'Ika', 'Ikono', 'Ikot Abasi', 'Ikot Ekpene', 'Ini', 'Itu', 'Mbo', 'Mkpat-Enin', 'Nsit-Atai', 'Nsit-Ibom', 'Nsit-Ubium', 'Obot Akara', 'Okobo', 'Onna', 'Oron', 'Oruk Anam', 'Udung-Uko', 'Ukanafun', 'Uruan', 'Urue-Offong Oruko', 'Uyo'];
    //         break;
    //         case "Anambra": var data=['Select LGA', 'Aguata', 'Anambra East', 'Anambra West', 'Anaocha', 'Awka North', 'Awka South', 'Ayamelum', 'Dunukofia', 'Ekwusigo', 'Idemili North', 'Idemili South', 'Ihiala', 'Njikoka', 'Nnewi North', 'Nnewi South', 'Ogbaru', 'Onitsha North', 'Onitsha South', 'Orumba North', 'Orumba South', 'Oyi'];
    //         break;
    //         case "Anambra": var data=['Select LGA', 'Aguata', 'Anambra East', 'Anambra West', 'Anaocha', 'Awka North', 'Awka South', 'Ayamelum', 'Dunukofia', 'Ekwusigo', 'Idemili North', 'Idemili South', 'Ihiala', 'Njikoka', 'Nnewi North', 'Nnewi South', 'Ogbaru', 'Onitsha North', 'Onitsha South', 'Orumba North', 'Orumba South', 'Oyi'];
    //         break;
    //         case "Bauchi": var data=['Select LGA', 'Alkaleri', 'Bauchi', 'Bogoro', 'Damban', 'Darazo', 'Dass', 'Gamawa', 'Ganjuwa', 'Giade', 'Itas-Gadau', 'Jama are', 'Katagum', 'Kirfi', 'Misau', 'Ningi', 'Shira', 'Tafawa Balewa', ' Toro', ' Warji', ' Zaki'];
    //         break;
    //         case "Bayelsa": var data=['Select LGA', 'Brass', 'Ekeremor', 'Kolokuma Opokuma', 'Nembe', 'Ogbia', 'Sagbama', 'Southern Ijaw', 'Yenagoa'];
    //         break;
    //         case "Benue": var data=['Select LGA', 'Agatu', 'Apa', 'Ado', 'Buruku', 'Gboko', 'Guma', 'Gwer East', 'Gwer West', 'Katsina-Ala', 'Konshisha', 'Kwande', 'Logo', 'Makurdi', 'Obi', 'Ogbadibo', 'Ohimini', 'Oju', 'Okpokwu', 'Oturkpo', 'Tarka', 'Ukum', 'Ushongo', 'Vandeikya'];
    //         break;
    //         case "Borno": var data=['Select LGA', 'Abadam', 'Askira-Uba', 'Bama', 'Bayo', 'Biu', 'Chibok', 'Damboa', 'Dikwa', 'Gubio', 'Guzamala', 'Gwoza', 'Hawul', 'Jere', 'Kaga', 'Kala-Balge', 'Konduga', 'Kukawa', 'Kwaya Kusar', 'Mafa', 'Magumeri', 'Maiduguri', 'Marte', 'Mobbar', 'Monguno', 'Ngala', 'Nganzai', 'Shani'];
    //         break;
    //         case "Cross River": var data=['Select LGA', 'Abi', 'Akamkpa', 'Akpabuyo', 'Bakassi', 'Bekwarra', 'Biase', 'Boki', 'Calabar Municipal', 'Calabar South', 'Etung', 'Ikom', 'Obanliku', 'Obubra', 'Obudu', 'Odukpani', 'Ogoja', 'Yakuur', 'Yala'];
    //         break;
    //         case "Delta": var data=['Select LGA', 'Aniocha North', 'Aniocha South', 'Bomadi', 'Burutu', 'Ethiope East', 'Ethiope West', 'Ika North East', 'Ika South', 'Isoko North', 'Isoko South', 'Ndokwa East', 'Ndokwa West', 'Okpe', 'Oshimili North', 'Oshimili South', 'Patani', 'Sapele', 'Udu', 'Ughelli North', 'Ughelli South', 'Ukwuani', 'Uvwie', 'Warri North', 'Warri South', 'Warri South West'];
    //         break;
    //         case "Ebonyi": var data=['Select LGA', 'Abakaliki', 'Afikpo North', 'Afikpo South', 'Ebonyi', 'Ezza North', 'Ezza South', 'Ikwo', 'Ishielu', 'Ivo', 'Izzi', 'Ohaozara', 'Ohaukwu', 'Onicha'];
    //         break;
    //         case "Edo": var data=['Select LGA', 'Akoko-Edo', 'Egor', 'Esan Central', 'Esan North-East', 'Esan South-East', 'Esan West', 'Etsako Central', 'Etsako East', 'Etsako West', 'Igueben', 'Ikpoba Okha', 'Orhionmwon', 'Oredo', 'Ovia North-East', 'Ovia South-West', 'Owan East', 'Owan West', 'Uhunmwonde'];
    //         break;
    //         case "Ekiti": var data=['Select LGA', 'Ado Ekiti', 'Efon', 'Ekiti East', 'Ekiti South-West', 'Ekiti West', 'Emure', 'Gbonyin', 'Ido Osi', 'Ijero', 'Ikere', 'Ikole', 'Ilejemeje', 'Irepodun-Ifelodun', 'Ise-Orun', 'Moba', 'Oye'];
    //         break;
    //         case "Rivers": var data=['Select LGA', 'Port Harcourt', 'Obio-Akpor', 'Okrika', 'Ogu–Bolo', 'Eleme', 'Tai', 'Gokana', 'Khana', 'Oyigbo', 'Opobo–Nkoro', 'Andoni', 'Bonny', 'Degema', 'Asari-Toru', 'Akuku-Toru', 'Abua–Odual', 'Ahoada West', 'Ahoada East', 'Ogba–Egbema–Ndoni', 'Emohua', 'Ikwerre', 'Etche', 'Omuma'];
    //         break;
    //         case "Enugu": var data=['Select LGA', 'Aninri', 'Awgu', 'Enugu East', 'Enugu North', 'Enugu South', 'Ezeagu', 'Igbo Etiti', 'Igbo Eze North', 'Igbo Eze South', 'Isi Uzo', 'Nkanu East', 'Nkanu West', 'Nsukka', 'Oji River', 'Udenu', 'Udi', 'Uzo Uwani'];
    //         break;
    //         case "FCT": var data=['Select LGA', 'Abaji', 'Bwari', 'Gwagwalada', 'Kuje', 'Kwali', 'Municipal Area Council'];
    //         break;
    //         case "Gombe": var data=['Select LGA', 'Akko', 'Balanga', 'Billiri', 'Dukku', 'Funakaye', 'Gombe', 'Kaltungo', 'Kwami', 'Nafada', 'Shongom', 'Yamaltu-Deba'];
    //         break;
    //         case "Imo": var data=['Select LGA', 'Aboh Mbaise', 'Ahiazu Mbaise', 'Ehime Mbano', 'Ezinihitte', 'Ideato North', 'Ideato South', 'Ihitte-Uboma', 'Ikeduru', 'Isiala Mbano', 'Isu', 'Mbaitoli', 'Ngor Okpala', 'Njaba', 'Nkwerre', 'Nwangele', 'Obowo', 'Oguta', 'Ohaji-Egbema', 'Okigwe', 'Orlu', 'Orsu', 'Oru East', 'Oru West', 'Owerri Municipal', 'Owerri North', 'Owerri West', 'Unuimo'];
    //         break;
    //         case "Jigawa": var data=['Select LGA', 'Auyo', 'Babura', 'Biriniwa', 'Birnin Kudu', 'Buji', 'Dutse', 'Gagarawa', 'Garki', 'Gumel', 'Guri', 'Gwaram', 'Gwiwa', 'Hadejia', 'Jahun', 'Kafin Hausa', 'Kazaure', 'Kiri Kasama', 'Kiyawa', 'Kaugama', 'Maigatari', 'Malam Madori', 'Miga', 'Ringim', 'Roni', 'Sule Tankarkar', 'Taura', 'Yankwashi'];
    //         break;
    //         case "Kaduna": var data=['Select LGA', 'Birnin Gwari', 'Chikun', 'Giwa', 'Igabi', 'Ikara', 'Jaba', 'Jema a', 'Kachia', 'Kaduna North', 'Kaduna South', 'Kagarko', 'Kajuru', 'Kaura', 'Kauru', 'Kubau', 'Kudan', 'Lere', 'Makarfi', 'Sabon Gari', 'Sanga', 'Soba', 'Zangon Kataf', 'Zaria'];
    //         break;
    //         case "Kano": var data=['Select LGA', 'Ajingi', 'Albasu', 'Bagwai', 'Bebeji', 'Bichi', 'Bunkure', 'Dala', 'Dambatta', 'Dawakin Kudu', 'Dawakin Tofa', 'Doguwa', 'Fagge', 'Gabasawa', 'Garko', 'Garun Mallam', 'Gaya', 'Gezawa', 'Gwale', 'Gwarzo', 'Kabo', 'Kano Municipal', 'Karaye', 'Kibiya', 'Kiru', 'Kumbotso', 'Kunchi', 'Kura', 'Madobi', 'Makoda', 'Minjibir', 'Nasarawa', 'Rano', 'Rimin Gado', 'Rogo', 'Shanono', 'Sumaila', 'Takai', 'Tarauni', 'Tofa', 'Tsanyawa', 'Tudun Wada', 'Ungogo', 'Warawa', 'Wudil'];
    //         break;
    //         case "Katsina": var data=['Select LGA', 'Bakori', 'Batagarawa', 'Batsari', 'Baure', 'Bindawa', 'Charanchi', 'Dandume', 'Danja', 'Dan Musa', 'Daura', 'Dutsi', 'Dutsin Ma', 'Faskari', 'Funtua', 'Ingawa', 'Jibia', 'Kafur', 'Kaita', 'Kankara', 'Kankia', 'Katsina', 'Kurfi', 'Kusada', 'Mai Adua', 'Malumfashi', 'Mani', 'Mashi', 'Matazu', 'Musawa', 'Rimi', 'Sabuwa', 'Safana', 'Sandamu', 'Zango'];
    //         break;
    //         case "Kebbi": var data=['Select LGA', 'Aleiro', 'Arewa Dandi', 'Argungu', 'Augie', 'Bagudo', 'Birnin Kebbi', 'Bunza', 'Dandi', 'Fakai', 'Gwandu', 'Jega', 'Kalgo', 'Koko Besse', 'Maiyama', 'Ngaski', 'Sakaba', 'Shanga', 'Suru', 'Wasagu Danko', 'Yauri', 'Zuru'];
    //         break;
    //         case "Kogi": var data=['Select LGA', 'Adavi', 'Ajaokuta', 'Ankpa', 'Bassa', 'Dekina', 'Ibaji', 'Idah', 'Igalamela Odolu', 'Ijumu', 'Kabba Bunu', 'Kogi', 'Lokoja', 'Mopa Muro', 'Ofu', 'Ogori Magongo', 'Okehi', 'Okene', 'Olamaboro', 'Omala', 'Yagba East', 'Yagba West'];
    //         break;
    //         case "Kwara": var data=['Select LGA', 'Asa', 'Baruten', 'Edu', 'Ekiti', 'Ifelodun', 'Ilorin East', 'Ilorin South', 'Ilorin West', 'Irepodun', 'Isin', 'Kaiama', 'Moro', 'Offa', 'Oke Ero', 'Oyun', 'Pategi'];
    //         break;
    //         case "Lagos": var data=['Select LGA', 'Agege', 'Ajeromi-Ifelodun', 'Alimosho', 'Amuwo-Odofin', 'Apapa', 'Badagry', 'Epe', 'Eti Osa', 'Ibeju-Lekki', 'Ifako-Ijaiye', 'Ikeja', 'Ikorodu', 'Kosofe', 'Lagos Island', 'Lagos Mainland', 'Mushin', 'Ojo', 'Oshodi-Isolo', 'Shomolu', 'Surulere'];
    //         break;
    //         case "Nasarawa": var data=['Select LGA', 'Akwanga', 'Awe', 'Doma', 'Karu', 'Keana', 'Keffi', 'Kokona', 'Lafia', 'Nasarawa', 'Nasarawa Egon', 'Obi', 'Toto', 'Wamba'];
    //         break;
    //         case "Niger": var data=['Select LGA', 'Agaie', 'Agwara', 'Bida', 'Borgu', 'Bosso', 'Chanchaga', 'Edati', 'Gbako', 'Gurara', 'Katcha', 'Kontagora', 'Lapai', 'Lavun', 'Magama', 'Mariga', 'Mashegu', 'Mokwa', 'Moya', 'Paikoro', 'Rafi', 'Rijau', 'Shiroro', 'Suleja', 'Tafa', 'Wushishi'];
    //         break;
    //         case "Ogun": var data=['Select LGA', 'Abeokuta North', 'Abeokuta South', 'Ado-Odo Ota', 'Egbado North', 'Egbado South', 'Ewekoro', 'Ifo', 'Ijebu East', 'Ijebu North', 'Ijebu North East', 'Ijebu Ode', 'Ikenne', 'Imeko Afon', 'Ipokia', 'Obafemi Owode', 'Odeda', 'Odogbolu', 'Ogun Waterside', 'Remo North', 'Shagamu'];
    //         break;
    //         case "Ondo": var data=['Select LGA', 'Akoko North-East', 'Akoko North-West', 'Akoko South-West', 'Akoko South-East', 'Akure North', 'Akure South', 'Ese Odo', 'Idanre', 'Ifedore', 'Ilaje', 'Ile Oluji-Okeigbo', 'Irele', 'Odigbo', 'Okitipupa', 'Ondo East', 'Ondo West', 'Ose', 'Owo'];
    //         break;
    //         case "Osun": var data=['Select LGA', 'Atakunmosa East', 'Atakunmosa West', 'Aiyedaade', 'Aiyedire', 'Boluwaduro', 'Boripe', 'Ede North', 'Ede South', 'Ife Central', 'Ife East', 'Ife North', 'Ife South', 'Egbedore', 'Ejigbo', 'Ifedayo', 'Ifelodun', 'Ila', 'Ilesa East', 'Ilesa West', 'Irepodun', 'Irewole', 'Isokan', 'Iwo', 'Obokun', 'Odo Otin', 'Ola Oluwa', 'Olorunda', 'Oriade', 'Orolu', 'Osogbo'];
    //         break;
    //         case "Oyo": var data=['Select LGA', 'Afijio', 'Akinyele', 'Atiba', 'Atisbo', 'Egbeda', 'Ibadan North', 'Ibadan North-East', 'Ibadan North-West', 'Ibadan South-East', 'Ibadan South-West', 'Ibarapa Central', 'Ibarapa East', 'Ibarapa North', 'Ido', 'Irepo', 'Iseyin', 'Itesiwaju', 'Iwajowa', 'Kajola', 'Lagelu', 'Ogbomosho North', 'Ogbomosho South', 'Ogo Oluwa', 'Olorunsogo', 'Oluyole', 'Ona Ara', 'Orelope', 'Ori Ire', 'Oyo', 'Oyo East', 'Saki East', 'Saki West', 'Surulere'];
    //         break;
    //         case "Plateau": var data=['Select LGA', 'Bokkos', 'Barkin Ladi', 'Bassa', 'Jos East', 'Jos North', 'Jos South', 'Kanam', 'Kanke', 'Langtang South', 'Langtang North', 'Mangu', 'Mikang', 'Pankshin', 'Qua an Pan', 'Riyom', 'Shendam', 'Wase'];
    //         break;
    //         case "Sokoto": var data=['Select LGA', 'Binji', 'Bodinga', 'Dange Shuni', 'Gada', 'Goronyo', 'Gudu', 'Gwadabawa', 'Illela', 'Isa', 'Kebbe', 'Kware', 'Rabah', 'Sabon Birni', 'Shagari', 'Silame', 'Sokoto North', 'Sokoto South', 'Tambuwal', 'Tangaza', 'Tureta', 'Wamako', 'Wurno', 'Yabo'];
    //         break;
    //         case "Taraba": var data=['Select LGA', 'Ardo Kola', 'Bali', 'Donga', 'Gashaka', 'Gassol', 'Ibi', 'Jalingo', 'Karim Lamido', 'Kumi', 'Lau', 'Sardauna', 'Takum', 'Ussa', 'Wukari', 'Yorro', 'Zing'];
    //         break;
    //         case "Yobe": var data=['Select LGA', 'Bade', 'Bursari', 'Damaturu', 'Fika', 'Fune', 'Geidam', 'Gujba', 'Gulani', 'Jakusko', 'Karasuwa', 'Machina', 'Nangere', 'Nguru', 'Potiskum', 'Tarmuwa', 'Yunusari', 'Yusufari'];
    //         break;
    //         case "Zamfara": var data=['Select LGA', 'Anka', 'Bakura', 'Birnin Magaji Kiyaw', 'Bukkuyum', 'Bungudu', 'Gummi', 'Gusau', 'Kaura Namoda', 'Maradun', 'Maru', 'Shinkafi', 'Talata Mafara', 'Chafe', 'Zurmi'];
    //     }
    //     $('select#lga').niceSelect('destroy');
    //     var i;
    //     var html=[];
    //     //loop through the array
    //     for (var i=0;
    //     i < data.length;
    //     i++) {
    //         //begin for loop
    //         //add the option elements to the html array
    //         html.push("<option>" + data[i] + "</option>")
    //     } //end for loop
    //     //add the option values to the select list with an id of lga
    //     document.getElementById("lga").innerHTML=html.join('');
    // }
    // );
}

);