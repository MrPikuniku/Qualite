

import { createTodo, Todo, CreatedTodo } from "./create-todo";

import { test, expect } from "vitest";



const tach : Todo = {
    label: "Je fais une requete",
    completed: false
}

const appel = createTodo(tach)

test(" Vérifier le cas ou ça fonctionne", () =>{
    expect(appel).equal({id:201});
});

mock Todo