import React, { useRef, useEffect, createContext, useContext } from 'react';
// Importe os outros módulos aqui

// Crie um novo contexto
export const EditorContext = createContext();

export const Editor = () => {
  const ejInstance = useRef();

  const initEditor = () => {
    // O código do editor vai aqui
  };

  useEffect(() => {
    if (!ejInstance.current) {
      initEditor();
    }
  }, []);

  // Use o Provider do contexto para fornecer o valor do editor para os componentes filhos
  return (
    <EditorContext.Provider value={ejInstance.current}>
      <div id='editorjs' className='text-sm'></div>
    </EditorContext.Provider>
  )
}

// Em outro componente, você pode usar o useContext para acessar o editor
export const AnotherComponent = () => {
  const editor = useContext(EditorContext);

  // Agora você pode usar o editor neste componente
}
