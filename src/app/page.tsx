import Image from "next/image";
import prisma from '@/lib/prisma';
import { TodoSchema } from '@/prisma/TodoSchema';
import { z } from "zod";

const Page = async () => {
  const TodoArraySchema = z.array(TodoSchema);
  type PrismaTodoResult = z.infer<typeof TodoArraySchema>;

  async function getTodos(): Promise<PrismaTodoResult> {
    const todos = await prisma.todo.findMany();
    // Zodを使用してクエリ結果を検証
    const validatedTodos = TodoArraySchema.parse(todos);
    return validatedTodos;
  }
  
  const todos = await getTodos();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="m-8">
        <h1 className="text-xl font-bold">Todo一覧</h1>
        <ul className="mt-8">
          {todos.map((todo) => (
            <li key={todo.id}>{todo.name}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
export default Page;