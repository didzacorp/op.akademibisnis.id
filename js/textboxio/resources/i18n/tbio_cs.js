/** @license
 * Copyright (c) 2013-2017 Ephox Corp. All rights reserved.
 * This software is provided "AS IS," without a warranty of any kind.
 */
!function(){var a=function(){return{a11y:{widget:{title:"Kontrola dostupnosti",running:"Prob\xedh\xe1 ov\u011b\u0159ov\xe1n\xed...",issue:{counter:"Probl\xe9m {0} z {1}",help:"Odkaz na WCAG 2.0 \u2013 otev\u0159e se v nov\xe9m okn\u011b",none:"Nebyly zji\u0161t\u011bny \u017e\xe1dn\xe9 probl\xe9my s dostupnost\xed"},previous:"P\u0159edchoz\xed probl\xe9m",next:"N\xe1sleduj\xedc\xed probl\xe9m",repair:"Odstranit probl\xe9m",available:"Oprava k dispozici",ignore:"Ignorovat"},image:{alttext:{empty:"Obr\xe1zky musej\xed m\xedt popisek s alternativn\xedm textem",filenameduplicate:"Alternativn\xed text nesm\xed b\xfdt stejn\xfd jako n\xe1zev obrazov\xe9ho souboru",set:"Zadejte alternativn\xed text:",validation:{empty:"Alternativn\xed text nesm\xed b\xfdt pr\xe1zdn\xfd",filenameduplicate:"Alternativn\xed text nesm\xed b\xfdt stejn\xfd jako n\xe1zev souboru"}}},table:{caption:{empty:"Tabulky musej\xed m\xedt titulek",summaryduplicate:"Titulek a souhrn tabulky nemohou m\xedt stejnou hodnotu",set:"Zadejte titulek:",validation:{empty:"Titulek nesm\xed b\xfdt pr\xe1zdn\xfd",summaryduplicate:"Titulek tabulky nesm\xed b\xfdt stejn\xfd jako souhrn tabulky"}},summary:{empty:"Slo\u017eit\xe9 tabulky by m\u011bly m\xedt souhrny",set:"Zadejte souhrn tabulky:",validation:{empty:"Souhrn nesm\xed b\xfdt pr\xe1zdn\xfd",captionduplicate:"Souhrn tabulky nesm\xed b\xfdt stejn\xfd jako titulek tabulky"}},rowscells:{none:"Prvky tabulky musej\xed obsahovat tagy TR a TD"},headers:{none:"Tabulky musej\xed m\xedt alespo\u0148 jednu bu\u0148ku z\xe1hlav\xed",set:"Vyberte z\xe1hlav\xed tabulky:",validation:{none:"Vyberte pros\xedm bu\u010f z\xe1hlav\xed \u0159\xe1dku nebo sloupce"}},headerscope:{none:"Z\xe1hlav\xed tabulky musej\xed b\xfdt pou\u017eita na \u0159\xe1dek nebo sloupec",set:"Vyberte rozsah z\xe1hlav\xed:",scope:{row:"\u0158\xe1dek",col:"Sloupec",rowgroup:"Skupina \u0159\xe1dk\u016f",colgroup:"Skupina sloupc\u016f"}}},heading:{nonsequential:"Nadpisy musej\xed b\xfdt pou\u017eity v postupn\xe9m po\u0159ad\xed. Nap\u0159\xedklad: Po nadpisu 1 by m\u011bl n\xe1sledovat nadpis 2, nikoli nadpis 3.",paragraphmisuse:"Tento odstavec vypad\xe1 jako nadpis. Pokud se jedn\xe1 o nadpis, vyberte pros\xedm \xfarove\u0148 nadpisu.",set:"Vyberte \xfarove\u0148 nadpisu:"},link:{adjacent:"Sousedn\xed odkazy se stejnou adresou URL by m\u011bly b\xfdt slou\u010deny do jednoho odkazu"},list:{paragraphmisuse:"Zd\xe1 se, \u017ee vybran\xfd text p\u0159edstavuje seznam. Seznamy by m\u011bly b\xfdt form\xe1tov\xe1ny pomoc\xed tagu ozna\u010duj\xedc\xedho polo\u017eky seznamu."},contrast:{smalltext:"Text mus\xed m\xedt kontrastn\xed pom\u011br alespo\u0148 4,5:1",largetext:"Velk\xfd text mus\xed m\xedt kontrastn\xed pom\u011br alespo\u0148 3:1"},severity:{error:"Chyba",warning:"Upozorn\u011bn\xed",info:"Informace"}},aria:{autocorrect:{announce:"Automatick\xe9 opravy {0}"},label:{toolbar:"Panel n\xe1stroj\u016f editoru form\xe1tovan\xe9ho textu",editor:"Editor form\xe1tovan\xe9ho textu TextBox.io - {0}",fullscreen:"Celoobrazovkov\xfd editor form\xe1tovan\xe9ho textu TextBox.io - {0}",content:"Editovateln\xfd obsah",more:"Klepn\u011bte pro rozbalen\xed nebo sbalen\xed"},help:{mac:"Stiskem \u2303\u2325H zobraz\xedte n\xe1pov\u011bdu",ctrl:"Stiskem CTRL SHIFT H zobraz\xedte n\xe1pov\u011bdu"},color:{picker:"V\xfdb\u011br barvy",menu:"Nab\xeddka V\xfdb\u011br barvy"},font:{color:"Barvy textu",highlight:"Barvy zv\xfdrazn\u011bn\xed",palette:"Barevn\xe1 paleta"},context:{menu:{generic:"Kontextov\xe1 nab\xeddka"}},stepper:{input:{invalid:"Hodnota velikosti je neplatn\xe1"}},table:{headerdescription:"Pro aktivaci nastaven\xed stiskn\u011bte mezern\xedk. Pro n\xe1vrat do v\xfdb\u011bru tabulky stiskn\u011bte tabul\xe1tor.",cell:{border:{size:"Tlou\u0161\u0165ka ohrani\u010den\xed"}}},input:{invalid:"Neplatn\xfd vstup"},widget:{navigation:"K navigaci m\u016f\u017eete pou\u017e\xedt kurzorov\xe9 kl\xe1vesy."},image:{crop:{size:"Velikost o\u0159\xedznut\xed je {0} pixel\u016f x {1} pixel\u016f"}}},color:{white:"B\xedl\xe1",black:"\u010cern\xe1",gray:"\u0160ed\xe1",metal:"Kovov\xe1",smoke:"Kou\u0159ov\xe1",red:"\u010cerven\xe1",darkred:"Tmav\u011b \u010derven\xe1",darkorange:"Tmav\u011b oran\u017eov\xe1",orange:"Oran\u017eov\xe1",yellow:"\u017dlut\xe1",green:"Zelen\xe1",darkgreen:"Tmav\u011b zelen\xe1",mediumseagreen:"St\u0159edn\xed mo\u0159sk\xe1 zele\u0148",lightgreen:"Sv\u011btle zelen\xe1",lime:"\u017dlutozelen\xe1",mediumblue:"St\u0159edn\u011b modr\xe1",navy:"N\xe1mo\u0159nick\xe1 mod\u0159",blue:"Modr\xe1",lightblue:"Sv\u011btle modr\xe1",violet:"Fialov\xe1"},directionality:{rtldir:"Sm\u011br zprava doleva",ltrdir:"Sm\u011br zleva doprava"},parlance:{menu:"Nab\xeddka Jazyk",set:"Nastavit jazyk",ar:"Arab\u0161tina",ca:"Katal\xe1n\u0161tina",zh_cn:"\u010c\xedn\u0161tina (zjednodu\u0161en\xe1)",zh_tw:"\u010c\xedn\u0161tina (tradi\u010dn\xed)",hr:"Chorvat\u0161tina",cs:"\u010ce\u0161tina",da:"D\xe1n\u0161tina",nl:"Holand\u0161tina",en:"Angli\u010dtina",en_au:"Angli\u010dtina (Austr\xe1lie)",en_ca:"Angli\u010dtina (Kanada)",en_gb:"Angli\u010dtina (Spojen\xe9 kr\xe1lovstv\xed)",en_us:"Angli\u010dtina (Spojen\xe9 st\xe1ty)",fa:"Per\u0161tina",fi:"Fin\u0161tina",fr:"Francouz\u0161tina",fr_ca:"Francouz\u0161tina (Kanada)",de:"N\u011bm\u010dina",el:"\u0158e\u010dtina",he:"Hebrej\u0161tina",hu:"Ma\u010far\u0161tina",it:"Ital\u0161tina",ja:"Japon\u0161tina",kk:"Kaza\u0161tina",ko:"Korej\u0161tina",no:"Nor\u0161tina",pl:"Pol\u0161tina",pt_br:"Portugal\u0161tina (Braz\xedlie)",pt_pt:"Portugal\u0161tina (Portugalsko)",ro:"Rumun\u0161tina",ru:"Ru\u0161tina",sk:"Sloven\u0161tina",sl:"Slovin\u0161tina",es:"\u0160pan\u011bl\u0161tina",es_419:"\u0160pan\u011bl\u0161tina (Latinsk\xe1 Amerika)",es_es:"\u0160pan\u011bl\u0161tina (\u0160pan\u011blsko)",sv:"\u0160v\xe9d\u0161tina",tt:"Tatar\u0161tina",th:"Thaj\u0161tina",tr:"Ture\u010dtina",uk:"Ukrajin\u0161tina"},taptoedit:"Klepnut\xedm za\u010dnete prov\xe1d\u011bt \xfapravy",plaincode:{dialog:{title:"Zobrazen\xed k\xf3du",editor:"Editor zdrojov\xe9ho textu v HTML"}},help:{dialog:{accessibility:"Navigace prost\u0159ednictv\xedm kl\xe1vesnice",a11ycheck:"Kontrola dostupnosti",about:"O editoru Textbox.io",markdown:"Form\xe1tov\xe1n\xed s pomoc\xed syntaxe markdown",shortcuts:"Kl\xe1vesov\xe9 zkratky"}},spelling:{context:{more:"V\xedce",morelabel:"Podnab\xeddka dal\u0161\xedch mo\u017enosti kontroly pravopisu"},none:"\u017d\xe1dn\xe9",menu:"Jazyk kontroly pravopisu"},specialchar:{open:"Speci\xe1ln\xed znak",dialog:"Vlo\u017eit speci\xe1ln\xed znak",latin:"Latinka",insert:"Vlo\u017eit",punctuation:"Rozd\u011blen\xed",currency:"M\u011bny","extended-latin-a":"Roz\u0161\xed\u0159en\xe1 latinka A","extended-latin-b":"Roz\u0161\xed\u0159en\xe1 latinka B",arrows:"\u0160ipky",mathematical:"Matematick\xe9 symboly",miscellaneous:"Ostatn\xed",selects:"Vybran\xe9 znaky",grid:"Speci\xe1ln\xed znaky"},insert:{"menu-button":"Nab\xeddka Vlo\u017eit",menu:"Vlo\u017eit",link:"Odkaz",image:"Obr\xe1zek",table:"Tabulka",horizontalrule:"Vodorovn\xe1 linka",media:"V\xfdstupn\xed za\u0159\xedzen\xed"},media:{embed:"K\xf3d pro vlo\u017een\xed medi\xe1ln\xedho souboru",insert:"Vlo\u017eit",placeholder:"Sem vlo\u017ete k\xf3d pro vlo\u017een\xed medi\xe1ln\xedho souboru."},wordcount:{open:"Po\u010det slov...",dialog:"Po\u010det slov...",counts:"Po\u010det",selection:"V\xfdb\u011br",document:"Dokument",characters:"Znaky",charactersnospaces:"Znaky (bez mezer)",words:"Slova"},list:{unordered:{menu:"Mo\u017enosti neuspo\u0159\xe1dan\xe9ho seznamu",default:"V\xfdchoz\xed styl pro neuspo\u0159\xe1dan\xfd seznam",circle:"Kole\u010dko \u2013 neuspo\u0159\xe1dan\xfd seznam",square:"\u010ctvere\u010dek \u2013 neuspo\u0159\xe1dan\xfd seznam",disc:"Punt\xedk \u2013 neuspo\u0159\xe1dan\xfd seznam"},ordered:{menu:"Mo\u017enosti uspo\u0159\xe1dan\xe9ho seznamu",default:"V\xfdchoz\xed styl pro uspo\u0159\xe1dan\xfd seznam",decimal:"\u010c\xedslice \u2013 uspo\u0159\xe1dan\xfd seznam","upper-alpha":"Velk\xe1 p\xedsmena \u2013 uspo\u0159\xe1dan\xfd seznam","lower-alpha":"Mal\xe1 p\xedsmena \u2013 uspo\u0159\xe1dan\xfd seznam","upper-roman":"Velk\xe9 \u0159\xedmsk\xe9 \u010d\xedslice \u2013 uspo\u0159\xe1dan\xfd seznam","lower-roman":"Mal\xe9 \u0159\xedmsk\xe9 \u010d\xedslice \u2013 uspo\u0159\xe1dan\xfd seznam","lower-greek":"Mal\xe1 \u0159eck\xe1 p\xedsmena \u2013 uspo\u0159\xe1dan\xfd seznam"}},tag:{inline:{class:"span ({0})"},img:"obr\xe1zek"},block:{normal:"Norm\xe1ln\xed",p:"Odstavec",h1:"Nadpis 1",h2:"Nadpis 2",h3:"Nadpis 3",h4:"Nadpis 4",h5:"Nadpis 5",h6:"Nadpis 6",div:"Div",pre:"Pre",li:"Polo\u017eka seznamu",td:"Bu\u0148ka",th:"Bu\u0148ka z\xe1hlav\xed",styles:"Nab\xeddka Styly",dropdown:"Bloky",describe:"Aktu\xe1ln\xed styl {0}",menu:"Styly",label:{inline:"P\u0159i\u0159azen\xe9 styly",table:"Styly tabulek",line:"Styly \u010dar",media:"Styly m\xe9di\xed",list:"Styly seznam\u016f",link:"Styly odkaz\u016f"}},font:{"menu-button":"Nab\xeddka P\xedsmo",menu:"P\xedsmo",face:"\u0158ez p\xedsma",size:"Velikost p\xedsma",coloroption:"Barva",describe:"Aktu\xe1ln\xed font {0}",color:"Text",highlight:"Zv\xfdrazn\u011bn\xed",stepper:{input:"Nastavit velikost p\xedsma",increase:"Zv\u011bt\u0161it p\xedsmo",decrease:"Zmen\u0161it p\xedsmo"}},cog:{"menu-button":"Nab\xeddka Nastaven\xed",menu:"Nastaven\xed",spellcheck:"Kontrola pravopisu",capitalisation:"Velk\xe1 p\xedsmena",autocorrect:"Automatick\xe9 opravy",linkpreviews:"N\xe1hledy odkaz\u016f",help:"N\xe1pov\u011bda"},alignment:{toolbar:"Nab\xeddka Zarovn\xe1n\xed",menu:"Zarovn\xe1n\xed",left:"Zarovnat vlevo",center:"Zarovnat na st\u0159ed",right:"Zarovnat vpravo",justify:"Zarovnat do bloku",describe:"Aktu\xe1ln\xed zarovn\xe1n\xed {0}"},category:{language:"Skupina jazyk\u016f",undo:"Skupina Zp\u011bt a znovu",insert:"Vlo\u017eit skupinu",style:"Skupina Styly",emphasis:"Skupina Form\xe1tov\xe1n\xed",align:"Skupina Zarovn\xe1n\xed",listindent:"Skupina Seznam a odsazen\xed",format:"Skupina P\xedsmo",tools:"Skupina N\xe1stroje",table:"Skupina Tabulka",image:"Skupina \xdapravy obr\xe1zk\u016f"},action:{undo:"Zp\u011bt",redo:"Znovu",bold:"Tu\u010dn\xe9",italic:"Kurz\xedva",underline:"Podtr\u017een\xed",strikethrough:"P\u0159e\u0161krtnut\xe9",subscript:"Doln\xed index",superscript:"Horn\xed index",removeformat:"Odstranit form\xe1tov\xe1n\xed",bullist:"Neuspo\u0159\xe1dan\xfd seznam",numlist:"Uspo\u0159\xe1dan\xfd seznam",indent:"Zv\u011bt\u0161it odsazen\xed",outdent:"Zmen\u0161it odsazen\xed",blockquote:"Blockquote",fullscreen:"Cel\xe1 obrazovka",search:"Dialogov\xe9 okno Naj\xedt a nahradit",a11ycheck:"Zkontrolovat dostupnost",toggle:{fullscreen:"Ukon\u010dit re\u017eim cel\xe9 obrazovky"}},table:{menu:"Vlo\u017eit tabulku","column-header":"Sloupec se z\xe1hlav\xedm","row-header":"\u0158\xe1dek z\xe1hlav\xed",float:"Plovouc\xed zarovn\xe1n\xed",cell:{color:{border:"Barva ohrani\u010den\xed",background:"Barva pozad\xed"},border:{width:"\u0160\xed\u0159ka ohrani\u010den\xed",stepper:{input:"Nastavit \u0161\xed\u0159ku ohrani\u010den\xed",increase:"Zv\u011bt\u0161it \u0161\xed\u0159ku ohrani\u010den\xed",decrease:"Zmen\u0161it \u0161\xed\u0159ku ohrani\u010den\xed"}}},context:{row:{title:"Podnab\xeddka \u0158\xe1dek",menu:"\u0158\xe1dek",insertabove:"Vlo\u017eit nad",insertbelow:"Vlo\u017eit pod"},column:{title:"Podnab\xeddka Sloupec",menu:"Sloupec",insertleft:"Vlo\u017eit vlevo",insertright:"Vlo\u017eit vpravo"},cell:{merge:"Slou\u010dit bu\u0148ky",unmerge:"Rozd\u011blit bu\u0148ku","split-cols":"Rozd\u011blit do sloupc\u016f","split-rows":"Rozd\u011blit do \u0159\xe1dk\u016f"},table:{title:"Podnab\xeddka Tabulka",menu:"Tabulka",properties:"Vlastnosti",delete:"Odstranit"},common:{delete:"Odstranit",normal:"Nastavit jako norm\xe1ln\xed",header:"Nastavit jako z\xe1hlav\xed"},palette:{show:"Mo\u017enosti \xfaprav tabulky jsou k dispozici v panelu n\xe1stroj\u016f",hide:"Mo\u017enosti \xfaprav tabulky ji\u017e nejsou k dispozici"}},picker:{header:"Nastaven\xed z\xe1hlav\xed",label:"V\xfdb\u011br tabulky",describepicker:"K nastaven\xed velikosti tabulky pou\u017eijte kurzorov\xe9 kl\xe1vesy.  Pro p\u0159echod do nastaven\xed z\xe1hlav\xed tabulky stiskn\u011bte tabul\xe1tor. K vlo\u017een\xed tabulky stiskn\u011bte mezern\xedk nebo Enter.",rows:"{0} v\xfd\u0161ka",cols:"{0} \u0161\xed\u0159ka"},border:"Ohrani\u010den\xed",summary:"Shrnut\xed",dialog:"Vlastnosti tabulky",caption:"Nadpis tabulky",width:"\u0160\xed\u0159ka",height:"V\xfd\u0161ka"},align:{none:"Bez zarovn\xe1n\xed",center:"Zarovnat na st\u0159ed",left:"Zarovnat vlevo",right:"Zarovnat vpravo"},button:{ok:"OK",cancel:"Storno",close:"Storno dialogov\xe9ho okna"},banner:{close:"Zav\u0159\xedt n\xe1pis"},border:{on:"Zapnuto",off:"Vypnuto",labels:{on:"Ohrani\u010den\xed zapnuto",off:"Ohrani\u010den\xed vypnuto"}},loading:{wait:"\u010cekejte pros\xedm..."},toolbar:{more:"V\xedce",backbutton:"Zp\u011bt","switch-code":"P\u0159epnout do zobrazen\xed K\xf3d","switch-pencil":"P\u0159epnout do zobrazen\xed N\xe1vrh"},link:{context:{edit:"Upravit odkaz",follow:"Otev\u0159\xedt odkaz",ignore:"Ignorovat neplatn\xfd odkaz",remove:"Odstranit odkaz"},dialog:{aria:{update:"Aktualizovat odkaz",insert:"Vlo\u017eit odkaz",properties:"Vlastnosti odkazu",quick:"Rychl\xe9 volby"},autocomplete:{open:"Je k dispozici seznam automatick\xe9ho dokon\u010dov\xe1n\xed odkaz\u016f. Pokra\u010dujte v psan\xed, nebo pomoc\xed kl\xe1vesy se \u0161ipkou nahoru \u010di dol\u016f vyberte navrhovan\xfd odkaz.",close:"Seznam automatick\xe9ho dokon\u010dov\xe1n\xed odkaz\u016f zav\u0159en",accept:"Vybran\xfd navrhovan\xfd odkaz {0}"},edit:"Upravit",remove:"Odebrat",preview:"N\xe1hled",update:"Aktualizovat",insert:"Vlo\u017eit",tooltip:"Odkaz"},properties:{dialog:{title:"Vlastnosti odkazu"},text:{label:"Zobrazen\xfd text",placeholder:"Napi\u0161te nebo vlo\u017ete text k zobrazen\xed"},url:{label:"URL adresa odkazu nebo z\xe1lo\u017eka",placeholder:"Zadejte URL adresu odkazu nebo z\xe1lo\u017eku",invalid:"URL adresa odkazu je z\u0159ejm\u011b nespr\xe1vn\xe1"},title:{label:"Titulek",placeholder:"Napi\u0161te nebo vlo\u017ete n\xe1zev odkazu"},button:{remove:"Odebrat"},target:{label:"C\xedl",none:"\u017d\xe1dn\xe9",blank:"Nov\xe9 okno",top:"Cel\xe1 str\xe1nka",self:"Tent\xfd\u017e r\xe1mec",parent:"Nad\u0159azen\xfd r\xe1mec"}},anchor:{top:"Za\u010d\xe1tek dokumentu",bottom:"Konec dokumentu"}},fileupload:{title:"Vlo\u017eit obr\xe1zky",tablocal:"M\xedstn\xed soubory",tabweburl:"URL webu",dropimages:"P\u0159et\xe1hnout obr\xe1zky sem",chooseimage:"Vybrat obr\xe1zek k odesl\xe1n\xed",web:{url:"URL webov\xe9ho obr\xe1zku"},weburlhelp:"Pro zobrazen\xed n\xe1hledu obr\xe1zku zadejte svou adresu URL. U velk\xfdch obr\xe1zk\u016f m\u016f\u017ee chv\xedli trvat, ne\u017e se zobraz\xed.",invalid1:"Na adrese URL, kterou pou\u017e\xedv\xe1te, nem\u016f\u017eeme naj\xedt obr\xe1zek.",invalid2:"Zkontrolujte, zda v adrese URL nejsou p\u0159eklepy.",invalid3:"Ujist\u011bte se, \u017ee obr\xe1zek, ke kter\xe9mu chcete z\xedskat p\u0159\xedstup, je ve\u0159ejn\xfd a nen\xed chr\xe1n\u011bn heslem nebo \u017ee se nenach\xe1z\xed v priv\xe1tn\xed s\xedti."},image:{context:{properties:"Vlastnosti obr\xe1zku",palette:{show:"Mo\u017enosti \xfaprav obr\xe1zk\u016f jsou k dispozici v panelu n\xe1stroj\u016f",hide:"Mo\u017enosti \xfaprav obr\xe1zk\u016f ji\u017e nejsou k dispozici"}},dialog:{title:"Vlastnosti obr\xe1zku",fields:{align:"Plovouc\xed zarovn\xe1n\xed",url:"URL",urllocal:"Obr\xe1zek je\u0161t\u011b nebyl ulo\u017een",alt:"Alternativn\xed text",width:"\u0160\xed\u0159ka",height:"V\xfd\u0161ka",constrain:{label:"Zmen\u0161it rozm\u011br",on:"Zamknut\xfd pom\u011br stran",off:"Odemknut\xfd pom\u011br stran"}}},menu:"Vlo\u017eit obr\xe1zek","menu-button":"Nab\xeddka Vlo\u017eit obr\xe1zek","from-url":"URL webu","from-camera":"Z fotoapar\xe1tu",toolbar:{rotateleft:"Oto\u010dit doleva",rotateright:"Oto\u010dit doprava",fliphorizontal:"P\u0159eklopit vodorovn\u011b",flipvertical:"P\u0159eklopit svisle",properties:"Vlastnosti obr\xe1zku"},crop:{announce:"Prob\xedh\xe1 vstup do rozhran\xed pro o\u0159\xedznut\xed. K proveden\xed stiskn\u011bte Enter, ke zru\u0161en\xed Escape.",cancel:"O\u0159\xedznut\xed se ru\u0161\xed",begin:"O\u0159\xedznout obr\xe1zek",apply:"Pou\u017e\xedt o\u0159\xedznut\xed",handle:{nw:"Lev\xfd horn\xed \xfachyt pro o\u0159\xedznut\xed",ne:"Prav\xfd horn\xed \xfachyt pro o\u0159\xedznut\xed",se:"Prav\xfd doln\xed \xfachyt pro o\u0159\xedznut\xed",sw:"Lev\xfd doln\xed \xfachyt pro o\u0159\xedznut\xed",shade:"Maska pro o\u0159\xedznut\xed"}}},units:{"amount-of-total":"{0} z {1}"},search:{menu:"Naj\xedt a nahradit",field:{replace:"Pole pro nahrazen\xed",search:"Pole pro vyhled\xe1v\xe1n\xed"},search:"Hledat",previous:"P\u0159edchoz\xed",next:"Dal\u0161\xed",replace:"Nahradit","replace-all":"Nahradit v\u0161e",matchcase:"Rozli\u0161ovat mal\xe1 a velk\xe1 p\xedsmena"},mentions:{initiated:"Vytvo\u0159en\xe1 zm\xednka, pokra\u010dujte v psan\xed pro automatick\xe9 dokon\u010dov\xe1n\xed",lookahead:{open:"Pol\xed\u010dko se seznamem automaticky dokon\u010dovan\xfdch polo\u017eek",cancelled:"Zru\u0161en\xe1 zm\xednka",searching:"Vyhled\xe1v\xe1m v\xfdsledky",selected:"Vlo\u017een\xe1 zm\xednka {0}",noresults:"\u017d\xe1dn\xe9 v\xfdsledky"}},cement:{dialog:{paste:{title:"Mo\u017enosti form\xe1tov\xe1n\xed p\u0159i vkl\xe1d\xe1n\xed",instructions:"Rozhodn\u011bte se, zda chcete zachovat nebo odebrat form\xe1tov\xe1n\xed vkl\xe1dan\xe9ho obsahu.",merge:"Zachovat form\xe1tov\xe1n\xed",clean:"Odstranit form\xe1tov\xe1n\xed"},flash:{title:"Import m\xedstn\xedho obr\xe1zku","trigger-paste":"K vlo\u017een\xed obsahu s obr\xe1zky aktivovat pomoc\xed kl\xe1vesnice op\u011btovn\xe9 vlo\u017een\xed.",missing:'Pro import obr\xe1zk\u016f z Microsoft Office je zapot\u0159eb\xed Adobe Flash. Nainstalujte si pros\xedm <a href="http://get.adobe.com/flashplayer/" target="_blank">Adobe Flash Player</a>.',"press-escape":'Stiskn\u011bte kl\xe1vesu <span class="ephox-polish-help-kbd">ESC</span> k ignorov\xe1n\xed m\xedstn\xedch obr\xe1zk\u016f a pokra\u010dujte v \xfaprav\xe1ch.'}}},cloud:{error:{apikey:"V\xe1\u0161 kl\xed\u010d API je neplatn\xfd.",domain:"V\xe1\u0161 kl\xed\u010d API nepodporuje va\u0161i dom\xe9nu ({0}).",plan:"P\u0159ekro\u010dili jste po\u010det sta\u017een\xed editoru dostupn\xfdch v r\xe1mci va\u0161eho pl\xe1nu. K proveden\xed upgradu nav\u0161tivte webov\xe9 str\xe1nky."},dashboard:"P\u0159ejd\u011bte do ovl\xe1dac\xedho panelu administr\xe1tora."},errors:{paste:{notready:"Funkce importu dokument\u016f Word nebyla na\u010dtena. Po\u010dkejte pros\xedm a zkuste to znovu.",generic:"P\u0159i vkl\xe1d\xe1n\xed obsahu do\u0161lo k chyb\u011b."},toolbar:{missing:{custom:{string:'Vlastn\xed p\u0159\xedkazy mus\xed m\xedt vlastnost "{0}" a mus\xed se jednat o \u0159et\u011bzec'}},invalid:"Konfigurace panelu n\xe1stroj\u016f je neplatn\xe1 ({0}). Podrobnosti naleznete v konzole."},spelling:{missing:{service:"Slu\u017eba kontroly pravopisu nebyla nalezena: ({0})."}},images:{edit:{needsproxy:"Pro \xfapravy obr\xe1zk\u016f z t\xe9to dom\xe9ny je vy\u017eadov\xe1n proxy server: ({0})",proxyerror:"Nelze komunikovat s proxy serverem pro \xfapravu obr\xe1zku. Podrobnosti naleznete v konzole.",generic:"P\u0159i \xfaprav\u011b obr\xe1zku do\u0161lo k chyb\u011b. Podrobnosti naleznete v konzole."},disallowed:{local:"Vkl\xe1d\xe1n\xed m\xedstn\xedch obr\xe1zk\u016f je zak\xe1z\xe1no. M\xedstn\xed obr\xe1zky byly z vlo\u017een\xe9ho obsahu odstran\u011bny.",dragdrop:"Funkce p\u0159eta\u017een\xed byla zak\xe1z\xe1na."},upload:{unknown:"Obr\xe1zek se nepoda\u0159ilo odeslat",invalid:"Nebyly zpracov\xe1ny v\u0161echny soubory \u2013 n\u011bkter\xe9 obr\xe1zky nebyly platn\xe9",failed:"Obr\xe1zek se nepoda\u0159ilo odeslat: ({0}).",cors:"Nelze kontaktovat slu\u017ebu pro odes\xedl\xe1n\xed obr\xe1zk\u016f. Mo\u017en\xe1 chyba CORS: ({0})"},missing:{service:"Slu\u017eba pro pr\xe1ci s obr\xe1zky nebyla nalezena: ({0}).",flash:"Nastaven\xed zabezpe\u010den\xed va\u0161eho prohl\xed\u017ee\u010de pravd\u011bpodobn\u011b br\xe1n\xed importu obr\xe1zk\u016f."},import:{failed:"N\u011bkter\xe9 obr\xe1zky se nepoda\u0159ilo importovat.",unsupported:"Nepodporovan\xfd typ obr\xe1zku.",invalid:"Obr\xe1zek je neplatn\xfd."}},webview:{image:"P\u0159\xedmo zkop\xedrovan\xe9 obr\xe1zky nelze vlo\u017eit."},safari:{image:"Safari nepodporuje p\u0159\xedm\xe9 vkl\xe1d\xe1n\xed obr\xe1zk\u016f.",url:"Doporu\u010dovan\xe1 n\xe1hradn\xed \u0159e\u0161en\xed",rtf:"Zjistit jak","browser-settings":"Chcete-li vkl\xe1dat obr\xe1zky, zm\u011b\u0148te pros\xedm nastaven\xed sv\xe9ho prohl\xed\u017ee\u010de."},flash:{crashed:"Obr\xe1zky nebyly importov\xe1ny, proto\u017ee pravd\u011bpodobn\u011b do\u0161lo k selh\xe1n\xed modulu Adobe Flash. P\u0159\xed\u010dinou m\u016f\u017ee b\xfdt vkl\xe1d\xe1n\xed velk\xfdch dokument\u016f."},http:{400:"Chybn\xfd po\u017eadavek: {0}",401:"Neopr\xe1vn\u011bno: {0}",403:"Zak\xe1z\xe1no: {0}",404:"Nenalezeno: {0}",407:"Vy\u017eadov\xe1no ov\u011b\u0159ov\xe1n\xed proxy serverem: {0}",409:"Konflikt soubor\u016f: {0}",413:"P\u0159\xedli\u0161 velk\xe9 vyt\xed\u017een\xed: {0}",415:"Nepodporovan\xfd typ m\xe9di\xed: {0}",500:"Vnit\u0159n\xed chyba serveru: {0}",501:"Nen\xed implementov\xe1no: {0}"}}}},b=function(a,b){var c=a.src.indexOf("?");return a.src.indexOf(b)+b.length===c},c=function(a){for(var b=a.split("."),c=window,d=0;d<b.length&&void 0!==c&&null!==c;++d)c=c[b[d]];return c},d=function(a,b){if(a){var d=a.getAttribute("data-main");if(d){a.removeAttribute("data-main");var e=c(d);if("function"==typeof e)return e;console.warn("attribute on "+b+" does not reference a global method")}else console.warn("no data-main attribute found on "+b+" script tag")}};!function(a,c){var e=d(document.currentScript,c);if(e)return e;for(var f=document.getElementsByTagName("script"),g=0;g<f.length;g++)if(b(f[g],a)){var h=d(f[g],c);if(h)return h}throw"cannot locate "+c+" script tag"}("tbio_cs.js","strings for language cs")({version:"2.3.0",strings:a})}();