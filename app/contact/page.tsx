"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

type FormData = z.infer<typeof schema>;

export default function ContactPage(){
  const { register, handleSubmit, formState: {errors}} = useForm<FormData>({resolver: zodResolver(schema)});
  const [sent, setSent] = useState(false);

  async function onSubmit(data:FormData){
    const res = await fetch('/api/contact', { method:'POST', headers: {'content-type':'application/json'}, body: JSON.stringify(data) });
    if(res.ok) { setSent(true); }
  }

  if(sent) return <div className="py-12">Thanks — I’ll reply shortly!</div>;

  return (
    <section className="py-12 max-w-2xl">
      <h2 className="text-2xl font-bold mb-4">Contact me</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <input {...register('name')} placeholder="Name" className="p-3 rounded border" />
        <p className="text-xs text-red-500">{errors.name?.message as string}</p>

        <input {...register('email')} placeholder="Email" className="p-3 rounded border" />
        <p className="text-xs text-red-500">{errors.email?.message as string}</p>

        <textarea {...register('message')} placeholder="Message" rows={6} className="p-3 rounded border" />
        <p className="text-xs text-red-500">{errors.message?.message as string}</p>

        <button type="submit" className="px-4 py-2 rounded bg-gradient-to-r from-purple-600 to-cyan-400 text-white">Send message</button>
      </form>
    </section>
  );
}
