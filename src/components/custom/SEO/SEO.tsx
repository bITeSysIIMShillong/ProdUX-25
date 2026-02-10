import { Helmet } from "react-helmet-async";

export default function SEO() {
  return (
    <Helmet>
      <title>ProdUX'25 | bITeSys | IIM Shillong</title>

      {/* Keywords */}
      <meta
        name="description"
        content="Join ProdUX'25, the premier techno-management event by IIM Shillong's bITeSys club, featuring top industry leaders, workshops, and competitions."
      />
      <meta
        name="keywords"
        content="ProdUX, IIM Shillong, bITeSys, Tech Management, UX, Product Management, AI, Generative AI"
      />

      {/* Website */}
      <meta property="og:title" content="ProdUX'25 - Techno-Management Event" />
      <meta
        property="og:description"
        content="The flagship event by bITeSys at IIM Shillong, featuring innovation, product design, and UX strategies."
      />
      <meta property="og:url" content="https://produx.bitesys.org" />
      <meta property="og:type" content="website" />
      <meta
        property="og:site_name"
        content="ProdUX'25 - bITeSys, IIM Shillong"
      />

      {/* Image */}
      <meta
        property="og:image"
        content="https://produx.bitesys.org/assets/produx25-banner.jpg"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="ProdUX'25 - IIM Shillong's Flagship Techno-Management Event"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="ProdUX'25 - IIM Shillong's Flagship Techno-Management Event"
      />
      <meta
        name="twitter:description"
        content="Join the premier techno-management event at IIM Shillong! Featuring product management, UX innovation, and AI-driven insights."
      />
      <meta
        name="twitter:image"
        content="https://produx.bitesys.org/assets/produx25-banner.jpg"
      />
      <meta name="twitter:url" content="https://produx.bitesys.org" />
    </Helmet>
  );
}
