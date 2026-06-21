tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-variant": "#e2e2e3",
        "on-background": "#1a1c1d",
        background: "#f9f9fa",
        "error-container": "#ffdad6",
        "on-error": "#ffffff",
        primary: "#005460",
        "on-secondary-container": "#3b6a71",
        "surface-container-lowest": "#ffffff",
        "surface-container-highest": "#e2e2e3",
        "on-surface-variant": "#3f484a",
        "on-error-container": "#93000a",
        "on-secondary-fixed": "#001f24",
        error: "#ba1a1a",
        secondary: "#36656d",
        "surface-container-low": "#f3f3f4",
        "on-primary-fixed-variant": "#004e5a",
        "accent-sand": "#F1EDE8",
        outline: "#6f797b",
        "on-secondary-fixed-variant": "#1c4d55",
        "on-primary-fixed": "#001f25",
        "primary-fixed": "#a9edfc",
        "on-tertiary-container": "#ffdbbd",
        "surface-ice": "#F4FAFB",
        "secondary-container": "#b8e8f1",
        "secondary-fixed-dim": "#9fcfd7",
        "on-tertiary-fixed-variant": "#683c0d",
        tertiary: "#6e4212",
        "on-primary-container": "#a8ecfb",
        "tertiary-fixed": "#ffdcc0",
        "surface-bright": "#f9f9fa",
        "surface-container-high": "#e8e8e9",
        "surface-dim": "#dadadb",
        "surface-tint": "#1a6774",
        surface: "#f9f9fa",
        "on-tertiary": "#ffffff",
        "secondary-fixed": "#bbebf4",
        "tertiary-container": "#8a5928",
        "tertiary-fixed-dim": "#f9ba80",
        "on-primary": "#ffffff",
        "primary-fixed-dim": "#8dd1e0",
        "outline-variant": "#bfc8cb",
        "inverse-primary": "#8dd1e0",
        "surface-container": "#eeeeef",
        "inverse-on-surface": "#f1f1f1",
        "on-surface": "#1a1c1d",
        "success-teal": "#144D57",
        "on-secondary": "#ffffff",
        "inverse-surface": "#2f3132",
        "on-tertiary-fixed": "#2d1600",
        "primary-container": "#226d7a",
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

document.addEventListener("DOMContentLoaded", () => {
  const isSubPage = window.location.pathname.includes("/pages/");
  const pathPrefix = isSubPage ? "../" : "";

  // Inject Top Navigation
  const navbarPlaceholder = document.getElementById("navbar-placeholder");
  if (navbarPlaceholder) {
    navbarPlaceholder.outerHTML = `
    <nav class="bg-surface/80 backdrop-blur-md dark:bg-surface-dim/80 docked full-width top-0 sticky border-b border-outline-variant dark:border-outline shadow-sm dark:shadow-none z-50">
      <div class="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto h-20">
        <!-- Brand -->
        <a class="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed flex items-center gap-2" href="${pathPrefix}index.html">
          <span aria-hidden="true" class="material-symbols-outlined text-[32px]">real_estate_agent</span>
          Lend Craft Mortgage
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

  // Inject Footer
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    footerPlaceholder.outerHTML = `
    <footer class="bg-surface-container-highest dark:bg-surface-container border-t border-outline-variant">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-gutter py-margin-desktop px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <!-- Brand & Contact -->
        <div class="col-span-1 md:col-span-1 flex flex-col gap-6">
          <a class="font-headline-md text-headline-md font-bold text-on-surface flex items-center gap-2" href="${pathPrefix}index.html">
            <span aria-hidden="true" class="material-symbols-outlined text-[28px]">real_estate_agent</span>
            Lend Craft
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
          <a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="${pathPrefix}index.html#services">Home Loans</a>
          <a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="${pathPrefix}index.html#services">First Home Buyers</a>
          <a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="${pathPrefix}index.html#services">Investment Loans</a>
          <a class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="${pathPrefix}index.html#services">Refinancing</a>
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
});
