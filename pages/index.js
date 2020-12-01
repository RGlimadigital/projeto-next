import {useState} from 'react';

function Home(){
   return <div className="container">
      <h1>My Next.Js Project</h1>
      <hr/>
      <h2>Made by React</h2>
      <p>Projeto para demonstração das funcionalidades do Next.js framework.</p>
      <p>Aqui testamos um contador que atualiza o estado da pagina em tempo real:</p>
      <Contador />
      <p>Pagina de teste hospedada de maneira gratuita na plataforma <strong>Vercel</strong>.</p>
      <style jsx>{
         `
         .container {
           margin: 50px;
         }
         h1, p, h2{
            font-family: "Verdana";
         }
         p {
           color: grey;
         }
       `
}
      </style>

   </div>
}

function Contador(){
   const [contador, setContador] = useState(1);

   function adicionarContador(){
       setContador(contador + 1);
   }
   return <div>
      <div>{contador}</div>
      <button onClick={adicionarContador}>Adicionar</button>
   </div>
}



export default Home