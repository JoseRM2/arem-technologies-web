"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(prevState: any, formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      return { error: "Todos los campos son obligatorios." };
    }

    const data = await resend.emails.send({
      from: "Contacto AREM <contacto@aremtech.com.mx>",
      to: "jrealmedina@gmail.com",
      subject: `Nuevo mensaje de contacto de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
    });

    if (data.error) {
      return { error: data.error.message };
    }

    return { success: true };
  } catch (error: any) {
    return { error: "Hubo un error al enviar el mensaje. Inténtalo más tarde." };
  }
}

export async function sendAuditEmail(prevState: any, formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const company = formData.get("company") as string;
    const email = formData.get("email") as string;
    const challenge = formData.get("challenge") as string;

    if (!name || !email || !company || !challenge) {
      return { error: "Todos los campos son obligatorios." };
    }

    const data = await resend.emails.send({
      from: "Auditoría AREM <auditoria@aremtech.com.mx>", 
      to: "jrealmedina@gmail.com",
      subject: `Solicitud de Auditoría de ${company}`,
      text: `Nombre: ${name}\nEmpresa: ${company}\nEmail: ${email}\n\nDesafío Operativo:\n${challenge}`,
    });

    if (data.error) {
      return { error: data.error.message };
    }

    return { success: true };
  } catch (error: any) {
    return { error: "Hubo un error al procesar tu solicitud. Inténtalo más tarde." };
  }
}
