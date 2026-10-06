export const Modulo1Page = () => {

  //1. inferencia vs anotacion
  let saga = "Saiyan Saga"; //inferido no es ncesario tiparlo
  let horasEntrenamiento: number = 36; //anotado es porque definimos el tipo

  //2. tipos basicos 
  let guerrero: string = "Goku";
  const ki : number = 9001; //enteros para decimales
  const enCombate: boolean = true;

  //3. arrays
  const equipoZ: string[] = ["Goku", "Vegeta", "Gohan", "Piccolo"]

  //4. tuplas
  const coordenadas:[number,number, string] = [42,17,"hola"]

  //5. funciones tipadas (parametros + retorno)
  function calcularDanio(base: number,multiplicador: number): number {
    return base * multiplicador
  }

  //const calcularDanioFlecha = (base: number,multiplicador: number):number => {
  //  return base * multiplicador
  //}

  return (
    <main className="h-screen bg-neutral-950 text-neutral-100 antialiased">
      <div className="mx-auto max-w-3xl p-8">
        <header className="mb-8 border-b border-neutral-800 pb-4">
          <h1 className="text-3xl font-semibold text-blue-400">
          React + TypeScript - Modulo 1
        </h1>
        <p className="text-sm text-neutral-400">
          Fundamentos: tipos basicos, arrays y tuplas
        </p>
        </header>
        <section className="mb-8">
          <h2 className="text-xl font-medium text-blue-300 mb-2">
            Inferencia y basicos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-neutral-300">
            <div> Saga: {saga} </div>
            <div> horas de Entrenamiento: <span>{horasEntrenamiento}</span> </div>
            <div> Guerrero: {guerrero} </div>
            <div> Ki: {ki} </div>
            <div> En combate: {enCombate? "si": "no"}</div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-medium text-blue-300 mb-2">
            Arrays
          </h2>
          <div>Equipo Z: {equipoZ.join(", ")}</div>
          <br />

          <h2 className="text-xl font-medium text-blue-300 mb-2">
            Tuplas
          </h2>
          <div>
            Coordenadas [x,y,hola]: x={coordenadas[0]} y={coordenadas[1]} saludo={coordenadas[2]}
          </div>
           <br />

          <h2 className="text-xl font-medium text-blue-300 mb-2">
            Funciones tipadas
          </h2>
          <div>
            <p> Daño: (base 450 x mult. 2)</p> 
            <span>{calcularDanio(450,2)}</span>
          </div>
        </section>
      </div>
    </main>
  );
};