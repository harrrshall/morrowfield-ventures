const portfolio = {
  bijak: {
    index: "01",
    company: "Bijak",
    sector: "Agricultural trade",
    description: "Bijak builds trading tools for India’s agricultural supply chain, covering grains and fresh produce. Buyers and sellers use the platform to find counterparties, agree terms, and settle trades. Public materials describe separate lines for domestic commodity trade, mandi linkages, and export.",
    base: "Gurugram",
    year: "2022",
    stage: "Seed",
    partner: "Mira Sen",
    website: "https://bijak.in/"
  },
  detect: {
    index: "02",
    company: "Detect Technologies",
    sector: "Industrial inspection",
    description: "Detect Technologies builds workplace intelligence software for factories and energy sites. Its T-Pulse product uses cameras and computer vision to watch safety, inspections, and day-to-day operations. The work is meant to sit on existing industrial floors rather than replace the plant.",
    base: "Chennai",
    year: "2022",
    stage: "Seed",
    partner: "Kavya Rao",
    website: "https://detecttechnologies.com/"
  },
  batterysmart: {
    index: "03",
    company: "Battery Smart",
    sector: "Battery swapping",
    description: "Battery Smart operates a swapping network for electric three-wheelers in Indian cities. Drivers exchange a depleted pack for a charged one instead of waiting on a plug. The company is registered in New Delhi and serves commercial EV operators who need predictable uptime.",
    base: "New Delhi",
    year: "2023",
    stage: "Pre-seed",
    partner: "Daniel Teo",
    website: "https://batterysmart.in/"
  },
  niramai: {
    index: "04",
    company: "Niramai",
    sector: "Breast screening",
    description: "Niramai develops Thermalytix, a contactless breast health screening test that uses thermal imaging and software. The device is designed for clinics and outreach settings where conventional mammography is hard to place. The scan does not use ionizing radiation and can be run with privacy for the patient.",
    base: "Bengaluru",
    year: "2023",
    stage: "Seed",
    partner: "Mira Sen",
    website: "https://niramai.com/"
  },
  stellapps: {
    index: "05",
    company: "Stellapps",
    sector: "Dairy systems",
    description: "Stellapps digitises dairy collection with connected hardware and software. Products cover cattle monitoring, milk procurement at village centres, chilling, and cold-chain tracking. The tools are built for cooperatives and processors that still run much of the chain on paper.",
    base: "Bengaluru",
    year: "2023",
    stage: "Pre-seed",
    partner: "Kavya Rao",
    website: "https://www.stellapps.com/"
  },
  amartha: {
    index: "06",
    company: "Amartha",
    sector: "Microfinance",
    description: "Amartha is an Indonesian digital finance company that funds women-led micro businesses. Field officers and a credit platform underwrite group loans in villages and small towns. The firm also offers partnership lending for banks and other institutions that want to reach the same borrowers.",
    base: "Jakarta",
    year: "2023",
    stage: "Seed",
    partner: "Daniel Teo",
    website: "https://amartha.com/"
  },
  recykal: {
    index: "07",
    company: "Recykal",
    sector: "Circular materials",
    description: "Recykal runs a digital platform for waste aggregation and circular materials in India. It connects waste generators, aggregators, and recyclers so recovered material can be tracked and sold with clearer provenance. The work sits in plastics, packaging, and related recovery streams.",
    base: "Hyderabad",
    year: "2024",
    stage: "Pre-seed",
    partner: "Kavya Rao",
    website: "https://www.recykal.com/"
  },
  koltiva: {
    index: "08",
    company: "Koltiva",
    sector: "Agri traceability",
    description: "Koltiva builds traceability software for agricultural supply chains across Southeast Asia and beyond. KoltiTrace records farm origin, handling, and compliance data from smallholders through processors. Buyers use it to show where a crop came from and how it was handled.",
    base: "Jakarta",
    year: "2024",
    stage: "Seed",
    partner: "Daniel Teo",
    website: "https://www.koltiva.com/"
  },
  superprocure: {
    index: "09",
    company: "SuperProcure",
    sector: "Freight software",
    description: "SuperProcure is freight software for Indian manufacturers and traders. It covers vehicle sourcing, indent allocation, in-plant movement, live tracking, proof of delivery, and freight accounting. The product is used where truck placement and documentation still take too much coordination.",
    base: "Kolkata",
    year: "2024",
    stage: "Pre-seed",
    partner: "Mira Sen",
    website: "https://www.superprocure.com/"
  },
  intellolabs: {
    index: "10",
    company: "Intello Labs",
    sector: "Produce grading",
    description: "Intello Labs uses computer vision to grade fruits and vegetables as they move through packing lines. Cameras score size, colour, and defects so lots can be sorted with less guesswork than a purely manual inspection. Graded lots can then be offered through the company’s digital mandi tools.",
    base: "Gurugram",
    year: "2024",
    stage: "Seed",
    partner: "Kavya Rao",
    website: "https://www.intellolabs.com/"
  },
  rekosistem: {
    index: "11",
    company: "Rekosistem",
    sector: "Waste services",
    description: "Rekosistem provides waste collection and recycling services in Indonesian cities. Households and businesses book pickups and follow what happens to the material through a digital account. The company sits between daily collection and downstream recycling partners.",
    base: "Jakarta",
    year: "2025",
    stage: "Pre-seed",
    partner: "Daniel Teo",
    website: "https://www.rekosistem.com/"
  },
  khatabook: {
    index: "12",
    company: "Khatabook",
    sector: "Digital ledgers",
    description: "Khatabook is a digital bahi khata for small Indian shops. Owners record credit given to customers, send collection reminders, and keep sales and inventory on phone or desktop. The product is built for merchants who still run much of the day in a paper ledger.",
    base: "Bengaluru",
    year: "2025",
    stage: "Pre-seed",
    partner: "Mira Sen",
    website: "https://khatabook.com/"
  },
  adamata: {
    index: "13",
    company: "Adamata",
    sector: "Waste robotics",
    description: "Adamata develops AI-assisted sorting systems for plastic waste recovery in Southeast Asia. The machines are designed to raise recovery quality and worker productivity on material streams that larger plants often skip. The company is based in Jakarta and publishes its product work at adamata.co.",
    base: "Jakarta",
    year: "2026",
    stage: "Pre-seed",
    partner: "Daniel Teo",
    website: "https://www.adamata.co/"
  }
};

