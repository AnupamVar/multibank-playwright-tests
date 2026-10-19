# QA Assessment – Mobile Trading Application

## My QA Background and Approach

With 8 years of QA experience, my background includes testing a wealth management platform that manages client pension funds, properties, and liabilities. This experience has helped me understand the importance of financial data accuracy, validating business rules, protecting sensitive client information, and ensuring that critical business workflows function as expected.

Although I have not worked directly on a trading application, I understand that an application handling real user funds requires a strong focus on financial accuracy, security, reliability, and transaction integrity. I would work closely with the Product Manager, Business Analyst, and development team to understand the trading domain, business rules, and expected behaviour before designing detailed test scenarios. I would apply my existing QA experience while learning the specific requirements and risks of the trading domain.

---

## 1. Where do you start?

With my 8 years of QA experience, my first step would be to understand the application, its business requirements, release scope, and current state of development. Since the application is only two weeks away from its first public release, I would focus on understanding existing quality gaps and identifying the areas that carry the highest risk.

I believe the testing approach should depend on the stage of the project. If I joined at the beginning, I would establish the QA strategy, define quality criteria, identify risks, and build comprehensive test coverage from the start. However, joining just two weeks before release requires a more focused, risk-based approach that prioritises critical functionality and release readiness.

Throughout my experience, I have found ISO/IEC 9126 to be a valuable resource in shaping my approach to software quality and comprehensive test coverage. It encouraged me to look beyond functional testing and consider other quality characteristics, such as reliability, usability, efficiency, and maintainability. I would apply this structured approach while adapting the testing strategy to the application's requirements, risks, and timeline.

My initial steps would be:

- **Understand the business:** Meet the Product Manager, Business Analyst, and developers to understand the application's purpose, key features, trading rules, and expected user journeys.
- **Explore the application:** Review the iOS and Android apps to understand their functionality, navigation, and current behaviour.
- **Identify critical workflows:** Determine which user journeys could have the greatest impact if they failed, especially those involving account access, balances, funds, and order processing.
- **Review existing quality information:** Check available requirements, user stories, known defects, previous testing evidence, and any existing documentation.
- **Confirm testing readiness:** Ensure suitable test environments, test accounts, test data, logs, and access to relevant transaction records are available.
- **Prepare a risk-based test plan:** Prioritise scenarios based on financial impact, security, frequency of use, and the severity of potential failures.

My immediate objective would be to establish what has already been tested, what remains untested, and which defects could put users or their funds at risk. This would allow me to focus the available time on the most important areas before release.

## 2. How would you approach testing this app?

I would follow a risk-based testing approach, combining manual functional testing, negative and edge-case testing, integration and API validation, exploratory testing, and automation where it provides value.

Since this is a mobile trading application handling real user funds, I would pay particular attention to the accuracy of financial information, transaction integrity, security, reliability, and recovery from unexpected situations.

### Functional testing

After understanding the requirements, I would validate the application's main user journeys, including registration and login where applicable, account access, viewing balances, accessing available funds, placing and reviewing orders, and checking transaction or order history. I would confirm that the application behaves according to the defined business rules and that each action produces the expected result.

### Financial accuracy and transaction integrity

I would verify that balances, transaction details, order quantities, prices, fees, and order statuses are displayed and processed correctly according to the product requirements. I would also investigate whether the information shown in the mobile application matches the relevant backend or API records.

For example, I would test what happens if a user submits an order and experiences a network timeout. I would verify that retrying does not unintentionally create a duplicate order, that the user receives an accurate status, and that the backend and application remain consistent.

### Negative and edge-case testing

I would test invalid inputs, missing or incorrect values, repeated actions, session expiration, unexpected responses, network disconnections, and application interruptions. I would also verify how the application behaves when an operation fails or the backend responds slowly.

For a financial application, I would pay special attention to situations where an action appears to fail in the user interface but may already have been processed by the backend.

### API and integration testing

Where access is available, I would validate relevant APIs and integration points, including request and response data, status codes, error handling, authentication, and consistency between the mobile application and backend. I would use these checks to help isolate whether an issue originates in the mobile interface, API, or backend processing.

### Real-device mobile testing

