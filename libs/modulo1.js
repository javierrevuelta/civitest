const quizData = [
  {
    question:
      "What is the primary purpose of Supplier Performance Management in SAP Ariba?",
    answers: [
      "To monitor financial transactions",
      "To evaluate supplier performance and drive improvements",
      "To manage purchase orders",
      "To conduct supplier audits",
    ],
    correct: 1,
  },
  {
    question:
      "How can you initiate a Supplier Performance Management project in SAP Ariba?",
    answers: [
      "By sending an email to the supplier",
      "By creating a new project in the Supplier Management module",
      "By setting up a new contract",
      "By generating a new purchase order",
    ],
    correct: 1,
  },
  {
    question:
      "What are the key steps involved in creating a Supplier Performance Management project?",
    answers: [
      "Initiation, Planning, Execution, Monitoring, Closure",
      "Planning, Execution, Monitoring, Review",
      "Initiation, Execution, Review, Archival",
      "Initiation, Planning, Monitoring, Review",
    ],
    correct: 0,
  },
  {
    question:
      "How can you define the scope of a Supplier Performance Management project?",
    answers: [
      "By selecting the project manager",
      "By creating a purchase order",
      "By determining the budget",
      "By setting performance metrics and evaluation criteria",
    ],
    correct: 3,
  },
  {
    question:
      "What criteria can be used to evaluate supplier performance in SAP Ariba?",
    answers: [
      "Delivery time, Quality, Cost, Service",
      "Marketing strategy, Financial performance",
      "Employee satisfaction, Corporate social responsibility",
      "Inventory levels, Stock turnover",
    ],
    correct: 0,
  },
  {
    question:
      "How do you set up scorecards for supplier performance evaluation?",
    answers: [
      "By creating a new scorecard template in the system",
      "By emailing the scorecard to the supplier",
      "By importing scorecards from Excel",
      "By manually entering scores into the ERP system",
    ],
    correct: 0,
  },
  {
    question:
      "What are KPIs (Key Performance Indicators), and how are they used in Supplier Performance Management?",
    answers: [
      "Indicators of supplier financial stability",
      "Metrics used to measure supplier performance against defined objectives",
      "Parameters to track shipment status",
      "Indicators of market share growth",
    ],
    correct: 1,
  },
  {
    question:
      "How can you customize the evaluation forms for different suppliers?",
    answers: [
      "By modifying the template to fit specific supplier requirements",
      "By using the same form for all suppliers",
      "By generating forms from purchase orders",
      "By downloading forms from the internet",
    ],
    correct: 0,
  },
  {
    question: "What is the importance of weightings in supplier scorecards?",
    answers: [
      "They help prioritize certain performance metrics over others",
      "They determine the total number of suppliers",
      "They are used to calculate discounts",
      "They adjust the supplier's financial status",
    ],
    correct: 0,
  },
  {
    question:
      "How can you track and monitor supplier performance over time in SAP Ariba?",
    answers: [
      "By using supplier scorecards and regular reviews",
      "By checking supplier financial statements",
      "By analyzing market trends",
      "By monitoring social media activity",
    ],
    correct: 0,
  },
  {
    question:
      "What are the common challenges in Supplier Performance Management, and how can SAP Ariba help address them?",
    answers: [
      "Lack of data, SAP Ariba provides data analytics tools",
      "High costs, SAP Ariba reduces operational expenses",
      "Limited suppliers, SAP Ariba increases supplier base",
      "Regulatory issues, SAP Ariba ensures compliance",
    ],
    correct: 0,
  },
  {
    question:
      "How can you integrate external data sources into Supplier Performance Management?",
    answers: [
      "By using manual data entry",
      "By leveraging SAP Ariba's data integration capabilities",
      "By printing and filing data",
      "By using third-party software without integration",
    ],
    correct: 1,
  },
  {
    question:
      "What role does feedback play in Supplier Performance Management, and how can it be collected?",
    answers: [
      "Feedback helps improve performance; it can be collected through surveys",
      "Feedback is not relevant",
      "Feedback is only for internal use",
      "Feedback can be ignored",
    ],
    correct: 0,
  },
  {
    question:
      "How do you handle non-compliance issues in Supplier Performance Management?",
    answers: [
      "By terminating the contract immediately",
      "By issuing corrective action plans and working with the supplier to resolve issues",
      "By ignoring the issues",
      "By increasing purchase orders",
    ],
    correct: 1,
  },
  {
    question:
      "What are the benefits of using SAP Ariba for Supplier Performance Management?",
    answers: [
      "Improved supplier relationships, data-driven decision making",
      "Increased manual work, higher costs",
      "Less transparency, slower processes",
      "Reduced supplier base, limited data access",
    ],
    correct: 0,
  },
  {
    question:
      "How can you leverage SAP Ariba to improve supplier collaboration?",
    answers: [
      "By using integrated communication tools and shared performance data",
      "By restricting communication channels",
      "By reducing interaction with suppliers",
      "By increasing penalties for poor performance",
    ],
    correct: 0,
  },
  {
    question:
      "What are the reporting capabilities in SAP Ariba for Supplier Performance Management?",
    answers: [
      "Basic reports only",
      "Advanced analytics and customizable reports",
      "No reporting capabilities",
      "Only financial reports",
    ],
    correct: 1,
  },
  {
    question:
      "How can you automate supplier performance tracking in SAP Ariba?",
    answers: [
      "By manually entering data weekly",
      "By setting up automated data collection and performance tracking workflows",
      "By relying on supplier self-reporting",
      "By using paper-based forms",
    ],
    correct: 1,
  },
  {
    question:
      "What is the role of alerts and notifications in Supplier Performance Management?",
    answers: [
      "To inform suppliers of new contracts",
      "To update financial records",
      "To announce company events",
      "To notify stakeholders of performance issues and milestones",
    ],
    correct: 3,
  },
  {
    question:
      "How can you use SAP Ariba to drive continuous improvement in supplier performance?",
    answers: [
      "By regularly updating performance metrics and feedback",
      "By setting static performance criteria",
      "By not changing performance criteria",
      "By reducing performance reviews",
    ],
    correct: 0,
  },
  {
    question:
      "What are the key metrics tracked in Supplier Performance Management?",
    answers: [
      "Delivery accuracy, Quality defects, Cost efficiency, Service levels",
      "Marketing effectiveness, Brand awareness",
      "Employee turnover, Training hours",
      "Inventory levels, Sales growth",
    ],
    correct: 0,
  },
  {
    question: "How can supplier performance data be visualized in SAP Ariba?",
    answers: [
      "Using dashboards and visual analytics tools",
      "By printing data charts",
      "By manually creating graphs in Excel",
      "By using text-only reports",
    ],
    correct: 0,
  },
  {
    question:
      "What are the best practices for managing supplier performance data?",
    answers: [
      "Regular updates, accurate data entry, secure storage",
      "Occasional updates, manual entry, unsecured storage",
      "No updates, manual processes, paper storage",
      "Infrequent updates, automated processes, limited access",
    ],
    correct: 0,
  },
  {
    question:
      "How can you ensure data accuracy and consistency in Supplier Performance Management?",
    answers: [
      "By implementing automated data collection and validation",
      "By using multiple data entry points",
      "By allowing suppliers to update their own data",
      "By not validating data",
    ],
    correct: 0,
  },
  {
    question:
      "How do you manage different performance evaluation cycles in SAP Ariba?",
    answers: [
      "By setting up recurring evaluation templates and schedules",
      "By performing evaluations once a year",
      "By using ad-hoc evaluation methods",
      "By conducting evaluations based on supplier requests",
    ],
    correct: 0,
  },
  {
    question: "What are the benefits of benchmarking supplier performance?",
    answers: [
      "Identifying best practices and setting performance standards",
      "Reducing supplier diversity",
      "Increasing purchase order volume",
      "Limiting supplier interactions",
    ],
    correct: 0,
  },
  {
    question: "How can you handle multi-tier supplier performance management?",
    answers: [
      "By tracking performance across all tiers of the supply chain",
      "By focusing only on primary suppliers",
      "By ignoring sub-suppliers",
      "By using only financial metrics",
    ],
    correct: 0,
  },
  {
    question:
      "What are the critical success factors for a Supplier Performance Management project?",
    answers: [
      "Clear objectives, stakeholder engagement, accurate data, continuous improvement",
      "High costs, minimal engagement",
      "Lack of objectives, inconsistent data",
      "Single stakeholder, static processes",
    ],
    correct: 0,
  },
  {
    question:
      "What is a key component of SAP Ariba Supplier Lifecycle Management?",
    answers: [
      "Contract Management",
      "Supplier Performance Evaluation",
      "Production Planning",
      "Inventory Management",
    ],
    correct: 1,
  },
  {
    question:
      "What is the primary function of the Supplier Evaluation module in SAP Ariba?",
    answers: [
      "Create Purchase Orders",
      "Monitor Supplier Performance",
      "Manage Supply Chain",
      "Process Payments to Suppliers",
    ],
    correct: 1,
  },
  {
    question:
      "What key information is gathered during the onboarding phase of a new supplier?",
    answers: [
      "Transaction History",
      "Contact and Compliance Data",
      "Marketing Strategies",
      "Production Plans",
    ],
    correct: 1,
  },
  {
    question:
      "Which process allows a company to evaluate and rank suppliers based on their performance?",
    answers: [
      "Sourcing",
      "Onboarding",
      "Supplier Performance Management",
      "Contract Management",
    ],
    correct: 2,
  },
  {
    question:
      "Which of the following is a critical step in the supplier onboarding process in SAP Ariba?",
    answers: [
      "Create a Contract",
      "Supplier Risk Assessment",
      "Purchase Order Request",
      "Inventory Monitoring",
    ],
    correct: 1,
  },
  {
    question:
      "What is the purpose of an assessment questionnaire in SAP Ariba?",
    answers: [
      "Place Orders",
      "Evaluate Supplier Performance",
      "Collect Compliance and Risk Information",
      "Generate Financial Reports",
    ],
    correct: 2,
  },
  {
    question:
      "What is a benefit of using SAP Ariba Supplier Lifecycle Management?",
    answers: [
      "Increased Inventory",
      "Improved Supplier Collaboration",
      "Higher Marketing Spend",
      "Reduced Product Development Time",
    ],
    correct: 1,
  },
  {
    question:
      "What does SAP Ariba Supplier Lifecycle Management primarily focus on?",
    answers: [
      "Managing Supplier Relationships",
      "Creating Marketing Campaigns",
      "Monitoring Customer Feedback",
      "Tracking Sales Performance",
    ],
    correct: 0,
  },
  {
    question:
      "Which module in SAP Ariba helps in assessing supplier capabilities?",
    answers: [
      "Contract Management",
      "Sourcing",
      "Supplier Qualification",
      "Procurement",
    ],
    correct: 2,
  },
  {
    question:
      "What role does supplier performance data play in SAP Ariba Supplier Lifecycle Management?",
    answers: [
      "Setting Inventory Levels",
      "Driving Marketing Strategy",
      "Making Strategic Sourcing Decisions",
      "Forecasting Sales",
    ],
    correct: 2,
  },
  {
    question:
      "Which step is included in the supplier qualification process in SAP Ariba?",
    answers: [
      "Sending Invoices",
      "Evaluating Supplier Capabilities",
      "Managing Payroll",
      "Conducting Sales Training",
    ],
    correct: 1,
  },
  {
    question: "How does SAP Ariba help in managing supplier information?",
    answers: [
      "By Automating Production",
      "Through Centralized Supplier Data Management",
      "By Tracking Employee Performance",
      "Through Market Analysis",
    ],
    correct: 1,
  },
  {
    question:
      "What is the primary goal of Supplier Risk Management in SAP Ariba?",
    answers: [
      "Increase Sales",
      "Reduce Supply Chain Risks",
      "Enhance Product Features",
      "Decrease Marketing Expenses",
    ],
    correct: 1,
  },
  {
    question:
      "In SAP Ariba, what is the purpose of supplier performance management?",
    answers: [
      "Negotiating Contract Terms",
      "Evaluating Supplier Performance",
      "Managing Customer Relationships",
      "Forecasting Demand",
    ],
    correct: 1,
  },
  {
    question:
      "Which of the following can be evaluated using SAP Ariba Supplier Performance Management?",
    answers: [
      "Supplier Delivery Timeliness",
      "Product Development Costs",
      "Employee Productivity",
      "Market Trends",
    ],
    correct: 0,
  },
  {
    question: "What type of risk assessments can be conducted in SAP Ariba?",
    answers: [
      "Financial Risk Assessments",
      "Market Risk Assessments",
      "Supplier Risk Assessments",
      "Customer Risk Assessments",
    ],
    correct: 2,
  },
  {
    question:
      "Which document is typically used to collect supplier information during onboarding?",
    answers: [
      "Purchase Order",
      "Supplier Questionnaire",
      "Sales Report",
      "Contract Agreement",
    ],
    correct: 1,
  },
  {
    question:
      "How can SAP Ariba Supplier Lifecycle Management improve supplier collaboration?",
    answers: [
      "By Increasing Inventory Levels",
      "Through Real-Time Data Sharing",
      "By Reducing Marketing Costs",
      "Through Sales Promotions",
    ],
    correct: 1,
  },
  {
    question:
      "What is a benefit of supplier performance evaluations in SAP Ariba?",
    answers: [
      "Higher Inventory Levels",
      "Better Supplier Relationship Management",
      "Reduced Production Costs",
      "Increased Marketing Budget",
    ],
    correct: 1,
  },
  {
    question:
      "In SAP Ariba, what does a supplier risk assessment typically involve?",
    answers: [
      "Evaluating Supplier Compliance",
      "Setting Production Schedules",
      "Planning Marketing Campaigns",
      "Managing Payroll",
    ],
    correct: 0,
  },
  {
    question:
      "What is the purpose of a supplier performance scorecard in SAP Ariba?",
    answers: [
      "Track Supplier Deliveries",
      "Evaluate Supplier Financials",
      "Measure Supplier Performance",
      "Plan Marketing Strategies",
    ],
    correct: 2,
  },
  {
    question: "How does SAP Ariba support compliance management for suppliers?",
    answers: [
      "By Automating Sales Orders",
      "Through Compliance Tracking and Reporting",
      "By Managing Inventory Levels",
      "Through Market Research",
    ],
    correct: 1,
  },
  {
    question:
      "What type of data is analyzed in SAP Ariba supplier performance reports?",
    answers: [
      "Sales Data",
      "Supplier Delivery Performance",
      "Customer Feedback",
      "Employee Attendance",
    ],
    correct: 1,
  },
  {
    question: "Why is supplier risk management important in SAP Ariba?",
    answers: [
      "To Increase Sales Revenue",
      "To Mitigate Supply Chain Risks",
      "To Enhance Customer Satisfaction",
      "To Reduce Marketing Costs",
    ],
    correct: 1,
  },
  {
    question: "How does SAP Ariba help in identifying high-risk suppliers?",
    answers: [
      "By Monitoring Inventory Levels",
      "Through Risk Assessment Tools",
      "By Tracking Sales Performance",
      "Through Employee Feedback",
    ],
    correct: 1,
  },
  {
    question: "What is the main focus of supplier qualification in SAP Ariba?",
    answers: [
      "Ensuring Supplier Capability and Compliance",
      "Increasing Marketing Budget",
      "Reducing Production Time",
      "Managing Customer Relationships",
    ],
    correct: 0,
  },
  {
    question:
      "Which of the following is a feature of SAP Ariba Supplier Management?",
    answers: [
      "Supplier Onboarding",
      "Sales Forecasting",
      "Marketing Analysis",
      "Product Design",
    ],
    correct: 0,
  },
  {
    question:
      "How does SAP Ariba Supplier Lifecycle Management benefit procurement teams?",
    answers: [
      "By Automating Payroll",
      "Through Enhanced Supplier Insights",
      "By Increasing Sales",
      "Through Product Development",
    ],
    correct: 1,
  },
  {
    question: "What is the role of supplier segmentation in SAP Ariba?",
    answers: [
      "Categorizing Suppliers Based on Performance",
      "Increasing Marketing Spend",
      "Reducing Inventory Levels",
      "Managing Employee Training",
    ],
    correct: 0,
  },
  {
    question: "In SAP Ariba, what does the term 'supplier lifecycle' refer to?",
    answers: [
      "The Entire Process of Managing Supplier Relationships",
      "The Product Development Cycle",
      "The Marketing Campaign Timeline",
      "The Employee Onboarding Process",
    ],
    correct: 0,
  },
  {
    question:
      "How does integration with ERP systems benefit SAP Ariba Supplier Management?",
    answers: [
      "By Enhancing User Experience",
      "By Synchronizing Financial and Order Data",
      "By Managing Inventories",
      "By Creating Marketing Campaigns",
    ],
    correct: 1,
  },
  {
    question: "What is a supplier profile in SAP Ariba?",
    answers: [
      "A Summary of Supplier Information and Capabilities",
      "A List of Purchase Orders",
      "A Financial Report",
      "A Marketing Plan",
    ],
    correct: 0,
  },
  {
    question:
      "How can organizations ensure data accuracy in SAP Ariba Supplier Management?",
    answers: [
      "By Conducting Market Research",
      "Through Regular Data Audits and Updates",
      "By Increasing Sales Efforts",
      "Through Employee Training",
    ],
    correct: 1,
  },
  {
    question: "What is the purpose of a supplier risk scorecard in SAP Ariba?",
    answers: [
      "Measure Supplier Risk Levels",
      "Track Sales Performance",
      "Monitor Inventory Levels",
      "Plan Marketing Strategies",
    ],
    correct: 0,
  },
  {
    question:
      "What type of templates are used in SAP Ariba for supplier evaluations?",
    answers: [
      "Standardized Questionnaires",
      "Purchase Orders",
      "Sales Reports",
      "Financial Statements",
    ],
    correct: 0,
  },
  {
    question:
      "In SAP Ariba, what is the function of the Configuration Manager?",
    answers: [
      "To Set Up Rules and Processes for Supplier Evaluation",
      "To Create Financial Reports",
      "To Monitor Inventory Levels",
      "To Manage Purchase Orders",
    ],
    correct: 0,
  },
  {
    question:
      "How does SAP Ariba Supplier Management handle compliance issues?",
    answers: [
      "By Automating Payroll",
      "Through Compliance Audits and Reporting",
      "By Increasing Marketing Budget",
      "Through Employee Surveys",
    ],
    correct: 1,
  },
  {
    question:
      "What is the significance of real-time data in SAP Ariba Supplier Management?",
    answers: [
      "Improving Supplier Collaboration and Decision Making",
      "Increasing Sales Revenue",
      "Enhancing Customer Satisfaction",
      "Reducing Production Time",
    ],
    correct: 0,
  },
  {
    question:
      "What is a key benefit of using SAP Ariba for supplier risk assessments?",
    answers: [
      "Automated Sales Tracking",
      "Comprehensive Risk Evaluation and Mitigation",
      "Enhanced Product Features",
      "Increased Marketing Spend",
    ],
    correct: 1,
  },
  {
    question:
      "Which type of analysis is facilitated by SAP Ariba Supplier Management?",
    answers: [
      "Supplier Risk Analysis",
      "Market Trend Analysis",
      "Employee Performance Analysis",
      "Customer Satisfaction Analysis",
    ],
    correct: 0,
  },
];

export { quizData };