const notes = {
  customers: {
    label: "Field note 06",
    date: "14 June 2025",
    title: "Why the first fifty customers still matter",
    copy: [
      "Early customer work is often treated as a bridge to scale. We see it as the place where the company’s operating language is formed. The first fifty customers reveal how a problem is described, who owns it, which workarounds already exist, and what a credible purchase decision requires.",
      "Founders who stay close to these details build stronger sales materials and clearer products. The goal is disciplined proximity. Each conversation should sharpen the next one."
    ]
  },
  industrial: {
    label: "Thesis note 04",
    date: "2 April 2025",
    title: "Software for the industrial middle",
    copy: [
      "Thousands of Asian manufacturers sit between manual production and fully automated plants. Their machines are productive, their teams are experienced, and their information still moves through paper, calls, and spreadsheets.",
      "This middle deserves software that fits existing equipment and working habits. The strongest products enter through one costly workflow, show a measurable result, and expand with the operator’s trust."
    ]
  },
  payments: {
    label: "Market note 03",
    date: "19 January 2025",
    title: "Working across fragmented payment rails",
    copy: [
      "Regional businesses manage currencies, banking systems, settlement windows, and compliance rules that change at every border. A useful financial product starts with this operational burden in full view.",
      "We look for teams that understand money movement as a sequence of real decisions. Reconciliation, documentation, timing, and recourse deserve the same attention as the payment itself."
    ]
  }
};

const body = document.body;
const menuButton = document.querySelector(".menu-button");
const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
const menuLabel = menuButton?.querySelector("span");

function closeMenu() {
  body.classList.remove("menu-open");
  if (menuButton) {
    menuButton.setAttribute("aria-expanded", "false");
  }
  if (menuLabel) {
    menuLabel.textContent = "Menu";
  }
}

if (menuButton && menuLabel) {
  menuButton.addEventListener("click", () => {
    const opening = !body.classList.contains("menu-open");
    body.classList.toggle("menu-open", opening);
    menuButton.setAttribute("aria-expanded", String(opening));
    menuLabel.textContent = opening ? "Close" : "Menu";
  });
}

navLinks.forEach((link) => link.addEventListener("click", closeMenu));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

const revealItems = document.querySelectorAll(".reveal");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (reducedMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("revealed"));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -35px 0px" });

  revealItems.forEach((item) => revealObserver.observe(item));
}

const sectionLinks = new Map();
navLinks.forEach((link) => {
  const id = link.getAttribute("href");
  if (id && id.startsWith("#")) {
    sectionLinks.set(id.slice(1), link);
  }
});

const trackedSections = Array.from(sectionLinks.keys())
  .map((id) => document.getElementById(id))
  .filter(Boolean);

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove("active"));
        const activeLink = sectionLinks.get(entry.target.id);
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  }, { rootMargin: "-42% 0px -52% 0px", threshold: 0 });

  trackedSections.forEach((section) => sectionObserver.observe(section));
}

const filterButtons = document.querySelectorAll(".filter-button");
const portfolioRows = document.querySelectorAll(".portfolio-row");
const portfolioCount = document.querySelector(".portfolio-count span");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;
    let visible = 0;

    filterButtons.forEach((candidate) => {
      const active = candidate === button;
      candidate.classList.toggle("active", active);
      candidate.setAttribute("aria-pressed", String(active));
    });

    portfolioRows.forEach((row) => {
      const matches = selected === "all" || row.dataset.sector === selected;
      row.hidden = !matches;
      if (matches) {
        visible += 1;
      }
    });

    if (portfolioCount) {
      portfolioCount.textContent = String(visible);
    }
  });
});

