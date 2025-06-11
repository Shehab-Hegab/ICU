
---

# 👁️ ICU – Intelligent Camera Unit for Eye Movement Tracking

**ICU** (Intelligent Camera Unit) is a real-time eye movement tracking system built using Unity and Python. It leverages computer vision and machine learning techniques to capture, analyze, and record user eye behavior through a webcam. This tool has applications in medical diagnostics, human-computer interaction (HCI), and cognitive research.

---

## 🔍 Project Overview

* **Goal**: Detect and record eye movements in real-time using a standard camera.
* **Use Case**: Designed primarily for research and medical applications (e.g., tracking indicators of neurological conditions or cognitive workload).
* **Architecture**: Unity-based front-end for real-time video feed and Python back-end for processing and analysis.

---

## 🛠️ Technologies Used

* **Unity** – for camera access and real-time interface.
* **Python** – for data processing and exporting.
* **OpenCV** – for eye and facial landmark detection.
* **Dlib** – for face alignment and landmark prediction.
* **Pandas / Excel** – for structured data recording and further analysis.

---

## 🧠 Features

* 👁️ Real-time eye tracking using webcam input.
* 📊 Exports gaze direction, eye coordinates, and movement patterns to Excel.
* 📷 Unity interface for live camera visualization.
* 💡 Designed with potential medical diagnostics and accessibility tools in mind.

---

## 🧱 System Architecture

1. **Unity Front-End**
   Captures video stream and synchronizes with Python processing.

2. **Python Back-End**

   * Uses Dlib and OpenCV to detect facial landmarks.
   * Calculates pupil position and gaze direction.
   * Records data in real-time to an Excel sheet.

3. **Excel Output**
   Structured dataset including time, eye coordinates, and event tags.

---

## 📁 Project Structure

```
ICU/
│
├── Unity/                    # Unity project files for real-time interface
├── EyeTracker.py            # Main Python script for eye tracking
├── requirements.txt         # Python dependencies
└── output_data/             # Exported Excel files for tracking logs
```

---

## 📌 Key Contributions

* Designed and developed the complete system from scratch.
* Integrated Unity with Python for synchronized real-time vision processing.
* Applied computer vision techniques to track and export detailed eye behavior data.
* Engineered the architecture to support future medical and research extensions.

---

## 🚀 How to Run

1. **Clone the repository**

   ```bash
   git clone https://github.com/Shehab-Hegab/ICU.git
   ```

2. **Install Python requirements**

   ```bash
   pip install -r requirements.txt
   ```

3. **Open Unity Project** in Unity Hub and run the scene.

4. **Run Python Script** to begin eye tracking:

   ```bash
   python EyeTracker.py
   ```

---

## 📈 Future Improvements

* Add calibration mode for personalized eye tracking accuracy.
* Integrate ML model to classify cognitive states from eye movement.
* Build a dashboard for real-time visualization and analytics.

---

## 👨‍💻 Author

**Shehab Mohamed Ibrahim**
Machine Learning Engineer | Biomedical Engineering Student
🔗 [LinkedIn](https://www.linkedin.com/in/shehab-hegab-5303491b7/) | 🌐 [GitHub](https://github.com/Shehab-Hegab)





# final_project-database_s23_icu16
Team 16_ICU project


Team Members:


Ahmed Khaled              Sec:1   BN:2


Kyrillos Emad Barakat     Sec 2   Bn 7


Shehab Mohamed Ibrahim   Sec:1    BN:33


Hussein Mohamed          Sec:1    BN:19



Mohamed Gamal            Sec:1    BN:48



Mohamed Aziz          Sec:1    BN:49


We Have in this Project 2 folders one contain backend called (database)
and the other contain front end  called(Login-page).


Please open the database files in vscode and use npm i express , npm i cors , npm run dev (we used xampp and we started apache and mysql).


Then use npm run dev 


The database we used was on localhost and we tried to share it but we failed.

Then open the login files in vscode and from index.html you can start the website by go live.


In the login page on the website we can access through only some users from Java script code like: 

UserName:Ahmed Khaled , password:123


If you try another user or password it will not go to another page.


The second page which will go after index.html is welcome page:


You have burger style bar and from it details of (Contact us (send to my mail message), Doctors(show doctors details) , Nurses(show Nurses details)).

We have 3 button in the welcome page:


1.Add patient (you will go to form when complete it it direct go to check patient page data).


2.Check patient(show all details of patient).


3.Statstics (show rooms,capacity,room number).

