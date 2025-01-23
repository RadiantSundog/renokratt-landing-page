"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  comment: z.string().min(10, "Comment must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      comment: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      const result = await response.json();
      alert(result.message || "Form submitted successfully!");
      form.reset();
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="bg-gray-800 text-white rounded-xl p-12 md:p-16 max-w-screen-xl mx-auto min-h-[500px] flex items-center justify-center"
    >
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Left Column */}
        <div className="flex flex-col justify-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug text-center md:text-left">
            Let’s talk about <br /> what you want to achieve
          </h2>
          <div className="text-center md:text-left">
            <h3 className="text-lg font-medium">Contact</h3>
            <p className="text-sm mt-2">
              Info@Renokratt.ee <br />
            </p>
          </div>
        </div>

        {/* Right Column */}
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-center space-y-6"
        >
          <Input
            placeholder="Name"
            {...form.register("name")}
            className="bg-gray-700 text-white border-0 focus:ring-2 focus:ring-yellow-500 rounded px-4 py-3"
          />
          <Input
            placeholder="Email"
            {...form.register("email")}
            className="bg-gray-700 text-white border-0 focus:ring-2 focus:ring-yellow-500 rounded px-4 py-3"
          />
          <Input
            placeholder="Type your comment here"
            type="comment"
            {...form.register("comment")}
            className="bg-gray-700 text-white border-0 focus:ring-2 focus:ring-yellow-500 rounded px-4 py-3"
          />
          <Button
            type="submit"
            className="bg-yellow-500 text-gray-800 font-medium rounded-full py-3 px-8 hover:bg-yellow-600 transition"
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
}
