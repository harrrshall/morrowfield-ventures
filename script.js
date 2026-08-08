const portfolio = {
  sableroute: {
    index: "01",
    company: "SableRoute",
    sector: "Trade systems",
    description: "Compliance and document workflow for mid-sized exporters moving goods across South and Southeast Asia.",
    base: "Chennai",
    year: "2022",
    stage: "Pre-seed",
    partner: "Mira Sen"
  },
  groveframe: {
    index: "02",
    company: "Groveframe",
    sector: "Food processing software",
    description: "Production planning, traceability, and order management for independent agricultural processors.",
    base: "Coimbatore",
    year: "2022",
    stage: "Seed",
    partner: "Kavya Rao"
  },
  rillgrid: {
    index: "03",
    company: "RillGrid",
    sector: "Distributed energy",
    description: "Forecasting, settlement, and uptime software for commercial microgrids and distributed power operators.",
    base: "Hyderabad",
    year: "2023",
    stage: "Pre-seed",
    partner: "Kavya Rao"
  },
  tinbird: {
    index: "04",
    company: "Tinbird Health",
    sector: "Clinic operations",
    description: "A clinical workflow and patient follow-up system for neighbourhood women’s health centres.",
    base: "Pune",
    year: "2023",
    stage: "Seed",
    partner: "Mira Sen"
  },
  loomwise: {
    index: "05",
    company: "Loomwise",
    sector: "Textile quality systems",
    description: "Computer vision quality control that works with existing textile production lines and operator routines.",
    base: "Tiruppur",
    year: "2023",
    stage: "Pre-seed",
    partner: "Mira Sen"
  },
  pollendesk: {
    index: "06",
    company: "PollenDesk",
    sector: "Supplier finance",
    description: "Purchase planning and supplier payments for emerging food and personal care brands.",
    base: "Bengaluru",
    year: "2023",
    stage: "Seed",
    partner: "Daniel Teo"
  },
  quarrypath: {
    index: "07",
    company: "QuarryPath",
    sector: "Low-carbon materials",
    description: "Field workflow and batch intelligence for manufacturers producing lower-carbon building materials.",
    base: "Chennai",
    year: "2024",
    stage: "Pre-seed",
    partner: "Kavya Rao"
  },
  civicloom: {
    index: "08",
    company: "Civicloom",
    sector: "Public service software",
    description: "Multilingual case management for organisations delivering employment, health, and civic programmes.",
    base: "Jakarta",
    year: "2024",
    stage: "Seed",
    partner: "Daniel Teo"
  },
  folklane: {
    index: "09",
    company: "Folklane",
    sector: "Retail operations",
    description: "Inventory and merchandising tools built for regional lifestyle stores and their distributed suppliers.",
    base: "Jaipur",
    year: "2024",
    stage: "Pre-seed",
    partner: "Mira Sen"
  },
  harborgrain: {
    index: "10",
    company: "Harborgrain",
    sector: "Food procurement",
    description: "A procurement network connecting independent food manufacturers with verified regional suppliers.",
    base: "Ho Chi Minh City",
    year: "2024",
    stage: "Seed",
    partner: "Daniel Teo"
  },
  driftwell: {
    index: "11",
    company: "Driftwell Carbon",
    sector: "Cold-chain measurement",
    description: "Emissions and energy measurement for distributed cold chains across food and pharmaceutical logistics.",
    base: "Singapore",
    year: "2025",
    stage: "Pre-seed",
    partner: "Daniel Teo"
  },
  pikofleet: {
    index: "12",
    company: "PikoFleet",
    sector: "Commercial EV software",
    description: "Battery uptime and route planning software for light commercial electric vehicle fleets.",
    base: "Bengaluru",
    year: "2025",
    stage: "Pre-seed",
    partner: "Kavya Rao"
  },
  adamata: {
    index: "13",
    company: "Adamata",
    sector: "Waste robotics",
    description: "AI-assisted sorting systems designed to raise recovery quality and worker productivity across Southeast Asia’s overlooked plastic waste streams.",
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
    portfolioProfileLink.href = `portfolio.html?company=${encodeURIComponent(projectKey)}`;
  }

  if (portfolioCompanyLink) {
    const hasWebsite = Boolean(project.website);
    portfolioCompanyLink.hidden = !hasWebsite;
    if (hasWebsite) {
      portfolioCompanyLink.href = project.website;
      portfolioCompanyLink.textContent = `Visit ${project.company} ↗`;
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
