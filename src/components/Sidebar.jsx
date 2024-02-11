import { FaPlus } from "react-icons/fa6";
import { FaRegFileAlt } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { DragDropContext } from 'react-beautiful-dnd';


export const Sidebar = () => {
  return (
    <aside className="bg-zinc-100 border-r border-zinc-100 p-4 col-span-1">
      <div className="flex gap-3 group">
        <button className="w-3 h-3 rounded-full bg-red-400"></button>
        <button className="w-3 h-3 rounded-full bg-yellow-400"></button>
        <button className="w-3 h-3 rounded-full bg-green-400"></button>
      </div>

      <div className="mt-8 p-2 flex items-center gap-2 group cursor-pointer hover:bg-zinc-200 rounded-md">
        <FaPlus className="text-zinc-500 group-hover:text-zinc-900"/>
        <h5 className="text-zinc-500 text-zinc-900">Adicionar</h5>
      </div>

      <ul className='grid mt-2 list-none'>
        <li className="flex p-2 items-center justify-between group cursor-pointer hover:bg-zinc-200 rounded-md">
          <div className='flex items-center gap-2'>
            <FaRegFileAlt className="text-zinc-500 group-hover:text-zinc-900"/>
            <h5 className="text-zinc-500 group-hover:text-zinc-900 group-hover:font-semibold">AAAAAAA</h5>
          </div>
          <FaRegTrashAlt className="text-zinc-500 hover:text-red-600"/>
        </li>

        <li className="flex p-2 items-center justify-between group cursor-pointer hover:bg-zinc-200 rounded-md">
          <div className='flex items-center gap-2'>
            <FaRegFileAlt className="text-zinc-500 group-hover:text-zinc-900"/>
            <h5 className="text-zinc-500 group-hover:text-zinc-900 group-hover:font-semibold">BBBBB</h5>
          </div>
          <FaRegTrashAlt className="text-zinc-500 hover:text-red-600"/>
        </li>
      </ul>
    </aside>
  )
}
