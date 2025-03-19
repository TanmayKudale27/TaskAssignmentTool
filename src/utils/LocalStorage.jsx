export const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    password: "123",
    role: "user",
    profile_img:
      "https://i.pinimg.com/736x/c7/9a/37/c79a37e13ef14be556b51143bcbb1b01.jpg",
    taskCount: {
      assigned: 4,
      accepted: 2,
      completed: 1,
      rejected: 0,
    },
    taskListData: [
      {
        taskTitle: "Build API Endpoints",
        taskDescription:
          "Develop secure RESTful APIs for user authentication, data management, and retrieval. Ensure scalability, security, and modularity for smooth integration with the frontend and other application components.",
        taskStatus: "Assigned",
        taskDueDate: "2024-12-20",
        taskAssignedDate: "2024-12-01",
      },
      {
        taskTitle: "Database Schema Design",
        taskDescription:
          "Design a normalized, scalable schema for managing user data. Focus on optimizing query performance, ensuring data consistency, and supporting future application growth.",
        taskStatus: "Assigned",
        taskDueDate: "2024-12-21",
        taskAssignedDate: "2024-12-02",
      },
      {
        taskTitle: "UI/UX Wireframe Creation",
        taskDescription:
          "Create visually appealing wireframes emphasizing usability and accessibility. Enhance user engagement by laying the foundation for interactive and intuitive dashboard interfaces.",
        taskStatus: "Assigned",
        taskDueDate: "2024-12-22",
        taskAssignedDate: "2024-12-03",
      },
      {
        taskTitle: "Setup CI/CD Pipeline",
        taskDescription:
          "Configure an automated CI/CD pipeline for efficient application building, testing, and deployment. Focus on reducing errors and improving software delivery processes.",
        taskStatus: "Assigned",
        taskDueDate: "2024-12-23",
        taskAssignedDate: "2024-12-04",
      },
      {
        taskTitle: "Frontend API Integration",
        taskDescription:
          "Seamlessly integrate frontend components with backend APIs. Ensure proper data flow, error handling, and responsiveness for an optimal user experience.",
        taskStatus: "Accepted",
        taskDueDate: "2024-12-24",
        taskAssignedDate: "2024-12-05",
      },
      {
        taskTitle: "Unit Testing for APIs",
        taskDescription:
          "Write unit tests to ensure backend API endpoints are functional and reliable. Test edge cases and validate API performance under different scenarios.",
        taskStatus: "Accepted",
        taskDueDate: "2024-12-25",
        taskAssignedDate: "2024-12-06",
      },
      {
        taskTitle: "Bug Fix: Dashboard Responsiveness",
        taskDescription:
          "Address UI responsiveness issues to ensure the dashboard displays correctly on different screen sizes, enhancing user experience on mobile devices.",
        taskStatus: "Completed",
        taskDueDate: "2024-12-26",
        taskAssignedDate: "2024-12-07",
      },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    password: "456",
    role: "user",
    profile_img:
      "https://i.pinimg.com/736x/24/91/0f/24910f726e8e849d73ba395a584181f0.jpg",
    taskCount: {
      assigned: 1,
      accepted: 1,
      completed: 2,
      rejected: 2,
    },
    taskListData: [
      {
        taskTitle: "Add Role-Based Access Control",
        taskDescription:
          "Implement RBAC to assign different access levels based on user roles. Improve system security by ensuring controlled access to application features.",
        taskStatus: "Assigned",
        taskDueDate: "2024-12-20",
        taskAssignedDate: "2024-12-01",
      },
      {
        taskTitle: "Optimize SQL Queries",
        taskDescription:
          "Optimize database queries to minimize execution time and enhance overall application performance. Focus on reducing redundant operations while ensuring data accuracy.",
        taskStatus: "Accepted",
        taskDueDate: "2024-12-21",
        taskAssignedDate: "2024-12-02",
      },
      {
        taskTitle: "Bug Fix: API Authentication",
        taskDescription:
          "Identify and resolve bugs affecting the API authentication module. Strengthen security measures to ensure reliable and authorized access.",
        taskStatus: "Completed",
        taskDueDate: "2024-12-22",
        taskAssignedDate: "2024-12-03",
      },
      {
        taskTitle: "Frontend Error Handling",
        taskDescription:
          "Implement robust error-handling mechanisms for frontend forms. Ensure users receive clear, actionable feedback during incorrect input or failed API calls.",
        taskStatus: "Completed",
        taskDueDate: "2024-12-23",
        taskAssignedDate: "2024-12-04",
      },
      {
        taskTitle: "Add Search Functionality",
        taskDescription:
          "Develop a search feature for the dashboard. Allow users to efficiently retrieve specific information from extensive datasets.",
        taskStatus: "Rejected",
        taskDueDate: "2024-12-24",
        taskAssignedDate: "2024-12-05",
      },
      {
        taskTitle: "Enhance Password Policy",
        taskDescription:
          "Strengthen user account security by implementing stricter password requirements, including length and character complexity.",
        taskStatus: "Rejected",
        taskDueDate: "2024-12-25",
        taskAssignedDate: "2024-12-06",
      },
    ],
  },
  {
    id: 3,
    name: "Mark Wilson",
    email: "mark.wilson@example.com",
    password: "789",
    role: "user",
    profile_img:
      "https://i.pinimg.com/736x/e5/45/ca/e545ca570256c9b8969b8fedb4c43b13.jpg",
    taskCount: {
      assigned: 1,
      accepted: 3,
      completed: 1,
      rejected: 0,
    },
    taskListData: [
      {
        taskTitle: "Build Notification Service",
        taskDescription:
          "Develop a microservice for real-time notifications. Include email and SMS alerts for better user communication.",
        taskStatus: "Assigned",
        taskDueDate: "2024-12-20",
        taskAssignedDate: "2024-12-01",
      },
      {
        taskTitle: "Frontend Redux Integration",
        taskDescription:
          "Integrate Redux into the frontend for efficient state management. Enable consistent data flow and reduced redundancy.",
        taskStatus: "Accepted",
        taskDueDate: "2024-12-21",
        taskAssignedDate: "2024-12-02",
      },
      {
        taskTitle: "Write API Documentation",
        taskDescription:
          "Document all backend API endpoints. Provide usage examples, expected outputs, and error codes for better developer understanding.",
        taskStatus: "Accepted",
        taskDueDate: "2024-12-22",
        taskAssignedDate: "2024-12-03",
      },
      {
        taskTitle: "Implement JWT Authentication",
        taskDescription:
          "Set up secure JWT-based user authentication. Focus on token generation, validation, and storage.",
        taskStatus: "Accepted",
        taskDueDate: "2024-12-23",
        taskAssignedDate: "2024-12-04",
      },
      {
        taskTitle: "Fix Memory Leak Issue",
        taskDescription:
          "Analyze and resolve memory leaks in backend services. Ensure better resource utilization and application stability.",
        taskStatus: "Completed",
        taskDueDate: "2024-12-24",
        taskAssignedDate: "2024-12-05",
      },
    ],
  },
  {
    id: 4,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    password: "000",
    role: "user",
    profile_img:
      "https://i.pinimg.com/736x/8d/e6/21/8de621e960298a6c9374933bbd91a69d.jpg",
    taskCount: {
      assigned: 1,
      accepted: 1,
      completed: 2,
      rejected: 3,
    },
    taskListData: [
      {
        taskTitle: "Deploy Application on AWS",
        taskDescription:
          "Deploy the web application using AWS EC2 instances. Ensure S3 bucket configuration for media handling.",
        taskStatus: "Assigned",
        taskDueDate: "2024-12-20",
        taskAssignedDate: "2024-12-01",
      },
      {
        taskTitle: "Setup Load Balancer",
        taskDescription:
          "Configure AWS Load Balancer for optimized traffic distribution and system availability.",
        taskStatus: "Accepted",
        taskDueDate: "2024-12-21",
        taskAssignedDate: "2024-12-02",
      },
      {
        taskTitle: "Optimize Frontend Performance",
        taskDescription:
          "Enhance page load times by implementing lazy loading and minimizing resource usage. Improve overall performance.",
        taskStatus: "Completed",
        taskDueDate: "2024-12-22",
        taskAssignedDate: "2024-12-03",
      },
      {
        taskTitle: "Implement Role Management",
        taskDescription:
          "Introduce role-based functionality. Focus on assigning and modifying roles for application users.",
        taskStatus: "Completed",
        taskDueDate: "2024-12-23",
        taskAssignedDate: "2024-12-04",
      },
      {
        taskTitle: "Fix Broken Links",
        taskDescription:
          "Identify and correct broken links throughout the web application for better user navigation.",
        taskStatus: "Rejected",
        taskDueDate: "2024-12-24",
        taskAssignedDate: "2024-12-05",
      },
      {
        taskTitle: "Improve Logging System",
        taskDescription:
          "Enhance application logging for better issue tracking. Implement structured logging methods.",
        taskStatus: "Rejected",
        taskDueDate: "2024-12-25",
        taskAssignedDate: "2024-12-06",
      },
      {
        taskTitle: "Add Multi-language Support",
        taskDescription:
          "Enable multi-language support for better accessibility. Focus on UI elements translation.",
        taskStatus: "Rejected",
        taskDueDate: "2024-12-26",
        taskAssignedDate: "2024-12-07",
      },
    ],
  },
];

export const admin = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@example.com",
    password: "admin",
    role: "admin",
    profile_img:
      "https://i.pinimg.com/736x/83/d9/60/83d960f66ee5f21e3516ff293f101961.jpg",
  },
];

export const setLocalData = () => {
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalData = () => {
  const data = localStorage.getItem("users");
  return data ? JSON.parse(data) : [];
};

export const getAdminData = () => {
  const data = localStorage.getItem("admin");
  return data? JSON.parse(data) : [];
};

// to find john.doe@example.com
