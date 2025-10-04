// Project data based on grading results
const projects = [
    {
        name: "SmartCircle",
        originalRepo: "https://github.com/SmartCircle-oct25/SmartCircle-oct25",
        forkRepo: "https://github.com/jamiechicago312/SmartCircle-oct25",
        status: "not-qualified",
        description: "Next.js frontend application for social network visualization with interactive graphs and connection management.",
        requirements: {
            agentSetup: "failed",
            conversation: "failed", 
            tools: "failed",
            codeQuality: "failed",
            mcpIntegration: "failed",
            mcpConfiguration: "failed",
            mcpFunctionality: "failed",
            documentation: "failed"
        },
        details: "Well-built Next.js frontend app but completely lacks OpenHands SDK usage and MCP integration."
    },
    {
        name: "Hey Listen",
        originalRepo: "https://github.com/hey-listen-oct25/hey-listen-oct25",
        forkRepo: "https://github.com/jamiechicago312/hey-listen-oct25",
        status: "not-qualified",
        description: "Audio transcription system using Whisper with Pinecone integration for semantic search.",
        requirements: {
            agentSetup: "failed",
            conversation: "failed",
            tools: "failed", 
            codeQuality: "met",
            mcpIntegration: "failed",
            mcpConfiguration: "failed",
            mcpFunctionality: "failed",
            documentation: "met"
        },
        details: "Excellent audio transcription system with comprehensive testing, but uses standalone Python classes instead of OpenHands SDK."
    },
    {
        name: "Dispatch",
        originalRepo: "https://github.com/dispatch-oct25/dispatch-oct25", 
        forkRepo: "https://github.com/jamiechicago312/dispatch-oct25",
        status: "not-qualified",
        description: "Next.js error monitoring application with Datadog integration and AI-powered error analysis.",
        requirements: {
            agentSetup: "failed",
            conversation: "failed",
            tools: "failed",
            codeQuality: "failed",
            mcpIntegration: "failed",
            mcpConfiguration: "failed", 
            mcpFunctionality: "failed",
            documentation: "failed"
        },
        details: "Functional Next.js error monitoring app with Datadog integration, but not an OpenHands Agent SDK project."
    },
    {
        name: "Chimera Heart",
        originalRepo: "https://github.com/ChimeraPublicDemo/ChimeraPublicDemo",
        forkRepo: "https://github.com/jamiechicago312/ChimeraPublicDemo", 
        status: "not-qualified",
        description: "Sophisticated MLOps platform for LLM optimization with GPU optimization and CUDA integration.",
        requirements: {
            agentSetup: "failed",
            conversation: "failed",
            tools: "failed",
            codeQuality: "failed",
            mcpIntegration: "failed",
            mcpConfiguration: "failed",
            mcpFunctionality: "failed",
            documentation: "failed"
        },
        details: "Production-grade MLOps platform with custom 'agent' classes unrelated to OpenHands SDK. Wrong repository submitted."
    },
    {
        name: "AI Agent Healthcare",
        originalRepo: "https://github.com/AI_agent_hackathon-oct25/AI_agent_hackathon-oct25",
        forkRepo: "https://github.com/jamiechicago312/AI_agent_hackathon-oct25",
        status: "not-qualified", 
        description: "Healthcare voice assistant with impressive technical features using phenoml.Client.",
        requirements: {
            agentSetup: "failed",
            conversation: "failed",
            tools: "failed",
            codeQuality: "failed",
            mcpIntegration: "failed",
            mcpConfiguration: "failed",
            mcpFunctionality: "failed",
            documentation: "failed"
        },
        details: "Well-built healthcare voice assistant but uses phenoml.Client instead of required OpenHands SDK Agent."
    },
    {
        name: "RedBot Security",
        originalRepo: "https://github.com/AI-Agents-Hackathon-2025-oct25/AI-Agents-Hackathon-2025-oct25",
        forkRepo: "https://github.com/jamiechicago312/AI-Agents-Hackathon-2025-oct25",
        status: "not-qualified",
        description: "Security testing application with 140+ attack methods and professional architecture.",
        requirements: {
            agentSetup: "failed",
            conversation: "failed", 
            tools: "failed",
            codeQuality: "met",
            mcpIntegration: "failed",
            mcpConfiguration: "failed",
            mcpFunctionality: "failed",
            documentation: "met"
        },
        details: "Impressive security testing application with clear documentation, but completely lacks OpenHands SDK and MCP integration."
    },
    {
        name: "Scout Navigation",
        originalRepo: "https://github.com/Datadog_Agent_Hackathon-oct25/Datadog_Agent_Hackathon-oct25",
        forkRepo: "https://github.com/jamiechicago312/Datadog_Agent_Hackathon-oct25",
        status: "not-qualified",
        description: "High-quality travel planning application with modern tech stack and comprehensive documentation.",
        requirements: {
            agentSetup: "failed",
            conversation: "failed",
            tools: "failed", 
            codeQuality: "met",
            mcpIntegration: "failed",
            mcpConfiguration: "failed",
            mcpFunctionality: "failed",
            documentation: "met"
        },
        details: "Professionally developed travel planning app, but built as traditional web application rather than OpenHands SDK project."
    }
];

