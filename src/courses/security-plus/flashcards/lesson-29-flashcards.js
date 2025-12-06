// Lesson 29: Risk Management
// Security+ (SY0-701) - Domain 5.0: Security Program Management and Oversight

export const lesson29Flashcards = [
  {
    id: 1,
    front: "What is Risk?",
    back: "Possibility of loss or damage when a threat exploits a vulnerability. Risk = Threat × Vulnerability × Impact. Can be measured and managed."
  },
  {
    id: 2,
    front: "What is an Asset in risk management?",
    back: "Anything of value to organization. Hardware, software, data, people, reputation. Must identify assets before assessing risk. Value determines protection investment."
  },
  {
    id: 3,
    front: "What is a Threat?",
    back: "Potential danger that could exploit vulnerability. Natural disasters, hackers, malware, insider threats. External or internal. Intentional or accidental."
  },
  {
    id: 4,
    front: "What is a Vulnerability?",
    back: "Weakness that can be exploited by threat. Unpatched software, misconfigurations, weak passwords. Exists in systems, processes, or people."
  },
  {
    id: 5,
    front: "What is the Risk Formula?",
    back: "Risk = Threat × Vulnerability × Impact. All three factors must exist for risk. Reduce any factor to reduce risk. Basis for risk assessment."
  },
  {
    id: 6,
    front: "What is Likelihood in risk?",
    back: "Probability that threat will exploit vulnerability. How often might it happen? Based on threat capability, vulnerability exposure, historical data."
  },
  {
    id: 7,
    front: "What is Impact in risk?",
    back: "Consequence or damage if risk occurs. Financial loss, reputation damage, operational disruption. Measured in dollars or qualitative terms."
  },
  {
    id: 8,
    front: "What is Qualitative Risk Assessment?",
    back: "Subjective assessment using categories. High/Medium/Low ratings. Based on expert judgment. Faster, easier, but less precise. Good for initial assessment."
  },
  {
    id: 9,
    front: "What is Quantitative Risk Assessment?",
    back: "Numerical/financial assessment of risk. Uses formulas and dollar values. More precise but requires more data. SLE, ALE, ARO calculations."
  },
  {
    id: 10,
    front: "Qualitative vs Quantitative assessment?",
    back: "Qualitative: subjective, categories, faster, less data needed. Quantitative: objective, numerical, slower, needs financial data. Often use both together."
  },
  {
    id: 11,
    front: "What is Asset Value (AV)?",
    back: "Dollar value of an asset. Includes replacement cost, revenue impact, intangible value. Foundation for quantitative risk calculations."
  },
  {
    id: 12,
    front: "What is Exposure Factor (EF)?",
    back: "Percentage of asset value lost if incident occurs. Expressed as decimal (0.0 to 1.0). 50% loss = 0.5 EF. How much damage from single incident."
  },
  {
    id: 13,
    front: "What is SLE (Single Loss Expectancy)?",
    back: "Expected loss from single incident. SLE = Asset Value × Exposure Factor. How much one occurrence costs. Used to calculate ALE."
  },
  {
    id: 14,
    front: "What is ARO (Annualized Rate of Occurrence)?",
    back: "Expected frequency of incident per year. Once per year = 1.0, twice = 2.0, once per 5 years = 0.2. How often it happens annually."
  },
  {
    id: 15,
    front: "What is ALE (Annualized Loss Expectancy)?",
    back: "Expected yearly loss from risk. ALE = SLE × ARO. Annual cost of risk. Helps justify security spending - spend less than ALE to mitigate."
  },
  {
    id: 16,
    front: "Calculate: Asset=$100,000, EF=25%, ARO=2. What is ALE?",
    back: "SLE = $100,000 × 0.25 = $25,000. ALE = $25,000 × 2 = $50,000 per year. Spend up to $50,000 annually to mitigate this risk."
  },
  {
    id: 17,
    front: "What are the four Risk Response strategies?",
    back: "Avoidance (eliminate risk), Transference (shift to third party), Mitigation (reduce impact/likelihood), Acceptance (acknowledge and document)."
  },
  {
    id: 18,
    front: "What is Risk Avoidance?",
    back: "Eliminating the risk entirely. Don't do the risky activity. Example: not storing sensitive data eliminates data breach risk. May limit business opportunities."
  },
  {
    id: 19,
    front: "What is Risk Transference?",
    back: "Shifting risk to third party. Insurance transfers financial risk. Outsourcing transfers operational risk. Doesn't eliminate risk, moves responsibility."
  },
  {
    id: 20,
    front: "What is Risk Mitigation?",
    back: "Reducing likelihood or impact of risk. Implement security controls. Most common response. Doesn't eliminate risk but reduces it to acceptable level."
  },
  {
    id: 21,
    front: "What is Risk Acceptance?",
    back: "Acknowledging risk and choosing not to address it. Documented decision by appropriate authority. Used when cost to mitigate exceeds potential loss."
  },
  {
    id: 22,
    front: "When is Risk Acceptance appropriate?",
    back: "When mitigation cost exceeds potential loss, risk is low, no practical mitigation exists. Must be documented, approved by management, reviewed periodically."
  },
  {
    id: 23,
    front: "What is a Risk Register?",
    back: "Document tracking identified risks. Lists risk, owner, likelihood, impact, response, status. Central repository for risk management. Updated regularly."
  },
  {
    id: 24,
    front: "What should a Risk Register contain?",
    back: "Risk description, owner, likelihood rating, impact rating, risk score, response strategy, controls, status, review date. Living document."
  },
  {
    id: 25,
    front: "What is Risk Appetite?",
    back: "Amount of risk organization willing to accept to achieve objectives. Strategic level. Set by leadership. Guides risk decisions across organization."
  },
  {
    id: 26,
    front: "What is Risk Tolerance?",
    back: "Acceptable variance from risk appetite. How much deviation allowed. More tactical than appetite. Different systems may have different tolerances."
  },
  {
    id: 27,
    front: "Risk Appetite vs Risk Tolerance?",
    back: "Appetite: overall willingness to take risk (strategic). Tolerance: acceptable deviation from appetite (tactical). Appetite sets direction, tolerance sets boundaries."
  },
  {
    id: 28,
    front: "What is a KRI (Key Risk Indicator)?",
    back: "Metric predicting potential risk increase. Early warning signal. Example: increase in failed logins may indicate attack coming. Proactive risk monitoring."
  },
  {
    id: 29,
    front: "What is a Business Impact Analysis (BIA)?",
    back: "Identifies critical business functions and impact of disruption. Determines RTO/RPO. Prioritizes recovery efforts. Foundation for business continuity planning."
  },
  {
    id: 30,
    front: "What does BIA identify?",
    back: "Critical systems and processes, dependencies, maximum tolerable downtime, financial impact of disruption, recovery priorities. Drives DR/BC planning."
  }
];