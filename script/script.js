// Pre-load theme colors from localStorage synchronously to prevent Flash of Unthemed Content (FOUT)
(function() {
  try {
    const savedColors = localStorage.getItem("selected-theme-colors");
    if (savedColors) {
      const colors = JSON.parse(savedColors);
      for (const [key, value] of Object.entries(colors)) {
        document.documentElement.style.setProperty(`--color-${key}`, value);
      }
    }
  } catch (e) {
    console.error("Early theme loading failed:", e);
  }
})();

tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-variant": "var(--color-surface-variant, #e2e2e3)",
        "on-background": "var(--color-on-background, #1a1c1d)",
        background: "var(--color-background, #f9f9fa)",
        "error-container": "var(--color-error-container, #ffdad6)",
        "on-error": "var(--color-on-error, #ffffff)",
        primary: "var(--color-primary, #005460)",
        "on-secondary-container": "var(--color-on-secondary-container, #3b6a71)",
        "surface-container-lowest": "var(--color-surface-container-lowest, #ffffff)",
        "surface-container-highest": "var(--color-surface-container-highest, #e2e2e3)",
        "on-surface-variant": "var(--color-on-surface-variant, #3f484a)",
        "on-error-container": "var(--color-on-error-container, #93000a)",
        "on-secondary-fixed": "var(--color-on-secondary-fixed, #001f24)",
        error: "var(--color-error, #ba1a1a)",
        secondary: "var(--color-secondary, #36656d)",
        "surface-container-low": "var(--color-surface-container-low, #f3f3f4)",
        "on-primary-fixed-variant": "var(--color-on-primary-fixed-variant, #004e5a)",
        "accent-sand": "var(--color-accent-sand, #F1EDE8)",
        outline: "var(--color-outline, #6f797b)",
        "on-secondary-fixed-variant": "var(--color-on-secondary-fixed-variant, #1c4d55)",
        "on-primary-fixed": "var(--color-on-primary-fixed, #001f25)",
        "primary-fixed": "var(--color-primary-fixed, #a9edfc)",
        "on-tertiary-container": "var(--color-on-tertiary-container, #ffdbbd)",
        "surface-ice": "var(--color-surface-ice, #F4FAFB)",
        "secondary-container": "var(--color-secondary-container, #b8e8f1)",
        "secondary-fixed-dim": "var(--color-secondary-fixed-dim, #9fcfd7)",
        "on-tertiary-fixed-variant": "var(--color-on-tertiary-fixed-variant, #683c0d)",
        tertiary: "var(--color-tertiary, #6e4212)",
        "on-primary-container": "var(--color-on-primary-container, #a8ecfb)",
        "tertiary-fixed": "var(--color-tertiary-fixed, #ffdcc0)",
        "surface-bright": "var(--color-surface-bright, #f9f9fa)",
        "surface-container-high": "var(--color-surface-container-high, #e8e8e9)",
        "surface-dim": "var(--color-surface-dim, #dadadb)",
        "surface-tint": "var(--color-surface-tint, #1a6774)",
        surface: "var(--color-surface, #f9f9fa)",
        "on-tertiary": "var(--color-on-tertiary, #ffffff)",
        "secondary-fixed": "var(--color-secondary-fixed, #bbebf4)",
        "tertiary-container": "var(--color-tertiary-container, #8a5928)",
        "tertiary-fixed-dim": "var(--color-tertiary-fixed-dim, #f9ba80)",
        "on-primary": "var(--color-on-primary, #ffffff)",
        "primary-fixed-dim": "var(--color-primary-fixed-dim, #8dd1e0)",
        "outline-variant": "var(--color-outline-variant, #bfc8cb)",
        "inverse-primary": "var(--color-inverse-primary, #8dd1e0)",
        "surface-container": "var(--color-surface-container, #eeeeef)",
        "inverse-on-surface": "var(--color-inverse-on-surface, #f1f1f1)",
        "on-surface": "var(--color-on-surface, #1a1c1d)",
        "success-teal": "var(--color-success-teal, #144D57)",
        "on-secondary": "var(--color-on-secondary, #ffffff)",
        "inverse-surface": "var(--color-inverse-surface, #2f3132)",
        "on-tertiary-fixed": "var(--color-on-tertiary-fixed, #2d1600)",
        "primary-container": "var(--color-primary-container, #226d7a)",
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
      spacing: {
        "container-max": "1280px",
        "margin-mobile": "20px",
        base: "8px",
        "margin-desktop": "64px",
        gutter: "24px",
      },
      fontFamily: {
        "headline-lg-mobile": ["Hanken Grotesk"],
        "display-lg": ["Hanken Grotesk"],
        "headline-md": ["Hanken Grotesk"],
        "body-lg": ["Open Sans"],
        "body-md": ["Open Sans"],
        "label-md": ["Hanken Grotesk"],
        "headline-lg": ["Hanken Grotesk"],
        "label-sm": ["Hanken Grotesk"],
      },
      fontSize: {
        "headline-lg-mobile": [
          "28px",
          { lineHeight: "36px", fontWeight: "600" },
        ],
        "display-lg": [
          "56px",
          {
            lineHeight: "64px",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        "headline-md": [
          "24px",
          { lineHeight: "32px", fontWeight: "600" },
        ],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "label-md": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0.05em",
            fontWeight: "600",
          },
        ],
        "headline-lg": [
          "32px",
          {
            lineHeight: "40px",
            letterSpacing: "-0.01em",
            fontWeight: "600",
          },
        ],
        "label-sm": ["12px", { lineHeight: "16px", fontWeight: "500" }],
      },
    },
  },
};

