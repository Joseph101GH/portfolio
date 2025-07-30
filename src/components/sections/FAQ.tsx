import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "Are these tools really free?",
    answer: "Yes! All my tools are completely free and open-source. You can use them without any restrictions, and the source code is available on GitHub for transparency and contributions."
  },
  {
    question: "Will these tools work on my Windows version?",
    answer: "The tools are designed for Windows 11 but should work on Windows 10 and MacOs (M-series)as well. They're built with Tauri, which provides excellent compatibility across Windows versions."
  },
  {
    question: "How do I install and update the tools?",
    answer: "Download the latest release from the tools' card above or GitHub releases page. I always try to provide a portal version. For updates, simply download and install the newer version. There will e an automatic update feature in the future."
  },
  {
    question: "Can I request new features or tools?",
    answer: "Absolutely! You can create issues on the GitHub repository for feature requests, bug reports, or suggestions for new tools. I'm always looking for ways to improve and expand the toolkit."
  },
  {
    question: "Are my files and data safe?",
    answer: "Yes, all tools run locally on your machine. No data is sent to external servers. The .env editor, for example, only works with local files and doesn't transmit any information."
  },
  {
    question: "Will you provide a sync feature for your tools?",
    answer: "As previously stated, all my tools are designed to run locally on your machine. I don't plan to provide a sync feature for now, but I'm open to suggestions."
  },
  {
    question: "Why did you build these tools?",
    answer: "As a developer, I found myself constantly switching between different utilities for common tasks. Building help me work and learn more about new technologies."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about the developer tools
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Have more questions?{" "}
            <a 
              href="https://github.com/Joseph101GH/t1/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Ask on GitHub
            </a>
            {" "}
          </p>
        </div>
      </div>
    </section>
  );
}