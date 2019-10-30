//inimigos
var duracao=50;
var velocidade_andar_ini=0.2;
function surgimento_inimigos()
{
	var aleat=((Math.random()*419)-12);
	inimigos++;
	return aleat;
}

function seguir()
{
	if(x_ini1<x_pers1)
	{
		andando_ini1=1;
		andar1_direita();
		console.log("funcionou");
		
	}
	
	else if (x_ini1>x_pers1)
	{
		andando_ini1=1;
		andar1_esquerda();
		console.log("funcionou");
	}
	
}

function andar1_direita()
{
	lado=0;
	console.log("funcionou1");
	x_ini1=x_ini1+velocidade_andar_ini;
	animacao1=Espetera1_andando_direita;
	setInterval(duracao);
	
	x_ini1=x_ini1+velocidade_andar_ini;
	animacao1=Espetera2_andando_direita;
	setInterval(duracao);
	
	x_ini1=x_ini1+velocidade_andar_ini;
	animacao1=Espetera3_andando_direita;
	setInterval(duracao);
	
	x_ini1=x_ini1+velocidade_andar_ini;
	animacao1=Espetera4_andando_direita;
	setInterval(duracao);
	
	x_ini1=x_ini1+velocidade_andar_ini;
	animacao1=Espetera5_andando_direita;
	setInterval(duracao);
	
	x_ini1=x_ini1+velocidade_andar_ini;
	animacao1=Espetera6_andando_direita;
	setInterval(duracao);
	
	x_ini1=x_ini1+velocidade_andar_ini;
	animacao1=Espetera7_andando_direita;
	setInterval(duracao);
	
	x_ini1=x_ini1+velocidade_andar_ini;
	animacao1=Espetera8_andando_direita;
	setInterval(duracao);
	
	x_ini1=x_ini1+velocidade_andar_ini;
	animacao1=Espetera9_andando_direita;
	setInterval(duracao);
	
	x_ini1=x_ini1+velocidade_andar_ini;
	animacao1=Espetera10_andando_direita;
	setInterval(duracao);
	
	x_ini1=x_ini1+velocidade_andar_ini;
	animacao1=Espetera11_andando_direita;
	setInterval(duracao);
	
	x_ini1=x_ini1+velocidade_andar_ini;
	animacao1=Espetera12_andando_direita;
	setInterval(duracao);
	
	x_ini1=x_ini1+velocidade_andar_ini;
	animacao1=Espetera13_andando_direita;
	setInterval(duracao);
	
	x_ini1=x_ini1+velocidade_andar_ini;
	animacao1=Espetera14_andando_direita;
	setInterval(duracao);
	
	x_ini1=x_ini1+velocidade_andar_ini;
	animacao1=Espetera15_andando_direita;
	setInterval(duracao);
	
	x_ini1=x_ini1+velocidade_andar_ini;
	animacao1=Espetera16_andando_direita;
	setInterval(duracao);
	
	x_ini1=x_ini1+velocidade_andar_ini;
	animacao1=Espetera17_andando_direita;
	setInterval(duracao);
	
	x_ini1=x_ini1+velocidade_andar_ini;
	animacao1=Espetera18_andando_direita;
	setInterval(duracao);
	
	x_ini1=x_ini1+velocidade_andar_ini;
	animacao1=Espetera19_andando_direita;
	setInterval(duracao);
	
	x_ini1=x_ini1+velocidade_andar_ini;
	animacao1=Espetera20_andando_direita;
	setInterval(duracao);
	
	x_ini1=x_ini1+velocidade_andar_ini;
	animacao1=Espetera21_andando_direita;
	setInterval(duracao);
	
	x_ini1=x_ini1+velocidade_andar_ini;
	animacao1=Espetera22_andando_direita;
	setInterval(duracao);
	
	x_ini1=x_ini1+velocidade_andar_ini;
	animacao1=Espetera23_andando_direita;
	setInterval(duracao);
	
	x_ini1=x_ini1+velocidade_andar_ini;
	animacao1=Espetera24_andando_direita;
	setInterval(duracao);
	
	x_ini1=x_ini1+velocidade_andar_ini;
	animacao1=Espetera25_andando_direita;
	setInterval(duracao);
	
	x_ini1=x_ini1+velocidade_andar_ini;
	animacao1=Espetera26_andando_direita;
	setInterval(duracao);
	
	x_ini1=x_ini1+velocidade_andar_ini;
	animacao1=Espetera27_andando_direita;
	setInterval(duracao);
	
	x_ini1=x_ini1+velocidade_andar_ini;
	animacao1=Espetera28_andando_direita;
	setInterval(duracao);
	
	x_ini1=x_ini1+velocidade_andar_ini;
	animacao1=Espetera29_andando_direita;
	setInterval(duracao);
	
	x_ini1=x_ini1+velocidade_andar_ini;
	animacao1=Espetera30_andando_direita;
	setInterval(duracao);
}

