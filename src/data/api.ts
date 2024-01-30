/* eslint-disable no-useless-catch */
import { env } from '@/env'

export async function api<T>(path: string, init?: RequestInit): Promise<T> {
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL
  const apiPrefix = '/api'
  const url = new URL(apiPrefix.concat(path), baseUrl)

  const response = await fetch(url, init)

  if (!response.ok) {
    throw new Error('An error occurred while fetching the data');
  }

  let data;
  try {
    data = response.json() as Promise<T>
  } catch (error) {
    console.error('Failed to parse JSON data:', error);
    throw error;
  }

  return data;
}
