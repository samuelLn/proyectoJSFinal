//Clase 1
class PokemonBasico {
    
 //Variables base
  nombre = "";
  tipo = "";
  nivel = 0;
  ciudad = "Planta";    
    
constructor({nombre, tipo, nivel, ciudad}) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.nivel = nivel;
    this.ciudad = ciudad;
  }

  // metodos para obtener datos pokemon
  getNombre = () => this.nombre;
  getTipo = () => this.tipo;
  getNivel = () => this.nivel;
  getCiudad = () => this.ciudad;

  // metodo para cambiar datos perro
  setNombre = nuevoNombre => (this.nombre = nuevoNombrePerro);
  setTipo = nuevoTipo => (this.tipo = nuevoTipo);
  setNivel = nuevoNivel => (this.nivel = nuevoNivel);
  setCiudad = nuevaCiudad => (this.ciudad = nuevaCiudad);
}



//LLamadas a las clases1
//const pokemonBasico = new PokemonBasico("Bulbasaur", "Planta", 20, "Ciudad Verde");
//pokemonBasico;

// LLAMADAS METODOS
//pokemonBasico.setCiudad("Santiago");
//pokemonBasico.getCiudad();


//Clase 2 HERENCIA-1
class PokemonMedio extends PokemonBasico {

//Nueva herencia
nombreEntrenador = "";

constructor({nombreEntrenador, nombre, tipo, nivel, ciudad }) {
super({nombre, tipo, nivel, ciudad});
this.nombreEntrenador = nombreEntrenador;   
}

getNombreEntrenador = () => this.nombreEntrenador;
setNombreEntrenador = nuevoNombreEntrenador => (this.nombreEntrenador = nuevoNombreEntrenador);

}

//LLamadas a las clase 2
//const pokemonA = new PokemonMedio ({nombreEntrenador:'Jesy', nombre:' Butterfree', tipo:'Bicho', nivel: 40, ciudad:'Ciudad Verde'})

// LLAMADAS METODOS
//pokemonA.getNombre()
//pokemonA.getNombreEntrenador()


//Clase 3 HERENCIA-2 

class PokemonLegendario extends PokemonMedio {

//Nueva herencia
nombrePokemonLegendario = "";
    
constructor({nombrePokemonLegendario, nombreEntrenador, nombre, tipo, nivel, ciudad }) {
super({nombreEntrenador, nombre, tipo, nivel, ciudad});
this.nombrePokemonLegendario = nombrePokemonLegendario;   
}
    
getNombrePokemonLegendario = () => this.nombrePokemonLegendario;
setNombrePokemonLegendario = nuevoNombrePokemonLegendario => (this.nombrePokemonLegendario = nombrePokemonLegendario);
    
}
  
//LLamadas a las clase 3
//const pokemonL = new PokemonLegendario ({nombrePokemonLegendario:'Butterfree Gigamax', nombreEntrenador:'Jesy', nombre:' Butterfree', tipo:'Bicho', nivel: 40, ciudad:'Ciudad Verde'})

// LLAMADAS METODOS
//pokemonL.getNombrePokemonLegendario()
//pokemonL.setNombrePokemonLegendario()--- este metodo tiene un bugs que no pude solucionar




//LLAMADA API PUBLILCA


const Url = 'https://pokeapi.co/api/v2/pokemon/1/' 
fetch(Url)

.then(response => response.json () )
.then(data => { 
    
    let ContentDatos = document.getElementById('ContentDatos')
    ContentDatos.innerHTML =`
    <h1 class="display-1"> ${data.name}</h1>
    <img class="img-fluid" src='${data.sprites.front_default}' alt="">
    <p class="Nombbre1"> ${data.order}</p>   
     `;
    
    

console.log(data)

})

.catch(err=>console.log(err))











    
    
  
