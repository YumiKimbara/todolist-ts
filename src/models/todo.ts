//componentを作らないので、ファイル名の拡張子はtsxではなくtsとする。
class Todo {
  //TypeScriptの場合はデータタイプをconstructorの前に記載する必要がある。
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

export default Todo;
