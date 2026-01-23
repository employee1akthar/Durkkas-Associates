import { usePageTitle } from "@/hooks/use-page-title";
import { usePageLoader } from "@/hooks/use-page-loader";
import { PageLoader } from "@/components/ui/loader";

const Index = () => {
  usePageTitle("Home | Durkkas Associates");
  const isLoading = usePageLoader();

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <main>
      <div className="container py-12">
        <h1>Home Page</h1>
        <p>This is the home page content.</p>
      </div>
    </main>
  );
};

export default Index;
