// Pre-load theme colors synchronously to prevent Flash of Unthemed Content (FOUT)
// LOCKED to Forest Sage (type-3). To re-enable dynamic themes, restore the localStorage version below.
// Original localStorage version:
// (function() {
//   try {
//     const savedColors = localStorage.getItem("selected-theme-colors");
//     if (savedColors) {
//       const colors = JSON.parse(savedColors);
//       for (const [key, value] of Object.entries(colors)) {
//         document.documentElement.style.setProperty(`--color-${key}`, value);
//       }
//     }
//   } catch (e) {
//     console.error("Early theme loading failed:", e);
//   }
// })();
(function() {
  const customNewColors = {
    "primary": "#0D1B2A",          // Deep Navy
    "primary-rgb": "13, 27, 42",
    "luxury-gold": "#C8A14A",      // Luxury Gold
    "secondary": "#2D3748",        // Charcoal
    "secondary-rgb": "45, 55, 72",
    "slate": "#64748B",            // Slate
    "tertiary": "#64748B",
    "background": "#FAFAF8",       // Off White
    "surface": "#FAFAF8",
    "surface-ice": "#F5F5F5",      // Light Grey
    "on-background": "#0D1B2A",
    "on-surface": "#0D1B2A",
    "on-surface-variant": "#2D3748",
    "outline-variant": "#CBD5E1",
    "primary-container": "#0D1B2A",
    "secondary-container": "#F5F5F5",
    "primary-fixed": "#C8A14A",
    "secondary-fixed": "#E2E8F0",
    "accent-green": "#22C55E"      // Accent Green
  };
  for (const [key, value] of Object.entries(customNewColors)) {
    document.documentElement.style.setProperty(`--color-${key}`, value);
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
        "luxury-gold": "var(--color-luxury-gold, #C8A14A)",
        "accent-green": "var(--color-accent-green, #22C55E)",
        slate: "var(--color-slate, #64748B)",
        "deep-navy": "var(--color-primary, #0D1B2A)",
        charcoal: "var(--color-secondary, #2D3748)",
        "off-white": "var(--color-background, #FAFAF8)",
        "light-grey": "var(--color-surface-ice, #F5F5F5)",
        primary: "var(--color-primary, #0D1B2A)",
        "surface-container-low": "var(--color-surface-container-low, #f3f3f4)",
        "on-primary-fixed-variant": "var(--color-on-primary-fixed-variant, #004e5a)",
        "accent-sand": "var(--color-accent-sand, #F1EDE8)",
        outline: "var(--color-outline, #6f797b)",
        "on-secondary-fixed-variant": "var(--color-on-secondary-fixed-variant, #1c4d55)",
        "on-primary-fixed": "var(--color-on-primary-fixed, #001f25)",
        "primary-fixed": "var(--color-primary-fixed, #c3edd5)",
        "on-tertiary-container": "var(--color-on-tertiary-container, #ffdbbd)",
        "surface-ice": "var(--color-surface-ice, #f2f6f3)",
        "secondary-container": "var(--color-secondary-container, #d6ede0)",
        "secondary-fixed-dim": "var(--color-secondary-fixed-dim, #9fcfd7)",
        "on-tertiary-fixed-variant": "var(--color-on-tertiary-fixed-variant, #683c0d)",
        tertiary: "var(--color-tertiary, #7a5223)",
        "on-primary-container": "var(--color-on-primary-container, #a8ecfb)",
        "tertiary-fixed": "var(--color-tertiary-fixed, #ffdcc0)",
        "surface-bright": "var(--color-surface-bright, #f9f9fa)",
        "surface-container-high": "var(--color-surface-container-high, #e8e8e9)",
        "surface-dim": "var(--color-surface-dim, #dadadb)",
        "surface-tint": "var(--color-surface-tint, #1a6774)",
        surface: "var(--color-surface, #f9f9fa)",
        "on-tertiary": "var(--color-on-tertiary, #ffffff)",
        "secondary-fixed": "var(--color-secondary-fixed, #daf2e5)",
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
        "primary-container": "var(--color-primary-container, #102d1f)",
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
  // LOCKED THEME: "type-3" (Forest Sage) is the client-chosen default.
  // To re-enable user theme selection, change "type-3" back to the localStorage lookup.
  // Original: const savedThemeId = localStorage.getItem("selected-theme-id") || "type-1";
  const savedThemeId = "type-3";
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
    // THEME SELECTOR BAR HIDDEN: Client requested hiding the selector.
    // To re-enable, change `false &&` back to the original condition below.
    // Original: if (!isSubPage && activeTheme && themes.length > 0) {
    if (false && !isSubPage && activeTheme && themes.length > 0) {
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
            <div id="theme-dropdown-menu" class="hidden absolute right-0 mt-1.5 w-[800px] max-w-[calc(100vw-32px)] rounded-md bg-[#1a1c1d] border border-white/10 shadow-xl focus:outline-none z-[60] p-2" role="menu">
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-1">
                ${themes.map(t => `
                  <button data-theme-id="${t.id}" class="flex items-center gap-2 w-full text-left px-2 py-1.5 text-[11px] text-white/80 hover:text-white hover:bg-white/10 transition-colors rounded-md" role="menuitem">
                    <span class="w-2.5 h-2.5 rounded-full border border-white/20 shrink-0" style="background-color: ${t.colors.primary}"></span>
                    <span class="truncate">${t.id.toUpperCase().replace("-", " ")}: ${t.name}</span>
                  </button>
                `).join("")}
              </div>
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
    <nav id="main-navbar" class="navbar-hidden bg-surface/90 backdrop-blur-md dark:bg-surface-dim/90 fixed top-0 left-0 right-0 border-b border-outline-variant dark:border-outline shadow-md z-50 transition-all duration-500 transform">
      <div class="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto h-20">
        <!-- Brand -->
        <a class="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed flex items-center gap-2" href="${pathPrefix}index.html">
          <img src="${logoSrc}" alt="Lend Craft Mortgage Logo" class="h-10 w-auto object-contain" />
        </a>
        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-8">
          <a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200 py-2" href="${pathPrefix}pages/news.html">News</a>
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

    // Scroll listener for revealing navbar on scroll down
    const mainNav = document.getElementById("main-navbar");
    if (mainNav) {
      const handleScroll = () => {
        if (window.scrollY > 80) {
          mainNav.classList.remove("navbar-hidden");
          mainNav.classList.add("navbar-visible");
        } else {
          mainNav.classList.remove("navbar-visible");
          mainNav.classList.add("navbar-hidden");
        }
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll(); // Initial check
    }
  }

  // Setup dropdown event listeners if on home page
  // THEME DROPDOWN LISTENERS DISABLED: No selector bar means no listeners needed.
  // To re-enable, change `false &&` back to the original condition below.
  // Original: if (!isSubPage && activeTheme && themes.length > 0) {
  if (false && !isSubPage && activeTheme && themes.length > 0) {
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
      <div class="border-t border-outline-variant/50 pt-8 pb-6 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="font-label-sm text-label-sm text-on-surface-variant text-center md:text-left">© ${new Date().getFullYear()} Lend Craft Mortgage. Australian Credit Licence holder. Regulatory disclosures apply. This website uses cookies to analyze traffic and optimize experience.</p>
        <div class="flex items-center gap-4 text-on-surface-variant text-sm font-medium">
          <span class="text-xs uppercase tracking-wider font-bold text-primary">Follow Us:</span>
          <a href="https://instagram.com" target="_blank" rel="noopener" class="hover:text-primary transition-colors flex items-center gap-1">
            <span class="material-symbols-outlined text-base">photo_camera</span> Instagram
          </a>
          <a href="https://x.com" target="_blank" rel="noopener" class="hover:text-primary transition-colors flex items-center gap-1">
            <span class="font-heading font-bold text-xs">X</span> Twitter
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener" class="hover:text-primary transition-colors flex items-center gap-1">
            <span class="material-symbols-outlined text-base">push_pin</span> Pinterest
          </a>
        </div>
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

  // Scroll Reveal Animation (Intersection Observer)
  const revealElements = document.querySelectorAll(".reveal-on-scroll");
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });
    
    revealElements.forEach(el => revealObserver.observe(el));
  }

  // Custom Video Player Interaction with Tabs Manager
  const videoContainer = document.querySelector(".video-container");
  if (videoContainer) {
    const video = videoContainer.querySelector("video");
    const overlay = videoContainer.querySelector(".video-overlay");
    const playBtn = videoContainer.querySelector(".play-btn-pulse");
    
    const playVideo = () => {
      if (video && overlay) {
        overlay.classList.add("hidden");
        video.play();
        video.setAttribute("controls", "true");
      }
    };
    
    if (playBtn) playBtn.addEventListener("click", playVideo);
    if (overlay) overlay.addEventListener("click", playVideo);
  }

  const videoShowcaseSection = document.querySelector(".video-showcase-section");
  if (videoShowcaseSection) {
    const tabButtons = videoShowcaseSection.querySelectorAll(".video-tab-btn");
    const videoTitle = videoShowcaseSection.querySelector(".video-dynamic-title");
    const videoDesc = videoShowcaseSection.querySelector(".video-dynamic-desc");
    const videoList = videoShowcaseSection.querySelector(".video-dynamic-list");
    const videoElement = videoShowcaseSection.querySelector("video");
    const videoOverlay = videoShowcaseSection.querySelector(".video-overlay");
    const fadeElements = videoShowcaseSection.querySelectorAll(".fade-content");
    
    const tabData = {
      "first-home": {
        title: "Secure Your First Home, Sooner.",
        desc: "Stepping onto the property ladder doesn't have to be intimidating. We help you navigate the entire journey—from understanding deposits, mapping out state grants, to finding the absolute right lender.",
        list: [
          "Explain and unlock the First Home Guarantee (FHBG) scheme",
          "Assess your borrowing capacity with low-deposit options",
          "Complete pre-approval in days so you can make offers confidently"
        ],
        videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-happy-family-in-their-new-home-40243-large.mp4",
        poster: "assets/hero-image.webp"
      },
      "refinance": {
        title: "Lower Your Rates & Consolidate Debt.",
        desc: "Don't let loyalty cost you. We negotiate directly with over 40+ lenders to secure competitive loan rates, lower monthly fees, or extract equity for home renovations and investment projects.",
        list: [
          "Perform a free mortgage health check on your current interest rate",
          "Access hidden cashback deals and special interest-only structures",
          "Consolidate external debts into a single, low-interest repayment"
        ],
        videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-keys-in-hand-of-a-real-estate-agent-holding-a-house-model-40245-large.mp4",
        poster: "assets/hero-image.webp"
      },
      "investors": {
        title: "Accelerate Wealth via Smart Property Investment.",
        desc: "Set up your loans correctly from day one. We design sophisticated multi-property loan portfolios, utilizing tax offset accounts, negative gearing advantages, and equity refinancing strategies.",
        list: [
          "Set up dynamic offset accounts to save thousands on interest",
          "Formulate tax-effective structures (Interest-Only, Split Loans)",
          "Leverage current property equity to purchase your next investment"
        ],
        videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-real-estate-agent-showing-a-house-model-to-a-client-40244-large.mp4",
        poster: "assets/hero-image.webp"
      }
    };
    
    const switchTab = (tabId) => {
      const data = tabData[tabId];
      if (!data) return;
      
      fadeElements.forEach(el => el.classList.add("fade-out"));
      
      setTimeout(() => {
        if (videoTitle) videoTitle.textContent = data.title;
        if (videoDesc) videoDesc.textContent = data.desc;
        
        if (videoList) {
          videoList.innerHTML = data.list.map(item => `
            <li class="flex items-center gap-3 text-on-surface font-label-md">
              <span class="material-symbols-outlined text-success-teal bg-success-teal/10 p-1 rounded-full text-base">check</span>
              ${item}
            </li>
          `).join("");
        }
        
        if (videoElement) {
          videoElement.src = data.videoSrc;
          videoElement.setAttribute("poster", data.poster);
          videoElement.removeAttribute("controls");
          videoElement.load();
        }
        
        if (videoOverlay) {
          videoOverlay.classList.remove("hidden");
        }
        
        fadeElements.forEach(el => el.classList.remove("fade-out"));
      }, 350);
    };
    
    tabButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        tabButtons.forEach(b => {
          b.classList.remove("bg-primary", "text-white", "border-transparent");
          b.classList.add("bg-white", "text-on-surface-variant", "border-outline-variant/60");
        });
        btn.classList.add("bg-primary", "text-white", "border-transparent");
        btn.classList.remove("bg-white", "text-on-surface-variant", "border-outline-variant/60");
        
        switchTab(btn.getAttribute("data-tab"));
      });
    });
  }

  // Testimonial Carousel Slider (Mobile view slider)
  const carousel = document.querySelector(".carousel-container");
  if (carousel) {
    const track = carousel.querySelector(".carousel-track");
    const slides = Array.from(carousel.querySelectorAll(".carousel-slide"));
    const nextBtn = carousel.querySelector(".carousel-next");
    const prevBtn = carousel.querySelector(".carousel-prev");
    const dotsNav = carousel.querySelector(".carousel-dots");
    
    if (track && slides.length > 0) {
      let currentIndex = 0;
      let autoplayTimer = null;
      const slideCount = slides.length;
      
      // Create indicator dots dynamically
      if (dotsNav) {
        dotsNav.innerHTML = "";
        slides.forEach((_, index) => {
          const dot = document.createElement("button");
          dot.className = "w-2.5 h-2.5 rounded-full bg-outline-variant/60 transition-all duration-300";
          if (index === 0) {
            dot.className = "w-6 h-2.5 rounded-full bg-primary transition-all duration-300";
          }
          dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
          dot.addEventListener("click", () => {
            goToSlide(index);
            resetAutoplay();
          });
          dotsNav.appendChild(dot);
        });
      }
      
      const dots = dotsNav ? Array.from(dotsNav.children) : [];
      
      const updateDots = (index) => {
        if (dots.length === 0) return;
        dots.forEach((dot, idx) => {
          if (idx === index) {
            dot.className = "w-6 h-2.5 rounded-full bg-primary transition-all duration-300";
          } else {
            dot.className = "w-2.5 h-2.5 rounded-full bg-outline-variant/60 transition-all duration-300";
          }
        });
      };
      
      const goToSlide = (index) => {
        if (index < 0) index = slideCount - 1;
        if (index >= slideCount) index = 0;
        
        currentIndex = index;
        
        const isMobile = window.innerWidth < 768;
        if (isMobile) {
          track.style.transform = `translateX(-${currentIndex * 100}%)`;
        } else {
          track.style.transform = `none`;
        }
        
        slides.forEach((slide, idx) => {
          if (idx === currentIndex) {
            slide.classList.add("active");
          } else {
            slide.classList.remove("active");
          }
        });
        
        updateDots(currentIndex);
      };
      
      if (nextBtn) {
        nextBtn.addEventListener("click", () => {
          goToSlide(currentIndex + 1);
          resetAutoplay();
        });
      }
      if (prevBtn) {
        prevBtn.addEventListener("click", () => {
          goToSlide(currentIndex - 1);
          resetAutoplay();
        });
      }
      
      window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
          track.style.transform = "none";
          slides.forEach(slide => slide.classList.add("active"));
        } else {
          goToSlide(currentIndex);
        }
      });
      
      const startAutoplay = () => {
        if (window.innerWidth < 768) {
          autoplayTimer = setInterval(() => {
            goToSlide(currentIndex + 1);
          }, 5000);
        }
      };
      
      const stopAutoplay = () => {
        if (autoplayTimer) {
          clearInterval(autoplayTimer);
          autoplayTimer = null;
        }
      };
      
      const resetAutoplay = () => {
        stopAutoplay();
        startAutoplay();
      };
      
      startAutoplay();
      
      carousel.addEventListener("mouseenter", stopAutoplay);
      carousel.addEventListener("mouseleave", startAutoplay);
      carousel.addEventListener("touchstart", stopAutoplay, { passive: true });
      carousel.addEventListener("touchend", startAutoplay, { passive: true });
      
      goToSlide(0);
    }
  }

  // Hero Mouse Parallax Effect
  const heroHeader = document.querySelector("header.relative");
  if (heroHeader && window.innerWidth >= 1024) {
    const slowBg = heroHeader.querySelector(".parallax-bg-slow");
    const fastBg = heroHeader.querySelector(".parallax-bg-fast");
    const heroCard = heroHeader.querySelector(".parallax-layer");
    
    heroHeader.addEventListener("mousemove", (e) => {
      const width = heroHeader.offsetWidth;
      const height = heroHeader.offsetHeight;
      const rect = heroHeader.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - (width / 2);
      const mouseY = e.clientY - rect.top - (height / 2);
      
      const xPct = mouseX / (width / 2);
      const yPct = mouseY / (height / 2);
      
      if (slowBg) {
        slowBg.style.transform = `translate(${xPct * 25}px, ${yPct * 25}px) translate(33.33%, -33.33%)`;
      }
      if (fastBg) {
        fastBg.style.transform = `translate(${-xPct * 35}px, ${-yPct * 35}px) translate(-33.33%, 33.33%)`;
      }
      if (heroCard) {
        heroCard.style.transform = `translate(${xPct * 12}px, ${yPct * 12}px)`;
      }
    });
    
    heroHeader.addEventListener("mouseleave", () => {
      if (slowBg) slowBg.style.transform = `translate(0, 0) translate(33.33%, -33.33%)`;
      if (fastBg) fastBg.style.transform = `translate(0, 0) translate(-33.33%, 33.33%)`;
      if (heroCard) heroCard.style.transform = `translate(0, 0)`;
    });
  }

  // Dynamic Statistics Count-Up Animation
  const statsElements = document.querySelectorAll("[data-count]");
  if (statsElements.length > 0) {
    const countUp = (el) => {
      const target = parseInt(el.getAttribute("data-count"), 10);
      const duration = 2000;
      const stepTime = 30;
      const steps = duration / stepTime;
      let current = 0;
      const increment = target / steps;
      const suffix = el.textContent.replace(/[0-9]/g, "");
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          el.textContent = target + suffix;
          clearInterval(timer);
        } else {
          el.textContent = Math.floor(current) + suffix;
        }
      }, stepTime);
    };
    
    const statsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          countUp(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    statsElements.forEach(el => statsObserver.observe(el));
  }

  // Quick Borrowing Estimator Sliders logic
  const incomeSlider = document.getElementById("quick-income");
  const debtSlider = document.getElementById("quick-debts");
  if (incomeSlider && debtSlider) {
    const incomeValDisplay = document.getElementById("quick-income-val");
    const debtValDisplay = document.getElementById("quick-debts-val");
    const powerResultDisplay = document.getElementById("quick-power-result");
    const repaymentResultDisplay = document.getElementById("quick-repayment-result");
    const estimatorProgress = document.getElementById("estimator-progress");
    
    const calculatePower = () => {
      const income = parseInt(incomeSlider.value, 10);
      const debts = parseInt(debtSlider.value, 10);
      
      incomeValDisplay.textContent = new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD", maximumFractionDigits: 0 }).format(income);
      debtValDisplay.textContent = new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD", maximumFractionDigits: 0 }).format(debts);
      
      const disposable = Math.max(0, income - debts - 2200);
      const borrowingPower = Math.min(1800000, disposable * 12 * 5.8);
      
      powerResultDisplay.textContent = new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD", maximumFractionDigits: 0 }).format(borrowingPower);
      
      const monthlyRepayment = (borrowingPower / 100000) * 600;
      repaymentResultDisplay.textContent = new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD", maximumFractionDigits: 0 }).format(monthlyRepayment) + "/mo";
      
      const percentage = Math.min(100, (borrowingPower / 1800000) * 100);
      if (estimatorProgress) {
        estimatorProgress.style.width = `${percentage}%`;
      }
    };
    
    [incomeSlider, debtSlider].forEach(slider => {
      slider.addEventListener("input", calculatePower);
    });
    
    calculatePower();
  }

  // Application Modal Logic
  window.openApplicationModal = function(defaultType = 'Home Loan') {
    const modal = document.getElementById('application-modal');
    if (!modal) return;
    const loanTypeSelect = document.getElementById('app-loan-type');
    if (loanTypeSelect && defaultType) {
      for (let option of loanTypeSelect.options) {
        if (option.value.toLowerCase().includes(defaultType.toLowerCase()) || option.text.toLowerCase().includes(defaultType.toLowerCase())) {
          option.selected = true;
          break;
        }
      }
    }
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  };

  window.closeApplicationModal = function() {
    const modal = document.getElementById('application-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  };

  const appModal = document.getElementById('application-modal');
  if (appModal) {
    appModal.addEventListener('click', function(e) {
      if (e.target === appModal) {
        window.closeApplicationModal();
      }
    });
  }

  const appForm = document.getElementById('mortgage-application-form');
  if (appForm) {
    appForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const successMessage = document.getElementById('app-success-message');
      if (successMessage) {
        appForm.classList.add('hidden');
        successMessage.classList.remove('hidden');
        setTimeout(() => {
          window.closeApplicationModal();
          appForm.reset();
          appForm.classList.remove('hidden');
          successMessage.classList.add('hidden');
        }, 3000);
      }
    });
  }

  // Ensure theme properties (including logo overlay masks) are fully set on load
  if (activeTheme) {
    applyTheme(activeTheme, pathPrefix);
  }
}
