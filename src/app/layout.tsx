import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sriprasiddhaoffset.com"),
  title: {
    default: "Sri Prasiddha Offset | Complete Commercial Printing Solutions · Hyderabad",
    template: "%s | Sri Prasiddha Offset",
  },
  description:
    "Leading commercial offset and digital printing press in Chintal, Hyderabad. Specializing in industrial registers, safety precaution boards, acrylic & ACP boards, letterheads, duplicate bill books, roll labels, rollup standees & bespoke corporate branding.",
  keywords: [
    "Sri Prasiddha Offset",
    "Offset Printing Hyderabad",
    "Commercial Printing Press Hyderabad",
    "Industrial Registers Hyderabad",
    "Safety Precaution Boards",
    "Sunboard Printing Hyderabad",
    "Acrylic ACP Boards Chintal",
    "Bill Books Printing Hyderabad",
    "Visiting Cards Hyderabad",
    "Rollup Standees Hyderabad",
    "Hari Kumar K Hyderabad",
    "Printing Press Near Vegetable Market Chintal",
    "Pharma Packaging Labels Hyderabad",
    "Best Offset Printers Hyderabad 500054",
  ],
  authors: [{ name: "Sri Prasiddha Offset", url: "https://sriprasiddhaoffset.com" }],
  creator: "Hari Kumar K",
  publisher: "Sri Prasiddha Offset",
  icons: {
    icon: [
      { url: "/assets/images/logo.png" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/assets/images/logo.png" },
      { url: "/apple-icon.png", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Sri Prasiddha Offset | Complete Printing Solutions · Hyderabad",
    description:
      "Your Trusted Commercial Printing Partner in Hyderabad. Industrial Registers, Safety Boards, Bill Books, Stickers & Custom Branding. Trusted by 26+ Leading Corporations.",
    url: "https://sriprasiddhaoffset.com",
    siteName: "Sri Prasiddha Offset",
    images: [
      {
        url: "/assets/images/visiting_card.png",
        width: 1200,
        height: 675,
        alt: "Sri Prasiddha Offset - Visiting Card & Hyderabad Office Details",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Prasiddha Offset | Complete Printing Solutions · Hyderabad",
    description:
      "Commercial & Industrial Printing in Hyderabad. Industrial registers, safety boards, corporate stationery, stickers, brochures & standees.",
    images: ["/assets/images/visiting_card.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#dc2626",
  width: "device-width",
  initialScale: 1,
};

// Schema.org LocalBusiness JSON-LD markup
const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Sri Prasiddha Offset",
  alternateName: "Sri Prasiddha Offset - A Complete Printing Solutions",
  image: "https://sriprasiddhaoffset.com/assets/images/logo.png",
  "@id": "https://sriprasiddhaoffset.com",
  url: "https://sriprasiddhaoffset.com",
  telephone: "+919542717444",
  email: "sriprasiddhaoffset@gmail.com",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "# 6-279/9, Kakatiya Nagar, Near Vegetable Market, Chintal",
    addressLocality: "Hyderabad",
    postalCode: "500054",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 17.4956442,
    longitude: 78.4560622,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "21:00",
    },
  ],
  founder: {
    "@type": "Person",
    name: "Hari Kumar K",
    jobTitle: "Proprietor & Technical Director",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${outfit.variable}`}>
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </head>
      <body className="font-sans antialiased text-slate-900 bg-white min-h-screen flex flex-col selection:bg-red-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
