import { TabBar } from "@/components";
import { cookies} from "next/headers";

export const metadata = {
    title: 'SEO Title',
    description: 'SEO Title',
};

export default function CookiesPage() {
  const cookiesStore = cookies();
  const cookieTab = cookiesStore.get('selectedTab')?.value ?? '1';
  return (
    <div className="grid  grid-cols-1  sm:grid-cols-2  gap-3">
        <div className="flex flex-col">
            <span className="text-3xl">Taps</span>
            <TabBar currentTap={parseInt(cookieTab)} />
        </div>

    </div>
  );
}