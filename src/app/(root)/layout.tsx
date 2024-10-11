import { CategoryList } from "@/features/home/components/category-list";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div>
      <CategoryList />
      {children}
    </div>
  );
};

export default RootLayout;
