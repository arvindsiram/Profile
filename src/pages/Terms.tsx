import { Layout } from "@/components/layout/Layout";

export default function Terms() {
  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-display text-foreground mb-8">Terms of Service</h1>
            
            <div className="prose prose-lg text-muted-foreground space-y-6">
              <p>
                <strong className="text-foreground">Last updated: December 15, 2024</strong>
              </p>

              <h2 className="text-heading-lg text-foreground mt-8">Agreement to Terms</h2>
              <p>
                By accessing or using our services, you agree to be bound by these Terms of Service 
                and all applicable laws and regulations.
              </p>

              <h2 className="text-heading-lg text-foreground mt-8">Services</h2>
              <p>
                We provide AI automation consulting services for insurance brokerages, 
                including but not limited to chatbot implementation, voice agent solutions, 
                and custom client portal development.
              </p>

              <h2 className="text-heading-lg text-foreground mt-8">Intellectual Property</h2>
              <p>
                All content, features, and functionality of our services are owned by us 
                and are protected by international copyright, trademark, and other intellectual 
                property laws.
              </p>

              <h2 className="text-heading-lg text-foreground mt-8">Limitation of Liability</h2>
              <p>
                We shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages resulting from your use of our services.
              </p>

              <h2 className="text-heading-lg text-foreground mt-8">Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at{" "}
                <a href="mailto:legal@example.com" className="text-accent hover:underline">
                  legal@example.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}