var jogo=document.getElementById("jogo").getContext("2d");
var chamar=0;
var primeiro=0;
var tempo= new Date;
var continuar=0;
var agora1;
var agora2;
var dife;
/* 0=apolar e 1=polar */var polaridade=1;
/* 0=direita e 1=esquerda */var lado=0;
/*0=mudar para direita e 1=mudar para esquerda*/var mudar=0;
/*0=false e 1=true*/var correndo=0;
var pulando=0;
var vida_pers1=100;
/*0=fora de atacar, 1= na animação de atacar e 2=deu dano*/var atacando=0;
var tempo_atac=20;

//inimigo Espetera
var inimigos=1;
var vida_ini1=100;
var lado_ini1;
var andando_ini1=0;


	//cenário
	
	
	var cenario_imagem= new Image();
	cenario_imagem.src= "cenario/cenario1.jpg";
	
	//personagem principal
	/*sons*/
	//andando
	
	var andando_som= new Audio();
	andando_som.src="sons/andando/andando.mp3";
	
	//pulando
	
	var pulando_som= new Audio();
	pulando_som.src="sons/pulando/pulando.mp3";
	
	/*não sons*/
	//parado
	
	var parado_direita1= new Image();
	parado_direita1.src="sabao_polar/parado_direita.png";
	
	var parado_esquerda1= new Image();
	parado_esquerda1.src="sabao_polar/parado_esquerda.png";

	var parado_direita2= new Image();
	parado_direita2.src="sabao_apolar/parado_direita.png";
	
	var parado_esquerda2= new Image();
	parado_esquerda2.src="sabao_apolar/parado_esquerda.png";

	/*HUD*/
	//Barra de Vida
	
	var barra_vida1= new Image();
	barra_vida1.src="hud/barra_vida/barra_vida0.png";
	
	var barra_vida2= new Image();
	barra_vida2.src="hud/barra_vida/barra_vida1.png";
	
	var barra_vida3= new Image();
	barra_vida3.src="hud/barra_vida/barra_vida2.png";
	
	var barra_vida4= new Image();
	barra_vida4.src="hud/barra_vida/barra_vida3.png";
	
	var barra_vida5= new Image();
	barra_vida5.src="hud/barra_vida/barra_vida4.png";
	
	var barra_vida6= new Image();
	barra_vida6.src="hud/barra_vida/barra_vida5.png";
	
	var barra_vida7= new Image();
	barra_vida7.src="hud/barra_vida/barra_vida6.png";
	
	var barra_vida8= new Image();
	barra_vida8.src="hud/barra_vida/barra_vida7.png";
	
	var barra_vida9= new Image();
	barra_vida9.src="hud/barra_vida/barra_vida8.png";
	
	var barra_atual=barra_vida9;
	
	/*declaração das animações*/
	
	//correndo polar
	//direita
	var correndo_direita1_polar= new Image();
	correndo_direita1_polar.src="animacoes/correndo_direita/polar/correndo3.png";

	var correndo_direita2_polar= new Image();
	correndo_direita2_polar.src="animacoes/correndo_direita/polar/correndo4.png";

	var correndo_direita3_polar= new Image();
	correndo_direita3_polar.src="animacoes/correndo_direita/polar/correndo5.png";

	var correndo_direita4_polar= new Image();
	correndo_direita4_polar.src="animacoes/correndo_direita/polar/correndo6.png";
	
	//esquerda
	var correndo_esquerda1_polar= new Image();
	correndo_esquerda1_polar.src="animacoes/correndo_esquerda/polar/correndo3.png";

	var correndo_esquerda2_polar= new Image();
	correndo_esquerda2_polar.src="animacoes/correndo_esquerda/polar/correndo4.png";
	
	var correndo_esquerda3_polar= new Image();
	correndo_esquerda3_polar.src="animacoes/correndo_esquerda/polar/correndo5.png";
	
	var correndo_esquerda4_polar= new Image();
	correndo_esquerda4_polar.src="animacoes/correndo_esquerda/polar/correndo6.png";
	
	
	//correndo apolar
	//direita
	var correndo_direita1_apolar= new Image();
	correndo_direita1_apolar.src="animacoes/correndo_direita/apolar/correndo3.png";

	var correndo_direita2_apolar= new Image();
	correndo_direita2_apolar.src="animacoes/correndo_direita/apolar/correndo4.png";

	var correndo_direita3_apolar= new Image();
	correndo_direita3_apolar.src="animacoes/correndo_direita/apolar/correndo5.png";

	var correndo_direita4_apolar= new Image();
	correndo_direita4_apolar.src="animacoes/correndo_direita/apolar/correndo6.png";
	
	//esquerda
	var correndo_esquerda1_apolar= new Image();
	correndo_esquerda1_apolar.src="animacoes/correndo_esquerda/apolar/correndo3.png";

	var correndo_esquerda2_apolar= new Image();
	correndo_esquerda2_apolar.src="animacoes/correndo_esquerda/apolar/correndo4.png";
	
	var correndo_esquerda3_apolar= new Image();
	correndo_esquerda3_apolar.src="animacoes/correndo_esquerda/apolar/correndo5.png";
	
	var correndo_esquerda4_apolar= new Image();
	correndo_esquerda4_apolar.src="animacoes/correndo_esquerda/apolar/correndo6.png";
	
	//pulando polar
	//direita
	var pulando_direita1_polar= new Image();
	pulando_direita1_polar.src="animacoes/pulando_direita/polar/pulando1.png";
	
	var pulando_direita2_polar= new Image();
	pulando_direita2_polar.src="animacoes/pulando_direita/polar/pulando2.png";
	
	var pulando_direita3_polar= new Image();
	pulando_direita3_polar.src="animacoes/pulando_direita/polar/pulando3.png";
	
	var pulando_direita4_polar= new Image();
	pulando_direita4_polar.src="animacoes/pulando_direita/polar/pulando4.png";
	
	var pulando_direita5_polar= new Image();
	pulando_direita5_polar.src="animacoes/pulando_direita/polar/pulando5.png";
	
	//esquerda
	var pulando_esquerda1_polar= new Image();
	pulando_esquerda1_polar.src="animacoes/pulando_esquerda/polar/pulando1.png";
	
	var pulando_esquerda2_polar= new Image();
	pulando_esquerda2_polar.src="animacoes/pulando_esquerda/polar/pulando2.png";
	
	var pulando_esquerda3_polar= new Image();
	pulando_esquerda3_polar.src="animacoes/pulando_esquerda/polar/pulando3.png";
	
	var pulando_esquerda4_polar= new Image();
	pulando_esquerda4_polar.src="animacoes/pulando_esquerda/polar/pulando4.png";
	
	var pulando_esquerda5_polar= new Image();
	pulando_esquerda5_polar.src="animacoes/pulando_esquerda/polar/pulando5.png";
	
	
	//pulando apolar
	//direita
	var pulando_direita1_apolar= new Image();
	pulando_direita1_apolar.src="animacoes/pulando_direita/apolar/pulando1.png";
	
	var pulando_direita2_apolar= new Image();
	pulando_direita2_apolar.src="animacoes/pulando_direita/apolar/pulando2.png";
	
	var pulando_direita3_apolar= new Image();
	pulando_direita3_apolar.src="animacoes/pulando_direita/apolar/pulando3.png";
		
	var pulando_direita4_apolar= new Image();
	pulando_direita4_apolar.src="animacoes/pulando_direita/apolar/pulando4.png";
	
	var pulando_direita5_apolar= new Image();
	pulando_direita5_apolar.src="animacoes/pulando_direita/apolar/pulando5.png";
	
	//esquerda
	var pulando_esquerda1_apolar= new Image();
	pulando_esquerda1_apolar.src="animacoes/pulando_esquerda/apolar/pulando1.png";
	
	var pulando_esquerda2_apolar= new Image();
	pulando_esquerda2_apolar.src="animacoes/pulando_esquerda/apolar/pulando2.png";
	
	var pulando_esquerda3_apolar= new Image();
	pulando_esquerda3_apolar.src="animacoes/pulando_esquerda/apolar/pulando3.png";
	
	var pulando_esquerda4_apolar= new Image();
	pulando_esquerda4_apolar.src="animacoes/pulando_esquerda/apolar/pulando4.png";
	
	var pulando_esquerda5_apolar= new Image();
	pulando_esquerda5_apolar.src="animacoes/pulando_esquerda/apolar/pulando5.png";
	
	/*Atacando*/
	//polar
	//direita
	var atacando_direita1_polar= new Image();
	atacando_direita1_polar.src="animacoes/atacando_direita/polar/atacando1.png";
	
	var atacando_direita2_polar= new Image();
	atacando_direita2_polar.src="animacoes/atacando_direita/polar/atacando2.png";
	
	var atacando_direita3_polar= new Image();
	atacando_direita3_polar.src="animacoes/atacando_direita/polar/atacando3.png";
	
	var atacando_direita4_polar= new Image();
	atacando_direita4_polar.src="animacoes/atacando_direita/polar/atacando4.png";

	var atacando_direita5_polar= new Image();
	atacando_direita5_polar.src="animacoes/atacando_direita/polar/atacando5.png";
		
	var atacando_direita6_polar= new Image();
	atacando_direita6_polar.src="animacoes/atacando_direita/polar/atacando6.png";
	
	var atacando_direita7_polar= new Image();
	atacando_direita7_polar.src="animacoes/atacando_direita/polar/atacando7.png";
	
	var atacando_direita8_polar= new Image();
	atacando_direita8_polar.src="animacoes/atacando_direita/polar/atacando8.png";
	
	var atacando_direita9_polar= new Image();
	atacando_direita9_polar.src="animacoes/atacando_direita/polar/atacando9.png";
	
	var atacando_direita10_polar= new Image();
	atacando_direita10_polar.src="animacoes/atacando_direita/polar/atacando10.png";

	var atacando_direita11_polar= new Image();
	atacando_direita11_polar.src="animacoes/atacando_direita/polar/atacando11.png";
		
	var atacando_direita12_polar= new Image();
	atacando_direita12_polar.src="animacoes/atacando_direita/polar/atacando12.png";
	
	var atacando_direita13_polar= new Image();
	atacando_direita13_polar.src="animacoes/atacando_direita/polar/atacando13.png";
	
	//esquerda
	var atacando_esquerda1_polar= new Image();
	atacando_esquerda1_polar.src="animacoes/atacando_esquerda/polar/atacando1.png";
	
	var atacando_esquerda2_polar= new Image();
	atacando_esquerda2_polar.src="animacoes/atacando_esquerda/polar/atacando2.png";
	
	var atacando_esquerda3_polar= new Image();
	atacando_esquerda3_polar.src="animacoes/atacando_esquerda/polar/atacando3.png";
	
	var atacando_esquerda4_polar= new Image();
	atacando_esquerda4_polar.src="animacoes/atacando_esquerda/polar/atacando4.png";

	var atacando_esquerda5_polar= new Image();
	atacando_esquerda5_polar.src="animacoes/atacando_esquerda/polar/atacando5.png";
		
	var atacando_esquerda6_polar= new Image();
	atacando_esquerda6_polar.src="animacoes/atacando_esquerda/polar/atacando6.png";
	
	var atacando_esquerda7_polar= new Image();
	atacando_esquerda7_polar.src="animacoes/atacando_esquerda/polar/atacando7.png";
	
	var atacando_esquerda8_polar= new Image();
	atacando_esquerda8_polar.src="animacoes/atacando_esquerda/polar/atacando8.png";
	
	var atacando_esquerda9_polar= new Image();
	atacando_esquerda9_polar.src="animacoes/atacando_esquerda/polar/atacando9.png";
	
	var atacando_esquerda10_polar= new Image();
	atacando_esquerda10_polar.src="animacoes/atacando_esquerda/polar/atacando10.png";

	var atacando_esquerda11_polar= new Image();
	atacando_esquerda11_polar.src="animacoes/atacando_esquerda/polar/atacando11.png";
		
	var atacando_esquerda12_polar= new Image();
	atacando_esquerda12_polar.src="animacoes/atacando_esquerda/polar/atacando12.png";
	
	var atacando_esquerda13_polar= new Image();
	atacando_esquerda13_polar.src="animacoes/atacando_esquerda/polar/atacando13.png";
	
	//apolar
	//direita
	var atacando_direita1_apolar= new Image();
	atacando_direita1_apolar.src="animacoes/atacando_direita/apolar/atacando1.png";
	
	var atacando_direita2_apolar= new Image();
	atacando_direita2_apolar.src="animacoes/atacando_direita/apolar/atacando2.png";
	
	var atacando_direita3_apolar= new Image();
	atacando_direita3_apolar.src="animacoes/atacando_direita/apolar/atacando3.png";
	
	var atacando_direita4_apolar= new Image();
	atacando_direita4_apolar.src="animacoes/atacando_direita/apolar/atacando4.png";

	var atacando_direita5_apolar= new Image();
	atacando_direita5_apolar.src="animacoes/atacando_direita/apolar/atacando5.png";
		
	var atacando_direita6_apolar= new Image();
	atacando_direita6_apolar.src="animacoes/atacando_direita/apolar/atacando6.png";
	
	var atacando_direita7_apolar= new Image();
	atacando_direita7_apolar.src="animacoes/atacando_direita/apolar/atacando7.png";
	
	var atacando_direita8_apolar= new Image();
	atacando_direita8_apolar.src="animacoes/atacando_direita/apolar/atacando8.png";
	
	var atacando_direita9_apolar= new Image();
	atacando_direita9_apolar.src="animacoes/atacando_direita/apolar/atacando9.png";
	
	var atacando_direita10_apolar= new Image();
	atacando_direita10_apolar.src="animacoes/atacando_direita/apolar/atacando10.png";

	var atacando_direita11_apolar= new Image();
	atacando_direita11_apolar.src="animacoes/atacando_direita/apolar/atacando11.png";
		
	var atacando_direita12_apolar= new Image();
	atacando_direita12_apolar.src="animacoes/atacando_direita/apolar/atacando12.png";
	
	var atacando_direita13_apolar= new Image();
	atacando_direita13_apolar.src="animacoes/atacando_direita/apolar/atacando13.png";
	
	//esquerda
	var atacando_esquerda1_apolar= new Image();
	atacando_esquerda1_apolar.src="animacoes/atacando_esquerda/apolar/atacando1.png";
	
	var atacando_esquerda2_apolar= new Image();
	atacando_esquerda2_apolar.src="animacoes/atacando_esquerda/apolar/atacando2.png";
	
	var atacando_esquerda3_apolar= new Image();
	atacando_esquerda3_apolar.src="animacoes/atacando_esquerda/apolar/atacando3.png";
	
	var atacando_esquerda4_apolar= new Image();
	atacando_esquerda4_apolar.src="animacoes/atacando_esquerda/apolar/atacando4.png";

	var atacando_esquerda5_apolar= new Image();
	atacando_esquerda5_apolar.src="animacoes/atacando_esquerda/apolar/atacando5.png";
		
	var atacando_esquerda6_apolar= new Image();
	atacando_esquerda6_apolar.src="animacoes/atacando_esquerda/apolar/atacando6.png";
	
	var atacando_esquerda7_apolar= new Image();
	atacando_esquerda7_apolar.src="animacoes/atacando_esquerda/apolar/atacando7.png";
	
	var atacando_esquerda8_apolar= new Image();
	atacando_esquerda8_apolar.src="animacoes/atacando_esquerda/apolar/atacando8.png";
	
	var atacando_esquerda9_apolar= new Image();
	atacando_esquerda9_apolar.src="animacoes/atacando_esquerda/apolar/atacando9.png";
	
	var atacando_esquerda10_apolar= new Image();
	atacando_esquerda10_apolar.src="animacoes/atacando_esquerda/apolar/atacando10.png";

	var atacando_esquerda11_apolar= new Image();
	atacando_esquerda11_apolar.src="animacoes/atacando_esquerda/apolar/atacando11.png";
		
	var atacando_esquerda12_apolar= new Image();
	atacando_esquerda12_apolar.src="animacoes/atacando_esquerda/apolar/atacando12.png";
	
	var atacando_esquerda13_apolar= new Image();
	atacando_esquerda13_apolar.src="animacoes/atacando_esquerda/apolar/atacando13.png";
	
	
	//Espetera
	//parado
	var inimigo1_parado= new Image();
	inimigo1_parado.src="animacoes/Espetera/parado/Espetera.png";
	var animacao1=inimigo1_parado;
	
	//andando
	//direita
	var Espetera1_andando_direita= new Image();
	Espetera1_andando_direita.src="animacoes/Espetera/andando_direita/EspeAnda1.png";
	
	var Espetera2_andando_direita= new Image();
	Espetera2_andando_direita.src="animacoes/Espetera/andando_direita/EspeAnda2.png";
	
	var Espetera3_andando_direita= new Image();
	Espetera3_andando_direita.src="animacoes/Espetera/andando_direita/EspeAnda3.png";
	
	var Espetera4_andando_direita= new Image();
	Espetera4_andando_direita.src="animacoes/Espetera/andando_direita/EspeAnda4.png";
	
	var Espetera5_andando_direita= new Image();
	Espetera5_andando_direita.src="animacoes/Espetera/andando_direita/EspeAnda5.png";
	
	var Espetera6_andando_direita= new Image();
	Espetera6_andando_direita.src="animacoes/Espetera/andando_direita/EspeAnda6.png";
	
	var Espetera7_andando_direita= new Image();
	Espetera7_andando_direita.src="animacoes/Espetera/andando_direita/EspeAnda7.png";
	
	var Espetera8_andando_direita= new Image();
	Espetera8_andando_direita.src="animacoes/Espetera/andando_direita/EspeAnda8.png";
	
	var Espetera9_andando_direita= new Image();
	Espetera9_andando_direita.src="animacoes/Espetera/andando_direita/EspeAnda9.png";
	
	var Espetera10_andando_direita= new Image();
	Espetera10_andando_direita.src="animacoes/Espetera/andando_direita/EspeAnda10.png";
	
	var Espetera11_andando_direita= new Image();
	Espetera11_andando_direita.src="animacoes/Espetera/andando_direita/EspeAnda11.png";
	
	var Espetera12_andando_direita= new Image();
	Espetera12_andando_direita.src="animacoes/Espetera/andando_direita/EspeAnda12.png";
	
	var Espetera13_andando_direita= new Image();
	Espetera13_andando_direita.src="animacoes/Espetera/andando_direita/EspeAnda13.png";
	
	var Espetera14_andando_direita= new Image();
	Espetera14_andando_direita.src="animacoes/Espetera/andando_direita/EspeAnda14.png";
	
	var Espetera15_andando_direita= new Image();
	Espetera15_andando_direita.src="animacoes/Espetera/andando_direita/EspeAnda15.png";
	
	var Espetera16_andando_direita= new Image();
	Espetera16_andando_direita.src="animacoes/Espetera/andando_direita/EspeAnda16.png";
	
	var Espetera17_andando_direita= new Image();
	Espetera17_andando_direita.src="animacoes/Espetera/andando_direita/EspeAnda17.png";
	
	var Espetera18_andando_direita= new Image();
	Espetera18_andando_direita.src="animacoes/Espetera/andando_direita/EspeAnda18.png";
	
	var Espetera19_andando_direita= new Image();
	Espetera19_andando_direita.src="animacoes/Espetera/andando_direita/EspeAnda19.png";
	
	var Espetera20_andando_direita= new Image();
	Espetera20_andando_direita.src="animacoes/Espetera/andando_direita/EspeAnda20.png";
	
	var Espetera21_andando_direita= new Image();
	Espetera21_andando_direita.src="animacoes/Espetera/andando_direita/EspeAnda21.png";
	
	var Espetera22_andando_direita= new Image();
	Espetera22_andando_direita.src="animacoes/Espetera/andando_direita/EspeAnda22.png";
	
	var Espetera23_andando_direita= new Image();
	Espetera23_andando_direita.src="animacoes/Espetera/andando_direita/EspeAnda23.png";
	
	var Espetera24_andando_direita= new Image();
	Espetera24_andando_direita.src="animacoes/Espetera/andando_direita/EspeAnda24.png";
	
	var Espetera25_andando_direita= new Image();
	Espetera25_andando_direita.src="animacoes/Espetera/andando_direita/EspeAnda25.png";
	
	var Espetera26_andando_direita= new Image();
	Espetera26_andando_direita.src="animacoes/Espetera/andando_direita/EspeAnda26.png";
	
	var Espetera27_andando_direita= new Image();
	Espetera27_andando_direita.src="animacoes/Espetera/andando_direita/EspeAnda27.png";
	
	var Espetera28_andando_direita= new Image();
	Espetera28_andando_direita.src="animacoes/Espetera/andando_direita/EspeAnda28.png";
	
	var Espetera29_andando_direita= new Image();
	Espetera29_andando_direita.src="animacoes/Espetera/andando_direita/EspeAnda29.png";
	
	var Espetera30_andando_direita= new Image();
	Espetera30_andando_direita.src="animacoes/Espetera/andando_direita/EspeAnda30.png";
	
	//esquerda
	var Espetera1_andando_esquerda= new Image();
	Espetera1_andando_esquerda.src="animacoes/Espetera/andando_esquerda/EspeAnda1.png";
	
	var Espetera2_andando_esquerda= new Image();
	Espetera2_andando_esquerda.src="animacoes/Espetera/andando_esquerda/EspeAnda2.png";
	
	var Espetera3_andando_esquerda= new Image();
	Espetera3_andando_esquerda.src="animacoes/Espetera/andando_esquerda/EspeAnda3.png";
	
	var Espetera4_andando_esquerda= new Image();
	Espetera4_andando_esquerda.src="animacoes/Espetera/andando_esquerda/EspeAnda4.png";
	
	var Espetera5_andando_esquerda= new Image();
	Espetera5_andando_esquerda.src="animacoes/Espetera/andando_esquerda/EspeAnda5.png";
	
	var Espetera6_andando_esquerda= new Image();
	Espetera6_andando_esquerda.src="animacoes/Espetera/andando_esquerda/EspeAnda6.png";
	
	var Espetera7_andando_esquerda= new Image();
	Espetera7_andando_esquerda.src="animacoes/Espetera/andando_esquerda/EspeAnda7.png";
	
	var Espetera8_andando_esquerda= new Image();
	Espetera8_andando_esquerda.src="animacoes/Espetera/andando_esquerda/EspeAnda8.png";
	
	var Espetera9_andando_esquerda= new Image();
	Espetera9_andando_esquerda.src="animacoes/Espetera/andando_esquerda/EspeAnda9.png";
	
	var Espetera10_andando_esquerda= new Image();
	Espetera10_andando_esquerda.src="animacoes/Espetera/andando_esquerda/EspeAnda10.png";
	
	var Espetera11_andando_esquerda= new Image();
	Espetera11_andando_esquerda.src="animacoes/Espetera/andando_esquerda/EspeAnda11.png";
	
	var Espetera12_andando_esquerda= new Image();
	Espetera12_andando_esquerda.src="animacoes/Espetera/andando_esquerda/EspeAnda12.png";
	
	var Espetera13_andando_esquerda= new Image();
	Espetera13_andando_esquerda.src="animacoes/Espetera/andando_esquerda/EspeAnda13.png";
	
	var Espetera14_andando_esquerda= new Image();
	Espetera14_andando_esquerda.src="animacoes/Espetera/andando_esquerda/EspeAnda14.png";
	
	var Espetera15_andando_esquerda= new Image();
	Espetera15_andando_esquerda.src="animacoes/Espetera/andando_esquerda/EspeAnda15.png";
	
	var Espetera16_andando_esquerda= new Image();
	Espetera16_andando_esquerda.src="animacoes/Espetera/andando_esquerda/EspeAnda16.png";
	
	var Espetera17_andando_esquerda= new Image();
	Espetera17_andando_esquerda.src="animacoes/Espetera/andando_esquerda/EspeAnda17.png";
	
	var Espetera18_andando_esquerda= new Image();
	Espetera18_andando_esquerda.src="animacoes/Espetera/andando_esquerda/EspeAnda18.png";
	
	var Espetera19_andando_esquerda= new Image();
	Espetera19_andando_esquerda.src="animacoes/Espetera/andando_esquerda/EspeAnda19.png";
	
	var Espetera20_andando_esquerda= new Image();
	Espetera20_andando_esquerda.src="animacoes/Espetera/andando_esquerda/EspeAnda20.png";
	
	var Espetera21_andando_esquerda= new Image();
	Espetera21_andando_esquerda.src="animacoes/Espetera/andando_esquerda/EspeAnda21.png";
	
	var Espetera22_andando_esquerda= new Image();
	Espetera22_andando_esquerda.src="animacoes/Espetera/andando_esquerda/EspeAnda22.png";
	
	var Espetera23_andando_esquerda= new Image();
	Espetera23_andando_esquerda.src="animacoes/Espetera/andando_esquerda/EspeAnda23.png";
	
	var Espetera24_andando_esquerda= new Image();
	Espetera24_andando_esquerda.src="animacoes/Espetera/andando_esquerda/EspeAnda24.png";
	
	var Espetera25_andando_esquerda= new Image();
	Espetera25_andando_esquerda.src="animacoes/Espetera/andando_esquerda/EspeAnda25.png";
	
	var Espetera26_andando_esquerda= new Image();
	Espetera26_andando_esquerda.src="animacoes/Espetera/andando_esquerda/EspeAnda26.png";
	
	var Espetera27_andando_esquerda= new Image();
	Espetera27_andando_esquerda.src="animacoes/Espetera/andando_esquerda/EspeAnda27.png";
	
	var Espetera28_andando_esquerda= new Image();
	Espetera28_andando_esquerda.src="animacoes/Espetera/andando_esquerda/EspeAnda28.png";
	
	var Espetera29_andando_esquerda= new Image();
	Espetera29_andando_esquerda.src="animacoes/Espetera/andando_esquerda/EspeAnda29.png";
	
	var Espetera30_andando_esquerda= new Image();
	Espetera30_andando_esquerda.src="animacoes/Espetera/andando_esquerda/EspeAnda30.png";
	
/*420 e -28*/	
//posições
var x_pers1=0;
var y_pers1=172;
var correndo_tempo=80;
var aumentax=15;
var x_cena=0;
var y_cena=300;
var largura_cena=500;
var altura_cena=200;
var pulando_tempo1=200;
var pulando_tempo2=200;
var pulando_tempo1_mov=250;
var pulando_tempo2_mov=250;
var aumentay=-7;
var aumentax2=2;
var x_vida=0;
var y_vida=-70;
var lar_vida=210;
var alt_vida=270;
var subindo=0;
var descendo=0;
var y_ini1=140;
var x_ini1=Math.ceil((Math.random()*419)-12);
var alt_iniEspe=250;
var larg_iniEspe=200;