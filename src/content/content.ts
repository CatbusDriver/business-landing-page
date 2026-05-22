/**
 * Inhalte für die Landingpage von Uwe Richter – RWR Immobilienmakler GmbH
 */

export const siteConfig = {
  name: "Uwe Richter Immobilien",
  title: "Uwe Richter – Ihr Immobilienmakler in Freiberg und Umgebung",
  description:
    "Seit 1993 Ihr kompetenter Ansprechpartner für Immobilien in Freiberg und Mittelsachsen. Verkauf, Vermietung, Bewertung und Verwaltung aus einer Hand.",
  image: "/og-image.png",
  quickLinks: [
    { label: "Leistungen", href: "/#features" },
    { label: "So funktioniert's", href: "/#how-it-works" },
    { label: "Aktuelle Angebote", href: "https://www.immowelt.de/profil/8af7c7913ad1405489cff66d689581e5" },
    { label: "FAQ", href: "/#faq" }
  ],
  legalLinks: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/privacy" },
    { label: "Kontakt", href: "mailto:ur@rwr-makler.de" }
  ]
};

export const header = {
  name: siteConfig.name,
  navLinks: siteConfig.quickLinks,
  cta: {
    label: "Kontakt aufnehmen",
    href: "/#cta"
  }
};

export const hero = {
  headline:
    "Ihr Immobilienmakler in Freiberg und Umgebung \u2013 seit 1993.",
  subheadline:
    "Ob Verkauf, Vermietung oder Bewertung \u2013 Uwe Richter und das Team der RWR Immobilienmakler GmbH begleiten Sie pers\u00f6nlich und kompetent bei allen Immobilienangelegenheiten in Freiberg und Mittelsachsen.",
  primaryCta: {
    label: "Jetzt Kontakt aufnehmen",
    href: "/#cta"
  },
  secondaryCta: {
    label: "Unsere Leistungen",
    href: "/#features"
  },
  image: {
    src: "/images/hero-illustration.png",
    alt: "Immobilien in Freiberg und Mittelsachsen"
  }
};

export const problem = {
  headline: "Immobilie verkaufen oder vermieten – aber wie?",
  description:
    "Der Immobilienmarkt ist komplex. Ohne Marktkenntnis und Erfahrung riskieren Sie, Ihre Immobilie unter Wert zu verkaufen oder den falschen Mieter zu finden. Rechtliche Fallstricke, aufwendige Besichtigungen und endlose Verhandlungen kosten Zeit und Nerven."
};

export const solution = {
  headline: "Mit über 30 Jahren Erfahrung an Ihrer Seite.",
  description:
    "Als Ihr regionaler Immobilienexperte übernehme ich den gesamten Prozess – von der professionellen Bewertung über die Vermarktung bis zum erfolgreichen Abschluss. Profitieren Sie von meiner langjährigen Marktkenntnis in Freiberg und Mittelsachsen, persönlicher Betreuung und einem starken Netzwerk."
};

export const features = {
  heading: "Unsere Leistungen für Sie",
  description:
    "Kompetente Betreuung rund um Ihre Immobilie – alles aus einer Hand.",
  items: [
    {
      icon: "🏠",
      headline: "Immobilienverkauf",
      description:
        "Professionelle Vermarktung Ihrer Immobilie zum bestmöglichen Preis. Von der Wertermittlung bis zur Schlüsselübergabe."
    },
    {
      icon: "🔑",
      headline: "Vermietung",
      description:
        "Wir finden den passenden Mieter für Ihr Objekt. Bonitätsprüfung, Besichtigungen und Mietvertragsgestaltung inklusive."
    },
    {
      icon: "📋",
      headline: "Energieausweis",
      description:
        "Erstellung von Energieausweisen für Ihre Immobilie – gesetzlich vorgeschrieben bei Verkauf und Vermietung."
    },
    {
      icon: "🏢",
      headline: "Gewerbeimmobilien",
      description:
        "Spezialisiert auf Gewerbeimmobilien in der Region. Büros, Ladenflächen, Hallen und Grundstücke."
    },
    {
      icon: "📊",
      headline: "Immobilienbewertung",
      description:
        "Fundierte Marktwertermittlung auf Basis aktueller Marktdaten und langjähriger regionaler Expertise."
    },
    {
      icon: "🏗️",
      headline: "Projektentwicklung",
      description:
        "Begleitung von Immobilienprojekten von der Planung bis zur Fertigstellung – mit Erfahrung und Weitblick."
    }
  ]
};

