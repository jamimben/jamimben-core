//funções das animações de correr
//direita
//polar
function correndo1_direita_polar()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(correndo_direita1_polar,x_pers1,y_pers1,100,160);
	andando_som.play();
	jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
	jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
	if(inimigos==1)
	{
		jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
	}
	if(x_pers1<419)x_pers1+=aumentax;
	lado=0;
	correndo=1;
	pulando=0;
	if(polaridade==1 && mudar==0)setTimeout("correndo2_direita_polar()",correndo_tempo);
	else if(polaridade==0 && mudar==0)setTimeout("correndo2_direita_apolar()",correndo_tempo);
	else if(polaridade==1 && mudar==1)setTimeout("correndo2_esquerda_polar()",correndo_tempo);
	else if(polaridade==0 && mudar==1)setTimeout("correndo2_esquerda_apolar()",correndo_tempo);
}

function correndo2_direita_polar()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(correndo_direita2_polar,x_pers1,y_pers1,100,160);
	andando_som.play();
	jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
	jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
	if(inimigos==1)
	{
		jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
	}
	if(x_pers1<419)x_pers1+=aumentax;
	lado=0;
	correndo=1;
	pulando=0;
	if(polaridade==1 && mudar==0)setTimeout("correndo3_direita_polar()",correndo_tempo);
	else if(polaridade==0 && mudar==0)setTimeout("correndo3_direita_apolar()",correndo_tempo);
	else if(polaridade==1 && mudar==1)setTimeout("correndo3_esquerda_polar()",correndo_tempo);
	else if(polaridade==0 && mudar==1)setTimeout("correndo3_esquerda_apolar()",correndo_tempo);
}

function correndo3_direita_polar()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(correndo_direita3_polar,x_pers1,y_pers1,100,160);
	andando_som.play();
	jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
	jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
	if(inimigos==1)
	{
		jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
	}
	if(x_pers1<419)x_pers1+=aumentax;
	lado=0;
	correndo=1;
	pulando=0;
	if(polaridade==1 && mudar==0)setTimeout("correndo4_direita_polar()",correndo_tempo);
	else if(polaridade==0 && mudar==0)setTimeout("correndo4_direita_apolar()",correndo_tempo);
	else if(polaridade==1 && mudar==1)setTimeout("correndo4_esquerda_polar()",correndo_tempo);
	else if(polaridade==0 && mudar==1)setTimeout("correndo4_esquerda_apolar()",correndo_tempo);
}

function correndo4_direita_polar()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(correndo_direita4_polar,x_pers1,y_pers1,100,160);
	andando_som.play();
	jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
	jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
	if(inimigos==1)
	{
		jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
	}
	if(x_pers1<419)x_pers1+=aumentax;
	lado=0;
	correndo=1;
	pulando=0;
	if(continuar==1)
	{
			if(polaridade==1 && mudar==0)setTimeout("correndo1_direita_polar()",correndo_tempo);
			else if(polaridade==0 && mudar==0)setTimeout("correndo1_direita_apolar()",correndo_tempo);
			else if(polaridade==1 && mudar==1)setTimeout("correndo1_esquerda_polar()",correndo_tempo);
			else if(polaridade==0 && mudar==1)setTimeout("correndo1_esquerda_apolar()",correndo_tempo);
			andando_som.play();
	}
	else
	{
		chamar=0;
		primeiro=1;
		continuar=0;
		correndo=0;
		parado1();
	}
	
}
//apolar

function correndo1_direita_apolar()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(correndo_direita1_apolar,x_pers1,y_pers1,100,160);
	andando_som.play();
	jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
	jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
	if(inimigos==1)
	{
		jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
	}
	if(x_pers1<419)x_pers1+=aumentax;
	lado=0;
	correndo=1;
	pulando=0;
	if(polaridade==0 && mudar==0)setTimeout("correndo2_direita_apolar()",correndo_tempo);
	else if(polaridade==1 && mudar==0)setTimeout("correndo2_direita_polar()",correndo_tempo);
	else if(polaridade==0 && mudar==1)setTimeout("correndo2_esquerda_apolar()",correndo_tempo);
	else if(polaridade==1 && mudar==1)setTimeout("correndo2_esquerda_polar()",correndo_tempo);
}

