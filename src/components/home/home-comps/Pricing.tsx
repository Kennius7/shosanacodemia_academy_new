"use client";

import { PricingData } from "@/data";
import { PricingDataType, selectedCourseType } from "@/types";
import HomeSectionHeader from "./HomeSectionHeader";
import { formatter } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const PricingCard = ({
  price,
  key,
}: {
  price: PricingDataType;
  key: string;
}) => {
  const router = useRouter();
  const { setFormData } = useAuth();

  const handleEnrollment = (course: selectedCourseType) => {
    setFormData((prev) => ({ ...prev, selectedCourse: course }));
    router.push("/signup");
  };

  return (
    <div
      key={key}
      className={`flex flex-col justify-between rounded-xl border ${price.borderColor} 
      bg-primary/[0.04] p-4 md:p-8 ring-1 ring-primary/20`}
    >
      <div>
        <HomeSectionHeader
          text={price.pricingType}
          isRoutable={false}
          route={"Pricing"}
          textColor={price.textColor}
          bgColor={price.bgColor}
          borderColor={price.borderColor}
        />
        <div className="mb-1 text-lg md:text-4xl font-extrabold">
          {formatter.format(Number(price.price))}
          <span className="text-base font-medium text-muted-foreground">
            &nbsp;/cohort
          </span>
        </div>
        <p className="mb-4 md:mb-8 text-xs md:text-sm text-muted-foreground">
          {price.priceInfo}
        </p>

        <ul className="mb-6 md:mb-8 space-y-2 md:space-y-3 text-xs md:text-sm">
          {price.benefits.map((b, i) => {
            return (
              <li key={i} className="flex gap-3">
                <span className="text-primary">✓</span> {b}
              </li>
            );
          })}
        </ul>
      </div>

      <button
        onClick={() => handleEnrollment(price.pricingType)}
        className={`block w-full rounded-lg ${price.buttonColor} ${price.shadowColor} 
        py-3 text-center font-semibold text-primary-foreground shadow-lg
        transition-all hover:brightness-110 text-xs md:text-lg cursor-pointer`}
      >
        Start enrollment
      </button>
    </div>
  );
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#080F1E]">
      {/* <SiteNav /> */}
      <header className="border-b border-border px-4 md:px-6 py-10 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <HomeSectionHeader
            text={"Pricing"}
            isRoutable={true}
            route={"Pricing"}
          />
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            Your way into software development.
          </h1>
          <p className="text-muted-foreground">
            Enrol for what best suits you or send a message for guidance.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-2 md:px-6 py-10 md:py-16">
        <div className="grid gap-3 md:gap-6 grid-cols-1 md:grid-cols-3">
          {PricingData.map((price) => {
            return <PricingCard key={price.id} price={price} />;
          })}
        </div>
      </section>
    </div>
  );
}
