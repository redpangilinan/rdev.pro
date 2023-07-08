import ContactForm from "@/components/pages/contact-form"
import SocialMediaIcons from "@/components/common/social-media-icons"

export const metadata = {
  title: "Contact",
}

export default function Contact() {
  return (
    <main className="container py-4 sm:py-8 flex flex-col items-center">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl lg:text-4xl font-bold mb-2">Contact</h1>
        <h2 className="lg:text-lg mb-2 font-light text-zinc-500 dark:text-zinc-400">
          Message me via social media or through email
        </h2>
        <SocialMediaIcons />
      </div>
      <ContactForm />
    </main>
  )
}
