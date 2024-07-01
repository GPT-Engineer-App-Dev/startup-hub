import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Index() {
  return (
    <div className="container mx-auto p-6">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Welcome to SaaS Startup</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Revolutionizing the way you manage your business.
        </p>
        <Button variant="primary" size="lg">
          Get Started
        </Button>
      </section>

      <section id="features" className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Feature One</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Detail about feature one.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Two</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Detail about feature two.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Three</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Detail about feature three.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="pricing" className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$10/month</p>
              <p>Basic features included.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pro Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$30/month</p>
              <p>All features included.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Enterprise Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Contact us for pricing</p>
              <p>Custom solutions for your business.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Have questions? Get in touch with us!
        </p>
        <Button variant="secondary" size="lg">
          Contact Support
        </Button>
      </section>
    </div>
  );
}

export default Index;