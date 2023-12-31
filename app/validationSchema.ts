import { z } from 'zod';

export const createIssueSchema = z.object({
  title: z.string().min(1, 'title is Required ').max(255),
  description: z.string().min(1, 'description is Required'),
});