function correndo2_direita_apolar()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(correndo_direita2_apolar,x_pers1,y_pers1,100,160);
	andando_som.play();
	jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
	jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
	if(inimigos==1)
	{
		jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
	}
	if(x_pers1<419)x_pers1+=aumentax;
	lado=0;
	correndo=1;
	pulando=0;
	if(polaridade==0 && mudar==0)setTimeout("correndo3_direita_apolar()",correndo_tempo);
	else if(polaridade==1 && mudar==0)setTimeout("correndo3_direita_polar()",correndo_tempo);
	else if(polaridade==0 && mudar==1)setTimeout("correndo3_esquerda_apolar()",correndo_tempo);
	else if(polaridade==1 && mudar==1)setTimeout("correndo3_esquerda_polar()",correndo_tempo);
}

function correndo3_direita_apolar()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(correndo_direita3_apolar,x_pers1,y_pers1,100,160);
	andando_som.play();
	jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
	jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
	if(inimigos==1)
	{
		jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
	}
	if(x_pers1<419)x_pers1+=aumentax;
	lado=0;
	correndo=1;
	pulando=0;
	if(polaridade==0 && mudar==0)setTimeout("correndo4_direita_apolar()",correndo_tempo);
	else if(polaridade==1 && mudar==0)setTimeout("correndo4_direita_polar()",correndo_tempo);
	else if(polaridade==0 && mudar==1)setTimeout("correndo4_esquerda_apolar()",correndo_tempo);
	else if(polaridade==1 && mudar==1)setTimeout("correndo4_esquerda_polar()",correndo_tempo);
}

function correndo4_direita_apolar()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(correndo_direita4_apolar,x_pers1,y_pers1,100,160);
	andando_som.play();
	jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
	jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
	if(inimigos==1)
	{
		jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
	}
	if(x_pers1<419)x_pers1+=aumentax;
	lado=0;
	correndo=1;
	pulando=0;
	if(continuar==1)
	{
		if(polaridade==0 && mudar==0)setTimeout("correndo1_direita_apolar()",correndo_tempo);
		else if(polaridade==1 && mudar==0)setTimeout("correndo1_direita_polar()",correndo_tempo);
		else if(polaridade==0 && mudar==1)setTimeout("correndo1_esquerda_apolar()",correndo_tempo);
		else if(polaridade==1 && mudar==1)setTimeout("correndo1_esquerda_polar()",correndo_tempo);
		andando_som.play();
	}
	else
	{
		chamar=0;
		primeiro=1;
		continuar=0;
		correndo=0;
		parado3();
	}
	
}

//esquerda
//polar
function correndo1_esquerda_polar()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(correndo_esquerda1_polar,x_pers1,y_pers1,100,160);
	andando_som.play();
	lado=1;
	correndo=1;
	pulando=0;
	jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
	jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
	if(inimigos==1)
	{
		jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
	}
	if(x_pers1> -12)x_pers1-=aumentax;
	if(polaridade==1 && mudar==1)setTimeout("correndo2_esquerda_polar()",correndo_tempo);
	else if(polaridade==0 && mudar==1)setTimeout("correndo2_esquerda_apolar()",correndo_tempo);
	else if(polaridade==1 && mudar==0)setTimeout("correndo2_direita_polar()",correndo_tempo);
	else if(polaridade==0 && mudar==0)setTimeout("correndo2_direita_apolar()",correndo_tempo);
}

function correndo2_esquerda_polar()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(correndo_esquerda2_polar,x_pers1,y_pers1,100,160);
	lado=1;
	correndo=1;
	pulando=0;
	andando_som.play();
	jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
	jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
	if(inimigos==1)
	{
		jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
	}
	if(x_pers1> -12)x_pers1-=aumentax;
	if(polaridade==1 && mudar==1)setTimeout("correndo3_esquerda_polar()",correndo_tempo);
	else if(polaridade==0 && mudar==1)setTimeout("correndo3_esquerda_apolar()",correndo_tempo);
	else if(polaridade==1 && mudar==0)setTimeout("correndo3_direita_polar()",correndo_tempo);
	else if(polaridade==0 && mudar==0)setTimeout("correndo3_direita_apolar()",correndo_tempo);
}

function correndo3_esquerda_polar()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(correndo_esquerda3_polar,x_pers1,y_pers1,100,160);
	lado=1;
	correndo=1;
	pulando=0;
	andando_som.play();
	jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
	jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
	if(inimigos==1)
	{
		jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
	}
	if(x_pers1> -12)x_pers1-=aumentax;
	if(polaridade==1 && mudar==1)setTimeout("correndo4_esquerda_polar()",correndo_tempo);
	else if(polaridade==0 && mudar==1)setTimeout("correndo4_esquerda_apolar()",correndo_tempo);
	else if(polaridade==1 && mudar==0)setTimeout("correndo4_direita_polar()",correndo_tempo);
	else if(polaridade==0 && mudar==0)setTimeout("correndo4_direita_apolar()",correndo_tempo);
}

