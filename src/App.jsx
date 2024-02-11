import { useRef } from 'react';
import { Sidebar } from "./components/Sidebar";
import { TextEditor } from "./components/TextEditor";


export const App = () => {

  return (
    <div className="min-h-screen p-8 text-zinc-900 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r">
      <div className="bg-white w-[1100px] mx-auto rounded-xl h-[530px] shadow-sm border-black/20 overflow-hidden grid grid-cols-5">
        
      <Sidebar/>

        <main className="py-6 px-8 col-span-4 prose prose-2xl flex flex-col items-start">
          <input className="w-full text-3xl mb-10 font-bold outline-none" type="text" placeholder="Título do Documento"/>
          
          <div className="overflow-auto">
            <TextEditor/>
          </div>
        </main>
      </div>
    </div>
  );
};
