import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const faqs = [
  {
    question: "Are these tools really free?",
    answer: "Yes! All my tools are completely free and open-source. You can use them without any restrictions, and the source code is available on GitHub for transparency and contributions."
  },
  {
    question: "Will these tools work on my Windows version?",
    answer: "The tools are designed for Windows 11 but should work on Windows 10 as well. They're built with Tauri, which provides excellent compatibility across Windows versions."
  },
  {
    question: "How do I install and update the tools?",
    answer: "Download the latest release from the tool's card above or GitHub releases page. The installer will guide you through setup. For updates, simply download and install the newer version."
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
    question: "Why did you build these tools?",
    answer: "As a developer, I found myself constantly switching between different utilities for common tasks. I built these tools to consolidate everything into one modern, efficient application that feels native to Windows 11."
  }
];

export default function FAQ() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about the developer tools
          </p>
        </div>

        <div className="grid gap-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Have more questions?{" "}
            <a 
              href="https://github.com/Joseph101GH/t1/issues" // UPDATE WITH YOUR REPO
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Ask on GitHub
            </a>
            {" "}or{" "}
            <a 
              href="mailto:your.email@example.com" // UPDATE WITH YOUR EMAIL
              className="text-primary hover:underline"
            >
              send me an email
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}