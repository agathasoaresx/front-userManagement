import { Checkbox } from "@mui/material"

const Cadastro = () => {
  return (
    <div class="flex">
    <div id="column-1" class="flex w-2/3 bg-gradient-to-r flex items-center justify-center from-slate-50 to-blue-100 h-screen rounded-br-3xl">
        <p class="text-lg">Já possui conta? <a href="#" class="text-yellow-300 font-bold">Faça o login</a></p>    
    </div>

    <div id="column-2" class="flex w-full bg-slate-400 items-center justify-center">
        <div id="cadastro-card" class="flex flex-col w-auto h-3/5 bg-slate-300">
          <div id="cadastro-title" class="bg-slate-200 h-14 w-full">
            <h2></h2>
          </div>
          <div id="cadastro-body" class="bg-slate-100 h-full">
          <div id="nome-sobrenome" class="flex bg-slate-50 flex space-x-4 pt-6">
          <input type="text" id="name" name="name" value=""  placeholder="" class="border border-slate-300 rounded-md"></input>
          <input type="text" id="name" name="sobrenome" value=""  placeholder="" class="border border-slate-300 rounded-md"></input>
          </div>
          
          <div id="form-content" class="flex flex-col space-y-6 pt-6">
          <input type="text" id="name" name="cpf" value=""  placeholder="" class="border border-slate-300 rounded-md"></input>
          <input type="text" id="name" name="email" value=""  placeholder="" class="border border-slate-300 rounded-md"></input>
          <input type="text" id="name" name="senha" value=""  placeholder="" class="border border-slate-300 rounded-md"></input>
          <input type="text" id="name" name="conf-senha" value=""  placeholder="" class="border border-slate-300 rounded-md"></input>
          </div>

          <div id="termos" class="bg-slate-50 h-16">
            <input type="checkbox"></input>
          </div>
          </div>

        </div>
    </div>
    </div>
  )
}

export default Cadastro