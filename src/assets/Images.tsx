const IMAGES = {
    bg: new URL('/src/assets/images/bg.webp', import.meta.url).href,
    homepageBg: new URL('/src/assets/images/homepageBg.webp', import.meta.url).href,
    teatruBg: new URL('/src/assets/images/in-sufragerie/teatruBg.webp', import.meta.url).href,
    serateBg: new URL('/src/assets/images/in-sufragerie/serateBg.webp', import.meta.url).href,
    bgSufragerieGol: new URL('/src/assets/images/in-sufragerie/bg-sufragerie-gol.webp', import.meta.url).href,
    bgSufragerie: new URL('/src/assets/images/in-sufragerie/bg-sufragerie.webp', import.meta.url).href,

    logo : new URL('/src/assets/images/buluc_loop.gif', import.meta.url).href,
    sufrageria: new URL('/src/assets/images/culise/locatie/carolia1.jpeg', import.meta.url).href,
    sufrageria2: new URL('/src/assets/images/culise/locatie/carolia2.jpeg' , import.meta.url).href,
    sufrageria3: new URL('/src/assets/images/culise/locatie/carolia3.jpeg' , import.meta.url).href,
    sufrageria4: new URL('/src/assets/images/culise/locatie/carolia4.jpeg' , import.meta.url).href,
    sufrageria5: new URL('/src/assets/images/culise/locatie/carolia5.jpeg' , import.meta.url).href,
    sufrageria6: new URL('/src/assets/images/culise/locatie/carolia6.jpeg' , import.meta.url).href,
    sufrageriaBlur: new URL('/src/assets/images/culise/locatie/caroliaBlur.jpeg' , import.meta.url).href,
    // echipa
    echipaMihaelaMardare: new URL('/src/assets/images/culise/echipa/mela.png', import.meta.url).href,
    echipaRobertCiupitu: new URL('/src/assets/images/culise/echipa/robert.png', import.meta.url).href,
    echipaMarilenaAdam: new URL('/src/assets/images/culise/echipa/mari.png', import.meta.url).href,
    echipaIonutTerteci: new URL('/src/assets/images/culise/echipa/ionut.png', import.meta.url).href,
    echipaStefaniaTecher: new URL('/src/assets/images/culise/echipa/stefi.png', import.meta.url).href,
    echipaAndreeaIstrate: new URL('/src/assets/images/culise/echipa/andreea.png', import.meta.url).href,
    echipaAlexandraFlorian: new URL('/src/assets/images/culise/echipa/alexandra.png', import.meta.url).href,
    echipaAndrei: new URL('/src/assets/images/culise/echipa/andrei.png', import.meta.url).href,
    echipaLixi: new URL('/src/assets/images/culise/echipa/lixi.png', import.meta.url).href,
    echipaAdreeaD: new URL('/src/assets/images/culise/echipa/andreeaD.png', import.meta.url).href,
    echipaAdi: new URL('/src/assets/images/culise/echipa/adi.png', import.meta.url).href,
    team: new URL('/src/assets/images/culise/echipa/team.png', import.meta.url).href,
    teamMB: new URL('/src/assets/images/culise/echipa/teamMB.png', import.meta.url).href,

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
    partener10: new URL('/src/assets/images/culise/parteneri/10.png', import.meta.url).href,
    partener11: new URL('/src/assets/images/culise/parteneri/11.png', import.meta.url).href,
    partener12: new URL('/src/assets/images/culise/parteneri/12.png', import.meta.url).href,
    // in sufragerie
    cover1: new URL('/src/assets/images/in-sufragerie/concerte/cover1.webp', import.meta.url).href,
    cover2: new URL('/src/assets/images/in-sufragerie/concerte/cover2.webp', import.meta.url).href,
    cover3: new URL('/src/assets/images/in-sufragerie/concerte/cover3.png', import.meta.url).href,
    cover4: new URL('/src/assets/images/in-sufragerie/concerte/cover4.png', import.meta.url).href,

    dinIntamplare: new URL('/src/assets/images/in-sufragerie/teatru/din-intamplare.webp', import.meta.url).href,
    CYImage1: new URL('/src/assets/images/challenge/challenge-yourself/image1.webp', import.meta.url).href,
    CYImage2: new URL('/src/assets/images/challenge/challenge-yourself/image2.webp', import.meta.url).href,
    CYImage3: new URL('/src/assets/images/challenge/challenge-yourself/image3.webp', import.meta.url).href,
    CYImage4: new URL('/src/assets/images/challenge/challenge-yourself/image4.webp', import.meta.url).href,
    CYImage5: new URL('/src/assets/images/challenge/challenge-yourself/image5.webp', import.meta.url).href,
    CYImage6: new URL('/src/assets/images/challenge/challenge-yourself/image6.webp', import.meta.url).href,
    CYImage7: new URL('/src/assets/images/challenge/challenge-yourself/image7.webp', import.meta.url).href,
    CYImage8: new URL('/src/assets/images/challenge/challenge-yourself/image8.webp', import.meta.url).href,
    CYImage9: new URL('/src/assets/images/challenge/challenge-yourself/image9.webp', import.meta.url).href,
    CYImage10: new URL('/src/assets/images/challenge/challenge-yourself/image10.webp', import.meta.url).href,
    CYTeam1: new URL('/src/assets/images/challenge/challenge-yourself/team1.webp', import.meta.url).href,
    CYTeam2: new URL('/src/assets/images/challenge/challenge-yourself/team2.webp', import.meta.url).href,
    CYTeam3: new URL('/src/assets/images/challenge/challenge-yourself/team3.webp', import.meta.url).href,


    Show1: new URL('/src/assets/images/challenge/challenge-yourself/show1.webp', import.meta.url).href,
    Show2: new URL('/src/assets/images/challenge/challenge-yourself/show2.webp', import.meta.url).href,
    Show3: new URL('/src/assets/images/challenge/challenge-yourself/show3.webp', import.meta.url).href,
    Show4: new URL('/src/assets/images/challenge/challenge-yourself/show4.webp', import.meta.url).href,
    Show5: new URL('/src/assets/images/challenge/challenge-yourself/show5.webp', import.meta.url).href,
    Show7: new URL('/src/assets/images/challenge/challenge-yourself/show7.webp', import.meta.url).href,
    Show8: new URL('/src/assets/images/challenge/challenge-yourself/show8.webp', import.meta.url).href,
    Show9: new URL('/src/assets/images/challenge/challenge-yourself/show9.webp', import.meta.url).href,
    
    Office6: new URL('/src/assets/images/challenge/office/office6.webp', import.meta.url).href,
    grafica1: new URL('/src/assets/images/challenge/office/grafica1.webp', import.meta.url).href,
    grafica2: new URL('/src/assets/images/challenge/office/grafica2.webp', import.meta.url).href,
    grafica3: new URL('/src/assets/images/challenge/office/grafica3.webp', import.meta.url).href,
    suit: new URL('/src/assets/images/challenge/office/suit.png', import.meta.url).href,



    Experience1: new URL('/src/assets/images/challenge/experince/experience1.jpeg', import.meta.url).href,
    Experience1mb: new URL('/src/assets/images/challenge/experince/experience1mb.jpeg', import.meta.url).href,
    Experience2: new URL('/src/assets/images/challenge/experince/experience2.webp', import.meta.url).href,
    Experience3: new URL('/src/assets/images/challenge/experince/experience3.jpg', import.meta.url).href,
    Experience4: new URL('/src/assets/images/challenge/experince/experience4.webp', import.meta.url).href,
    Experience5: new URL('/src/assets/images/challenge/experince/experience5.webp', import.meta.url).href,
    Experience6: new URL('/src/assets/images/challenge/experince/experience6.webp', import.meta.url).href,
    Experience7: new URL('/src/assets/images/challenge/experince/experience7.webp', import.meta.url).href,
    Experience8: new URL('/src/assets/images/challenge/experince/experience8.webp', import.meta.url).href,
    Experience9: new URL('/src/assets/images/challenge/experince/experience9.webp', import.meta.url).href,
    Experience10: new URL('/src/assets/images/challenge/experince/experience10.webp', import.meta.url).href,
    Experience11: new URL('/src/assets/images/challenge/experince/experience11.webp', import.meta.url).href,
    Experience12: new URL('/src/assets/images/challenge/experince/experience12.webp', import.meta.url).href,
    Experience13: new URL('/src/assets/images/challenge/experince/experience13.webp', import.meta.url).href,
    Experience14: new URL('/src/assets/images/challenge/experince/experience14.webp', import.meta.url).href,
    Experience15: new URL('/src/assets/images/challenge/experince/experience15.webp', import.meta.url).href,
    Experience16: new URL('/src/assets/images/challenge/experince/experience16.webp', import.meta.url).href,
    ExperienceV2_1: new URL('/src/assets/images/challenge/experince/experienceV2_1.png', import.meta.url).href,
    ExperienceV2_2: new URL('/src/assets/images/challenge/experince/experienceV2_2.png', import.meta.url).href,
    ExperienceV2_3: new URL('/src/assets/images/challenge/experince/experienceV2_3.jpg', import.meta.url).href,
    ExperienceV2_4: new URL('/src/assets/images/challenge/experince/experienceV2_4.jpeg', import.meta.url).href,
    ExperienceV2_5: new URL('/src/assets/images/challenge/experince/experienceV2_5.jpg', import.meta.url).href,

    ExperienceBlur: new URL('/src/assets/images/challenge/experince/experienceBlur.jpeg', import.meta.url).href,
    locuriLimitate: new URL('/src/assets/images/challenge/experince/locuri-limitate.jpeg', import.meta.url).href,




    // concerte
    jazzAnadi1: new URL('/src/assets/images/in-sufragerie/concerte/JazzAnadi1.webp', import.meta.url).href,
    jazzAnadi2: new URL('/src/assets/images/in-sufragerie/concerte/JazzAnadi2.webp', import.meta.url).href,
    jazzAnadi3: new URL('/src/assets/images/in-sufragerie/concerte/JazzAnadi3.webp', import.meta.url).href,
    jazzAnadi4: new URL('/src/assets/images/in-sufragerie/concerte/JazzAnadi4.webp', import.meta.url).href,
    jazzAnadi5: new URL('/src/assets/images/in-sufragerie/concerte/JazzAnadi5.webp', import.meta.url).href,
    jazzAnadi6: new URL('/src/assets/images/in-sufragerie/concerte/JazzAnadi6.webp', import.meta.url).href,
    jazzAnadi7: new URL('/src/assets/images/in-sufragerie/concerte/JazzAnadi7.webp', import.meta.url).href,
    jazzAnadi8: new URL('/src/assets/images/in-sufragerie/concerte/JazzAnadi8.webp', import.meta.url).href,

    jazzSorina1: new URL('/src/assets/images/in-sufragerie/concerte/JazzSorina1.webp', import.meta.url).href,
    jazzSorina2: new URL('/src/assets/images/in-sufragerie/concerte/JazzSorina2.webp', import.meta.url).href,
    jazzSorina3: new URL('/src/assets/images/in-sufragerie/concerte/JazzSorina3.webp', import.meta.url).href,
    jazzSorina4: new URL('/src/assets/images/in-sufragerie/concerte/JazzSorina4.webp', import.meta.url).href,
    jazzSorina5: new URL('/src/assets/images/in-sufragerie/concerte/JazzSorina5.webp', import.meta.url).href,
    jazzSorina6: new URL('/src/assets/images/in-sufragerie/concerte/JazzSorina6.webp', import.meta.url).href,
    jazzSorina7: new URL('/src/assets/images/in-sufragerie/concerte/JazzSorina7.webp', import.meta.url).href,
    jazzSorina8: new URL('/src/assets/images/in-sufragerie/concerte/JazzSorina8.webp', import.meta.url).href,

    taraf1: new URL('/src/assets/images/in-sufragerie/concerte/taraf1.jpeg', import.meta.url).href,
    taraf2: new URL('/src/assets/images/in-sufragerie/concerte/taraf2.jpeg', import.meta.url).href,
    taraf3: new URL('/src/assets/images/in-sufragerie/concerte/taraf3.jpeg', import.meta.url).href,
    taraf4: new URL('/src/assets/images/in-sufragerie/concerte/taraf4.jpeg', import.meta.url).href,
    taraf5: new URL('/src/assets/images/in-sufragerie/concerte/taraf5.jpeg', import.meta.url).href,
    taraf6: new URL('/src/assets/images/in-sufragerie/concerte/taraf6.jpeg', import.meta.url).href,
    taraf7: new URL('/src/assets/images/in-sufragerie/concerte/taraf7.jpeg', import.meta.url).href,
    taraf8: new URL('/src/assets/images/in-sufragerie/concerte/taraf8.jpeg', import.meta.url).href,

    cinema1: new URL('/src/assets/images/in-sufragerie/concerte/cinema1.jpeg', import.meta.url).href,
    cinema2: new URL('/src/assets/images/in-sufragerie/concerte/cinema2.jpeg', import.meta.url).href,
    cinema3: new URL('/src/assets/images/in-sufragerie/concerte/cinema3.jpeg', import.meta.url).href,
    cinema4: new URL('/src/assets/images/in-sufragerie/concerte/cinema4.jpeg', import.meta.url).href,

    dinIntamplare1: new URL('/src/assets/images/in-sufragerie/teatru/dinIntamplare1.webp', import.meta.url).href,
    dinIntamplare2: new URL('/src/assets/images/in-sufragerie/teatru/dinIntamplare2.webp', import.meta.url).href,
    dinIntamplare3: new URL('/src/assets/images/in-sufragerie/teatru/dinIntamplare3.webp', import.meta.url).href,
    dinIntamplare4: new URL('/src/assets/images/in-sufragerie/teatru/dinIntamplare4.webp', import.meta.url).href,
    dinIntamplare5: new URL('/src/assets/images/in-sufragerie/teatru/dinIntamplare5.webp', import.meta.url).href,
    dinIntamplare6: new URL('/src/assets/images/in-sufragerie/teatru/dinIntamplare6.webp', import.meta.url).href,
    dinIntamplare7: new URL('/src/assets/images/in-sufragerie/teatru/dinIntamplare7.webp', import.meta.url).href,
    dinIntamplare8: new URL('/src/assets/images/in-sufragerie/teatru/dinIntamplare8.webp', import.meta.url).href,


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
    zoomtalks: new URL('/src/assets/images/gazeta/zoomtalks.webp', import.meta.url).href,
    people: new URL('/src/assets/images/gazeta/people.webp', import.meta.url).href,

    //sustine
    caracter1: new URL('/src/assets/images/caracter1.png', import.meta.url).href,
}

export default IMAGES;