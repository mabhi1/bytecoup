import FAQSections from "@/components/pages/faq/faq-sections";

export default function FAQ() {
  const faqs = [
    {
      title: "General Questions",
      queries: [
        {
          question: "What services does your company offer?",
          answer:
            "We specialize in designing and developing websites, mobile applications, desktop applications and much more. Our services include front-end and back-end development, UI/UX design, integration, testing, and support. You can read further in the services section",
        },
        {
          question: "How do I get started with your services?",
          answer:
            "You can get started by contacting us through our website's contact form or by calling us. We'll schedule a consultation to discuss your project requirements and provide you with a customized proposal.",
        },
        {
          question: "What industries do you serve?",
          answer:
            "We serve a wide range of industries including e-commerce, healthcare, finance, education, and more. Our solutions are tailored to meet the specific needs of each industry.",
        },
      ],
    },
    {
      title: "Web Development",
      queries: [
        {
          question: "What technologies do you use for website development?",
          answer:
            "We use a variety of technologies including HTML, CSS, JavaScript (with frameworks like React and Vue.js), PHP, Python, and content management systems like WordPress and Drupal.",
        },
        {
          question: "Do you offer custom web design?",
          answer:
            "Yes, we offer fully custom web design services. Our team of designers works closely with you to create a unique, responsive, and user-friendly design that reflects your brand.",
        },
        {
          question: "How long does it take to develop a website?",
          answer:
            "The timeline varies depending on the complexity and requirements of the project. Typically, a standard website takes about 4-8 weeks to design and develop.",
        },
        {
          question: "Will my website be mobile-friendly?",
          answer:
            "Absolutely. We ensure that all our websites are responsive and optimized for mobile devices to provide the best user experience across all platforms.",
        },
        {
          question: "Can you help with website maintenance and updates?",
          answer:
            "Yes, we offer ongoing maintenance and support services to keep your website up-to-date and running smoothly.",
        },
        {
          question: "How do you ensure the security of web applications?",
          answer:
            "We implement robust security measures including SSL encryption, regular security audits, secure coding practices, and compliance with industry standards to protect your web applications.",
        },
        {
          question: "How do you ensure the security of web applications?",
          answer:
            "We implement robust security measures including SSL encryption, regular security audits, secure coding practices, and compliance with industry standards to protect your web applications.",
        },
      ],
    },
  ];
  return (
    <div className="py-16">
      <div className="text-3xl font-light uppercase">Frequently Asked Questions (FAQs)</div>
      {faqs.map((section) => (
        <FAQSections title={section.title} queries={section.queries} key={section.title} />
      ))}
    </div>
  );
}
