import { ContactForm } from "@/components/pages/contact/contact-form";
import { Button } from "@/components/ui/button";
import MotionDiv from "@/components/ui/motion-div";
import { common } from "@/lib/strings/common";
import { CalendarClockIcon, ExternalLink, MailboxIcon, MailIcon, PhoneCallIcon } from "lucide-react";
import Link from "next/link";

export default function ContactUs() {
  return (
    <MotionDiv direction="btot" className="py-10 md:py-16">
      <div className="text-2xl md:text-3xl font-light uppercase">Let&apos;s Connect</div>
      <div className="text-lg md:text-xl md:font-light mt-5 md:mt-8">We&apos;re here to help!</div>
      <p className="mt-3">
        Have questions? Need support? Want to discuss a new project? Have a suggestion for us? We&apos;re here for you
        24/7. Drop us a message, and we&apos;ll get back to you promptly. Your vision, our expertise—let&apos;s make it
        happen.
      </p>
      <p className="mt-3">
        You can also check out our{" "}
        <Button variant="link" className="p-0 text-sm md:text-base h-fit" asChild>
          <Link href="/faq">FAQs</Link>
        </Button>{" "}
        for answers to common inquiries about our services.
      </p>
      <ContactForm />
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      <div className="mt-5 md:mt-8 grid grid-cols-1 md:grid-cols-2">
        <div>
          <div className="text-lg md:text-xl md:font-light">Get in Touch</div>
          <p className="mt-3 flex gap-2 items-center">
            <PhoneCallIcon className="w-5" /> <span>{common.phone.india}</span>
          </p>
          <p className="mt-3 flex gap-2 items-center">
            <MailIcon className="w-5" /> <span>{common.emails.default}</span>
          </p>
          <p className="mt-3 flex gap-2 items-center">
            <MailboxIcon className="w-5" /> <span>{common.address.india}</span>
          </p>
          <p className="mt-3 flex gap-2 items-center">
            <CalendarClockIcon className="w-5" /> <span>Business Hours:</span>
          </p>
          <ul className="mt-3 flex gap-2 flex-col">
            <li className="pl-7">Monday - Friday: 9:00 AM - 6:00 PM</li>
            <li className="pl-7">Saturday: 10:00 AM - 2:00 PM</li>
            <li className="pl-7">Sunday: Closed</li>
          </ul>
        </div>
        <div>
          <div className="text-lg md:text-xl md:font-light mt-5 md:mt-0">Follow Us</div>
          <div className="mt-3 flex gap-2 flex-col">
            Stay connected and follow us on social media for the latest updates, news, and insights from Bytecoup.
            <ul className="mt-3 flex gap-2 flex-col">
              <li>
                <Button variant="link" className="p-0 text-sm h-fit text-black dark:text-white" asChild>
                  <Link href="https://x.com/ByteCoup/" target="_blank">
                    X(formerly Twitter)
                    <ExternalLink className="w-4 ml-1" />
                  </Link>
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 text-sm h-fit text-black dark:text-white" asChild>
                  <Link href="https://www.linkedin.com/company/bytecoup/about/" target="_blank">
                    LinkedIn
                    <ExternalLink className="w-4 ml-1" />
                  </Link>
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 text-sm h-fit text-black dark:text-white" asChild>
                  <Link href="https://www.instagram.com/bytecoup/" target="_blank">
                    Instagram
                    <ExternalLink className="w-4 ml-1" />
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      <div className="text-lg md:text-xl md:font-light mt-5 md:mt-8">Partnerships and Collaborations</div>
      <p className="mt-3">
        Interested in partnering with us or collaborating on a project? We&apos;re always open to new opportunities and
        partnerships. Contact us at info@bytecoup.com or send us a message using above form for more information.
      </p>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      <div className="text-lg md:text-xl md:font-light mt-5 md:mt-8">Careers</div>
      <p className="mt-3">
        Looking to join our team? Explore career opportunities at bytecoup by visiting our Careers Page. We&apos;re
        always on the lookout for talented individuals to join our dynamic team.{" "}
        <Button variant="link" className="p-0 text-sm md:text-base h-fit" asChild>
          <Link href="/careers">Go to careers page.</Link>
        </Button>
      </p>
    </MotionDiv>
  );
}
