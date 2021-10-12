import { useRef } from "react";

import classes from "./NewTodo.module.css";

//onAddTodo: (text: string) => voidはonAddTodoのtypeを指定している。
//(text: string)=>voidは関数ではなく、onAddTodoが関数のtypeで何もreturnしない(voidのため)ということを表していてcallback関数ではない。
const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  //refがHTMLInputElementとconnectしていることを知らせる。
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  //eventもTSはどんなタイプかわからないから、React.FormEventと指定してあげる。
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    //current.valueが存在するかtsはわからないため、?が自動的につき、もし成功すればvalueが、失敗すればnullが格納される。
    //もしdeveloper自身が必ずvalueが格納されると確信しているなら?の代わりに!をつける。
    // const enteredText = todoTextInputRef.current?.value;
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