function andar1_esquerda()
{
	lado=1;
	console.log("funcionou2");
	x_ini1=x_ini1-velocidade_andar_ini;
	animacao1=Espetera1_andando_esquerda;
	setInterval(duracao);
	
	x_ini1=x_ini1-velocidade_andar_ini;
	animacao1=Espetera2_andando_esquerda;
	setInterval(duracao);
	
	x_ini1=x_ini1-velocidade_andar_ini;
	animacao1=Espetera3_andando_esquerda;
	setInterval(duracao);
	
	x_ini1=x_ini1-velocidade_andar_ini;
	animacao1=Espetera4_andando_esquerda;
	setInterval(duracao);
	
	x_ini1=x_ini1-velocidade_andar_ini;
	animacao1=Espetera5_andando_esquerda;
	setInterval(duracao);
	
	x_ini1=x_ini1-velocidade_andar_ini;
	animacao1=Espetera6_andando_esquerda;
	setInterval(duracao);
	
	x_ini1=x_ini1-velocidade_andar_ini;
	animacao1=Espetera7_andando_esquerda;
	setInterval(duracao);
	
	x_ini1=x_ini1-velocidade_andar_ini;
	animacao1=Espetera8_andando_esquerda;
	setInterval(duracao);
	
	x_ini1=x_ini1-velocidade_andar_ini;
	animacao1=Espetera9_andando_esquerda;
	setInterval(duracao);
	
	x_ini1=x_ini1-velocidade_andar_ini;
	animacao1=Espetera10_andando_esquerda;
	setInterval(duracao);
	
	x_ini1=x_ini1-velocidade_andar_ini;
	animacao1=Espetera11_andando_esquerda;
	setInterval(duracao);
	
	x_ini1=x_ini1-velocidade_andar_ini;
	animacao1=Espetera12_andando_esquerda;
	setInterval(duracao);
	
	x_ini1=x_ini1-velocidade_andar_ini;
	animacao1=Espetera13_andando_esquerda;
	setInterval(duracao);
	
	x_ini1=x_ini1-velocidade_andar_ini;
	animacao1=Espetera14_andando_esquerda;
	setInterval(duracao);
	
	x_ini1=x_ini1-velocidade_andar_ini;
	animacao1=Espetera15_andando_esquerda;
	setInterval(duracao);
	
	x_ini1=x_ini1-velocidade_andar_ini;
	animacao1=Espetera16_andando_esquerda;
	setInterval(duracao);
	
	x_ini1=x_ini1-velocidade_andar_ini;
	animacao1=Espetera17_andando_esquerda;
	setInterval(duracao);
	
	x_ini1=x_ini1-velocidade_andar_ini;
	animacao1=Espetera18_andando_esquerda;
	setInterval(duracao);
	
	x_ini1=x_ini1-velocidade_andar_ini;
	animacao1=Espetera19_andando_esquerda;
	setInterval(duracao);
	
	x_ini1=x_ini1-velocidade_andar_ini;
	animacao1=Espetera20_andando_esquerda;
	setInterval(duracao);
	
	x_ini1=x_ini1-velocidade_andar_ini;
	animacao1=Espetera21_andando_esquerda;
	setInterval(duracao);
	
	x_ini1=x_ini1-velocidade_andar_ini;
	animacao1=Espetera22_andando_esquerda;
	setInterval(duracao);
	
	x_ini1=x_ini1-velocidade_andar_ini;
	animacao1=Espetera23_andando_esquerda;
	setInterval(duracao);
	
	x_ini1=x_ini1-velocidade_andar_ini;
	animacao1=Espetera24_andando_esquerda;
	setInterval(duracao);
	
	x_ini1=x_ini1-velocidade_andar_ini;
	animacao1=Espetera25_andando_esquerda;
	setInterval(duracao);
	
	x_ini1=x_ini1-velocidade_andar_ini;
	animacao1=Espetera26_andando_esquerda;
	setInterval(duracao);
	
	x_ini1=x_ini1-velocidade_andar_ini;
	animacao1=Espetera27_andando_esquerda;
	setInterval(duracao);
	
	x_ini1=x_ini1-velocidade_andar_ini;
	animacao1=Espetera28_andando_esquerda;
	setInterval(duracao);
	
	x_ini1=x_ini1-velocidade_andar_ini;
	animacao1=Espetera29_andando_esquerda;
	setInterval(duracao);
	
	x_ini1=x_ini1-velocidade_andar_ini;
	animacao1=Espetera30_andando_esquerda;
	setInterval(duracao);
}

setInterval(seguir,1500);

