//função(ões) para quando parado

/*polar*/function parado1()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	if(primeiro==0)
	{
		parado_direita1.onload= function()
		{
			jogo.drawImage(parado_direita1,x_pers1,y_pers1,100,160);
			jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
			jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
			if(inimigos==1)
			{
				jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
			}
		}
	}
	else
	{
		jogo.drawImage(parado_direita1,x_pers1,y_pers1,100,160);
		jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
		jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
		if(inimigos==1)
		{
			jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
		}
	}
	
	chamar=0;
	mudar=0;
	lado=0;
	polaridade=1;
	chamar=0;
	pulando=0;
	atacando=0;
	subindo=0;
	descendo=0;
}

/*polar*/function parado2()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(parado_esquerda1,x_pers1,y_pers1,100,160);
	jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
	jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
	if(inimigos==1)
	{
		jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
	}
	chamar=0;
	mudar=1;
	lado=1;
	polaridade=1;
	chamar=0;
	pulando=0;
	atacando=0;
	subindo=0;
	descendo=0;
}

/*apolar*/function parado3()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(parado_direita2,x_pers1,y_pers1,100,160);
	jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
	jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
	if(inimigos==1)
	{
		jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
	}
	chamar=0;
	mudar=0;
	polaridade=0;
	lado=0;
	chamar=0;
	pulando=0;
	atacando=0;
	subindo=0;
	descendo=0;
}

/*apolar*/function parado4()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(parado_esquerda2,x_pers1,y_pers1,100,160);
	jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
	jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
	if(inimigos==1)
	{
		jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
	}
	chamar=0;
	mudar=1;
	polaridade=0;
	lado=1;
	chamar=0;
	pulando=0;
	atacando=0;
	subindo=0;
	descendo=0;
}
parado1();
