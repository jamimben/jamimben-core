//movimento

function aumentando_alt_polar_mov()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(pulando_direita4_polar,x_pers1,y_pers1,100,160);
	jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
	jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
	if(inimigos==1)
	{
		jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
	}
	pulando=1;
	correndo=0;
	y_pers1+=aumentay;
	x_pers1+=aumentax2;

}

function aumentando_alt2_polar_mov()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(pulando_esquerda4_polar,x_pers1,y_pers1,100,160);
	jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
	jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
	if(inimigos==1)
	{
		jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
	}
	pulando=1;
	correndo=0;
	y_pers1+=aumentay;
	x_pers1+=aumentax2;

}


function diminui_alt_polar_mov()
{
		jogo.fillStyle="White";
		jogo.fillRect(0,0,500,500);
		jogo.drawImage(pulando_direita5_polar,x_pers1,y_pers1,100,160);
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

function diminui_alt2_polar_mov()
{
		jogo.fillStyle="White";
		jogo.fillRect(0,0,500,500);
		jogo.drawImage(pulando_esquerda5_polar,x_pers1,y_pers1,100,160);
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


function pulando1_direita_polar_mov()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(pulando_direita4_polar,x_pers1,y_pers1,100,160);
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
		setTimeout("aumentando_alt_polar_mov()",pulando_tempo2_mov);
	}
	setTimeout("pulando2_direita_polar_mov()",pulando_tempo1_mov);
}

function pulando2_direita_polar_mov()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(pulando_direita4_polar,x_pers1,y_pers1,100,160);
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
			chamar=1;
			primeiro=1;
			continuar=1;
			pulando=0;
			correndo=1;
			setTimeout("correndo1_direita_polar()",pulando_tempo2_mov);
		}
		
		else setTimeout("diminui_alt_polar_mov()",pulando_tempo2_mov);
	}
}

//esquerda

function pulando1_esquerda_polar_mov()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(pulando_esquerda4_polar,x_pers1,y_pers1,100,160);
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
		setTimeout("aumentando_alt2_polar_mov()",pulando_tempo2_mov);
	}
	setTimeout("pulando2_esquerda_polar_mov()",pulando_tempo1_mov);
}

function pulando2_esquerda_polar_mov()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(pulando_esquerda4_polar,x_pers1,y_pers1,100,160);
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
			chamar=1;
			primeiro=1;
			continuar=1;
			pulando=0;
			correndo=1;
			correndo1_esquerda_polar();
		}
		
		else setTimeout("diminui_alt2_polar_mov()",pulando_tempo2_mov);
	}

}

//apolar


function aumentando_alt_apolar_mov()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(pulando_direita4_apolar,x_pers1,y_pers1,100,160);
	jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
	jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
	if(inimigos==1)
	{
		jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
	}
	y_pers1+=aumentay;
	x_pers1+=aumentax2;
	correndo=0;
	pulando=1;

}

function aumentando_alt2_apolar_mov()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(pulando_esquerda4_apolar,x_pers1,y_pers1,100,160);
	jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
	jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
	if(inimigos==1)
	{
		jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
	}
	y_pers1+=aumentay;
	x_pers1+=aumentax2;	
	correndo=0;
	pulando=1;

}


function diminui_alt_apolar_mov()
{
		jogo.fillStyle="White";
		jogo.fillRect(0,0,500,500);
		jogo.drawImage(pulando_direita5_apolar,x_pers1,y_pers1,100,160);
		jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
		jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
		if(inimigos==1)
		{
			jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
		}
		y_pers1-=aumentay;
		correndo=0;
		pulando=1;

}

function diminui_alt2_apolar_mov()
{
		jogo.fillStyle="White";
		jogo.fillRect(0,0,500,500);
		jogo.drawImage(pulando_esquerda5_apolar,x_pers1,y_pers1,100,160);
		jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
		jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
		if(inimigos==1)
		{
			jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
		}
		y_pers1-=aumentay;
		correndo=0;
		pulando=1;

}

//direita


function pulando1_direita_apolar_mov()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(pulando_direita4_apolar,x_pers1,y_pers1,100,160);
	jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
	jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
	if(inimigos==1)
	{
		jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
	}
	correndo=0;
	for(var x=0;x<=10;x++)
	{
		setTimeout("aumentando_alt_apolar_mov()",pulando_tempo2_mov);
		
	}
	setTimeout("pulando2_direita_apolar_mov()",pulando_tempo1_mov);
}

function pulando2_direita_apolar_mov()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(pulando_direita4_apolar,x_pers1,y_pers1,100,160);
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
			chamar=1;
			primeiro=1;
			continuar=1;
			pulando=0;
			correndo=1;
			correndo1_direita_apolar();
		}
		
		else setTimeout("diminui_alt_apolar_mov()",pulando_tempo2_mov);
	}
}

//esquerda

function pulando1_esquerda_apolar_mov()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(pulando_esquerda4_apolar,x_pers1,y_pers1,100,160);
	jogo.drawImage(cenario_imagem,x_cena,y_cena,largura_cena,altura_cena);
	jogo.drawImage(barra_atual,x_vida,y_vida,lar_vida,alt_vida);
	if(inimigos==1)
	{
		jogo.drawImage(animacao1,x_ini1,y_ini1,larg_iniEspe,alt_iniEspe);
	}
	correndo=0;
	for(var x=0;x<=10;x++)
	{
		setTimeout("aumentando_alt2_apolar_mov()",pulando_tempo2_mov);
	}
	setTimeout("pulando2_esquerda_apolar_mov()",pulando_tempo1_mov);
}

function pulando2_esquerda_apolar_mov()
{
	jogo.fillStyle="White";
	jogo.fillRect(0,0,500,500);
	jogo.drawImage(pulando_esquerda4_apolar,x_pers1,y_pers1,100,160);
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
			chamar=1;
			primeiro=1;
			continuar=1;
			pulando=0;
			correndo=1;
			correndo1_esquerda_apolar();
		}
		
		else setTimeout("diminui_alt2_apolar_mov()",pulando_tempo2_mov);
		
	}

}
