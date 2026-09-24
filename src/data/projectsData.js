export const partnerProfiles = {
  yazish: {
    name: "Yazish Safa",
    role: "Full-Stack Developer | PHP/Laravel & AI Applications",
    email: "Yazish19@gmail.com",
    phone: "+92 325 1933330",
    location: "Lahore, Pakistan",
    linkedin: "https://linkedin.com/in/yazish-safa-592ba2366",
    github: "https://github.com/yapper21",
    education: "B.Sc. Computer Science — University of Central Punjab, Lahore (2023 – 2027 Expected)"
  },
  uneeb: {
    name: "Uneeb Zia",
    role: "Full-Stack Developer & Co-Engineer",
    email: "uneebziam07@gmail.com",
    phone: "03350557726",
    location: "Lahore, Pakistan",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    education: "B.Sc. Computer Science — University of Central Punjab, Lahore"
  }
};

export const workExperiences = [
  {
    role: "Web Development Intern",
    company: "CrewLogix Technologies, Lahore (Hybrid)",
    period: "Jun – Aug 2025",
    points: [
      "Developed and maintained backend modules for a multi-user SaaS platform using PHP (Laravel) and MySQL, supporting 500+ active users.",
      "Built RESTful APIs in Laravel and implemented JWT-based authentication, strengthening secure data access across the platform.",
      "Triaged and resolved 30+ bug tickets via Jira using root-cause analysis, contributing to a stable production release."
    ]
  },
  {
    role: "Freelance Software Developer & Designer",
    company: "Self-Employed, Remote",
    period: "2022 – Present",
    points: [
      "Delivered end-to-end web, mobile, and automation solutions for 20+ clients across diverse industries; built Python scripts that automated repetitive workflows, reducing manual effort by ~70%.",
      "Designed and developed responsive websites and applications using PHP, Laravel, HTML/CSS, and JavaScript; independently managed project lifecycles from requirements gathering through deployment and client handoff."
    ]
  }
];

export const hackathonsAndAchievements = [
  { title: "Winner — DEX, UI/UX Design Competition", date: "June 2026" },
  { title: "Winner — Techathon 2.0, Vibe Coding Category", date: "April 2026" },
  { title: "Participant — Think2Code 2.0 Hackathon", date: "June 2026" }
];

export const certificationsList = [
  "Python for Everybody (Michigan/Coursera)",
  "Responsive Web Design (freeCodeCamp)",
  "AI For Everyone (DeepLearning.AI)",
  "Database Management Essentials (CU/Coursera)"
];

