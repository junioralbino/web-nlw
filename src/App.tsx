interface ButtonProps {
    text?: string;
}

function Button(props: ButtonProps){
   return <button className="bg-violet-500">{props.text ?? 'Default'}</button>
}


function App() {
  return (
    <div>
      <Button text="Enviar" />
      <Button text="Fale conosco" />
      <Button />
    </div>
  )
}

export default App