// Helper function to apply theme colors and properties dynamically
function applyTheme(theme, pathPrefix) {
  if (!theme || !theme.colors) return;
  for (const [key, value] of Object.entries(theme.colors)) {
    document.documentElement.style.setProperty(`--color-${key}`, value);
  }
  const logos = document.querySelectorAll('img[alt="Lend Craft Mortgage Logo"]');
  logos.forEach(img => {
    img.src = pathPrefix + theme.logo;
    // Clear any previous mask and style modifications
    img.style.webkitMaskImage = '';
    img.style.maskImage = '';
    img.style.backgroundColor = '';
    img.style.width = '';
    img.style.height = '';
  });
  
  // Update the SVG flood color attribute for the logo filter
  const floodEl = document.getElementById('logo-flood-element');
  if (floodEl) {
    floodEl.setAttribute('flood-color', theme.colors.primary);
  }
}

// Dynamically load the theme configuration config.js
(function() {
  const isSubPage = window.location.pathname.includes("/pages/");
  const pathPrefix = isSubPage ? "../" : "";
  
  const configScript = document.createElement("script");
  configScript.src = pathPrefix + "script/config.js";
  configScript.async = false;
  
  configScript.onload = function() {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initializeApp);
    } else {
      initializeApp();
    }
  };
  document.head.appendChild(configScript);
})();

