import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import BlogHeader from "@/components/BlogHeader";

export const metadata: Metadata = {
  title: "The FIRE Dashboard That Models Your Actual Life (Not Just 4% of Your Expenses)",
  description:
    "A deep dive into Finsava's FIRE Dashboard: 2,000-simulation Monte Carlo, guardrails withdrawals, 40-year retirement survival, 4 historical stress tests, and a kids impact scenario. Built for people who actually want to retire early.",
  keywords: [
    "FIRE dashboard",
    "Monte Carlo FIRE calculator",
    "guardrails withdrawal strategy",
    "retirement survival simulation",
    "FIRE stress test",
    "Coast FIRE",
    "Lean FIRE",
    "Barista FIRE",
    "kids impact FIRE",
    "financial independence",
  ],
};

export default function FireDashboardDeepDivePost() {
  return (
    <div className="min-h-screen">
      <SiteNav current="Blog" />

      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <Link
          href="/blog"
          className="text-sm text-[var(--muted)] hover:text-white transition-colors"
        >
          &larr; Back to Blog
        </Link>

        <article className="mt-8 prose prose-invert max-w-none">
          <BlogHeader category="FIRE Planning" />
          <h1 className="text-4xl font-bold leading-tight mt-6">
            The FIRE Dashboard That Models Your Actual Life (Not Just 4% of Your Expenses)
          </h1>

          <div className="mt-4 flex items-center gap-3 text-sm text-[var(--muted)]">
            <time>April 9, 2026</time>
            <span>&middot;</span>
            <span>10 min read</span>
          </div>

          <p className="mt-8 text-lg leading-relaxed text-[var(--muted)]">
            Most FIRE calculators are a lie by omission. They ask for your expenses,
            divide by 0.04, and hand you a number. &ldquo;You need $1.5 million. Good
            luck.&rdquo; That&apos;s not a plan. That&apos;s a trivia answer.
          </p>

          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            The problem is that retirement isn&apos;t a single number — it&apos;s a
            distribution of possible futures. Some of those futures are the 2008 crash.
            Some are the 1970s stagflation decade. Some involve having kids. Some
            involve a part-time barista job to cover health insurance. The 4% rule
            says nothing about any of them.
          </p>

          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            So we built a FIRE Dashboard that actually models the messy reality.
            Here&apos;s what it does and why each piece matters.
          </p>

          <h2 className="mt-12 text-2xl font-bold">1. Monte Carlo instead of a single growth rate</h2>

          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            Traditional FIRE calculators assume your portfolio grows at a constant 7%
            every year. Real markets return 28% one year and -37% the next. The
            difference isn&apos;t academic — it&apos;s the difference between retiring
            at 42 and retiring at 57.
          </p>

          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            Finsava runs 2,000 simulated futures, each with randomized annual returns
            drawn from a log-normal distribution (geometric Brownian motion, the same
            math finance professionals use for options pricing). We track the 10th,
            25th, 50th, 75th, and 90th percentiles separately so you see the full fan
            of possible outcomes:
          </p>

          <ul className="mt-4 space-y-2 text-[var(--muted)]">
            <li><strong className="text-[var(--foreground)]">p50 (median):</strong> Half the simulations do better, half do worse. This is your &ldquo;most likely&rdquo; timeline.</li>
            <li><strong className="text-[var(--foreground)]">p10 (pessimistic):</strong> Only 10% of futures are worse than this. Your &ldquo;bad luck&rdquo; scenario.</li>
            <li><strong className="text-[var(--foreground)]">p90 (optimistic):</strong> Only 10% of futures are better than this. Your &ldquo;good luck&rdquo; scenario.</li>
            <li><strong className="text-[var(--foreground)]">Success probability:</strong> What fraction of all 2,000 simulations reach the FIRE number within 50 years.</li>
          </ul>

          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            The standard error on a success probability estimate from 2,000 simulations
            is about ±1 percentage point. That&apos;s tight enough to be useful and
            loose enough to be honest — we show it in the chart footer.
          </p>

          <h2 className="mt-12 text-2xl font-bold">2. Two success metrics, not one</h2>

          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            Here&apos;s a confusion that trips up everyone who looks at a safe
            withdrawal rate (SWR) table for the first time:
          </p>

          <blockquote className="mt-4 border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)]">
            &ldquo;Wait, a 2.5% withdrawal rate has a <em>lower</em> success rate than
            a 5% rate? Isn&apos;t lower supposed to be safer?&rdquo;
          </blockquote>

          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            Both things are true. A lower withdrawal rate is safer <em>in retirement</em>,
            but it requires a <em>bigger piggy bank</em> to start — which is harder to
            save up to. These are two different questions, and most tools conflate them.
          </p>

          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            Finsava shows both:
          </p>

          <ul className="mt-4 space-y-2 text-[var(--muted)]">
            <li><strong className="text-[var(--foreground)]">Reach FIRE:</strong> Probability of accumulating enough savings within 50 years of earning and investing. Lower rates show lower numbers here because you need a much larger portfolio.</li>
            <li><strong className="text-[var(--foreground)]">Survive 40yr:</strong> Probability your portfolio lasts 40 years of retirement withdrawals without running out. Lower rates show <em>higher</em> numbers here because you&apos;re taking smaller bites.</li>
          </ul>

          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            Seeing both columns side-by-side makes the trade-off obvious: save more
            upfront for a safer retirement, or save less and accept more risk.
          </p>

          <h2 className="mt-12 text-2xl font-bold">3. Guardrails: the strategy that dramatically improves survival</h2>

          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            The 4% rule tells you to withdraw the same amount every year, regardless
            of what the market does. That&apos;s insane. Real retirees aren&apos;t
            robots — if your portfolio drops 30% in year 1, you&apos;d obviously
            tighten your belt. If it doubles, you might take a nicer vacation.
          </p>

          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            That intuition is called a <em>guardrails withdrawal strategy</em>, and
            it&apos;s dramatically safer than the fixed 4% rule. Here&apos;s Finsava&apos;s
            implementation:
          </p>

          <ul className="mt-4 space-y-2 text-[var(--muted)]">
            <li>If your portfolio drops below 80% of where it started &rarr; cut spending by 10%.</li>
            <li>If it climbs above 120% of where it started &rarr; raise spending by 10%.</li>
            <li>Otherwise, spend at the baseline rate.</li>
          </ul>

          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            In 2,000 simulated retirements, a fixed 4% strategy has around an 86%
            survival rate over 40 years. The guardrails strategy on the same portfolio
            typically hits 95%+ because it responds to reality instead of pretending
            the future is smooth.
          </p>

          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            The guardrails row is highlighted in Finsava&apos;s SWR Analysis table so
            you can see the improvement at a glance.
          </p>

          <h2 className="mt-12 text-2xl font-bold">4. Four historical stress tests</h2>

          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            Monte Carlo uses random returns, but the worst retirement outcomes
            aren&apos;t random — they&apos;re specific historical events. Finsava
            replays them against your portfolio:
          </p>

          <ul className="mt-4 space-y-3 text-[var(--muted)]">
            <li>
              <strong className="text-[var(--foreground)]">2008-style crash:</strong>{" "}
              38% drop in year 1, slow 5-year recovery. Based on the 2007-2009 Great
              Financial Crisis.
            </li>
            <li>
              <strong className="text-[var(--foreground)]">Low-return decade:</strong>{" "}
              Returns halved for the first 10 years. Based on 2000-2010, when the
              S&amp;P 500 returned roughly 0% nominal.
            </li>
            <li>
              <strong className="text-[var(--foreground)]">Sequence risk:</strong>{" "}
              The worst returns front-loaded in the first 5 years. This is the single
              biggest threat to new retirees — early losses compound because you&apos;re
              withdrawing from a shrinking portfolio.
            </li>
            <li>
              <strong className="text-[var(--foreground)]">1970s stagflation:</strong>{" "}
              High inflation erodes real returns for 12 years. Based on 1968-1982 when
              inflation averaged 7.4% and stocks stagnated.
            </li>
          </ul>

          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            Each scenario reports its success rate and median years to FIRE. If your
            plan passes the 1970s stagflation test, you&apos;ve earned a lot of
            confidence.
          </p>

          <h2 className="mt-12 text-2xl font-bold">5. FIRE isn&apos;t one thing — five variants</h2>

          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            The FIRE community has been split into sub-camps for years, each with a
            different definition of &ldquo;done.&rdquo; Finsava calculates all five
            at once:
          </p>

          <ul className="mt-4 space-y-3 text-[var(--muted)]">
            <li><strong className="text-[var(--foreground)]">Standard FIRE:</strong> Your full expenses covered by a 4% withdrawal from the portfolio.</li>
            <li><strong className="text-[var(--foreground)]">Lean FIRE:</strong> Only essential expenses — housing, utilities, groceries, healthcare, insurance. Smaller target, faster to reach, more frugal lifestyle.</li>
            <li><strong className="text-[var(--foreground)]">Barista FIRE:</strong> Half the standard FIRE number plus enough part-time income to cover the gap. Common for people who want employer health insurance in their 50s.</li>
            <li><strong className="text-[var(--foreground)]">Coast FIRE:</strong> The savings you need <em>right now</em> such that investment growth alone carries you to full FIRE by traditional retirement age, even if you never save another dollar.</li>
            <li><strong className="text-[var(--foreground)]">Fat FIRE:</strong> 2x current expenses for a comfortable, upper-middle-class retirement.</li>
          </ul>

          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            Most calculators show one. Seeing all five side-by-side often changes
            people&apos;s plans — &ldquo;oh, I&apos;m already past Coast FIRE&rdquo; or
            &ldquo;Barista FIRE is closer than I thought.&rdquo;
          </p>

          <h2 className="mt-12 text-2xl font-bold">6. The &ldquo;what if I have kids?&rdquo; scenario</h2>

          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            This is the question the FIRE community asks most and the question FIRE
            calculators answer least. We built a toggle for it.
          </p>

          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            Pick how many children (0, 1, 2, or 3+) and the dashboard adds the USDA
            average cost of raising a child ($18,750/year, middle-income, ages 0-17)
            to your annual expenses. The FIRE number grows, the timeline stretches,
            and you see the impact instantly.
          </p>

          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            The cost per child is user-adjustable — $18,750 is a national average but
            daycare alone can hit $24k/year in high cost-of-living cities. Put in a
            number that matches your reality.
          </p>

          <h2 className="mt-12 text-2xl font-bold">7. It uses your actual data (and you can override it)</h2>

          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            The FIRE Dashboard isn&apos;t a blank form. It pulls:
          </p>

          <ul className="mt-4 space-y-2 text-[var(--muted)]">
            <li>Current portfolio from your synced bank accounts (checking, savings, investment)</li>
            <li>Plus manually-added investments from your Net Worth page (401k, IRA, brokerage accounts not connected via Plaid)</li>
            <li>Annual expenses from your last 12 months of transactions</li>
            <li>Savings rate derived from your income vs expenses</li>
          </ul>

          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            And every single field is overridable. Had an atypical year (MBA tuition,
            medical emergency, wedding)? Type in a &ldquo;typical year&rdquo; expense
            amount. Have assets you haven&apos;t synced? Enter the portfolio total
            manually. The dashboard recalculates everything in real time.
          </p>

          <h2 className="mt-12 text-2xl font-bold">8. ELI5 tooltips on everything</h2>

          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            Every field and every section has a hover tooltip with two explanations:
            a technical definition and an &ldquo;In simple terms&rdquo; breakdown.
            This is deliberate. Finance jargon is exclusionary, and the FIRE movement
            should be accessible to anyone who can do basic arithmetic.
          </p>

          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            What does &ldquo;withdrawal rate&rdquo; mean? <em>How much you&apos;ll
            take out of your piggy bank each year. 4% is the classic rule.</em>
          </p>

          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            What&apos;s a &ldquo;Monte Carlo simulation&rdquo;? <em>Rolling a dice
            1,000 times to see what happens to your savings under different versions
            of the future.</em>
          </p>

          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            If you&apos;ve ever bounced off a retirement calculator because it
            felt like a standardized test, this is what it should have looked like.
          </p>

          <h2 className="mt-12 text-2xl font-bold">What this isn&apos;t</h2>

          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            It&apos;s not financial advice. It&apos;s an educational modeling tool.
            Every projection carries that disclaimer, and the standard errors are
            shown because pretending a simulation is a prediction would be dishonest.
          </p>

          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            It&apos;s also not a substitute for talking to a human advisor about
            your specific situation — taxes, healthcare before Medicare, Social
            Security optimization, estate planning. A calculator can&apos;t do any
            of that.
          </p>

          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            But for the question &ldquo;am I on track, and what would change my
            timeline the most?&rdquo; — that&apos;s what we built this for.
          </p>

          <div className="mt-12 rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-8 text-center">
            <h3 className="text-2xl font-bold">Try the FIRE Dashboard</h3>
            <p className="mt-3 text-[var(--muted)]">
              Included in Finsava Pro — every new account starts with a 14-day free trial. No credit card required.
            </p>
            <Link
              href="/#waitlist"
              className="mt-6 inline-block rounded-xl bg-[var(--primary)] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-500/25 hover:bg-blue-600 transition-colors"
            >
              Join the Waitlist
            </Link>
          </div>

          <p className="mt-8 text-xs text-[var(--muted)] border-t border-[var(--card-border)] pt-6">
            <em>
              This post is for educational and informational purposes only. Monte
              Carlo projections are hypothetical illustrations based on randomized
              scenarios — they do not predict or guarantee future results. Past
              performance does not guarantee future returns. This is not investment
              advice. Consult a qualified financial professional before making
              retirement decisions.
            </em>
          </p>

          <ShareButtons
            slug="fire-dashboard-deep-dive"
            title="The FIRE Dashboard That Models Your Actual Life (Not Just 4% of Your Expenses)"
          />
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
