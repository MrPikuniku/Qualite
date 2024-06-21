






export type Todo = {
    label:  string,
    completed: boolean
} 

export type CreatedTodo = Todo & {
    id: number 
}

const tach : Todo = {
    label: "Je fais une requete",
    completed: true
}

export async function createTodo(todo: Todo) : Promise<CreatedTodo> {
    // Effectue la requête pour créer la tâche dans l'API
    const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify(todo),
    });

    if (!res.ok){  console.log("Raté"); throw new Error("La tâche n'a pas pu être créée"); }
    console.log("Réussi");
    return res.json();
}
const appel = createTodo(tach);

console.log( appel.then((value)=>{console.log(value)})  );









