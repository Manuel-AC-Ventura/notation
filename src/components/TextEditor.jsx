import { Editor } from '@tinymce/tinymce-react';

export const TextEditor = () => {
  const key = import.meta.env.VITE_TinyMCEKEY;

  return (
    <Editor 
      apiKey={key}
      init={{
        width: '820',
        min_width: '300',
        suffix: '.min',
        language: 'pt_BR',
        cache_suffix: '?v=4.1.6',
        placeholder: 'Escreva alguma coisa...',
        resize: false,
        menubar: true,
        draggable_modal: true,
        plugins: [
          'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
          'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
          'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
        ],
        toolbar: 'undo redo | blocks | ' +
          'bold italic forecolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
      }}
    />
  )
}
