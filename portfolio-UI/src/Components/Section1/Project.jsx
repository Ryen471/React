import React from "react";

function Project() {
  return (
    <section className="project">

      <h1>My Projects</h1>

      <div className="project-container">

        <div className="card">
          <h2>Student Portal</h2>

          <p>
            A Student Portal website where Admin can manage students,
            attendance, notices and complaints. Students can view
            their profile, attendance, notices and submit complaints.
          </p>

          <h4>Tech Stack</h4>
          <span>HTML • CSS • JavaScript</span>

          <div className="btn">
            <a href="https://github.com/Ryen471" target="_blank" rel="noreferrer">
              <button>GitHub</button>
            </a>
          </div>
        </div>

        <div className="card">
          <h2>Job Profile Cards</h2>

          <p>
            A React application that displays job profile cards using
            reusable components with a responsive user interface.
          </p>

          <h4>Tech Stack</h4>
          <span>React • CSS</span>

          <div className="btn">
            <a href="https://github.com/Ryen471" target="_blank" rel="noreferrer">
              <button>GitHub</button>
            </a>
          </div>
        </div>

        <div className="card">
          <h2>Rock Paper Scissors</h2>

          <p>
            A simple game where users can play Rock Paper Scissors
            against the computer with instant results.
          </p>

          <h4>Tech Stack</h4>
          <span>HTML • CSS • JavaScript</span>

          <div className="btn">
            <a href="https://github.com/Ryen471" target="_blank" rel="noreferrer">
              <button>GitHub</button>
            </a>
          </div>
        </div>

        <div className="card">
          <h2>Calculator</h2>

          <p>
            A responsive calculator that performs basic arithmetic
            operations with a simple and clean design.
          </p>

          <h4>Tech Stack</h4>
          <span>HTML • CSS • JavaScript</span>

          <div className="btn">
            <a href="https://github.com/Ryen471" target="_blank" rel="noreferrer">
              <button>GitHub</button>
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Project;