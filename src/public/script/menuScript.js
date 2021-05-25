var _menu = document.querySelector('#menu');


fetch('json/menu.json')
  .then(res => res.json())
  .then(datos => {Menu(datos)});

function Menu(p_datos)
{
    var cont = 0;

    var hijo = ``;

    for(let valor of p_datos)
    {
        var hijo = ``;

        if(cont == 0)
        {
            cont = valor.hijos.length;
        }

        while(cont > 0)
        {
            hijo += 
            `
                <ul>
                    <li>
                        <a href="#">${ valor.hijos[cont-1].titulo}</a>
                    </li>

                </ul>
            `;

            cont --;
        }
        
        
        _menu.innerHTML += 
        `
        
            <li>
                <a href="#">${ valor.titulo }</a>
                
                <div> ${hijo} </div>                    
            </li>
                
        ` ;
        
        
        
    }
}








