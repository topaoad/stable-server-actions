import { z } from 'zod';

export const TodoScalarFieldEnumSchema = z.enum(['id','name','isCompleted']);

export default TodoScalarFieldEnumSchema;
