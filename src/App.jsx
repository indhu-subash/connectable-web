import { useState } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import communities from "./data/communities";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  function showMessage(text) {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 2500);
  }

  function scrollToSection(sectionId) {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  }

  if (!isLoggedIn) {
    if (showSignup) {
      return (
        <Signup
          onSignup={() => {
            setIsLoggedIn(true);
            setShowSignup(false);
          }}
          onBackToLogin={() => setShowSignup(false)}
        />
      );
    }

    return (
      <Login
        onLogin={() => setIsLoggedIn(true)}
        onGoToSignup={() => setShowSignup(true)}
      />
    );
  }

  return (
    <div className="app">
      {message && (
        <div className="toast-message" role="status" aria-live="polite">
          {message}
        </div>
      )}

      <header className="navbar">
        <div className="nav-brand">
          <h1>ConnectAble</h1>

          <button
            type="button"
            className="logout-button"
            onClick={() => setIsLoggedIn(false)}
          >
            Logout
          </button>
        </div>

        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#communities">Communities</a>
          <a href="#events">Events</a>
          <a href="#mentors">Mentors</a>
          <a href="#profile">Profile</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-text">
            <p className="tag">Inclusive Community Platform</p>

            <h2>Accessibility is not an add-on. It is the foundation.</h2>

            <p>
              Connect with communities, discover accessible events, find
              mentors, and request support in one inclusive platform.
            </p>

            <div className="hero-buttons">
              <button
                type="button"
                onClick={() => scrollToSection("communities")}
              >
                Explore Communities
              </button>

              <button
                type="button"
                className="secondary-button"
                onClick={() => scrollToSection("mentors")}
              >
                Find a Mentor
              </button>
            </div>
          </div>

          <div className="hero-card">
            <span className="hero-icon" aria-hidden="true">
              🤝
            </span>

            <h3>Everyone belongs here</h3>

            <p>
              Voice, text, captions, accessible events and community support.
            </p>
          </div>
        </section>

        <section className="section" id="communities">
          <div className="section-heading">
            <p>Find your people</p>
            <h2>Communities</h2>
          </div>

          <div className="card-grid">
            {communities.map((community) => (
              <article className="card" key={community.id}>
                <span aria-hidden="true">{community.emoji}</span>

                <h3>{community.title}</h3>

                <p>{community.description}</p>

                <p className="member-count">
                  👥 {community.members} members
                </p>

                <button
                  type="button"
                  onClick={() =>
                    showMessage(
                      `You joined the ${community.title} community!`
                    )
                  }
                >
                  Join Community
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="section light-section" id="events">
          <div className="section-heading">
            <p>Accessible opportunities</p>
            <h2>Upcoming Events</h2>
          </div>

          <div className="card-grid">
            <article className="card">
              <span aria-hidden="true">💼</span>
              <h3>Inclusive Career Fair</h3>
              <p>📅 July 18 · Kochi</p>
              <p className="badges">
                ♿ Wheelchair Access · 💬 Captions
              </p>

              <button
                type="button"
                onClick={() =>
                  showMessage("Registered for Inclusive Career Fair!")
                }
              >
                Register
              </button>
            </article>

            <article className="card">
              <span aria-hidden="true">💻</span>
              <h3>Assistive Technology Workshop</h3>
              <p>📅 July 21 · Online</p>
              <p className="badges">
                💬 Captions · 🤟 Sign Language Interpreter
              </p>

              <button
                type="button"
                onClick={() =>
                  showMessage(
                    "Registered for Assistive Technology Workshop!"
                  )
                }
              >
                Register
              </button>
            </article>

            <article className="card">
              <span aria-hidden="true">🏃</span>
              <h3>Inclusive Sports Meetup</h3>
              <p>📅 July 27 · Kottayam</p>
              <p className="badges">♿ Accessible Venue</p>

              <button
                type="button"
                onClick={() =>
                  showMessage("Registered for Inclusive Sports Meetup!")
                }
              >
                Register
              </button>
            </article>
          </div>
        </section>

        <section className="section" id="mentors">
          <div className="section-heading">
            <p>Learn from experienced people</p>
            <h2>Mentor Connect</h2>
          </div>

          <div className="card-grid">
            <article className="card">
              <span aria-hidden="true">👩‍💻</span>
              <h3>Anjali</h3>
              <p>Technology & Accessibility</p>

              <button
                type="button"
                onClick={() => showMessage("Mentor request sent to Anjali!")}
              >
                Request Mentor
              </button>
            </article>

            <article className="card">
              <span aria-hidden="true">👨‍🏫</span>
              <h3>Rahul</h3>
              <p>Education & Career Guidance</p>

              <button
                type="button"
                onClick={() => showMessage("Mentor request sent to Rahul!")}
              >
                Request Mentor
              </button>
            </article>

            <article className="card">
              <span aria-hidden="true">🧑‍💼</span>
              <h3>Meera</h3>
              <p>Government Schemes & Job Support</p>

              <button
                type="button"
                onClick={() => showMessage("Mentor request sent to Meera!")}
              >
                Request Mentor
              </button>
            </article>
          </div>
        </section>

        <section className="section profile-section" id="profile">
          <div>
            <p className="tag">Accessibility Settings</p>

            <h2>Customize Your Experience</h2>

            <p>
              Enable accessibility features according to your needs and
              communication preferences.
            </p>
          </div>

          <div className="settings-card">
            <label>
              <input
                type="checkbox"
                onChange={(event) =>
                  showMessage(
                    event.target.checked
                      ? "Large Text Enabled"
                      : "Large Text Disabled"
                  )
                }
              />
              Large Text
            </label>

            <label>
              <input
                type="checkbox"
                onChange={(event) =>
                  showMessage(
                    event.target.checked
                      ? "High Contrast Enabled"
                      : "High Contrast Disabled"
                  )
                }
              />
              High Contrast
            </label>

            <label>
              <input
                type="checkbox"
                onChange={(event) =>
                  showMessage(
                    event.target.checked
                      ? "Captions Enabled"
                      : "Captions Disabled"
                  )
                }
              />
              Enable Captions
            </label>

            <label>
              <input
                type="checkbox"
                onChange={(event) =>
                  showMessage(
                    event.target.checked
                      ? "Voice Assistance Enabled"
                      : "Voice Assistance Disabled"
                  )
                }
              />
              Voice Assistance
            </label>
          </div>
        </section>
      </main>

      <footer>
        <h3>ConnectAble</h3>
        <p>
          A community-first platform where accessibility isn't an add-on — it's
          the foundation.
        </p>
      </footer>
    </div>
  );
}

export default App;