As an experienced manual mobile tester, I strongly believe that testing on real devices helps identify defects that may not be visible when testing only on simulators or emulators.

I would request physical iOS and Android devices, including both high-end and low-end devices, to validate the application's behaviour across different hardware capabilities. I would test across supported operating system versions, screen sizes, and network conditions.

My testing would include device-specific issues, performance problems, unexpected crashes, touch and navigation issues, and problems caused by interruptions such as incoming calls, switching between applications, or losing network connectivity. I would also verify how the application recovers from interruptions during critical workflows, particularly order submission and status updates.

High-end devices would help validate the expected user experience, while lower-end devices would help identify performance and stability issues that may affect users with less powerful hardware. Simulators and emulators would provide additional coverage, but I would not rely on them as a replacement for physical-device testing.

### Security and reliability

I would verify authentication, session handling, access controls, sensitive information exposure, and appropriate error handling. I would also assess performance and stability under realistic usage conditions, focusing on crashes, slow responses, and recovery after failures.

All financial transaction testing would be performed in an approved test or sandbox environment using authorised test accounts and data, rather than placing real orders or risking actual user funds.

Given the two-week timeline, I would prioritise critical user journeys and high-impact risks first, then expand coverage based on the available time, environment, and release criteria. I would document the results clearly and raise defects with reproducible steps, evidence, severity, and potential business impact.

## 3. What does QA look like inside a sprint, from ticket creation through to regression?

I believe QA should be involved throughout the sprint rather than only testing after development is complete. Early involvement helps identify unclear requirements, missing acceptance criteria, and potential risks before they become expensive defects.

### 1. Ticket creation and refinement

I would review the user story, requirements, acceptance criteria, dependencies, and potential edge cases. If anything is unclear, I would discuss it with the Product Manager, Business Analyst, and developers before implementation begins.

I would also identify the relevant test scenarios and any test data or environment requirements.

### 2. Test planning and preparation

Once the requirements are clear, I would prepare test scenarios and cases covering positive flows, negative scenarios, boundary conditions, and relevant integration points. I would identify the critical scenarios that must pass before the ticket can be considered complete.

Where appropriate, I would also identify suitable opportunities for automation.

### 3. Collaboration during development

I would remain available to clarify expected behaviour, discuss potential risks, and review implementation considerations with developers. Where possible, I would validate API behaviour or test early builds rather than waiting until the end of the sprint.

### 4. Initial build validation

When a build is available, I would perform smoke testing to confirm that the application is stable enough for detailed testing and that the affected functionality is accessible.

If the build has major blockers, I would report them early rather than spending time testing an unusable build.

### 5. Functional testing and defect management

I would execute the planned scenarios, explore relevant edge cases, and validate the functionality against the acceptance criteria. Any defects would be documented with clear reproduction steps, actual and expected results, evidence, severity, and impact.

After a fix is provided, I would retest the defect and verify that the correction has not introduced new issues in related functionality.

### 6. Regression testing

I would run targeted regression tests around the changed functionality and its dependencies. For high-risk changes, especially those affecting financial calculations, account balances, transaction processing, authentication, or shared components, I would expand the regression scope accordingly.

### 7. Sprint closure

Before closing the ticket or sprint, I would confirm that the acceptance criteria are met, critical tests have passed, relevant defects are resolved or appropriately tracked, and the testing results are documented.

I would communicate the remaining risks, unresolved defects, test coverage, and any limitations clearly to the team. A ticket should not be considered ready simply because its main happy path works; the expected behaviour and relevant risks must also be addressed.

## 4. What does your ideal regression suite look like?

My ideal regression suite would be risk-based, maintainable, repeatable, and focused on protecting the application's most important functionality. It would provide fast feedback during development while giving the team confidence before a release.

I would organise the suite into three levels:

### 1. Smoke test suite

This would be a small set of high-priority checks to confirm that the application is stable enough for further testing. It would cover essential areas such as application launch, login or authentication where applicable, basic navigation, account access, and availability of key screens.

Smoke tests should be quick to execute and should run against every suitable new build.

### 2. Critical regression suite

This would cover the application's highest-risk user journeys and business rules. For a trading application, after confirming the requirements, I would include scenarios around account access, displaying accurate balances, submitting orders, viewing order status, transaction history, error handling, and recovery from network interruptions.

