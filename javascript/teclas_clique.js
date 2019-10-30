function comandos(tecla)
{
	/*polar*/if(chamar==0 && polaridade==1)
	{
		switch(tecla)
		{
			case 39:mudar=0;
			correndo1_direita_polar();
			chamar=1;
			andando_som.play();
			break;
			
			case 37:mudar=1;
			correndo1_esquerda_polar();
			chamar=1;
			andando_som.play();
			break;
			
		}
	}
	
	
	/*apolar*/else if(chamar==0 && polaridade==0)
	{
		switch(tecla)
		{
			case 39:mudar=0;
			correndo1_direita_apolar();
			chamar=1;
			andando_som.play();
			break;
			
			case 37:mudar=1;
			correndo1_esquerda_apolar();
			chamar=1;
			andando_som.play();
			break;
		}
	}
	/*polar*/if(chamar==0 && lado==0 && polaridade==1 && atacando==0)
	{
		switch(tecla)
		{
			case 67: parado3();
			polaridade=0;
			primeiro=1;
			break;
			
			case 99: parado3();
			polaridade=0;
			primeiro=1;
			break;
			
			case 38:pulando1_direita_polar();
			chamar=1;
			pulando_som.play();
			break;
			
			case 70:atacando1_direita_polar();
			atacando=0;
			chamar=1;
			break;
			
			case 102:atacando1_direita_polar();
			atacando=0;
			chamar=1;
			break;
		}
	}
	
	/*polar*/else if(chamar==0 && lado==1 && polaridade==1 && atacando==0)
	{
		switch(tecla)
		{
			case 67: parado4();
			polaridade=0;
			primeiro=1;
			break;
			
			case 99: parado4();
			polaridade=0;
			primeiro=1;
			break;
			
			case 38:pulando1_esquerda_polar();
			chamar=1;
			pulando_som.play();
			break;
			
			case 70:atacando1_esquerda_polar();
			atacando=0;
			chamar=1;
			break;
			
			case 102:atacando1_esquerda_polar();
			atacando=0;
			chamar=1;
			break;
		}
	}
	
	/*apolar*/else if(chamar==0 && lado==0 && polaridade==0 && pulando==0 && atacando==0)
	{
		switch(tecla)
		{
			case 67: parado1();
			polaridade=1;
			primeiro=1;
			break;
			
			case 99: parado1();
			polaridade=1;
			primeiro=1;
			break;
			
			case 38:pulando1_direita_apolar();
			chamar=1;
			pulando_som.play();
			break;
			
			case 70:atacando1_direita_apolar();
			atacando=0;
			chamar=1;
			break;
			
			case 102:atacando1_direita_apolar();
			atacando=0;
			chamar=1;
			break;
			
		}
	}
	
	/*apolar*/else if(chamar==0 && lado==1 && polaridade==0 && pulando==0 && atacando==0)
	{
		switch(tecla)
		{
			case 67: parado2();
			polaridade=1;
			primeiro=1;
			break;
			
			case 99: parado2();
			polaridade=1;
			primeiro=1;
			break;
			
			case 38:pulando1_esquerda_apolar();
			chamar=1;
			pulando_som.play();
			break;
			
			case 70:atacando1_esquerda_apolar();
			atacando=0;
			chamar=1;
			break;
			
			case 102:atacando1_esquerda_apolar();
			atacando=0;
			chamar=1;
			break;
			
		}
	}
//colocar a troca rápida de direção nessa função idéia: if(chamar=1)	
	
	
	/*apolar*/else if(chamar==1 && polaridade==0)
	{
		switch(tecla)
		{
			case 67:polaridade=1;
			chamar=1;
			continuar=1;
			pulando=0;
			break;
			
			case 99:polaridade=1;
			chamar=1;
			continuar=1;
			pulando=0;
			break;
		}
	}
	
	
	/*polar*/else if(chamar==1 && polaridade==1)
	{
		switch(tecla)
		{
			case 67:polaridade=0;
			chamar=1;
			continuar=1;
			pulando=0;
			break;
			
			case 99:polaridade=0;
			chamar=1;
			continuar=1;
			pulando=0;
			break;
		}
	}
	
	if(chamar==1 && lado==0 && mudar==0)
	{
		switch(tecla)
		{
			case 37: mudar=1;
				lado=1;
				continuar=1;
				chamar=1;
				console.log("mudou para 1");
				break;
		}
	}
	
	else if(chamar==1 && lado==1 && mudar==1)
	{
		switch(tecla)
		{
			case 39: mudar=0;
				lado=0;
				continuar=1;
				chamar=1;
				console.log("mudou para 0");
				break;
		}
	}
	
	
	/*polar*/if(chamar==1 && correndo==1 && lado==0 && polaridade==1 && pulando==0)
	{
		switch(tecla)
		{
			case 38:pulando1_direita_polar_mov();
			chamar=1;
			pulando_som.play();
			break;
		}
	}
	
	/*polar*/else if(chamar==1 && correndo==1 && lado==1 && polaridade==1 && pulando==0)
	{
		switch(tecla)
		{			
			case 38:pulando1_esquerda_polar_mov();
			chamar=1;
			pulando_som.play();
			break;
		}
	}
	
	/*apolar*/else if(chamar==1 && correndo==1 && lado==0 && polaridade==0 && pulando==0)
	{
		switch(tecla)
		{	
			case 38:pulando1_direita_apolar_mov();
			chamar=1;
			pulando_som.play();
			break;
			//na animação de correndo pulando criam-se outras funções de atacando
		}
	}
	
	/*apolar*/else if(chamar==1 && correndo==1 && lado==1 && polaridade==0 && pulando==0)
	{
		switch(tecla)
		{	
			case 38:pulando1_esquerda_apolar_mov();
			chamar=1;
			pulando_som.play();
			break;
			//na animação de correndo pulando criam-se outras funções de atacando
		}
	}
	

	/*Correção do 1º erro*/continuar=1;
}