export const howItWorks = {
  heading: "In 3 Schritten zum Erfolg",
  description:
    "So einfach funktioniert die Zusammenarbeit mit Uwe Richter Immobilien.",
  items: [
    {
      number: "1",
      headline: "Erstgespräch",
      description:
        "Kontaktieren Sie uns telefonisch oder per E-Mail. In einem unverbindlichen Erstgespräch besprechen wir Ihre Wünsche und Ziele."
    },
    {
      number: "2",
      headline: "Bewertung & Strategie",
      description:
        "Wir bewerten Ihre Immobilie professionell und entwickeln gemeinsam die optimale Vermarktungsstrategie."
    },
    {
      number: "3",
      headline: "Vermarktung & Abschluss",
      description:
        "Wir übernehmen die gesamte Vermarktung, führen Besichtigungen durch und begleiten Sie bis zum erfolgreichen Vertragsabschluss."
    }
  ]
};

export const testimonials = {
  heading: "Das sagen unsere Kunden",
  description:
    "Bewertet mit 4,8 von 5 Sternen auf Immowelt – überzeugen Sie sich selbst.",
  items: [
    {
      quote:
        "Herr Richter hat den Verkauf unseres Mehrfamilienhauses in Freiberg hervorragend abgewickelt. Kompetent, zuverlässig und immer erreichbar.",
      author: "Familie Weber",
      company: "Verkauf Mehrfamilienhaus, Freiberg",
      avatar: "FW",
      image: "/images/avatar-1.jpg"
    },
    {
      quote:
        "Die Bewertung war sehr fundiert und der Verkaufspreis wurde sogar übertroffen. Wir können Herrn Richter nur weiterempfehlen!",
      author: "Thomas Müller",
      company: "Verkauf Einfamilienhaus, Mittelsachsen",
      avatar: "TM",
      image: "/images/avatar-2.jpg"
    },
    {
      quote:
        "Schnelle und professionelle Vermittlung unserer Gewerbeimmobilie. Die langjährige Erfahrung in der Region macht sich bezahlt.",
      author: "Petra Schmidt",
      company: "Gewerbeimmobilie, Freiberg",
      avatar: "PS",
      image: "/images/avatar-3.jpg"
    }
  ]
};

export const cta = {
  headline: "Haben Sie eine Immobilie zu verkaufen oder zu vermieten?",
  description:
    "Kontaktieren Sie mich für ein unverbindliches Erstgespräch. Ich berate Sie persönlich und finde die beste Lösung für Ihre Immobilie.",
  phone: "0177 6421056",
  email: "ur@rwr-makler.de",
  immoweltUrl: "https://www.immowelt.de/profil/8af7c7913ad1405489cff66d689581e5",
  address: "Poststr. 11, 09599 Freiberg"
};

export const faq = {
  heading: "Häufig gestellte Fragen",
  description: "Antworten auf die wichtigsten Fragen rund um unsere Leistungen.",
  items: [
    {
      question: "Was kostet die Beauftragung eines Maklers?",
      answer:
        "Die Maklerprovision wird in der Regel zwischen Käufer und Verkäufer geteilt. Die genauen Konditionen besprechen wir gerne in einem persönlichen Gespräch. Die Erstberatung ist selbstverständlich kostenlos und unverbindlich."
    },
    {
      question: "Wie wird der Wert meiner Immobilie ermittelt?",
      answer:
        "Wir erstellen eine fundierte Marktwertermittlung auf Basis aktueller Vergleichswerte, der Lage, des Zustands und der Ausstattung Ihrer Immobilie. Unsere über 30-jährige Erfahrung in der Region Freiberg sorgt für eine realistische Einschätzung."
    },
    {
      question: "Wie lange dauert es, eine Immobilie zu verkaufen?",
      answer:
        "Die Verkaufsdauer hängt von verschiedenen Faktoren ab – Lage, Zustand, Preis und Nachfrage. In der Regel können wir Immobilien in Freiberg und Umgebung innerhalb weniger Wochen bis Monate erfolgreich vermitteln."
    },
    {
      question: "Welche Unterlagen benötige ich für den Verkauf?",
      answer:
        "Für den Verkauf benötigen Sie unter anderem Grundbuchauszug, Energieausweis, Grundrisse und Wohnflächenberechnung. Wir unterstützen Sie bei der Beschaffung aller notwendigen Dokumente."
    },
    {
      question: "In welcher Region sind Sie tätig?",
      answer:
        "Unser Schwerpunkt liegt in Freiberg und dem Landkreis Mittelsachsen. Wir sind hier seit 1993 fest verwurzelt und kennen den lokalen Markt wie unsere Westentasche."
    }
  ]
};

export const footer = {
  sections: {
    quickLinks: {
      title: "Navigation",
      links: siteConfig.quickLinks
    },
    legal: {
      title: "Rechtliches",
      links: siteConfig.legalLinks
    }
  },
  copyright: `© ${new Date().getFullYear()} RWR Immobilienmakler GmbH. Alle Rechte vorbehalten.`,
  social: [
    { name: "Immowelt", icon: "immowelt", url: "https://www.immowelt.de/profil/8af7c7913ad1405489cff66d689581e5" }
  ]
};
