import { Layout } from "@/components/layout/Layout";

export default function Privacy() {
  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-display text-foreground mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg text-muted-foreground space-y-6">
              <p>
                <strong className="text-foreground">Last updated: December 15, 2024</strong>
              </p>

              <h2 className="text-heading-lg text-foreground mt-8">Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you fill out 
                a contact form, subscribe to our newsletter, or communicate with us via email.
              </p>

              <h2 className="text-heading-lg text-foreground mt-8">How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services, 
                communicate with you about our services, and respond to your inquiries.
              </p>

              <h2 className="text-heading-lg text-foreground mt-8">Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to 
                outside parties without your consent, except as required by law.
              </p>

              <h2 className="text-heading-lg text-foreground mt-8">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-heading-lg text-foreground mt-8">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:privacy@example.com" className="text-accent hover:underline">
                  privacy@example.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}