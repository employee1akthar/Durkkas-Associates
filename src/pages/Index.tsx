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
    <section className="premium-features">

  <div className="timeline-line"></div>

  <h2 className="section-title">Our Professional Services</h2>
  <p className="section-sub">
    Reliable solutions designed for long-term business success.
  </p>

  <div className="premium-grid">

    <div className="premium-card">
      <div className="circle"></div>
      <div className="premium-box">
        <h3>Auditing & Assurance</h3>
        <p>Accurate audits ensuring transparency and compliance.</p>
      </div>
    </div>

    <div className="premium-card">
      <div className="circle"></div>
      <div className="premium-box">
        <h3>Business Consulting</h3>
        <p>Strategic planning to scale and optimize operations.</p>
      </div>
    </div>

    <div className="premium-card">
      <div className="circle"></div>
      <div className="premium-box">
        <h3>Tax & Compliance</h3>
        <p>Complete tax solutions with regulatory confidence.</p>
      </div>
    </div>

    <div className="premium-card">
      <div className="circle"></div>
      <div className="premium-box">
        <h3>Global Advisory</h3>
        <p>Expanding your business footprint across international markets.</p>
      </div>
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
  background: linear-gradient(135deg, #1e40af, #3b82f6);
  color: #fff;
  transition: transform 0.3s cubic-bezier(.17,.67,.83,.67),
              box-shadow 0.3s ease,
              background 0.3s ease;
}

.primary:hover {
  transform: translateY(-5px) scale(1.08);
  box-shadow: 0 15px 30px rgba(59,130,246,0.7);
  background: linear-gradient(135deg, #1d4ed8, #60a5fa);
}
.secondary {
  background:  linear-gradient(135deg, #1e40af, #3b82f6);
  border: 2px solid #3b82f6;
  color: #fff;
  transition: transform 0.3s cubic-bezier(.17,.67,.83,.67),
              box-shadow 0.3s ease,
              background 0.3s ease;
}

.secondary:hover {
 transform: translateY(-5px) scale(1.08);
  box-shadow: 0 15px 30px rgba(59,130,246,0.7);
  background: linear-gradient(135deg, #1d4ed8, #60a5fa);
}


.hero-image img {
  width: 260px;
  height: 260px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 18px 40px rgba(0,0,0,.45);
}


/* ================= FEATURES ================= */
/* Container for timeline section */
.premium-features {
  position: relative;
  padding: 100px 5% 150px; /* bottom padding for second row */
  background: linear-gradient(135deg, #fff, #fff);
  text-align: center;
  color: #212ddb;
  overflow: visible; /* allow absolute items */
}

/* Title styles */
.section-title {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 10px;
}

.section-sub {
  opacity: 0.8;
  margin-bottom: 70px;
}



/* Container for 4 cards in a row */
.premium-grid {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  position: relative;
  margin-top: 70px; /* space below timeline line */
  flex-wrap: nowrap; /* no wrapping */
}

/* Each card container */
.premium-card {
  position: relative;
  flex: 1 1 23%; /* 4 equal cards, leave some gap */
  max-width: 23%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Circles above cards */
.circle {
  width: 22px;
  height: 22px;
  background: gold;
  border-radius: 50%;
  position: absolute;
  top: -45px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  border: 2px solid rgba(255, 215, 0, 0.9);
}

/* Vertical dotted line from circle to card */
.premium-card::before {
  content: "";
  position: absolute;
  top: -25px; /* just below circle */
  left: 50%;
  transform: translateX(-50%);
  height: 25px;
  border-left: 2px dotted rgba(255, 215, 0, 0.7);
  z-index: 1;
}

/* Card box styling */
.premium-box {
  background: #928bf1;
  padding: 40px 25px;
  border-radius: 12px;
  border: 1px dashed rgba(255, 215, 0, 0.7);
  min-height: 200px;
  box-sizing: border-box;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  width: 100%;
  color: #fff;
  text-align: left;
  position: relative;
  z-index: 1;
}

.premium-box h3 {
  color: gold;
  margin-bottom: 15px;
  font-size: 20px;
}

.premium-box p {
  font-size: 15px;
  opacity: 0.85;
}

.premium-box:hover {
  transform: translateY(-10px);
  box-shadow: 0 0 25px rgba(85, 72, 146, 0.98);
}

/* Responsive for smaller screens */
@media (max-width: 900px) {
  .premium-grid {
    flex-wrap: wrap;
  }
  .premium-card {
    max-width: 48%;
    flex: 1 1 48%;
    margin-bottom: 40px;
  }
}

@media (max-width: 500px) {
  .premium-card {
    max-width: 100%;
    flex: 1 1 100%;
  }
}


.premium-features {
  padding: 60px 6% 40px; /* reduce bottom padding */
}

.about {
  padding: 30px 1.5rem;
}
/* ================= PRIDE ================= */

.about {
  padding: 6rem 1.5rem;
  text-align: center;
  background: #fff;
   margin-bottom: 60px;
}

.about h2 {
  font-size: 2.8rem;
  margin-bottom: .75rem;
  padding-bottom: 20px;

}

.about p {
  font-size: 1.0rem;
  margin-bottom: .75rem;
  padding-bottom: 20px;

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
  transform: translateY(-15px);
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
