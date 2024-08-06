import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export const EmailJS = () => {
  return (
    <Card className="w-full max-w-5xl mx-auto mt-16">
      <div className=" text-black text-center py-4 px-6 mt-3">
        <h2 className="text-lg font-semibold sm:text-3xl md:text-2xl lg:text-2xl">
          Te mostramos la importancia del canal de venta ecommerce en Argentina,
          contáctanos para establecer una reunión personalizada y conocer más
          sobre tu empresa.
        </h2>
      </div>
      <CardContent className="p-6">
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre y Apellido</Label>
              <Input id="name" placeholder="Ingrese su nombre y apellido" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Empresa</Label>
              <Input
                id="company"
                placeholder="Ingrese el nombre de su empresa"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">eMail</Label>
              <Input id="email" type="email" placeholder="Ingrese su email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="whatsapp">Whatsapp</Label>
              <Input
                id="whatsapp"
                placeholder="Ingrese su número de Whatsapp"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">Ciudad</Label>
              <Input id="city" placeholder="Ingrese su ciudad" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="links">Indicar Links de tu empresa</Label>
              <Input id="links" placeholder="Ingrese links de su empresa" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Mensaje</Label>
            <Textarea
              id="message"
              placeholder="Deje su mensaje aquí..."
              className="min-h-[100px]"
            />
          </div>

          <div className="flex justify-center">
            <Button type="submit" className="w-full">
              ENVIAR
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