const portfolioDialog = document.getElementById("portfolio-dialog");
const portfolioFields = {
  index: document.getElementById("dialog-index"),
  sector: document.getElementById("dialog-sector"),
  company: document.getElementById("dialog-company"),
  description: document.getElementById("dialog-description"),
  base: document.getElementById("dialog-base"),
  year: document.getElementById("dialog-year"),
  stage: document.getElementById("dialog-stage"),
  partner: document.getElementById("dialog-partner")
};
const portfolioProfileLink = document.getElementById("dialog-profile-link");
const portfolioCompanyLink = document.getElementById("dialog-company-link");
const isPortfolioPage = body.classList.contains("portfolio-page");

function setPortfolioUrl(projectKey) {
  if (!isPortfolioPage) {
    return;
  }

  const url = new URL(window.location.href);
  if (projectKey) {
    url.searchParams.set("company", projectKey);
  } else {
    url.searchParams.delete("company");
  }
  window.history.replaceState({}, "", url);
}

function openPortfolio(projectKey, updateUrl = true) {
  const project = portfolio[projectKey];
  if (!project || !portfolioDialog) {
    return;
  }

  Object.keys(portfolioFields).forEach((key) => {
    const field = portfolioFields[key];
    if (field) {
      field.textContent = project[key];
    }
  });

  if (portfolioProfileLink) {
    if (isPortfolioPage) {
      portfolioProfileLink.hidden = true;
      portfolioProfileLink.removeAttribute("href");
    } else {
      portfolioProfileLink.hidden = false;
      portfolioProfileLink.href = `portfolio.html?company=${encodeURIComponent(projectKey)}`;
      portfolioProfileLink.textContent = `View ${project.company} profile`;
    }
  }

  if (portfolioCompanyLink) {
    if (project.website) {
      portfolioCompanyLink.hidden = false;
      portfolioCompanyLink.href = project.website;
      portfolioCompanyLink.textContent = `Visit ${project.company} ↗`;
      portfolioCompanyLink.target = "_blank";
      portfolioCompanyLink.rel = "noopener";
    } else {
      portfolioCompanyLink.hidden = true;
      portfolioCompanyLink.removeAttribute("href");
    }
  }

  if (updateUrl) {
    setPortfolioUrl(projectKey);
  }

  if (!portfolioDialog.open) {
    portfolioDialog.showModal();
  }
}

portfolioRows.forEach((row) => {
  row.addEventListener("click", () => {
    openPortfolio(row.dataset.project);
  });
});

if (portfolioDialog) {
  const requestedProject = new URLSearchParams(window.location.search).get("company");
  if (requestedProject) {
    openPortfolio(requestedProject, false);
  }

  portfolioDialog.addEventListener("close", () => setPortfolioUrl());
}

const noteDialog = document.getElementById("note-dialog");
const noteFields = {
  label: document.getElementById("note-dialog-label"),
  date: document.getElementById("note-dialog-date"),
  title: document.getElementById("note-dialog-title"),
  copy: document.getElementById("note-dialog-copy")
};

if (noteDialog) {
  document.querySelectorAll(".note-row").forEach((row) => {
    row.addEventListener("click", () => {
      const note = notes[row.dataset.note];
      if (!note) {
        return;
      }

      noteFields.label.textContent = note.label;
      noteFields.date.textContent = note.date;
      noteFields.title.textContent = note.title;
      noteFields.copy.replaceChildren();
      note.copy.forEach((paragraph) => {
        const element = document.createElement("p");
        element.textContent = paragraph;
        noteFields.copy.appendChild(element);
      });
      noteDialog.showModal();
    });
  });
}

document.querySelectorAll(".detail-dialog").forEach((dialog) => {
  dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
});

const briefForm = document.getElementById("brief-form");
const formStatus = document.getElementById("form-status");

if (briefForm && formStatus) {
  briefForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(briefForm);
    const recipient = briefForm.dataset.recipient || "";
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const company = String(data.get("company") || "").trim();
    const base = String(data.get("base") || "").trim();
    const stage = String(data.get("stage") || "").trim();
    const note = String(data.get("note") || "").trim();
    const subject = `Founder brief / ${company}`;
    const message = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Primary base: ${base}`,
      `Stage: ${stage}`,
      "",
      "What we are building:",
      note
    ].join("\n");

    formStatus.textContent = "Your email draft is ready to review. This page did not send, upload, or store your details.";
    briefForm.reset();
    formStatus.focus();
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  });
}

const currentYear = document.getElementById("current-year");
if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}
