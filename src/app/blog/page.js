import fs from "fs";
import path from "path";
import AboutHero from "@/components/AboutHero";
import AnimatedBlogGrid from "@/components/AnimatedBlogGrid";

// Function to read blogs data
function getBlogs() {
  const filePath = path.join(process.cwd(), "public", "blogs.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const blogs = JSON.parse(fileData);
  return blogs;
}

export const metadata = {
  title:
    "Orthopedic Health Blogs | Expert Articles on Joint Care by Dr. Abhishek Saxena, Ajmer",
  description:
    "Get expert insights on knee pain, arthritis, sports injuries, joint replacements and orthopedic treatments. Dr. Abhishek Saxena shares valuable health tips and surgical advances.",
  keywords: [
    "orthopedic blog",
    "joint pain advice",
    "knee replacement guide",
    "sports injury prevention",
    "arthritis treatment tips",
    "bone health articles",
    "orthopedic surgeon blog Ajmer",
    "Dr. Abhishek Saxena articles",
    "post-surgery recovery tips",
    "orthopedic health education",
  ].join(", "),
  openGraph: {
    title: "Orthopedic Health Blogs by Dr. Abhishek Saxena | Ajmer",
    description:
      "Expert medical articles on joint care, orthopedic treatments and surgical advances from leading Ajmer orthopedic specialist",
    type: "website",
    url: "https://boneandjoints.in/blog",
    images: [
      {
        url: "/images/orthopedic-blog-og.jpg",
        width: 1200,
        height: 630,
        alt: "Orthopedic Health Blogs by Dr. Abhishek Saxena",
      },
    ],
    siteName: "Bone & Joints Clinic",
  },
  alternates: {
    canonical: "https://boneandjoints.in/blog",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Orthopedic Health Blogs by Dr. Abhishek Saxena",
    description:
      "Expert insights on joint care and orthopedic treatments from Ajmer specialist",
    images: ["/images/orthopedic-blog-og.jpg"],
  },

  // Additional structured data for local business
  other: {
    "application-name": "Dr. Abhishek Saxena - Orthopedic Surgeon",
    author: "Dr. Abhishek Saxena",
    generator: "Next.js",
    "theme-color": "#ffffff",
  },
};

export default function BlogPage() {
  const blogs = getBlogs();

  // Generate schema.org markup for better SEO
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: blogs.map((blog, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "BlogPosting",
        headline: blog.title,
        description: blog.excerpt,
        url: `https://boneandjoints.in/blog/${blog.slug}`,
        datePublished: blog.date,
        author: {
          "@type": "Person",
          name: blog.author || "Dr. Abhishek Saxena",
        },
        image: blog.image || "/images/placeholder.jpg",
      },
    })),
  };

  return (
    <>
      <AboutHero
        bannerImage="/images/blog.png"
        title="Dr. Abhishek Saxena"
        subtitle="Advanced Orthopedic Solutions: Restoring Strength, Mobility, and Hope"
        breadcrumbs={[{ label: "Blogs", path: "/blog" }]}
      />

      {/* Add structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* Animated Blog Grid - Client Component */}
      <AnimatedBlogGrid blogs={blogs} />
    </>
  );
}
