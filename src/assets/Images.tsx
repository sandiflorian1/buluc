const IMAGES = {
    logo : new URL('/src/assets/images/buluc_loop.gif', import.meta.url).href,
    sufrageria: new URL('/src/assets/images/culise/locatie/Carolia-13-min.jpg', import.meta.url).href,
    sufrageria2: new URL('/src/assets/images/culise/locatie/Carolia-7-min.jpg' , import.meta.url).href,
    sufrageria3: new URL('/src/assets/images/culise/locatie/Carolia-4-min.jpg' , import.meta.url).href,
    sufrageria4: new URL('/src/assets/images/culise/locatie/Carolia-6-min.jpg' , import.meta.url).href,
    sufrageria5: new URL('/src/assets/images/culise/locatie/Carolia-10-min.jpg' , import.meta.url).href,
    sufrageria6: new URL('/src/assets/images/culise/locatie/Carolia-9-min.jpg' , import.meta.url).href,
    parteneri: new URL('/src/assets/images/culise/parteneri.svg', import.meta.url).href,
    // echipa
    echipaMihaelaMardare: new URL('/src/assets/images/culise/echipa/mihaela-mardare.png', import.meta.url).href,
    echipaRobertCiupitu: new URL('/src/assets/images/culise/echipa/robert-ciupitu.png', import.meta.url).href,
    echipaMarilenaAdam: new URL('/src/assets/images/culise/echipa/marilena-adam.png', import.meta.url).href,
    echipaIonutTerteci: new URL('/src/assets/images/culise/echipa/ionut-terteci.png', import.meta.url).href,
    echipaStefaniaTecher: new URL('/src/assets/images/culise/echipa/stefania-techer.png', import.meta.url).href,
    echipaAndreeaIstrate: new URL('/src/assets/images/culise/echipa/andreea-istrate.png', import.meta.url).href,
    echipaCezarStoica: new URL('/src/assets/images/culise/echipa/cezar-stoica.png', import.meta.url).href,
    echipaAlexandraFlorian: new URL('/src/assets/images/culise/echipa/alexandra.png', import.meta.url).href,
    team: new URL('/src/assets/images/culise/echipa/team.jpg', import.meta.url).href,
    teamBlur: new URL('/src/assets/images/culise/echipa/team-blur.png', import.meta.url).href,

    //parteneri
    partener0: new URL('/src/assets/images/culise/parteneri/0.png', import.meta.url).href,
    partener1: new URL('/src/assets/images/culise/parteneri/1.png', import.meta.url).href,
    partener2: new URL('/src/assets/images/culise/parteneri/2.png', import.meta.url).href,
    partener3: new URL('/src/assets/images/culise/parteneri/3.png', import.meta.url).href,
    partener4: new URL('/src/assets/images/culise/parteneri/4.png', import.meta.url).href,
    partener5: new URL('/src/assets/images/culise/parteneri/5.png', import.meta.url).href,
    partener6: new URL('/src/assets/images/culise/parteneri/4.png', import.meta.url).href,
    partener7: new URL('/src/assets/images/culise/parteneri/5.png', import.meta.url).href,
    // in sufragerie
    improshow: new URL('/src/assets/images/in-sufragerie/improshow/improshow.jpg', import.meta.url).href,
    concerte: new URL('/src/assets/images/in-sufragerie/concerte/concerte.jpg', import.meta.url).href,
    cover1: new URL('/src/assets/images/in-sufragerie/concerte/cover1.jpeg', import.meta.url).href,
    cover2: new URL('/src/assets/images/in-sufragerie/concerte/cover2.jpeg', import.meta.url).href,
    teatru: new URL('/src/assets/images/in-sufragerie/teatru/teatru.jpg', import.meta.url).href,
    dinIntamplare: new URL('/src/assets/images/in-sufragerie/teatru/din-intamplare.jpg', import.meta.url).href,
    party: new URL('/src/assets/images/challenge/challenge-yourself/challenge.png', import.meta.url).href,
    office: new URL('/src/assets/images/challenge/challenge-yourself/challenge.png', import.meta.url).href,
    challengeYourself: new URL('/src/assets/images/challenge/challenge-yourself/challenge.png', import.meta.url).href,
    CYImage1: new URL('/src/assets/images/challenge/challenge-yourself/image1.jpeg', import.meta.url).href,
    CYImage2: new URL('/src/assets/images/challenge/challenge-yourself/image2.jpeg', import.meta.url).href,
    CYImage3: new URL('/src/assets/images/challenge/challenge-yourself/image3.jpeg', import.meta.url).href,
    CYImage4: new URL('/src/assets/images/challenge/challenge-yourself/image4.jpeg', import.meta.url).href,
    CYImage5: new URL('/src/assets/images/challenge/challenge-yourself/image5.jpeg', import.meta.url).href,
    CYImage6: new URL('/src/assets/images/challenge/challenge-yourself/image6.jpeg', import.meta.url).href,
    CYImage8: new URL('/src/assets/images/challenge/challenge-yourself/image8.jpeg', import.meta.url).href,

    Show1: new URL('/src/assets/images/challenge/challenge-yourself/show1.jpeg', import.meta.url).href,
    Show2: new URL('/src/assets/images/challenge/challenge-yourself/show2.jpeg', import.meta.url).href,
    Show3: new URL('/src/assets/images/challenge/challenge-yourself/show3.jpeg', import.meta.url).href,
    Show4: new URL('/src/assets/images/challenge/challenge-yourself/show4.jpeg', import.meta.url).href,
    Show5: new URL('/src/assets/images/challenge/challenge-yourself/show5.jpeg', import.meta.url).href,
    Show6: new URL('/src/assets/images/challenge/challenge-yourself/show6.jpeg', import.meta.url).href,
    Show7: new URL('/src/assets/images/challenge/challenge-yourself/show7.jpeg', import.meta.url).href,


    // concerte
    jazzAnadi1: new URL('/src/assets/images/in-sufragerie/concerte/JazzAnadi1.jpeg', import.meta.url).href,
    jazzAnadi2: new URL('/src/assets/images/in-sufragerie/concerte/JazzAnadi2.jpeg', import.meta.url).href,
    jazzAnadi3: new URL('/src/assets/images/in-sufragerie/concerte/JazzAnadi3.jpeg', import.meta.url).href,
    jazzAnadi4: new URL('/src/assets/images/in-sufragerie/concerte/JazzAnadi4.jpeg', import.meta.url).href,
    jazzAnadi5: new URL('/src/assets/images/in-sufragerie/concerte/JazzAnadi5.jpeg', import.meta.url).href,
    jazzAnadi6: new URL('/src/assets/images/in-sufragerie/concerte/JazzAnadi6.jpeg', import.meta.url).href,
    jazzAnadi7: new URL('/src/assets/images/in-sufragerie/concerte/JazzAnadi7.jpeg', import.meta.url).href,
    jazzAnadi8: new URL('/src/assets/images/in-sufragerie/concerte/JazzAnadi8.jpeg', import.meta.url).href,

    jazzSorina1: new URL('/src/assets/images/in-sufragerie/concerte/JazzSorina1.jpeg', import.meta.url).href,
    jazzSorina2: new URL('/src/assets/images/in-sufragerie/concerte/JazzSorina2.jpeg', import.meta.url).href,
    jazzSorina3: new URL('/src/assets/images/in-sufragerie/concerte/JazzSorina3.jpeg', import.meta.url).href,
    jazzSorina4: new URL('/src/assets/images/in-sufragerie/concerte/JazzSorina4.jpeg', import.meta.url).href,
    jazzSorina5: new URL('/src/assets/images/in-sufragerie/concerte/JazzSorina5.jpeg', import.meta.url).href,
    jazzSorina6: new URL('/src/assets/images/in-sufragerie/concerte/JazzSorina6.jpeg', import.meta.url).href,
    jazzSorina7: new URL('/src/assets/images/in-sufragerie/concerte/JazzSorina7.jpeg', import.meta.url).href,
    jazzSorina8: new URL('/src/assets/images/in-sufragerie/concerte/JazzSorina8.jpeg', import.meta.url).href,

    dinIntamplare1: new URL('/src/assets/images/in-sufragerie/teatru/dinIntamplare1.jpg', import.meta.url).href,
    dinIntamplare2: new URL('/src/assets/images/in-sufragerie/teatru/dinIntamplare2.jpg', import.meta.url).href,
    dinIntamplare3: new URL('/src/assets/images/in-sufragerie/teatru/dinIntamplare3.jpg', import.meta.url).href,
    dinIntamplare4: new URL('/src/assets/images/in-sufragerie/teatru/dinIntamplare4.jpg', import.meta.url).href,
    dinIntamplare5: new URL('/src/assets/images/in-sufragerie/teatru/dinIntamplare5.jpg', import.meta.url).href,
    dinIntamplare6: new URL('/src/assets/images/in-sufragerie/teatru/dinIntamplare6.jpg', import.meta.url).href,
    dinIntamplare7: new URL('/src/assets/images/in-sufragerie/teatru/dinIntamplare7.jpg', import.meta.url).href,
    dinIntamplare8: new URL('/src/assets/images/in-sufragerie/teatru/dinIntamplare8.jpg', import.meta.url).href,


    //proiecte
    creartive: new URL('/src/assets/images/proiecte/creartive.jpg', import.meta.url).href,
    bulling: new URL('/src/assets/images/proiecte/bulling.jpg', import.meta.url).href,
    flashmob1: new URL('/src/assets/images/proiecte/flashmob1.jpg', import.meta.url).href,
    flashmob2: new URL('/src/assets/images/proiecte/flashmob2.jpg', import.meta.url).href,
    flashmob3: new URL('/src/assets/images/proiecte/flashmob3.jpg', import.meta.url).href,
    doact: new URL('/src/assets/images/proiecte/doact.jpg', import.meta.url).href,

    //gazeta
    zoomtalks: new URL('/src/assets/images/gazeta/zoomtalks.jpg', import.meta.url).href,
    people: new URL('/src/assets/images/gazeta/people.jpg', import.meta.url).href,

}

export default IMAGES;