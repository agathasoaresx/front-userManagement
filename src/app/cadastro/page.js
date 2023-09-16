const Cadastro = () => {
  return (
    <div class="flex">
    <div id="column-1" class="flex w-2/3 bg-gradient-to-r flex items-center justify-center from-slate-50 to-blue-100 h-screen rounded-br-3xl">
        <p class="text-lg">Já possui conta? <a href="#" class="text-yellow-300 font-bold">Faça o login</a></p>    
    </div>

    <div id="column-2" class="flex w-full bg-slate-400 items-center justify-center">
        <div id="cadastro-card" class="flex flex-col w-2/5 h-3/5 bg-slate-300">
          <div id="cadastro-title" class="bg-slate-200 h-14 w-full">
            <h2></h2>
            <img></img>
          </div>
          <div id="cadastro-body" class="bg-slate-100 h-full">
          <input type="text" id="name" name="name" value=""  placeholder="Nome" class="border border-slate-300 rounded-md"></input>
          <input type="text" id="name" name="name" value=""  placeholder="Sobrenome" class="border border-slate-300 rounded-md"></input>
          </div>

        </div>
    </div>
    </div>
  )
}

export default Cadastro