function mudar2()
{
	/*Correção do 1º erro*/continuar=0;
	/* personagem para porque teve um keyup para ir do 39 para o 37 ou do 37 para o 39(precisa-se fazer um cálculo louco com a variável tempo(objeto Date)*/
	

}


function mudar3()
{
		if(y_pers1<172)
	{
		pulando=1;
		y_pers1-=aumentay;
	}
	
	else 
	{
		pulando=0;
	}
	
	
	if(pulando==0 && y_pers1>172)
	{
		y_pers1+=aumentay;
	}
	
	if(subindo==1 && y_pers1>109)
	{
		y_pers1+=aumentay;
	}
	
	else if(descendo==1 && y_pers1>172)
	{
		y_pers1+=aumentay;
	}
	
	if(x_pers1+100==x_ini1+200 || x_pers1-100==x_ini1-200)
	{
		vida_pers1= vida_pers1-12.5;
	}
	console.log("x_pers1:"+(x_pers1+100)+" x_ini1:"+(x_ini1+200));
	
}



function hud()
{
	//barra de vida
	
	if(vida_pers1==87.5)
	{
		barra_atual=barra_vida8;
	}
	
	else if(vida_pers1==75)
	{
		barra_atual=barra_vida7;
	}
	
	else if(vida_pers1==62.5)
	{
		barra_atual=barra_vida6;
	}
	
	else if(vida_pers1==50)
	{
		barra_atual=barra_vida5;
	}
	
	else if(vida_pers1==37.5)
	{
		barra_atual=barra_vida4;
	}
	
	else if(vida_pers1==25)
	{
		barra_atual=barra_vida3;
	}
	
	else if(vida_pers1==12.5)
	{
		barra_atual=barra_vida2;
	}
	
	else if(vida_pers1==0)
	{
		barra_atual=barra_vida1;
	}
}



setInterval(mudar3,30);

setInterval(hud,20);
