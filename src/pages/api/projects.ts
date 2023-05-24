import type { NextApiRequest, NextApiResponse } from 'next'
import {projects, ProjectInt } from '@/resources/projects'

export type DataType = {
  projects: ProjectInt[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataType>
) {
  res.status(200).json({ projects })
}