function initializeApp() {
  const isSubPage = window.location.pathname.includes("/pages/");
  const pathPrefix = isSubPage ? "../" : "";

  // Retrieve themes from loaded config
  const themes = window.THEME_CONFIG ? window.THEME_CONFIG.themes : [];
  const savedThemeId = localStorage.getItem("selected-theme-id") || "type-1";
  let activeTheme = themes.find(t => t.id === savedThemeId);
  if (!activeTheme && themes.length > 0) {
    activeTheme = themes[0];
  }

  // Set CSS custom variables early so layout colors can adapt
  if (activeTheme) {
    for (const [key, value] of Object.entries(activeTheme.colors)) {
      document.documentElement.style.setProperty(`--color-${key}`, value);
    }
  }

  // Inject Top Navigation & Theme Selector Bar
  const navbarPlaceholder = document.getElementById("navbar-placeholder");
  if (navbarPlaceholder) {
    let topBarHtml = "";
    if (!isSubPage && activeTheme && themes.length > 0) {
      topBarHtml = `
      <div id="theme-selector-bar" class="bg-[#1a1c1d] text-white/90 text-[11px] py-2 border-b border-white/5 relative z-[60]">
        <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-8">
          <div class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" id="theme-indicator-dot"></span>
            <span class="font-label-sm text-neutral-300">Active Look: <span id="current-theme-name" class="font-bold text-white">${activeTheme.name}</span></span>
          </div>
          <div class="relative inline-block text-left" id="theme-dropdown-container">
            <button id="theme-dropdown-btn" class="flex items-center gap-1.5 bg-white/10 hover:bg-white/15 text-white font-semibold py-1 px-3 rounded-md transition-all border border-white/10 text-[11px] outline-none">
              <span id="theme-dropdown-label">${activeTheme.id.toUpperCase().replace("-", " ")}: ${activeTheme.name}</span>
              <span class="material-symbols-outlined text-[14px]">arrow_drop_down</span>
            </button>
            <!-- Dropdown Menu -->
            <div id="theme-dropdown-menu" class="hidden absolute right-0 mt-1.5 w-48 rounded-md bg-[#1a1c1d] border border-white/10 shadow-xl focus:outline-none z-[60] py-1" role="menu">
              ${themes.map(t => `
                <button data-theme-id="${t.id}" class="flex items-center gap-2.5 w-full text-left px-3 py-2 text-[11px] text-white/80 hover:text-white hover:bg-white/10 transition-colors" role="menuitem">
                  <span class="w-2.5 h-2.5 rounded-full border border-white/20 shrink-0" style="background-color: ${t.colors.primary}"></span>
                  <span>${t.id.toUpperCase().replace("-", " ")}: ${t.name}</span>
                </button>
              `).join("")}
            </div>
          </div>
        </div>
      </div>`;
    }

    const logoSrc = pathPrefix + (activeTheme ? activeTheme.logo : "assets/logo.webp");

    const svgFilterHtml = `
    <svg style="position: absolute; width: 0; height: 0; pointer-events: none;" aria-hidden="true">
      <filter id="logo-theme-filter">
        <feFlood id="logo-flood-element" flood-color="${activeTheme ? activeTheme.colors.primary : '#005460'}" result="flood" />
        <feComposite in="flood" in2="SourceGraphic" operator="in" />
      </filter>
    </svg>`;

    navbarPlaceholder.outerHTML = svgFilterHtml + topBarHtml + `
    <nav class="bg-surface/80 backdrop-blur-md dark:bg-surface-dim/80 docked full-width top-0 sticky border-b border-outline-variant dark:border-outline shadow-sm dark:shadow-none z-50">
      <div class="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto h-20">
        <!-- Brand -->
        <a class="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed flex items-center gap-2" href="${pathPrefix}index.html">
          <img src="${logoSrc}" alt="Lend Craft Mortgage Logo" class="h-10 w-auto object-contain" />
        </a>
        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-8">
          <a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200 py-2" href="${pathPrefix}pages/blog.html">Blog</a>
          <a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200 py-2" href="${pathPrefix}pages/calculator.html">Calculator</a>
          <a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200 py-2" href="${pathPrefix}pages/about.html">About Us</a>
        </div>
        <!-- Actions -->
        <div class="hidden md:flex items-center gap-4">
          <a class="flex items-center gap-2 text-primary font-label-md text-label-md hover:bg-surface-container-low transition-all px-3 py-2 rounded-DEFAULT" href="tel:0470347232">
            <span aria-hidden="true" class="material-symbols-outlined">call</span>
            0470347232
          </a>
          <a class="bg-primary text-white font-label-md text-label-md px-6 py-3 rounded-lg scale-98-active transition-transform shadow-sm hover:shadow-md hover:bg-primary-container hover:text-on-primary-container text-center" href="${pathPrefix}pages/contact.html">
            Contact Us
          </a>
        </div>
        <!-- Mobile Menu Toggle -->
        <button class="md:hidden text-primary p-2">
          <span aria-hidden="true" class="material-symbols-outlined text-[28px]">menu</span>
        </button>
      </div>
    </nav>`;
  }

  // Setup dropdown event listeners if on home page
  if (!isSubPage && activeTheme && themes.length > 0) {
    const dropdownBtn = document.getElementById("theme-dropdown-btn");
    const dropdownMenu = document.getElementById("theme-dropdown-menu");
    const dropdownContainer = document.getElementById("theme-dropdown-container");

    if (dropdownBtn && dropdownMenu) {
      dropdownBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdownMenu.classList.toggle("hidden");
      });

      document.addEventListener("click", (e) => {
        if (dropdownContainer && !dropdownContainer.contains(e.target)) {
          dropdownMenu.classList.add("hidden");
        }
      });

      dropdownMenu.querySelectorAll("button[data-theme-id]").forEach(btn => {
        btn.addEventListener("click", () => {
          const themeId = btn.getAttribute("data-theme-id");
          const theme = themes.find(t => t.id === themeId);
          if (theme) {
            applyTheme(theme, pathPrefix);
            localStorage.setItem("selected-theme-id", theme.id);
            localStorage.setItem("selected-theme-colors", JSON.stringify(theme.colors));

            const currentThemeNameEl = document.getElementById("current-theme-name");
            const dropdownLabelEl = document.getElementById("theme-dropdown-label");
            if (currentThemeNameEl) currentThemeNameEl.textContent = theme.name;
            if (dropdownLabelEl) dropdownLabelEl.textContent = `${theme.id.toUpperCase().replace("-", " ")}: ${theme.name}`;

            dropdownMenu.classList.add("hidden");
          }
        });
      });
    }
  }

  // Inject Footer
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    const logoSrc = pathPrefix + (activeTheme ? activeTheme.logo : "assets/logo.webp");
    footerPlaceholder.outerHTML = `
    <footer class="bg-surface-container-highest dark:bg-surface-container border-t border-outline-variant">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-gutter py-margin-desktop px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <!-- Brand & Contact -->
        <div class="col-span-1 md:col-span-1 flex flex-col gap-6">
          <a class="font-headline-md text-headline-md font-bold text-on-surface flex items-center gap-2" href="${pathPrefix}index.html">
            <img src="${logoSrc}" alt="Lend Craft Mortgage Logo" class="h-8 w-auto object-contain" />
          </a>
          <div class="flex flex-col gap-3">
            <a class="flex items-center gap-3 font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="tel:0470347232">
              <span aria-hidden="true" class="material-symbols-outlined text-xl">call</span>
              0470347232
            </a>
            <a class="flex items-center gap-3 font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="mailto:Info@lendcraftmortgage.com.au">
              <span aria-hidden="true" class="material-symbols-outlined text-xl">mail</span>
              Info@lendcraftmortgage.com.au
            </a>
            <div class="flex items-center gap-3 font-body-md text-body-md text-on-surface-variant">
              <span aria-hidden="true" class="material-symbols-outlined text-xl">location_on</span>
              Australia Wide Service
            </div>
          </div>
        </div>
        <!-- Links -->
        <div class="col-span-1 flex flex-col gap-4 mt-8 md:mt-0">
          <h4 class="font-label-md text-label-md text-on-surface uppercase tracking-wider mb-2">Services</h4>
          <a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="${pathPrefix}pages/home_loans.html">Home Loans</a>
          <a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="${pathPrefix}pages/first_home_buyers.html">First Home Buyers</a>
          <a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="${pathPrefix}pages/investment_loans.html">Investment Loans</a>
          <a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="${pathPrefix}pages/refinancing.html">Refinancing</a>
        </div>
        <!-- Legal -->
        <div class="col-span-1 flex flex-col gap-4 mt-8 md:mt-0">
          <h4 class="font-label-md text-label-md text-on-surface uppercase tracking-wider mb-2">Legal</h4>
          <a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="${pathPrefix}pages/privacy_policy.html">Privacy Policy</a>
          <a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="${pathPrefix}pages/terms_of_service.html">Terms of Service</a>
          <a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="${pathPrefix}pages/credit_guide.html">Credit Guide</a>
          <a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="${pathPrefix}pages/asic_compilance.html">ASIC Compliance</a>
        </div>
        <!-- Newsletter/CTA -->
        <div class="col-span-1 mt-8 md:mt-0">
          <h4 class="font-label-md text-label-md text-on-surface uppercase tracking-wider mb-4">Stay Informed</h4>
          <p class="font-body-md text-body-md text-on-surface-variant mb-4 font-normal">Get the latest rate updates and property market insights.</p>
          <div class="flex flex-col gap-2">
            <label class="sr-only" for="footer-email">Email Address</label>
            <input class="bg-white border border-outline-variant rounded-lg px-4 py-2 font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none w-full" id="footer-email" placeholder="Your email address" type="email" />
            <button class="bg-primary text-white font-label-md text-label-md px-4 py-2 rounded-lg hover:bg-primary-container hover:text-on-primary-container transition-colors w-full mt-2">Subscribe</button>
          </div>
        </div>
      </div>
      <div class="border-t border-outline-variant/50 py-6 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mt-8">
        <p class="font-label-sm text-label-sm text-on-surface-variant text-center md:text-left">© ${new Date().getFullYear()} Lend Craft Mortgage. Australian Credit Licence holder. Regulatory disclosures apply. This website uses cookies to analyze traffic and optimize experience.</p>
      </div>
    </footer>`;
  }

  // Blog page category filter
  const blogFilters = document.getElementById("blog-filters");
  if (blogFilters) {
    const filterButtons = blogFilters.querySelectorAll("button");
    const articles = document.querySelectorAll("#blog-grid article");

    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        // Update active class on buttons
        filterButtons.forEach(b => {
          b.classList.remove("bg-primary", "text-white", "border-primary");
          b.classList.add("border-outline-variant", "text-on-surface-variant");
        });
        btn.classList.add("bg-primary", "text-white", "border-primary");
        btn.classList.remove("border-outline-variant", "text-on-surface-variant");

        // Filter articles
        const targetCategory = btn.getAttribute("data-category");
        articles.forEach(article => {
          if (targetCategory === "all" || article.getAttribute("data-category") === targetCategory) {
            article.style.display = "flex";
          } else {
            article.style.display = "none";
          }
        });
      });
    });
  }

  // Calculator page mortgage calculation
  const propertyValEl = document.getElementById("property-value");
  const depositEl = document.getElementById("deposit-amount");
  const interestEl = document.getElementById("interest-rate");
  const termEl = document.getElementById("loan-term");
  const freqEl = document.getElementById("repayment-frequency");

  if (propertyValEl && depositEl && interestEl && termEl && freqEl) {
    const formatCurrency = (val) => {
      return new Intl.NumberFormat("en-AU", {
        style: "currency",
        currency: "AUD",
        maximumFractionDigits: 0
      }).format(val);
    };

    const calculateMortgage = () => {
      const propertyVal = parseFloat(propertyValEl.value) || 0;
      const deposit = parseFloat(depositEl.value) || 0;
      const rateVal = parseFloat(interestEl.value) || 0;
      const termYears = parseFloat(termEl.value) || 30;
      const frequency = freqEl.value;

      // Loan Amount
      const loanAmount = Math.max(0, propertyVal - deposit);
      document.getElementById("out-loan-amount").textContent = formatCurrency(loanAmount);

      // LVR
      const lvr = propertyVal > 0 ? (loanAmount / propertyVal) * 100 : 0;
      document.getElementById("out-lvr").textContent = `${lvr.toFixed(1)}%`;

      // LMI Alert
      const lmiAlert = document.getElementById("lmi-alert");
      const lmiAlertDiff = document.getElementById("lmi-alert-diff");
      if (lvr > 80) {
        lmiAlert.classList.remove("hidden");
        lmiAlert.classList.add("flex", "bg-orange-50", "border-orange-200");
        // Required deposit to get LVR to 80% is propertyVal * 0.20
        const reqDeposit = propertyVal * 0.20;
        const diff = Math.max(0, reqDeposit - deposit);
        lmiAlertDiff.textContent = formatCurrency(diff);
      } else {
        lmiAlert.classList.add("hidden");
        lmiAlert.classList.remove("flex", "bg-orange-50", "border-orange-200");
      }

      // Calculations
      const r = (rateVal / 100) / 12; // Monthly interest rate
      const n = termYears * 12; // Total monthly payments

      let monthlyRepayment = 0;
      if (loanAmount > 0 && r > 0) {
        monthlyRepayment = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      } else if (loanAmount > 0) {
        monthlyRepayment = loanAmount / n;
      }

      // Calculate based on frequency
      let periodRepayment = monthlyRepayment;
      let totalPeriods = n;
      let freqLabel = "Monthly Repayment";

      if (frequency === "fortnightly") {
        periodRepayment = (monthlyRepayment * 12) / 26;
        totalPeriods = termYears * 26;
        freqLabel = "Fortnightly Repayment";
      } else if (frequency === "weekly") {
        periodRepayment = (monthlyRepayment * 12) / 52;
        totalPeriods = termYears * 52;
        freqLabel = "Weekly Repayment";
      }

      document.getElementById("out-frequency-label").textContent = freqLabel;
      document.getElementById("out-repayment").textContent = formatCurrency(periodRepayment);

      // Total payments & Interest
      const totalPayments = periodRepayment * totalPeriods;
      const totalInterest = Math.max(0, totalPayments - loanAmount);

      document.getElementById("out-total-interest").textContent = formatCurrency(totalInterest);
      document.getElementById("out-total-payments").textContent = formatCurrency(totalPayments);

      // Chart splitting
      const totalValue = loanAmount + totalInterest;
      const principalPct = totalValue > 0 ? (loanAmount / totalValue) * 100 : 100;
      const interestPct = totalValue > 0 ? (totalInterest / totalValue) * 100 : 0;

      const principalBar = document.getElementById("chart-principal-bar");
      const interestBar = document.getElementById("chart-interest-bar");

      if (principalBar && interestBar) {
        principalBar.style.width = `${principalPct}%`;
        principalBar.textContent = `Principal (${principalPct.toFixed(0)}%)`;
        interestBar.style.width = `${interestPct}%`;
        interestBar.textContent = `Interest (${interestPct.toFixed(0)}%)`;
      }
    };

    // Attach listeners
    [propertyValEl, depositEl, interestEl, termEl, freqEl].forEach(el => {
      el.addEventListener("input", calculateMortgage);
      el.addEventListener("change", calculateMortgage);
    });

    // Run initial calculation
    calculateMortgage();
  }

  // Ensure theme properties (including logo overlay masks) are fully set on load
  if (activeTheme) {
    applyTheme(activeTheme, pathPrefix);
  }
}
