import { z } from 'zod';

/////////////////////////////////////////
// TODO SCHEMA
/////////////////////////////////////////

export const TodoSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  isCompleted: z.boolean(),
})

export type Todo = z.infer<typeof TodoSchema>

/////////////////////////////////////////
// TODO PARTIAL SCHEMA
/////////////////////////////////////////

export const TodoPartialSchema = TodoSchema.partial()

export type TodoPartial = z.infer<typeof TodoPartialSchema>

/////////////////////////////////////////
// TODO OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const TodoOptionalDefaultsSchema = TodoSchema.merge(z.object({
  id: z.number().int().optional(),
  isCompleted: z.boolean().optional(),
}))

export type TodoOptionalDefaults = z.infer<typeof TodoOptionalDefaultsSchema>

export default TodoSchema;
