import type { NextApiRequest, NextApiResponse } from 'next';

type Data = { ok: boolean; message?: string }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>){
  if(req.method !== 'POST') return res.status(405).json({ ok:false, message:'Method not allowed' });

  const { name, email, message } = req.body || {};
  if(!name || !email || !message) return res.status(400).json({ ok:false, message:'Missing fields' });

  // Here: integrate with email provider (SendGrid, Mailgun) or forward to your own inbox.
  // For demo, we simply log and return success.
  console.log('CONTACT_FORM', { name, email, message });

  return res.status(200).json({ ok:true, message:'Received' });
}