// Requirement labels
const requirementLabels = {
    agentSetup: "Agent Setup",
    conversation: "Conversation Flow", 
    tools: "Tools Integration",
    codeQuality: "Code Quality",
    mcpIntegration: "MCP Integration",
    mcpConfiguration: "MCP Configuration",
    mcpFunctionality: "MCP Functionality", 
    documentation: "Documentation"
};

// Function to create project cards
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = `project-card ${project.status}`;
    
    // Count requirements
    const requirements = project.requirements;
    const metCount = Object.values(requirements).filter(status => status === 'met').length;
    const failedCount = Object.values(requirements).filter(status => status === 'failed').length;
    const exceededCount = Object.values(requirements).filter(status => status === 'exceeded').length;
    
    // Status badge
    let statusBadge = '';
    let statusText = '';
    if (project.status === 'not-qualified') {
        statusBadge = 'status-not-qualified';
        statusText = 'Not Qualified';
    } else if (project.status === 'qualified') {
        statusBadge = 'status-qualified';
        statusText = 'Qualified';
    } else if (project.status === 'exceeded') {
        statusBadge = 'status-exceeded';
        statusText = 'Exceeded';
    }
    
    // Create requirements list
    let requirementsList = '';
    for (const [key, status] of Object.entries(requirements)) {
        const label = requirementLabels[key];
        let icon = '';
        let className = '';
        
        if (status === 'met') {
            icon = 'fas fa-check-circle';
            className = 'req-met';
        } else if (status === 'failed') {
            icon = 'fas fa-times-circle';
            className = 'req-failed';
        } else if (status === 'exceeded') {
            icon = 'fas fa-star';
            className = 'req-exceeded';
        }
        
        requirementsList += `
            <li class="${className}">
                <i class="${icon}"></i>
                ${label}
            </li>
        `;
    }
    
    card.innerHTML = `
        <div class="project-header">
            <div>
                <h3 class="project-title">${project.name}</h3>
                <a href="${project.originalRepo}" target="_blank" class="project-link">
                    <i class="fas fa-external-link-alt"></i>
                    View Original Repository
                </a>
            </div>
            <div class="status-badge ${statusBadge}">
                ${statusText}
            </div>
        </div>
        
        <p class="project-description">${project.description}</p>
        
        <div class="requirements-summary">
            <h4>Requirements Assessment:</h4>
            <ul class="requirements-list">
                ${requirementsList}
            </ul>
        </div>
        
        <div class="project-details">
            <p><strong>Assessment:</strong> ${project.details}</p>
        </div>
        
        <div class="project-stats">
            <small>
                <i class="fas fa-check-circle req-met"></i> ${metCount} Met | 
                <i class="fas fa-times-circle req-failed"></i> ${failedCount} Failed | 
                <i class="fas fa-star req-exceeded"></i> ${exceededCount} Exceeded
            </small>
        </div>
    `;
    
    return card;
}

// Function to populate projects grid
function populateProjectsGrid() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    projects.forEach((project, index) => {
        const card = createProjectCard(project);
        // Add staggered animation delay
        card.style.animationDelay = `${(index + 1) * 0.1}s`;
        projectsGrid.appendChild(card);
    });
}

// Function to update stats
function updateStats() {
    const totalProjects = projects.length;
    const qualifiedProjects = projects.filter(p => p.status === 'qualified' || p.status === 'exceeded').length;
    const notQualifiedProjects = projects.filter(p => p.status === 'not-qualified').length;
    
    // Update the stats in the header
    const statCards = document.querySelectorAll('.stat-card .stat-number');
    if (statCards.length >= 3) {
        statCards[0].textContent = totalProjects;
        statCards[1].textContent = qualifiedProjects;
        statCards[2].textContent = notQualifiedProjects;
    }
}

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', function() {
    populateProjectsGrid();
    updateStats();
    
    // Add smooth scrolling for any internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add loading animation completion
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 1000);
});

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers for project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking on a link
            if (e.target.tagName === 'A' || e.target.closest('a')) {
                return;
            }
            
            // Add a subtle click effect
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});