I would also include negative scenarios, such as repeated submissions, failed requests, session expiration, and inconsistent responses, wherever relevant to the application.

This suite would be run after significant code changes and whenever the affected functionality could impact critical user journeys.

### 3. Full regression suite

This would cover the broader application, including secondary features, validation rules, navigation, supported device and operating system combinations, API integrations, and previously fixed defects.

I would run the full suite before major releases or when changes have a broad impact across the application.

### Automation strategy

I would not try to automate everything immediately. I would first establish a reliable manual baseline and identify stable, repetitive, high-value scenarios that are suitable for automation.

Where practical, I would prioritise API-level automation for business rules, data validation, and integration checks because these tests are generally faster and less affected by user-interface changes. I would then automate suitable critical mobile user journeys using a framework appropriate for the application's technology and team capabilities.

I would also consider which checks should remain manual, particularly exploratory testing, usability assessment, and scenarios requiring human judgement.

### Maintenance and execution

The suite should be integrated into the development workflow where possible. Smoke tests would run on suitable builds, targeted regression would run after relevant changes, and broader regression would run before release.

I would regularly review test failures, remove duplication, update outdated scenarios, investigate flaky tests, and ensure that the suite continues to reflect the current requirements.

For a financial application, I would measure the value of regression not simply by the number of tests but by how effectively it detects high-impact defects and protects critical user journeys.

## 5. What would keep you up at night about this app specifically and releasing to the public?

My biggest concern would be releasing an application that appears to work correctly during normal usage but fails under exceptional conditions, potentially affecting users' funds, account information, or trust in the platform.

I would be particularly concerned about the following risks:

### 1. Financial inaccuracies

Incorrect balances, prices, quantities, fees, or transaction records could have serious consequences. I would want strong evidence that financial data is calculated, processed, displayed, and reconciled correctly according to the defined business rules.

### 2. Duplicate or incorrectly processed orders

A timeout, repeated tap, retry, or network interruption could result in an order being submitted more than once or displayed with an incorrect status. I would want to verify that the system handles repeated requests safely and provides a reliable way to determine whether an order has been processed.

### 3. Data inconsistency

The mobile application, APIs, and backend could display conflicting information. I would prioritise checks that confirm important account and transaction information remains consistent across the relevant systems.

### 4. Security and unauthorised access

I would be concerned about weaknesses in authentication, session management, access controls, or the exposure of sensitive user information. I would expect appropriate security testing and evidence that critical security requirements have been addressed before release.

### 5. Poor recovery from failures

The application may behave correctly when the network is stable but fail when connectivity drops, the backend becomes unavailable, or the app is interrupted during an important operation. I would want to understand whether the application recovers safely and whether users receive clear, accurate feedback without losing information or unknowingly repeating an action.

### 6. iOS and Android differences

A defect may affect only certain devices, operating system versions, screen sizes, or hardware capabilities. I would want sufficient testing on supported physical devices, including lower-end devices, rather than relying entirely on a single device or simulator.

### 7. Insufficient testing evidence before launch

With only two weeks remaining and no established test suite or documentation, I would be concerned about hidden quality gaps, untested critical workflows, and pressure to release without understanding the remaining risks.

Before recommending release, I would want evidence that:

- Critical user journeys have been tested successfully on supported platforms.
- Financial calculations and transaction records are accurate according to the requirements.
- Order submission, status updates, retries, and failure recovery behave safely.
- Critical security and access-control requirements have been addressed.
- High-impact defects have been resolved and relevant regression tests have passed.
- The application is sufficiently stable across representative real iOS and Android devices.
- Remaining defects, untested areas, and residual risks have been documented and communicated to the relevant decision-makers.

I would not judge release readiness based only on a pass percentage. A high overall pass rate can still hide a critical failure in a financial workflow.

If a critical issue could lead to incorrect financial processing, duplicate orders, unauthorised access, data loss, or failure of an essential user journey, I would clearly communicate the risk and recommend delaying the release until the issue is resolved or an explicitly accepted mitigation is in place.

Ultimately, my responsibility as a QA professional is not just to find defects. It is to provide clear, evidence-based information that helps the team make an informed release decision while protecting users, their funds, and the organisation's reputation.