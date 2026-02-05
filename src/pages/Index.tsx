import { usePageTitle } from "@/hooks/use-page-title";
import { usePageLoader } from "@/hooks/use-page-loader";
import { PageLoader } from "@/components/ui/loader";
import { ArrowRight } from "lucide-react";

const Index = () => {
  usePageTitle("Home | Durkkas Associates");
  const isLoading = usePageLoader();
  if (isLoading) return <PageLoader />;

  return (
    <main style={{ width: "100%", overflow: "hidden" }}>
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="overlay" />
        <div className="hero-grid">
          <div className="hero-left">
            <h1>
              Building Trust,<br />
              Growing Businesses
            </h1>
            <p>
              Durkkas Associates delivers expert consulting, auditing and
              compliance solutions to help businesses grow with confidence.
            </p>

            <div className="hero-buttons">
              <a href="/services" className="btn primary">
                Get Started <ArrowRight size={18} />
              </a>
              <a href="/contact" className="btn secondary">
                Contact Us <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img src="/acc1.jpg" alt="Business" />
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="features">
        <h2>Our Professional Services</h2>
        <p className="sub">
          Reliable solutions designed for long-term business success.
        </p>

        <div className="card-grid">
          <div className="card c1">
            <h3>Auditing & Assurance</h3>
            <p>Accurate audits ensuring transparency and compliance.</p>
          </div>

          <div className="card c2">
            <h3>Business Consulting</h3>
            <p>Strategic planning to scale and optimize operations.</p>
          </div>

          <div className="card c3 animated">
            <h3>Tax & Compliance</h3>
            <p>Complete tax solutions with regulatory confidence.</p>
          </div>
        </div>
      </section>

      {/* ================= COMPANY PRIDE ================= */}
      <section className="about">
        <h2>Our Pride</h2>
        <p className="sub">
          At Durkkas Associates, we take pride in delivering excellence in
          consulting, auditing, and compliance. Our clients trust us to
          provide transparent, reliable, and innovative solutions that fuel
          business growth.
        </p>

        <div className="pride-grid">
          {[
            {
              title: "Expert Team",
              desc: "Highly skilled professionals with years of industry experience.",
            },
            {
              title: "Client Satisfaction",
              desc: "We prioritize client success and long-term partnerships.",
            },
            {
              title: "Innovation & Integrity",
              desc: "Combining innovative strategies with ethical practices.",
            },
          ].map((item, i) => (
            <div className="pride-card" key={i}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= STYLES ================= */}
      <style>{`
/* ================= HERO ================= */

.hero {
  min-height: 85vh;
  background: url('/acc.jpg') center/cover no-repeat;
  position: relative;
  display: flex;
  align-items: center;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,.55);
}

.hero-grid {
  position: relative;
  max-width: 1200px;
  margin: auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.hero-left h1 {
  font-size: 3rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 1rem;
  line-height: 1.15;
}

.hero-left p {
  max-width: 520px;
  color: #e5e7eb;
  margin-bottom: 2rem;
}

.hero-buttons {
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
}

.btn {
  padding: .75rem 2rem;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  font-weight: 600;
  text-decoration: none;
  transition: .3s;
}

.primary {
  background: #1d4ed8;
  color: #fff;
}

.primary:hover {
  box-shadow: 0 0 18px rgba(59,130,246,.8);
}

.secondary {
  background: #fff;
  color: #1d4ed8;
}

.hero-image img {
  width: 260px;
  height: 260px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 18px 40px rgba(0,0,0,.45);
}


/* ================= FEATURES ================= */

.features {
  padding: 6rem 1.5rem;
  text-align: center;
  background: #f8fafc;
}

.features h2 {
  font-size: 2.2rem;
  margin-bottom: .75rem;
}

.sub {
  color: #64748b;
  margin-bottom: 3rem;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}

.card-grid {
  max-width: 1100px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 2rem;
}

.card {
  padding: 2.5rem 2rem;
  border-radius: 18px;
  color: #fff;
  transition: transform .4s;
}

.card:hover {
  transform: translateY(-10px);
}

.c1 { background: linear-gradient(135deg,#2563eb,#1e3a8a); }
.c2 { background: linear-gradient(135deg,#16a34a,#065f46); }
.c3 {
  background: linear-gradient(270deg,#7c3aed,#2563eb,#7c3aed);
  background-size: 400% 400%;
  animation: gradientMove 6s ease infinite;
}

@keyframes gradientMove {
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
}


/* ================= PRIDE ================= */

.about {
  padding: 6rem 1.5rem;
  text-align: center;
  background: #fff;
}

.about h2 {
  font-size: 2.2rem;
  margin-bottom: .75rem;
}

.pride-grid {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 2rem;
  max-width: 1100px;
  margin: auto;
}

.pride-card {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  padding: 2rem;
  color: #fff;
  background: linear-gradient(270deg,#7c3aed,#2563eb,#7c3aed);
  background-size: 400% 400%;
  animation: gradientMove 6s ease infinite;
  transition: transform 0.3s ease;
}

.pride-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: rgba(255,255,255,0.3);
  transform: rotate(25deg) translateX(-150%);
  transition: transform 0.5s ease;
}

.pride-card:hover::before {
  transform: rotate(25deg) translateX(150%);
}

.pride-card:hover {
  transform: translateY(-8px);
}

.pride-card h3 {
  position: relative;
  z-index: 1;
  margin-bottom: .5rem;
  font-size: 1.4rem;
}

.pride-card p {
  position: relative;
  z-index: 1;
  color: #e0e7ff;
}


/* ================= TABLET ================= */

@media (max-width: 1024px) {
  .hero-grid {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }

  .hero-image {
    display: none;
  }

  .hero-buttons {
    justify-content: center;
  }

  .card-grid,
  .pride-grid {
    grid-template-columns: 1fr 1fr;
  }
}


/* ================= MOBILE ================= */

@media (max-width: 640px) {

  .hero {
    min-height: auto;
    padding: 5rem 0 4rem;
  }

  .hero-left h1 {
    font-size: 2rem;
  }

  .hero-left p {
    font-size: 0.95rem;
  }

  .hero-buttons {
    flex-direction: column;
    width: 100%;
  }

  .btn {
    width: 100%;
  }

  .features,
  .about {
    padding: 3.5rem 1rem;
  }

  .features h2,
  .about h2 {
    font-size: 1.7rem;
  }

  .sub {
    font-size: 0.95rem;
    margin-bottom: 2rem;
  }

  .card-grid,
  .pride-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  .card,
  .pride-card {
    padding: 1.75rem 1.4rem;
  }
}

`}</style>
    </main>
  );
};

export default Index;
