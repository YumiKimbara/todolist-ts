import { useRef } from "react";

const NewTodo = () => {
  //refがHTMLInputElementとconnectしていることを知らせる。
  const todoTextInputRef = useRef<HTMLInputElement>();
  //eventもTSはどんなタイプかわからないから、React.FormEventと指定してあげる。
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
