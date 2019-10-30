
//funções das animações de pular
/*polar*/
//parado
function aumentando_alt_polar()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(pulando_direita3_polar,x_pers1,y_pers1,100,160);
	jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
	jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
	if(inimigos==1)
	{
		jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
	}
	pulando=1;
	correndo=0;
	y_pers1+=aumentay;
	console.log("altura:"+y_pers1);
}

function aumentando_alt2_polar()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(pulando_esquerda3_polar,x_pers1,y_pers1,100,160);
	jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
	jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
	if(inimigos==1)
	{
		jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
	}
	pulando=1;
	correndo=0;
	y_pers1+=aumentay;

}


function diminui_alt_polar()
{
		jogo.fillStyle="White";
		jogo.fillRect(0,0,500,500);
		jogo.drawImage(parado_direita1,x_pers1,y_pers1,100,160);
		jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
		jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
		if(inimigos==1)
		{
			jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
		}
		pulando=1;
		correndo=0;
		y_pers1-=aumentay;

}

function diminui_alt2_polar()
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
		pulando=1;
		correndo=0;
		y_pers1-=aumentay;

}



//direita


function pulando1_direita_polar()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(pulando_direita3_polar,x_pers1,y_pers1,100,160);
	jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
	jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
	if(inimigos==1)
	{
		jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
	}
	pulando=1;
	correndo=0;
	for(var x=0;x<=9;x++)
	{
		setTimeout("aumentando_alt_polar()",pulando_tempo2);
	}
	setTimeout("pulando2_direita_polar()",pulando_tempo1);
}

function pulando2_direita_polar()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(pulando_direita3_polar,x_pers1,y_pers1,100,160);
	jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
	jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
	if(inimigos==1)
	{
		jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
	}
	pulando=1;
	correndo=0;
	for(var x=0;x<=10;x++)
	{
		if(x==10)
		{
			chamar=0;
			primeiro=1;
			continuar=0;
			pulando=0;
			correndo=1;
			parado1();
		}
		
		else  	setTimeout("diminui_alt_polar()",pulando_tempo2);
	}
}

//esquerda

function pulando1_esquerda_polar()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(pulando_esquerda3_polar,x_pers1,y_pers1,100,160);
	jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
	jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
	if(inimigos==1)
	{
		jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
	}
	pulando=1;
	correndo=0;
	for(var x=0;x<=1;x++)
	{
		setTimeout("aumentando_alt2_polar()",pulando_tempo2);
	}
	setTimeout("pulando2_esquerda_polar()",pulando_tempo1);
}

function pulando2_esquerda_polar()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(pulando_esquerda3_polar,x_pers1,y_pers1,100,160);
	jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
	jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
	if(inimigos==1)
	{
		jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
	}
	pulando=1;
	correndo=0;
	for(var x=0;x<=10;x++)
	{
		if(x==10)
		{
			chamar=0;
			primeiro=1;
			continuar=0;
			pulando=0;
			correndo=1;
			parado2();
		}
		
		else setTimeout("diminui_alt2_polar()",pulando_tempo2);
	}

}

//apolar


function aumentando_alt_apolar()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(pulando_direita3_apolar,x_pers1,y_pers1,100,160);
	jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
	jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
	if(inimigos==1)
	{
		jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
	}
	pulando=1;
	correndo=0;
	subindo=1;
	descendo=0;
	y_pers1+=aumentay;

}

function aumentando_alt2_apolar()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(pulando_esquerda3_apolar,x_pers1,y_pers1,100,160);
	jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
	jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
	if(inimigos==1)
	{
		jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
	}
	pulando=1;
	correndo=0;
	subindo=1;
	descendo=0;
	y_pers1+=aumentay;

}


function diminui_alt_apolar()
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
		pulando=1;
		correndo=0;
		subindo=0;
		descendo=1;
		y_pers1-=aumentay;

}

function diminui_alt2_apolar()
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
		pulando=1;
		correndo=0;
		subindo=0;
		descendo=1;
		y_pers1-=aumentay;

}

//direita


function pulando1_direita_apolar()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(pulando_direita3_apolar,x_pers1,y_pers1,100,160);
	jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
	jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
	if(inimigos==1)
	{
		jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
	}
	correndo=0;
	for(var x=0;x<=9;x++)
	{
		setTimeout("aumentando_alt_apolar()",pulando_tempo2);
	}
	setTimeout("pulando2_direita_apolar()",pulando_tempo1);
}

function pulando2_direita_apolar()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(pulando_direita3_apolar,x_pers1,y_pers1,100,160);
	jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
	jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
	if(inimigos==1)
	{
		jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
	}
	correndo=0;
	for(var x=0;x<=10;x++)
	{
		if(x==10)
		{
			chamar=0;
			primeiro=1;
			continuar=0;
			pulando=0;
			correndo=1;
			parado3();
		}
		
		else setTimeout("diminui_alt_apolar()",pulando_tempo2);
	}
}

//esquerda

function pulando1_esquerda_apolar()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(pulando_esquerda3_apolar,x_pers1,y_pers1,100,160);
	jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
	jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
	if(inimigos==1)
	{
		jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
	}
	correndo=0;
	for(var x=0;x<=9;x++)
	{
		setTimeout("aumentando_alt2_apolar()",pulando_tempo2);
	}
	setTimeout("pulando2_esquerda_apolar()",pulando_tempo1);
}

function pulando2_esquerda_apolar()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(pulando_esquerda3_apolar,x_pers1,y_pers1,100,160);
	jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
	jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
	if(inimigos==1)
	{
		jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
	}
	correndo=0;
	for(var x=0;x<=10;x++)
	{
		if(x==10)
		{
			chamar=0;
			primeiro=1;
			continuar=0;
			pulando=0;
			correndo=1;
			parado4();
		}
		
		else setTimeout("diminui_alt2_apolar()",pulando_tempo2);
	}

}

