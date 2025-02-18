import { BarLoader } from "react-spinners";
import { Suspense } from "react";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function Layout({ children }) {
  return (
    <div className="px-5">
      <div className="flex items-center justify-between mb-5">
         <AuroraText className="text-6xl font-bold gradient-title">Industry Insights</AuroraText>
        
      </div>
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="gray" />}
      >
        {children}
      </Suspense>
    </div>
  );
}
