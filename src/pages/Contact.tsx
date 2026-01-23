import { usePageTitle } from "@/hooks/use-page-title";
import { usePageLoader } from "@/hooks/use-page-loader";
import { PageLoader } from "@/components/ui/loader";

export default function Contact() {
  usePageTitle("Contact | Durkkas Associates");
  const isLoading = usePageLoader();

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <main>
      <div className="container py-12">
        <h1>Contact Page</h1>
        <p>This is the contact page content.</p>
      </div>
    </main>
  );
}
