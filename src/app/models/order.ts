import { Client } from './client';

export interface Order {
  Client: Client;
  id: number;
  client_id: number;
  doc_type: string;
  doc_number: number;
  total?: number;
  created_at?: string;
}
