import { usePageTitle } from "@/hooks/use-page-title";
import { usePageLoader } from "@/hooks/use-page-loader";
import { PageLoader } from "@/components/ui/loader";

export default function About() {
  usePageTitle("About | Durkkas Associates");
  const isLoading = usePageLoader();

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <main>
      <div className="container py-12">
        <h1>About Page</h1>
        <p>This is the about page content.</p>
      </div>
    </main>
  );
}