function correndo4_esquerda_polar()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(correndo_esquerda4_polar,x_pers1,y_pers1,100,160);
	andando_som.play();
	lado=1;
	correndo=1;
	pulando=0;
	jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
	jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
	if(inimigos==1)
	{
		jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
	}
	if(x_pers1> -12)x_pers1-=aumentax;
	if(/*Correção do 1º erro*/continuar==1)
	{
			if(polaridade==1 && mudar==1)setTimeout("correndo1_esquerda_polar()",correndo_tempo);
			else if(polaridade==0 && mudar==1)setTimeout("correndo1_esquerda_apolar()",correndo_tempo);
			else if(polaridade==1 && mudar==0)setTimeout("correndo1_direita_polar()",correndo_tempo);
			else if(polaridade==0 && mudar==0)setTimeout("correndo1_direita_apolar()",correndo_tempo);
			andando_som.play();
	}
	else
	{
		chamar=0;
		primeiro=1;
		continuar=0;
		correndo=0;
		parado2();
	}

}

//apolar

function correndo1_esquerda_apolar()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(correndo_esquerda1_apolar,x_pers1,y_pers1,100,160);
	andando_som.play();
	lado=1;
	correndo=1;
	pulando=0;
	jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
	jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
	if(inimigos==1)
	{
		jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
	}
	if(x_pers1> -12)x_pers1-=aumentax;
	if(polaridade==0 && mudar==1)setTimeout("correndo2_esquerda_apolar()",correndo_tempo);
	else if(polaridade==1 && mudar==1)setTimeout("correndo2_esquerda_polar()",correndo_tempo);
	else if(polaridade==0 && mudar==0)setTimeout("correndo2_direita_apolar()",correndo_tempo);
	else if(polaridade==1 && mudar==0)setTimeout("correndo2_direita_polar()",correndo_tempo);
}

function correndo2_esquerda_apolar()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(correndo_esquerda2_apolar,x_pers1,y_pers1,100,160);
	andando_som.play();
	lado=1;
	correndo=1;
	pulando=0;
	jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
	jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
	if(inimigos==1)
	{
		jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
	}
	if(x_pers1> -12)x_pers1-=aumentax;
	if(polaridade==0 && mudar==1)setTimeout("correndo3_esquerda_apolar()",correndo_tempo);
	else if(polaridade==1 && mudar==1)setTimeout("correndo3_esquerda_polar()",correndo_tempo);
	else if(polaridade==0 && mudar==0)setTimeout("correndo3_direita_apolar()",correndo_tempo);
	else if(polaridade==1 && mudar==0)setTimeout("correndo3_direita_polar()",correndo_tempo);
}

function correndo3_esquerda_apolar()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(correndo_esquerda3_apolar,x_pers1,y_pers1,100,160);
	andando_som.play();
	lado=1;
	correndo=1;
	pulando=0;
	jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
	jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
	if(inimigos==1)
	{
		jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
	}
	if(x_pers1> -12)x_pers1-=aumentax;
	if(polaridade==0 && mudar==1)setTimeout("correndo4_esquerda_apolar()",correndo_tempo);
	else if(polaridade==1 && mudar==1)setTimeout("correndo4_esquerda_polar()",correndo_tempo);
	else if(polaridade==0 && mudar==0)setTimeout("correndo4_direita_apolar()",correndo_tempo);
	else if(polaridade==1 && mudar==0)setTimeout("correndo4_direita_polar()",correndo_tempo);
}

function correndo4_esquerda_apolar()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(correndo_esquerda4_apolar,x_pers1,y_pers1,100,160);
	andando_som.play();
	lado=1;
	correndo=1;
	pulando=0;
	jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
	jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
	if(inimigos==1)
	{
		jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
	}
	if(x_pers1> -12)x_pers1-=aumentax;
	if(/*Correção do 1º erro*/continuar==1)
	{
			if(polaridade==0 && mudar==1)setTimeout("correndo1_esquerda_apolar()",correndo_tempo);
			else if(polaridade==1 && mudar==1)setTimeout("correndo1_esquerda_polar()",correndo_tempo);
			else if(polaridade==0 && mudar==0)setTimeout("correndo1_direita_apolar()",correndo_tempo);
			else if(polaridade==1 && mudar==0)setTimeout("correndo1_direita_polar()",correndo_tempo);
			andando_som.play();
	}
	else
	{
		chamar=0;
		primeiro=1;
		continuar=0;
		correndo=0;
		parado4();
	}

}
