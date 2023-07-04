"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import SocialMediaIcons from "@/components/common/social-media-icons"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  subject: z.string().min(1, {
    message: "Subject is required",
  }),
  msg: z.string().min(1, {
    message: "Message is required",
  }),
})

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: "",
      msg: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    window.location.href = `mailto:janreynald.pangilinan@gmail.com?subject=${values.subject}&body=${values.msg}`
    form.reset()
  }

  return (
    <main className="container py-4 sm:py-8 flex flex-col items-center">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl lg:text-4xl font-bold mb-2">Contact</h1>
        <h2 className="lg:text-lg mb-2 font-light text-zinc-500 dark:text-zinc-400">
          Message me via social media or through email
        </h2>
        <SocialMediaIcons />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full sm:w-[24rem] space-y-4 py-8"
        >
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="Enter the subject" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="msg"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter your message" {...field} />
                </FormControl>
                <FormDescription>
                  Your message will be sent directly to me.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div />
          <Button className="w-full" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </main>
  )
}
