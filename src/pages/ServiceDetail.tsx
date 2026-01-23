import { useParams } from "react-router-dom";
import { usePageTitle } from "@/hooks/use-page-title";
import { usePageLoader } from "@/hooks/use-page-loader";
import { PageLoader } from "@/components/ui/loader";

export default function ServiceDetail() {
  const { slug } = useParams();
  usePageTitle("Service Detail | Durkkas Associates");
  const isLoading = usePageLoader();

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <main>
      <div className="container py-12">
        <h1>Service Detail Page</h1>
        <p>This is the service detail page for: {slug}</p>
      </div>
    </main>
  );
}
