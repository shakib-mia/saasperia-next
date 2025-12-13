import PageHeader from "@/app/components/PageHeader/PageHeader";
import RestServices from "@/app/components/RestServices/RestServices";
import { servicesCollection } from "@/app/lib/mongodb";
// import NotFound from "@/app/not-found";
import Image from "next/image";
import React from "react";

// -------------------------
// 1) PRE-GENERATE ALL SLUGS
// -------------------------
export async function generateStaticParams() {
  try {
    const services = await servicesCollection.find().toArray();

    return services.map((t) => ({
      slug: t.slug,
    }));
  } catch (e) {
    return [];
  }
}

// -------------------------
// 2) SEO METADATA
// -------------------------
export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    const service = await servicesCollection.findOne({ slug });

    if (!service) {
      return {
        title: "Service Not Found",
        description: "This service does not exist in our collection.",
      };
    }

    return {
      title: `${service.title} - SaaSPeria`,
      description: service.shortDescription,
      openGraph: {
        title: `${service.title} - SaaSPeria`,
        description: service.shortDescription,
        url: `https://saasperia-next.vercel.app/services/${slug}`,
        type: "article",
        images: [
          {
            url: service.image, // thumbnail URL
            width: 1200,
            height: 630,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `${service.title} - SaaSPeria`,
        description: service.shortDescription,
        images: [service.image],
      },
      alternates: {
        canonical: `/services/${slug}`,
      },
    };
  } catch (e) {
    // return <NotFound />;
  }
}

const Service = async ({ params }) => {
  const { slug } = await params;
  const service = await servicesCollection.findOne({ slug });

  if (!service) {
    // return <NotFound />;
  }

  return (
    <>
      <PageHeader
        title={`${service.title}`}
        description={service.shortDescription}
      />
      <section className="container mx-auto max-w-7xl px-4 flex flex-col lg:flex-row gap-10">
        <main className="lg:w-8/12 w-full">
          <Image
            src={service.image}
            width={600}
            height={600}
            alt={service.slug}
            className="w-full aspect-video rounded-lg mb-8 object-cover"
            data-animate="fade-in-left"
          />
          <p
            className="mb-8 text-lg leading-relaxed text-gray-700 text-justify"
            data-animate="fade-in-left"
            data-delay="100ms"
          >
            {service.fullDescription}
          </p>

          {service.features?.map((section, idx) => (
            <section
              id={section.title.split(" ").join("-").toLowerCase()}
              key={idx}
              className="mb-6 py-0!"
              data-animate="fade-in-left"
            >
              <h5 className="font-medium mb-3 text-gray-800">
                {section.title}
              </h5>
              <p className="text-gray-600 leading-relaxed text-justify">
                {section.description}
              </p>
            </section>
          ))}

          <div data-animate="fade-in-left">
            <h5 className="font-medium mb-3 text-gray-800">Conclusion</h5>
            <p className="text-gray-600 leading-relaxed">
              {service.conclusion}
            </p>
          </div>
        </main>

        <aside className="lg:w-4/12 w-full sticky top-20 self-start h-fit space-y-8">
          <div className="bg-gray-50 rounded-lg p-6 shadow-md">
            <h3
              className="text-xl font-medium mb-4 text-gray-800"
              data-animate="fade-in-right"
            >
              Quick Links
            </h3>
            <ul className="space-y-1 mb-6">
              {service.features?.map((section, idx) => (
                <li
                  key={idx}
                  data-animate="fade-in-right"
                  data-delay={`${idx * 100}ms`}
                >
                  <a
                    href={`#${section.title
                      .split(" ")
                      .join("-")
                      .toLowerCase()}`}
                    className="text-blue-600 hover:text-blue-800 transition-colors text-base"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* এখানে বাকি সার্ভিস গুলো দেখানো */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-md">
            <h3
              className="text-xl font-medium mb-4 text-gray-800"
              data-animate="fade-in-right"
              data-delay={`100ms`}
            >
              More Services
            </h3>
            <RestServices slug={slug} />
          </div>
        </aside>
      </section>
    </>
  );
};

export default Service;
