import { ContactForm } from "@/components/pages/contact/contact-form";
import { Button } from "@/components/ui/button";
import { MailboxIcon, MailIcon, PhoneCallIcon } from "lucide-react";
import Link from "next/link";

export default function ContactUs() {
  return (
    <div className="py-16">
      <div className="text-3xl font-light uppercase">Let's Connect</div>
      <div className="text-xl font-light mt-8">We&apos;re here to help!</div>
      <p className="mt-3">
        Have questions? Need support? Want to discuss a new project? Have a suggestion for us? We&apos;re here for you
        24/7. Drop us a message, and we&apos;ll get back to you promptly. Your vision, our expertise—let&apos;s make it
        happen.
      </p>
      <p className="mt-3">
        You can also check out our{" "}
        <Link href="/faq" legacyBehavior passHref>
          <Button variant="link" className="p-0">
            FAQs
          </Button>
        </Link>{" "}
        for answers to common inquiries about our services.
      </p>
      <ContactForm />
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      <div className="mt-8 grid grid-cols-2">
        <div>
          <div className="text-xl font-light">Get in Touch</div>
          <p className="mt-3 flex gap-2 items-center">
            <MailboxIcon className="w-5" /> <span>Delhi, India</span>
          </p>
          <p className="mt-3 flex gap-2 items-center">
            <PhoneCallIcon className="w-5" /> <span>+91-9999999999 (INDIA)</span>
          </p>
          <p className="mt-3 flex gap-2 items-center">
            <PhoneCallIcon className="w-5" /> <span>+1-1111111111 (US)</span>
          </p>
          <p className="mt-3 flex gap-2 items-center">
            <MailIcon className="w-5" /> <span>support@delite.com</span>
          </p>
          <div className="text-xl font-light mt-8">Business Hours:</div>
          <p className="mt-3 flex gap-2 flex-col">
            <span>Monday - Friday: 9:00 AM - 6:00 PM</span>
            <span>Saturday: 10:00 AM - 2:00 PM</span>
            <span>Sunday: Closed</span>
          </p>
        </div>
        <div>
          <div className="text-xl font-light">Follow Us</div>
          <p className="mt-3 flex gap-2 flex-col">
            Stay connected and follow us on social media for the latest updates, news, and insights from Delite.
            <span>Facebook: [Facebook URL]</span>
            <span>Twitter: [Twitter URL]</span>
            <span>LinkedIn: [LinkedIn URL]</span>
            <span>Instagram: [Instagram URL]</span>
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      <div className="text-xl font-light mt-8">Partnerships and Collaborations</div>
      <p className="mt-3">
        Interested in partnering with us or collaborating on a project? We&apos;re always open to new opportunities and
        partnerships. Contact us at support@delite.com or send us a message using above form for more information.
      </p>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      <div className="text-xl font-light mt-8">Careers</div>
      <p className="mt-3">
        Looking to join our team? Explore career opportunities at delite by visiting our Careers Page. We&apos;re always
        on the lookout for talented individuals to join our dynamic team.{" "}
        <Link href="/careers" passHref legacyBehavior>
          <Button variant="link" className="p-0">
            Go to careers page.
          </Button>
        </Link>
      </p>
    </div>
  );
}
