# Mobile Fintech App – Risk Matrix

**Limitation Note:** My fintech experience is primarily in wealth management and pension systems.  this risk assessment is based on my existing domain knowledge and general QA best practices. The risks and ratings will be refined once the application requirements and functionality are clarified.

## 1. Risk Assessment

Scoring: Likelihood × Impact, each rated from 1 (Low) to 5 (Very High).

| ID | Potential Risk | Likelihood | Impact | Score | Priority |
|---|---|---:|---:|---:|---|
| R1 | Incorrect or inconsistent financial data | 3 | 5 | 15 | High |
| R2 | Unauthorized access to user accounts | 3 | 5 | 15 | High |
| R3 | Application crashes during critical operations | 3 | 4 | 12 | High |
| R4 | Inconsistent data between the application and backend | 3 | 5 | 15 | High |
| R5 | Network interruptions causing incomplete operations | 4 | 4 | 16 | Critical |
| R6 | Sensitive user information exposed or mishandled | 3 | 5 | 15 | High |
| R7 | API failures or unexpected error responses | 3 | 4 | 12 | High |
| R8 | Compatibility issues across supported devices | 3 | 3 | 9 | Medium |
| R9 | Regression following code changes | 4 | 4 | 16 | Critical |
| R10 | Insufficient test coverage before release | 4 | 5 | 20 | Critical |
| R11 | Poor error handling or unclear user feedback | 3 | 3 | 9 | Medium |
| R12 | Release with unresolved critical defects | 3 | 5 | 15 | High |

*All ratings are preliminary estimates, not confirmed defects. They should be reassessed after requirements review and testing.*

## 2. Risk Rating Guide

| Score | Risk Level | Action |
|---|---|---|
| 1–4 | Low | Monitor during planned testing. |
| 5–9 | Medium | Include in test coverage and track findings. |
| 10–15 | High | Prioritize investigation and mitigation. |
| 16–25 | Critical | Escalate promptly and assess release impact. |

## 3. Mitigation Approach

| Risk Area | Proposed Action |
|---|---|
| Financial data accuracy | Validate displayed data against expected results and backend records where available. |
| Account security | Verify authentication, access controls, session handling, and sensitive data protection. |
| Application stability | Test critical workflows and review crash reports in Crashlytics, if integrated. |
| Network and API reliability | Test timeouts, connection loss, recovery, and error handling. |
| Mobile compatibility | Test supported iOS and Android devices and operating system versions. |
| Regression | Retest fixes and execute focused regression before release. |
| Test coverage | Prioritize high-impact scenarios and document untested areas. |
| Release readiness | Track blockers, review outstanding risks, and obtain appropriate stakeholder approval. |

## 4. Risk Review and Ownership

- Track risks and related defects in Jira or the team's agreed tracking tool.
- Assign owners and mitigation actions to high-priority risks.
- Update ratings as requirements and test evidence become available.
- Document outstanding risks and obtain formal acceptance from authorized stakeholders where appropriate.

## 5. QA Recommendation

Prioritize data accuracy, account security, application stability, and critical user workflows. Any unresolved risks that could significantly affect users, financial data, or system reliability should be assessed before release.
