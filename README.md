# 📊 MONEV UT Dashboard
### Academic Potential Monitoring & Evaluation System — Counterfactual-Based

<img width="1913" height="902" alt="image" src="https://github.com/user-attachments/assets/96af80f3-7e89-447d-9d71-d62eaf8f7581" />
<img width="1916" height="902" alt="image" src="https://github.com/user-attachments/assets/13a787bb-6f83-4e4c-8e5f-2a423f058ba6" />



![Prototype](https://img.shields.io/badge/STATUS-PROTOTYPE-orange?style=for-the-badge)
![Version](https://img.shields.io/badge/version-1.0.0-blue?style=for-the-badge)
![Live](https://img.shields.io/badge/status-live-success?style=for-the-badge)

> ⚠️ **This is a PROTOTYPE** developed for research and portfolio purposes.

**[🌐 Live Demo](https://monev-ut-dashboard.vercel.app)** &nbsp;|&nbsp;
**[⚙️ API Docs](https://monev-ut-dashboard-production.up.railway.app/docs)**

| Username | Password | Role |
|---|---|---|
| `admin` | `admin123` | Administrator |
| `dewi` | `dewi123` | Lecturer |
| `operator` | `operator123` | Operator |

</div>

---

## 📋 About

**MONEV UT Dashboard** is a prototype monitoring and evaluation system built for **Universitas Terbuka (UT)** — Indonesia's open and distance learning university. It supports academic decision-making through real-time data visualization and **counterfactual analysis** — answering the question *"What would happen if an intervention was applied?"*

This project focusing on academic potential monitoring for distance higher education institutions.

---

## 🎯 Goals

- Monitor student academic potential in real-time
- Evaluate lecturer performance based on **Catur Dharma** (4 pillars of academic duty)
- Track administrative staff (Tendik) performance
- Simulate **counterfactual interventions** to improve student outcomes
- Support data-driven academic decision-making

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔐 **Authentication** | Secure login with role-based access |
| 📊 **Executive Dashboard** | Real-time KPI cards and charts |
| 🎓 **Student Module** | Academic monitoring with graduation prediction |
| 👨‍🏫 **Lecturer Module** | Catur Dharma radar chart & performance scoring |
| 🏢 **Staff Module** | Administrative staff performance tracking |
| 🔬 **Counterfactual Simulation** | "What if?" intervention scenarios per student |
| 📊 **Export to Excel** | Downloadable formatted reports |
| 🖨️ **Print / PDF** | Browser-based print support |

---

## 🛠️ Tech Stack

### Frontend
- **React.js** — UI framework
- **Recharts** — Data visualization (Bar, Line, Pie, Radar charts)
- **React Router DOM** — Client-side routing
- **Axios** — HTTP requests to backend API

### Backend
- **FastAPI** (Python) — REST API framework
- **SQLAlchemy** — ORM for database operations
- **PyMySQL** — MySQL database connector
- **Openpyxl** — Excel file generation
- **Python Dotenv** — Environment variable management

### Database
- **MySQL** — Relational database with 6 tables:
  `mahasiswa_admisi`, `mahasiswa_akademik`, `aktivitas_lms`,
  `dosen_tutor`, `tendik`, `users`

### Deployment
- **Vercel** — Frontend hosting
- **Railway** — Backend & MySQL database hosting
- **GitHub** — Version control & CI/CD trigger

---

## 📊 Dataset Overview

> ⚠️ All data used in this prototype is **simulated/anonymized** for research purposes.

| Dataset | Columns | Content |
|---|---|---|
| Student Admission | 17 | Identity, UPBJJ, enrollment info |
| Student Academic | 21 | GPA, LMS participation, graduation prediction |
| LMS Activity | 23 | Login logs, assignments, quiz, video access |
| Lecturer & Tutor | 37 | Catur Dharma scores, publications, citations |
| Admin Staff | 32 | Attendance, service index, performance score |

---

## 🔬 Counterfactual Analysis

The core feature of this system. For each at-risk student, the system generates:

1. **🖥️ LMS Intervention** — Increase LMS participation rate
2. **📝 Assignment Intervention** — Complete all pending assignments
3. **🚀 Combined Intervention** — Apply all interventions simultaneously

Each scenario shows estimated score improvement, new graduation prediction, and concrete action steps.

---

<div align="center">

[![GitHub](https://github.com/DimasZahranW)]
[![LinkedIn](www.linkedin.com/in/dimas-zahran-wicaksana)]


</div>