export const projectsData = [
  {
    id: "aegis-7",
    slug: "aegis-7",
    title: "Aegis 7 — AI Nuclear War Survival Chatbot",
    category: "AI & Mobile",
    badge: "AI & Python Flask",
    status: "Featured Project",
    shortDesc: "Conversational AI assistant delivering real-time survival guidance and safety protocols for nuclear and radiological emergency scenarios.",
    fullDesc: "Aegis 7 is a conversational AI assistant delivering real-time survival guidance and safety protocols for nuclear/radiological emergency scenarios. It integrates GPT-based NLP with a Flask backend and custom prompt engineering to sustain coherent, context-aware, multi-turn emergency guidance.",
    features: [
      "Developed a conversational AI assistant delivering real-time survival guidance for emergency scenarios",
      "Integrated GPT-based NLP with a Flask backend and context-aware multi-turn guidance",
      "Shielding Mass Attenuation Calculator computing radiation exposure reduction",
      "ARS (Acute Radiation Syndrome) Symptom Checker with severity diagnostics",
      "Emergency Civil Air Patrol & Shortwave Broadcast Frequency Guide"
    ],
    stack: ["Python", "Flask", "OpenAI API", "Scikit-learn", "React 19", "Capacitor"],
    metrics: {
      "Response Mode": "Real-time Multi-turn AI",
      "Safety Guidance": "Nuclear & Emergency Protocols",
      "Platform": "Web & Mobile"
    },
    architecture: "User Input -> Flask API -> GPT-based NLP Engine -> Safety Context Parser -> Survival Response",
    codeSnippet: `from flask import Flask, request, jsonify
import openai

app = Flask(__name__)

@app.route("/api/survival-guidance", methods=["POST"])
def survival_guidance():
    user_query = request.json.get("query")
    response = openai.ChatCompletion.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": "Emergency Nuclear & Radiation Survival Protocol Specialist."},
            {"role": "user", "content": user_query}
        ]
    )
    return jsonify({"guidance": response.choices[0].message.content})`,
    screenshots: [
      "/screenshots/aegis7_custom1.png",
      "/screenshots/aegis7_custom2.png",
      "/screenshots/aegis7_custom3.png",
      "/screenshots/aegis7_custom4.png",
      "/screenshots/aegis7_chat.png",
      "/screenshots/aegis7_shielding.png",
      "/screenshots/aegis7_symptom.png"
    ]
  },
  {
    id: "live-traffic-anomaly-detector",
    slug: "live-traffic-anomaly-detector",
    title: "Live Traffic Anomaly Detector",
    category: "Systems & Security",
    badge: "Python & ML Security",
    status: "Cybersecurity Engine",
    shortDesc: "Real-time packet-capture pipeline streaming network traffic into a Scikit-learn inference engine to flag anomalies under 500ms.",
    fullDesc: "Engineered a real-time packet-capture pipeline on macOS using Scapy, streaming live network traffic into a Scikit-learn inference engine to flag anomalies (port scans, DDoS patterns) in under 500ms. Trained Isolation Forest and One-Class SVM models, achieving 91% detection accuracy with a false-positive rate below 5% on unseen traffic.",
    features: [
      "Engineered a real-time packet-capture pipeline on macOS using Scapy streaming live traffic",
      "Trained Isolation Forest and One-Class SVM models achieving 91% detection accuracy",
      "Achieved a false-positive rate below 5% on unseen production network traffic",
      "Built a Flask + WebSocket dashboard visualizing live traffic volume and protocol distribution",
      "Automated iptables firewall mitigation rule generation for flagged anomalous IPs"
    ],
    stack: ["Python", "Scapy", "Scikit-learn", "Flask", "WebSockets", "Raw Sockets"],
    metrics: {
      "Detection Speed": "Under 500ms",
      "ML Accuracy": "91% Accuracy",
      "False Positive": "Below 5%"
    },
    architecture: "Scapy Capture -> Feature Extractor -> Scikit-learn Inference -> Flask WebSockets -> Dashboard",
    codeSnippet: `from scapy.all import sniff, IP, TCP
from sklearn.ensemble import IsolationForest

model = IsolationForest(contamination=0.05)

def packet_callback(packet):
    if IP in packet:
        features = extract_packet_features(packet)
        prediction = model.predict([features])
        if prediction[0] == -1:
            trigger_anomaly_alert(packet[IP].src, reason="SUSPICIOUS_PACKET_STREAM")`,
    screenshots: ["/screenshots/network_ids.png"]
  },
  {
    id: "licensing-management-app",
    slug: "licensing-management-app",
    title: "Licensing Management Application",
    category: "Full-Stack Web",
    badge: "PHP & Filament Admin",
    status: "Enterprise Platform",
    shortDesc: "Full software license management system using Laravel and Filament admin panel for automated license issuance & expiry.",
    fullDesc: "Built a full license management system using Laravel and the Filament admin panel, automating license issuance, validation, and expiry tracking. Implemented role-based access control (RBAC) and an interactive admin dashboard for real-time client and license management.",
    features: [
      "Built a full license management system using Laravel and Filament admin panel",
      "Automated license key issuance, cryptographic validation, and expiry tracking",
      "Implemented role-based access control (RBAC) and client management permissions",
      "Machine hardware fingerprint binding & domain lock validation",
      "RESTful API endpoints for client desktop and web application integration"
    ],
    stack: ["PHP", "Laravel", "Filament", "MySQL", "REST APIs", "JWT Auth"],
    metrics: {
      "Admin Panel": "Filament Dashboard",
      "Security": "Role-Based Access Control",
      "Validation": "Domain & Hardware Binding"
    },
    architecture: "Client Request -> Filament Admin API -> License Controller -> Hardware Fingerprint Validator -> Response",
    codeSnippet: `use Filament\\Resources\\Resource;

class LicenseResource extends Resource {
    protected static ?string $model = License::class;
    
    public static function form(Form $form): Form {
        return $form->schema([
            TextInput::make('license_key')->required()->unique(),
            Select::make('status')->options(['active' => 'Active', 'expired' => 'Expired']),
            DateTimePicker::make('expires_at')->required()
        ]);
    }
}`,
    screenshots: ["/screenshots/licensing_system.png"]
  },
  {
    id: "hair-salon-management-db",
    slug: "hair-salon-management-db",
    title: "Hair Salon Management Database",
    category: "Full-Stack Web",
    badge: "MySQL & DBMS Design",
    status: "Database System",
    shortDesc: "Normalized relational database in MySQL managing appointments, staff schedules, services, and customer records.",
    fullDesc: "Designed a normalized relational database in MySQL to manage appointments, staff, services, and customer records for a salon business. Applied ER modeling, primary/foreign key constraints, and query optimization to ensure data integrity and efficient retrieval.",
    features: [
      "Designed a normalized relational database in MySQL to manage salon business operations",
      "Applied ER modeling, primary and foreign key constraints for high data integrity",
      "Optimized SQL queries for fast appointment scheduling and customer lookup",
      "Structured table schemas for staff schedules, service catalogs, and billing records"
    ],
    stack: ["MySQL", "SQL", "Database Design", "ER Modeling", "DBMS"],
    metrics: {
      "Schema": "Fully Normalized 3NF",
      "Performance": "Optimized Indexes",
      "Integrity": "Foreign Key Constraints"
    },
    architecture: "ER Diagram -> Normalized Tables -> Primary/Foreign Keys -> Optimized SQL Queries",
    codeSnippet: `CREATE TABLE appointments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
    staff_id INT NOT NULL,
    service_id INT NOT NULL,
    appointment_time DATETIME NOT NULL,
    status VARCHAR(20) DEFAULT 'scheduled',
    FOREIGN KEY (customer_id) REFERENCES customers(id),
    FOREIGN KEY (staff_id) REFERENCES staff(id)
);`,
    screenshots: ["/screenshots/myapp_ecommerce.png"]
  },
  {
    id: "healthcare-appointment-platform",
    slug: "healthcare-appointment-platform",
    title: "Healthcare Appointment & Scheduling Platform",
    category: "Full-Stack Web",
    badge: "Full-Stack Web App",
    status: "Health-Tech Web App",
    shortDesc: "Health-tech web application allowing doctors to manage schedules and patients to book, reschedule, and track appointments.",
    fullDesc: "Built a health-tech application allowing doctors to manage schedules and patients to book, reschedule, and track appointments in real time. Designed an intuitive booking workflow with doctor availability management, reducing scheduling conflicts.",
    features: [
      "Built a health-tech application allowing doctors to manage schedules in real time",
      "Enabled patients to book, reschedule, and track appointment statuses online",
      "Designed an intuitive booking workflow with automated conflict prevention",
      "Implemented secure patient data management and doctor availability portals"
    ],
    stack: ["PHP", "Laravel", "React.js", "MySQL", "REST APIs", "Tailwind CSS"],
    metrics: {
      "Booking Workflow": "Real-time Conflict Free",
      "Target Users": "Doctors & Patients",
      "Platform": "Full-Stack Web App"
    },
    architecture: "Patient UI -> Doctor Schedule Controller -> Booking Processor -> MySQL DB -> Real-Time Availability View",
    codeSnippet: `Route::middleware(['auth'])->group(function () {
    Route::get('/appointments', [AppointmentController::class, 'index']);
    Route::post('/appointments/book', [AppointmentController::class, 'store']);
    Route::post('/appointments/{id}/reschedule', [AppointmentController::class, 'update']);
});`,
    screenshots: ["/screenshots/myapp_ecommerce.png"]
  },
  {
    id: "geo-intel-backend",
    slug: "geo-intel-backend",
    title: "Geo-Intel AI Backend Engine",
    category: "AI & Backend",
    badge: "AI Intelligence API",
    status: "Backend API",
    shortDesc: "Geopolitical risk analysis backend built with Node.js, Express, and OpenAI GPT-4o for structured country risk intelligence.",
    fullDesc: "Geo-Intel API is an intelligence analysis backend that converts unstructured queries into structured JSON assessments. By leveraging custom OpenAI GPT-4o system prompts, it evaluates target countries across military posture, trade stability, diplomatic relations, and humanitarian risk.",
    features: [
      "Structured JSON response enforcement with schema validation",
      "Sectoral impact breakdown (Military, Economic, Diplomatic, Humanitarian)",
      "Geopolitical risk score computation & event timeline extraction",
      "Express.js REST API with CORS protection and error middleware"
    ],
    stack: ["Node.js", "Express.js", "OpenAI GPT-4o", "REST API", "Dotenv"],
    metrics: {
      "Latency": "Sub-800ms",
      "Response Format": "Structured JSON",
      "Coverage": "Global 195+ Nations"
    },
    architecture: "Client Request -> Express Server -> System Prompt -> OpenAI API -> JSON Parser",
    codeSnippet: `import express from "express";
import OpenAI from "openai";

const app = express();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post("/analyze", async (req, res) => {
  const { country } = req.body;
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: \`Analyze \${country}\` }]
  });
  res.json(JSON.parse(completion.choices[0].message.content));
});`,
    screenshots: ["/screenshots/geo_intel.png"]
  },
  {
    id: "minios",
    slug: "minios",
    title: "miniOS Bare-Metal x86 Kernel",
    category: "Systems & Security",
    badge: "x86 Assembly Kernel",
    status: "OS Kernel",
    shortDesc: "Custom 16-bit and 32-bit x86 operating system kernel and bootloader written from scratch in Assembly and C.",
    fullDesc: "miniOS is a bare-metal operating system kernel demonstrating fundamental OS design principles. It features a Master Boot Record (MBR) bootsector loaded at 0x7C00, BIOS INT 13h disk sector reading to load kernel code into RAM, and direct VGA video memory access (0xB8000).",
    features: [
      "Custom 512-byte MBR bootloader with boot signature 0xAA55",
      "Low-level BIOS INT 13h sector loading for secondary stages",
      "Direct hardware VGA text mode memory buffer access (0xB8000)",
      "C kernel entry point with register management"
    ],
    stack: ["x86 Assembly", "NASM", "C", "QEMU", "VGA Drivers"],
    metrics: {
      "Footprint": "512 Bytes Boot",
      "Architecture": "x86 Real/Protected",
      "Hardware": "VGA Text 80x25"
    },
    architecture: "BIOS -> MBR Bootsector -> INT 13h Load -> Kernel Entry -> C Kernel Main",
    codeSnippet: `[org 0x7C00]
mov ah, 0x02
mov al, 2
mov bx, 0x1000
int 0x13
jmp 0x1000
times 510-($-$$) db 0
dw 0xAA55`,
    screenshots: ["/screenshots/minios.png"]
  },
  {
    id: "sim-scam-detection",
    slug: "sim-scam-detection",
    title: "SIM Swap & Scam Detection Engine",
    category: "Systems & Security",
    badge: "Telecom Security",
    status: "Threat Engine",
    shortDesc: "Telecommunications threat detection platform analyzing IMSI anomalies, rapid SIM swapping, and cellular fraud.",
    fullDesc: "A cybersecurity engine designed to detect SIM swap fraud and cellular network scams. Analyzes subscriber telemetry data to identify suspicious IMSI-IMEI pairing changes and improbable geographical velocity jumps between towers.",
    features: [
      "Real-time subscriber IMSI anomaly detection & SIM swap risk scoring",
      "Improbable geographic location jump tracking",
      "Cellular carrier risk profiling & threat level aggregation",
      "Automated fraud prevention alerts and account flags"
    ],
    stack: ["Python", "Threat Scoring Engine", "Geospatial Telemetry", "Data Analytics"],
    metrics: {
      "Scam Detection": "Real-time IMSI Analysis",
      "Risk Scale": "0-100 Threat Index",
      "Target": "Telecom Cybersecurity"
    },
    architecture: "Subscriber Telemetry -> IMSI Pair Tracker -> Velocity Filter -> Threat Engine",
    codeSnippet: `def evaluate_sim_swap(subscriber_id, new_imsi, current_location):
    if imsi_changed(subscriber_id, new_imsi) and velocity_check_failed(subscriber_id, current_location):
        trigger_account_lockdown(subscriber_id, reason="SIM_SWAP_DETECTED")`,
    screenshots: ["/screenshots/sim_scam_detection.png"]
  },
  {
    id: "opt-app",
    slug: "opt-app",
    title: "OptiPrompt GEO & Multi-LLM Router",
    category: "AI & Platform",
    badge: "Next.js 15 & Multi-LLM",
    status: "AI Platform",
    shortDesc: "Generative Engine Optimization (GEO) and intelligent multi-model LLM query router platform.",
    fullDesc: "OptiPrompt is an AI optimization platform designed for generative engines. Built with Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, and Recharts, it optimizes prompts for ChatGPT & Perplexity, and routes queries across multi-LLM networks.",
    features: [
      "Generative Engine Optimization (GEO/AEO) prompt enhancement playground",
      "Smart Multi-LLM query router routing requests by quality, latency, and token cost",
      "Interactive telemetry dashboards with live cost vs latency charts",
      "Intent classification engine & RAG product search indexing"
    ],
    stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Recharts"],
    metrics: {
      "Prompt Boost": "+92% Quality",
      "Routing": "Multi-LLM Dispatch",
      "Analytics": "Recharts Telemetry"
    },
    architecture: "Prompt -> GEO Engine -> Multi-LLM Router -> Response Aggregator",
    codeSnippet: `export default function LandingPage() {
  return (
    <div className="min-h-screen bg-sky-50 text-slate-900 font-serif">
      <header className="bg-white border-b border-sky-200">
        <span className="font-bold text-xl text-sky-800">OptiPrompt</span>
      </header>
    </div>
  );
}`,
    screenshots: ["/screenshots/optiprompt.png"]
  }
];

export const technicalSkills = {
  languages: ["PHP", "Python", "JavaScript", "C/C++", "SQL", "HTML5/CSS3"],
  webFrameworks: ["Laravel", "Filament", "React.js", "Node.js", "Flask", "REST APIs", "JWT Auth", "WebSockets"],
  aiData: ["Scikit-learn", "OpenAI API", "Pandas", "NumPy", "Prompt Engineering"],
  databases: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Database Design (ER Modeling)"],
  tools: ["Git", "GitHub", "Docker", "Postman", "Jira", "Linux", "Agile/Scrum"]
};
