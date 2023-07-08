import ContactForm from "@/components/pages/contact-form"
import SocialMediaIcons from "@/components/common/social-media-icons"
import HeadingText from "@/components/common/heading-text"

export const metadata = {
  title: "Contact",
}

export default function Contact() {
  return (
    <main className="container py-4 sm:py-8 flex flex-col items-center">
      <div className="flex flex-col items-center text-center space-y-2">
        <HeadingText subtext="Message me via social media or through email">
          Contact
        </HeadingText>
        <SocialMediaIcons />
      </div>
      <ContactForm />
    </main>
  )
}
