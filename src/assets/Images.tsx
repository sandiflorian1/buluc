const IMAGES = {
    bg: new URL('/src/assets/images/bg.webp', import.meta.url).href,
    homepageBg: new URL('/src/assets/images/homepageBg.webp', import.meta.url).href,
    teatruBg: new URL('/src/assets/images/teatruBg.png', import.meta.url).href,
    bgSufragerie: new URL('/src/assets/images/in-sufragerie/bg-sufragerie.png', import.meta.url).href,

    logo : new URL('/src/assets/images/buluc_loop.gif', import.meta.url).href,
    sufrageria: new URL('/src/assets/images/culise/locatie/carolia1.jpeg', import.meta.url).href,
    sufrageria2: new URL('/src/assets/images/culise/locatie/carolia2.jpeg' , import.meta.url).href,
    sufrageria3: new URL('/src/assets/images/culise/locatie/carolia3.jpeg' , import.meta.url).href,
    sufrageria4: new URL('/src/assets/images/culise/locatie/carolia4.jpeg' , import.meta.url).href,
    sufrageria5: new URL('/src/assets/images/culise/locatie/carolia5.jpeg' , import.meta.url).href,
    sufrageria6: new URL('/src/assets/images/culise/locatie/carolia6.jpeg' , import.meta.url).href,
    sufrageriaBlur: new URL('/src/assets/images/culise/locatie/caroliaBlur.jpeg' , import.meta.url).href,
    parteneri: new URL('/src/assets/images/culise/parteneri.svg', import.meta.url).href,
    // echipa
    echipaMihaelaMardare: new URL('/src/assets/images/culise/echipa/mihaela-mardare.jpeg', import.meta.url).href,
    echipaRobertCiupitu: new URL('/src/assets/images/culise/echipa/robert-ciupitu.jpeg', import.meta.url).href,
    echipaMarilenaAdam: new URL('/src/assets/images/culise/echipa/marilena-adam.jpeg', import.meta.url).href,
    echipaIonutTerteci: new URL('/src/assets/images/culise/echipa/ionut-terteci.jpeg', import.meta.url).href,
    echipaStefaniaTecher: new URL('/src/assets/images/culise/echipa/stefania-techer.jpeg', import.meta.url).href,
    echipaAndreeaIstrate: new URL('/src/assets/images/culise/echipa/andreea-istrate.jpeg', import.meta.url).href,
    echipaCezarStoica: new URL('/src/assets/images/culise/echipa/cezar-stoica.jpeg', import.meta.url).href,
    echipaAlexandraFlorian: new URL('/src/assets/images/culise/echipa/alexandra.jpeg', import.meta.url).href,
    echipaAndrei: new URL('/src/assets/images/culise/echipa/andrei.jpeg', import.meta.url).href,
    echipaLixi: new URL('/src/assets/images/culise/echipa/lixi.jpeg', import.meta.url).href,
    team: new URL('/src/assets/images/culise/echipa/team.jpeg', import.meta.url).href,
    teamBlur: new URL('/src/assets/images/culise/echipa/team-blur.jpeg', import.meta.url).href,

    //parteneri
    partener0: new URL('/src/assets/images/culise/parteneri/0.png', import.meta.url).href,
    partener1: new URL('/src/assets/images/culise/parteneri/1.png', import.meta.url).href,
    partener2: new URL('/src/assets/images/culise/parteneri/2.png', import.meta.url).href,
    partener3: new URL('/src/assets/images/culise/parteneri/3.png', import.meta.url).href,
    partener4: new URL('/src/assets/images/culise/parteneri/4.png', import.meta.url).href,
    partener5: new URL('/src/assets/images/culise/parteneri/5.png', import.meta.url).href,
    partener6: new URL('/src/assets/images/culise/parteneri/6.png', import.meta.url).href,
    partener7: new URL('/src/assets/images/culise/parteneri/7.png', import.meta.url).href,
    partener8: new URL('/src/assets/images/culise/parteneri/8.png', import.meta.url).href,
    partener9: new URL('/src/assets/images/culise/parteneri/9.png', import.meta.url).href,
    // in sufragerie
    improshow: new URL('/src/assets/images/in-sufragerie/improshow/improshow.jpg', import.meta.url).href,
    concerte: new URL('/src/assets/images/in-sufragerie/concerte/concerte.jpg', import.meta.url).href,
    cover1: new URL('/src/assets/images/in-sufragerie/concerte/cover1.jpeg', import.meta.url).href,
    cover2: new URL('/src/assets/images/in-sufragerie/concerte/cover2.jpeg', import.meta.url).href,
    teatru: new URL('/src/assets/images/in-sufragerie/teatru/teatru.jpg', import.meta.url).href,
    dinIntamplare: new URL('/src/assets/images/in-sufragerie/teatru/din-intamplare.jpeg', import.meta.url).href,
    party: new URL('/src/assets/images/challenge/challenge-yourself/challenge.png', import.meta.url).href,
    office: new URL('/src/assets/images/challenge/challenge-yourself/challenge.png', import.meta.url).href,
    challengeYourself: new URL('/src/assets/images/challenge/challenge-yourself/challenge.png', import.meta.url).href,
    CYImage1: new URL('/src/assets/images/challenge/challenge-yourself/image1.jpeg', import.meta.url).href,
    CYImage2: new URL('/src/assets/images/challenge/challenge-yourself/image2.jpeg', import.meta.url).href,
    CYImage3: new URL('/src/assets/images/challenge/challenge-yourself/image3.jpeg', import.meta.url).href,
    CYImage4: new URL('/src/assets/images/challenge/challenge-yourself/image4.jpeg', import.meta.url).href,
    CYImage5: new URL('/src/assets/images/challenge/challenge-yourself/image5.jpeg', import.meta.url).href,
    CYImage6: new URL('/src/assets/images/challenge/challenge-yourself/image6.jpeg', import.meta.url).href,
    CYImage7: new URL('/src/assets/images/challenge/challenge-yourself/image7.jpeg', import.meta.url).href,
    CYImage8: new URL('/src/assets/images/challenge/challenge-yourself/image8.jpeg', import.meta.url).href,
    CYImage9: new URL('/src/assets/images/challenge/challenge-yourself/image9.jpeg', import.meta.url).href,
    CYImage10: new URL('/src/assets/images/challenge/challenge-yourself/image10.jpeg', import.meta.url).href,
    CYTeam1: new URL('/src/assets/images/challenge/challenge-yourself/team1.jpeg', import.meta.url).href,
    CYTeam2: new URL('/src/assets/images/challenge/challenge-yourself/team2.jpeg', import.meta.url).href,
    CYTeam3: new URL('/src/assets/images/challenge/challenge-yourself/team3.jpeg', import.meta.url).href,


    Show1: new URL('/src/assets/images/challenge/challenge-yourself/show1.jpeg', import.meta.url).href,
    Show2: new URL('/src/assets/images/challenge/challenge-yourself/show2.jpeg', import.meta.url).href,
    Show3: new URL('/src/assets/images/challenge/challenge-yourself/show3.jpeg', import.meta.url).href,
    Show4: new URL('/src/assets/images/challenge/challenge-yourself/show4.jpeg', import.meta.url).href,
    Show5: new URL('/src/assets/images/challenge/challenge-yourself/show5.jpeg', import.meta.url).href,
    Show7: new URL('/src/assets/images/challenge/challenge-yourself/show7.jpeg', import.meta.url).href,
    Show8: new URL('/src/assets/images/challenge/challenge-yourself/show8.jpeg', import.meta.url).href,
    Show9: new URL('/src/assets/images/challenge/challenge-yourself/show9.jpeg', import.meta.url).href,
    
    Office6: new URL('/src/assets/images/challenge/office/office6.jpeg', import.meta.url).href,
    grafica1: new URL('/src/assets/images/challenge/office/grafica1.png', import.meta.url).href,
    grafica2: new URL('/src/assets/images/challenge/office/grafica2.png', import.meta.url).href,
    grafica3: new URL('/src/assets/images/challenge/office/grafica3.png', import.meta.url).href,
    suit: new URL('/src/assets/images/challenge/office/suit.png', import.meta.url).href,



    Experience1: new URL('/src/assets/images/challenge/experince/experience1.jpeg', import.meta.url).href,
    Experience2: new URL('/src/assets/images/challenge/experince/experience2.jpeg', import.meta.url).href,
    Experience3: new URL('/src/assets/images/challenge/experince/experience3.jpeg', import.meta.url).href,
    Experience4: new URL('/src/assets/images/challenge/experince/experience4.jpeg', import.meta.url).href,
    Experience5: new URL('/src/assets/images/challenge/experince/experience5.jpeg', import.meta.url).href,
    Experience6: new URL('/src/assets/images/challenge/experince/experience6.jpeg', import.meta.url).href,
    Experience7: new URL('/src/assets/images/challenge/experince/experience7.jpeg', import.meta.url).href,
    Experience8: new URL('/src/assets/images/challenge/experince/experience8.jpeg', import.meta.url).href,
    Experience9: new URL('/src/assets/images/challenge/experince/experience9.jpeg', import.meta.url).href,
    ExperienceBlur: new URL('/src/assets/images/challenge/experince/experienceBlur.jpeg', import.meta.url).href,
    locuriLimitate: new URL('/src/assets/images/challenge/experince/locuri-limitate.jpeg', import.meta.url).href,




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

    dinIntamplare1: new URL('/src/assets/images/in-sufragerie/teatru/dinIntamplare1.jpeg', import.meta.url).href,
    dinIntamplare2: new URL('/src/assets/images/in-sufragerie/teatru/dinIntamplare2.jpeg', import.meta.url).href,
    dinIntamplare3: new URL('/src/assets/images/in-sufragerie/teatru/dinIntamplare3.jpeg', import.meta.url).href,
    dinIntamplare4: new URL('/src/assets/images/in-sufragerie/teatru/dinIntamplare4.jpeg', import.meta.url).href,
    dinIntamplare5: new URL('/src/assets/images/in-sufragerie/teatru/dinIntamplare5.jpeg', import.meta.url).href,
    dinIntamplare6: new URL('/src/assets/images/in-sufragerie/teatru/dinIntamplare6.jpeg', import.meta.url).href,
    dinIntamplare7: new URL('/src/assets/images/in-sufragerie/teatru/dinIntamplare7.jpeg', import.meta.url).href,
    dinIntamplare8: new URL('/src/assets/images/in-sufragerie/teatru/dinIntamplare8.jpeg', import.meta.url).href,


    //proiecte
    creartive: new URL('/src/assets/images/proiecte/creartive.jpg', import.meta.url).href,
    creative1: new URL('/src/assets/images/proiecte/creative1.jpeg', import.meta.url).href,
    creative2: new URL('/src/assets/images/proiecte/creative2.jpeg', import.meta.url).href,
    creative3: new URL('/src/assets/images/proiecte/creative3.jpeg', import.meta.url).href,
    creative4: new URL('/src/assets/images/proiecte/creative4.jpeg', import.meta.url).href,
    bulling: new URL('/src/assets/images/proiecte/bulling.jpg', import.meta.url).href,
    bullingMB: new URL('/src/assets/images/proiecte/bullingMB.jpeg', import.meta.url).href,
    roast1: new URL('/src/assets/images/proiecte/roast1.jpeg', import.meta.url).href,
    roast2: new URL('/src/assets/images/proiecte/roast2.jpeg', import.meta.url).href,
    roast3: new URL('/src/assets/images/proiecte/roast3.jpeg', import.meta.url).href,
    roast4: new URL('/src/assets/images/proiecte/roast4.jpeg', import.meta.url).href,
    roast5: new URL('/src/assets/images/proiecte/roast5.jpeg', import.meta.url).href,

    flashmob1: new URL('/src/assets/images/proiecte/flashmob1.jpg', import.meta.url).href,
    flashmob2: new URL('/src/assets/images/proiecte/flashmob2.jpg', import.meta.url).href,
    flashmob3: new URL('/src/assets/images/proiecte/flashmob3.jpg', import.meta.url).href,
    doact: new URL('/src/assets/images/proiecte/doact.jpg', import.meta.url).href,
    doact1: new URL('/src/assets/images/proiecte/doact1.jpeg', import.meta.url).href,
    doact2: new URL('/src/assets/images/proiecte/doact2.jpeg', import.meta.url).href,
    doact3: new URL('/src/assets/images/proiecte/doact3.jpeg', import.meta.url).href,
    doact4: new URL('/src/assets/images/proiecte/doact4.jpeg', import.meta.url).href,
    doact5: new URL('/src/assets/images/proiecte/doact5.jpeg', import.meta.url).href,
    doact6: new URL('/src/assets/images/proiecte/doact6.jpeg', import.meta.url).href,
    doact7: new URL('/src/assets/images/proiecte/doact7.jpeg', import.meta.url).href,
    doact8: new URL('/src/assets/images/proiecte/doact8.jpeg', import.meta.url).href,
    zoomtalks1: new URL('/src/assets/images/proiecte/zoomtalk1.jpeg', import.meta.url).href,
    zoomtalks2: new URL('/src/assets/images/proiecte/zoomtalk2.jpeg', import.meta.url).href,
    zoomtalks3: new URL('/src/assets/images/proiecte/zoomtalk3.jpeg', import.meta.url).href,
    zoomtalks4: new URL('/src/assets/images/proiecte/zoomtalk4.jpeg', import.meta.url).href,

    //gazeta
    zoomtalks: new URL('/src/assets/images/gazeta/zoomtalks.jpg', import.meta.url).href,
    people: new URL('/src/assets/images/gazeta/people.jpg', import.meta.url).href,

    //sustine
    sustine: new URL('/src/assets/images/sustine.png', import.meta.url).href,
    caracter1: new URL('/src/assets/images/caracter1.png', import.meta.url).href,
    caracter2: new URL('/src/assets/images/caracter2.png', import.meta.url).href,

}

export default IMAGES;