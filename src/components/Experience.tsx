import { Briefcase } from "lucide-react";

const experienceData = [
  {
    role: "Data Analyst Intern",
    company: "Excelerate",
    duration: "2024",
    description:
      "Worked on real-world data analytics projects involving data cleaning, exploratory data analysis, and dashboard development. Collaborated with cross-functional teams to deliver actionable insights using Python, SQL, and Power BI.",
    highlights: [
      "Performed data cleaning and transformation on large datasets",
      "Built interactive dashboards in Power BI for stakeholder reporting",
      "Conducted exploratory data analysis to identify trends and patterns",
    ],
  },
];

const Experience = () => (
  <section id="experience" className="py-20">
    <div className="container">
      <h2 className="text-3xl font-heading font-bold mb-12 text-center">
        <span className="text-gradient">Experience</span>
      </h2>
      <div className="max-w-2xl mx-auto space-y-6">
        {experienceData.map((exp, i) => (
          <div
            key={i}
            className="bg-card rounded-xl p-6 card-hover border border-border"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Briefcase size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground">
                  {exp.role}
                </h3>
                <p className="text-sm text-primary font-medium">{exp.company}</p>
                <p className="text-xs text-muted-foreground mb-3">{exp.duration}</p>
                <p className="text-sm text-muted-foreground mb-3">
                  {exp.description}
                </p>
                <ul className="space-y-1">
                  {exp.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary mt-1">•</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
