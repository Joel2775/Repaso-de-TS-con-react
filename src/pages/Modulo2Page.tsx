import { useState } from "react";

type ContadorProps = {
  initial?: number;
  step?: number
}

export const Modulo2Page = ({initial= 0, step=1}: ContadorProps) => {

  const [count, setCount] = useState<number>(initial)
  const inc = () => setCount((c)=>c+step)
  const dec = () => setCount((c)=>c-step)


  // inferido
  const [tazas, setTazas] = useState<number>(1)
  type Ingredientes = "agua" | "cafe" | "azucar"
  type RecetaCafe = {
    agua?: number;
    cafe?: number;
    azucar?: number;
  }
  type CafePreparado = {
    mensaje: string;
    intensidad: "suave" | "fuerte"
  }

  //Explicito con union literal
  const [intensidadUI, setIntensidadUI] = useState<CafePreparado["intensidad"]>("suave")

  //Explicito valores nulos
  const [ultimoCafe, setUltimoCafe] = useState<CafePreparado | null>(null)

  //valores que pueden ser undefined
  const [azucarIn, setAzucarIn] = useState<number | undefined>(undefined)




  //interface
  //type CardProps = {title: string};
  //interface CardPropsI {
  //  title: string;
  //}
  //interface Battle {arena: string}
  //interface Battle {ki: number}
  //const peleaOk: Battle={arena:"Namek", ki: 1500}

  //Interface
  interface RecetaBase{ // PADRE
    agua: number
    cafe:number
  }
  interface RecetaAzucar extends RecetaBase { // HIJO
    azucar: number
  }
  interface MaquinaCafe {modelo: string}
  interface MaquinaCafe {aguaMax?: number}
  const maquina: MaquinaCafe= {modelo: "Kame-500", aguaMax: 2000}

  function prepararCafe (receta: RecetaCafe): CafePreparado {
    const intensidad = receta.cafe > 10 ? "fuerte": "suave"
    return{
      mensaje: 
          `Cafe listo con ${receta.agua}ml de agua y
          ${receta.cafe}g de cafe` + (receta.azucar? `+ ${receta.azucar}g de azucar`:""),
      intensidad,
    }
  }

  //function prepararCafeEjemploQuemados ({agua=0, cafe=0, azucar=0}: RecetaCafe): CafePreparado {
  //const intensidad = cafe > 10 ? "fuerte": "suave"
  //  return{
  //    mensaje: 
  //        `Cafe listo con ${agua}ml de agua y
  //        ${cafe}g de cafe` + (azucar? `+ ${azucar}g de azucar`:""),
  //    intensidad,
  //  }
  //}

  interface CafePreparadoI {
    mensaje: string
    intensidad: "suave" | "fuerte"
  }
  function prepararCafeI (receta: RecetaAzucar): CafePreparadoI {
    const intensidad: CafePreparadoI["intensidad"] = receta.cafe > 10? "fuerte": "suave";
    return{
      mensaje: `Cafe listo (INTF) con ${receta.agua}ml de agua y
      ${receta.cafe}g de cafe + ${receta.azucar}g de azucar`,
      intensidad,
    }
  }

  const OnCafe = () => {
    const resultado = prepararCafe({agua:200, cafe:5, azucar:5});
    alert(resultado.mensaje + "con intensidad: " + resultado.intensidad)
  }

  const OnCafeInterface = () => {
    const resultado = prepararCafeI({agua:200, cafe:5, azucar:5})
    alert(resultado.mensaje + "con intensidad: " + resultado.intensidad)
  }

  //INTERSECCIONES
  type A = {nombre: string}
  type B = {edad: number}
  type C = {state?: boolean}
  type persona = A & B & C
  const juanObject: persona = {nombre: "Juan", edad: 22, state: true}

  return (
    <div className="h-screen bg-amber-300 text-black flex flex-col p-4 gap-4">
      <span>Modulo2Page</span>
      <button className="bg-amber-950 text-white rounded-2xl" onClick={OnCafe}>hacer cafe con type</button>
      <span>Interface</span>
      <button className="bg-black text-white rounded-2xl" onClick={OnCafeInterface}>hacer cafe con Interfaces</button>
      {/* {peleaOk.arena + " " + peleaOk.ki}*/}
      <span>state tipados</span>
      {intensidadUI}
      <button onClick={()=> setIntensidadUI("fuerte")}> cambiar state</button>

      <span>Contador</span>
      <button className="rounded-md border border-neutral-700 bg-neutral-800
      px-3 py-1 hover:bg-neutral-700 text-white" onClick={dec}> -</button>
      <span className="min-w-[3ch] text-center text-2x1 font-semibold text-black">{count}</span>
      <button className="rounded-md border border-neutral-700 bg-neutral-800
      px-3 py-1 hover:bg-neutral-700 text-white" onClick={inc}> +</button>
      <h2>INTERSECCIONES (&)</h2>
      {juanObject.nombre} - {juanObject.edad} - {juanObject.state? "activo": "inactivo"}

      <pre>{JSON.stringify(juanObject, null,2)}</pre>
    </div>
  );
};