<p align="center">
  <img src="./img.png" alt="Project Banner" width="100%">
</p>

# WaySure 🛡️

## Basic Details

### Team Name: Tech Divas

### Team Members:
- Member 1: Ann Mary Joseph - Jyothi Engineering College
- Member 2: Anjana P S- Jyothi Engineering College

### Hosted Project Link:
[mention your project hosted link here]

### Project Description:
WaySure is a smart web platform that helps users choose safer travel routes, not just the fastest ones. It compares routes based on safety score, crowd density, time, and distance using factors like road type, lighting, and time of day, enabling informed and confident commuting decisions.

### The Problem statement:
Current navigation systems optimize for speed, not safety. 
WaySure introduces a Safety Intelligence Layer on top of existing map services to make commuting smarter and safer.

### The Solution:
WaySure provides interactive route options with safety metrics, allowing users to select the safest route in addition to the fastest route. Routes can be compared based on:

-Safety score (based on road type, lighting, and time)

-Crowd density

-Estimated travel time

-Distance

## Technical Details:

### Technologies/Components Used:

**For Software:**
- Languages used: HTML, CSS, JavaScript, Python 
- Frameworks used:Flask 
- Libraries used:Google Maps Embedded API
- Tools used: Notepad / Git / GitHub / Web Browser

**For Hardware:**
- None

---

## Features

List the key features of your project:
- Feature 1: Display multiple routes between two points with safety and crowdedness metrics
- Feature 2: Route selection based on user preference (safest, fastest, or balanced)
- Feature 3: Interactive embedded Google Maps view for selected route
- Feature 4: Dashboard showing safety insights and crowd density
- Feature 5: Smart Panic Assistance Module with emergency alerts

---

## Implementation

### For Software:

#### Installation
```bash
# Python backend dependencies
pip install -r requirements.txt

# Flask (if used)
pip install flask

```

#### Run
```bash
# Run the Flask app
python3 app.py

```

### For Hardware:

#### Components Required:
none

#### Circuit Setup:
none

---

## Project Documentation

### For Software:

#### Screenshots (Add at least 3)

1. Homepage Input Section
![Homepage Input Section](screenshots/home_page_input.png)  
*This screenshot shows the source and destination input fields along with the "Show Routes" button and the red SOS panic button.*


![Screenshot2](Add screenshot 2 here with proper name)
*Add caption explaining what this shows*

![Screenshot3](Add screenshot 3 here with proper name)
*Add caption explaining what this shows*

#### Diagrams

**System Architecture:**

![Architecture Diagram](<img width="987" height="807" alt="Screenshot 2026-02-14 075139" src="https://github.com/user-attachments/assets/6df2c4e1-2004-446b-9ca6-3da365b3f799" />
)
*Web-based platform using Flask backend, SQLite database, and Google Maps API to compute and display safety metrics.*

**Application Workflow:**

![Workflow](<img width="1116" height="538" alt="Screenshot 2026-02-14 074814" src="https://github.com/user-attachments/assets/c31798b7-a285-4e5f-8ee9-2e84461732c3" />
)
*The application workflow: Users enter their source and destination, the system computes the Safety Score and Crowd Density for available routes, displays interactive route cards, and allows users to select a preferred route while providing real-time navigation and integrated emergency support.*

---

### For Hardware:

#### Schematic & Circuit

![Circuit](Add your circuit diagram here)
*Add caption explaining connections*

![Schematic](Add your schematic diagram here)
*Add caption explaining the schematic*

#### Build Photos

![Team](Add photo of your team here)

![Components](Add photo of your components here)
*List out all components shown*

![Build](Add photos of build process here)
*Explain the build steps*

![Final](Add photo of final product here)
*Explain the final build*

---

## Additional Documentation

### For Web Projects with Backend:

#### API Documentation

**Base URL:** `https://api.yourproject.com`

##### Endpoints

**GET /api/endpoint**
- **Description:** [What it does]
- **Parameters:**
  - `param1` (string): [Description]
  - `param2` (integer): [Description]
- **Response:**
```json
{
  "status": "success",
  "data": {}
}
```

**POST /api/endpoint**
- **Description:** [What it does]
- **Request Body:**
```json
{
  "field1": "value1",
  "field2": "value2"
}
```
- **Response:**
```json
{
  "status": "success",
  "message": "Operation completed"
}
```

[Add more endpoints as needed...]

---

### For Mobile Apps:

#### App Flow Diagram

![App Flow](docs/app-flow.png)
*Explain the user flow through your application*

#### Installation Guide

**For Android (APK):**
1. Download the APK from [Release Link]
2. Enable "Install from Unknown Sources" in your device settings:
   - Go to Settings > Security
   - Enable "Unknown Sources"
3. Open the downloaded APK file
4. Follow the installation prompts
5. Open the app and enjoy!

**For iOS (IPA) - TestFlight:**
1. Download TestFlight from the App Store
2. Open this TestFlight link: [Your TestFlight Link]
3. Click "Install" or "Accept"
4. Wait for the app to install
5. Open the app from your home screen

**Building from Source:**
```bash
# For Android
flutter build apk
# or
./gradlew assembleDebug

# For iOS
flutter build ios
# or
xcodebuild -workspace App.xcworkspace -scheme App -configuration Debug
```

---

### For Hardware Projects:

#### Bill of Materials (BOM)

| Component | Quantity | Specifications | Price | Link/Source |
|-----------|----------|----------------|-------|-------------|
| Arduino Uno | 1 | ATmega328P, 16MHz | ₹450 | [Link] |
| LED | 5 | Red, 5mm, 20mA | ₹5 each | [Link] |
| Resistor | 5 | 220Ω, 1/4W | ₹1 each | [Link] |
| Breadboard | 1 | 830 points | ₹100 | [Link] |
| Jumper Wires | 20 | Male-to-Male | ₹50 | [Link] |
| [Add more...] | | | | |

**Total Estimated Cost:** ₹[Amount]

#### Assembly Instructions

**Step 1: Prepare Components**
1. Gather all components listed in the BOM
2. Check component specifications
3. Prepare your workspace
![Step 1](images/assembly-step1.jpg)
*Caption: All components laid out*

**Step 2: Build the Power Supply**
1. Connect the power rails on the breadboard
2. Connect Arduino 5V to breadboard positive rail
3. Connect Arduino GND to breadboard negative rail
![Step 2](images/assembly-step2.jpg)
*Caption: Power connections completed*

**Step 3: Add Components**
1. Place LEDs on breadboard
2. Connect resistors in series with LEDs
3. Connect LED cathodes to GND
4. Connect LED anodes to Arduino digital pins (2-6)
![Step 3](images/assembly-step3.jpg)
*Caption: LED circuit assembled*

**Step 4: [Continue for all steps...]**

**Final Assembly:**
![Final Build](images/final-build.jpg)
*Caption: Completed project ready for testing*

---

### For Scripts/CLI Tools:

#### Command Reference

**Basic Usage:**
```bash
python script.py [options] [arguments]
```

**Available Commands:**
- `command1 [args]` - Description of what command1 does
- `command2 [args]` - Description of what command2 does
- `command3 [args]` - Description of what command3 does

**Options:**
- `-h, --help` - Show help message and exit
- `-v, --verbose` - Enable verbose output
- `-o, --output FILE` - Specify output file path
- `-c, --config FILE` - Specify configuration file
- `--version` - Show version information

**Examples:**

```bash
# Example 1: Basic usage
python script.py input.txt

# Example 2: With verbose output
python script.py -v input.txt

# Example 3: Specify output file
python script.py -o output.txt input.txt

# Example 4: Using configuration
python script.py -c config.json --verbose input.txt
```

#### Demo Output

**Example 1: Basic Processing**

**Input:**
```
This is a sample input file
with multiple lines of text
for demonstration purposes
```

**Command:**
```bash
python script.py sample.txt
```

**Output:**
```
Processing: sample.txt
Lines processed: 3
Characters counted: 86
Status: Success
Output saved to: output.txt
```

**Example 2: Advanced Usage**

**Input:**
```json
{
  "name": "test",
  "value": 123
}
```

**Command:**
```bash
python script.py -v --format json data.json
```

**Output:**
```
[VERBOSE] Loading configuration...
[VERBOSE] Parsing JSON input...
[VERBOSE] Processing data...
{
  "status": "success",
  "processed": true,
  "result": {
    "name": "test",
    "value": 123,
    "timestamp": "2024-02-07T10:30:00"
  }
}
[VERBOSE] Operation completed in 0.23s
```

---

## Project Demo

### Video
[Add your demo video link here - YouTube, Google Drive, etc.]

*Explain what the video demonstrates - key features, user flow, technical highlights*

### Additional Demos
[Add any extra demo materials/links - Live site, APK download, online demo, etc.]

---

## AI Tools Used (Optional - For Transparency Bonus)

If you used AI tools during development, document them here for transparency:

**Tool Used:** ChatGPT: Refined project abstract, drafted documentation, created captions, and structured content for competition submission.
Claude AI: Assisted in summarizing technical concepts, generating structured documentation, and reviewing content clarity.
Napkin.ai: Designed architecture and application workflow diagrams for clear visualization.

**Purpose:** [What you used it for]
ChatGPT & Claude AI: Refined documentation, structured abstract, drafted captions, and summarized technical content for clarity.
Napkin.ai: Created professional architecture and workflow diagrams to visualize system design and user journey.

**Key Prompts Used:**
Design a system architecture diagram showing data flow from user to Google Maps API
Draft a concise workflow diagram for user journey from route selection to emergency alert
Summarize technical project details into documentation

**Percentage of AI-generated code:** Approximately 15–20%

**Human Contributions:**
- Architecture design and planning
- Custom business logic implementation
- Integration and testing
- UI/UX design decisions

*Note: Proper documentation of AI usage demonstrates transparency and earns bonus points in evaluation!*

---

## Team Contributions

 Ann Mary Joseph: Backend development, Google Maps integration, UI/UX design, and route card visualization.
 Anjana P S: Frontend development,Panic Module implementation and integration.

---

## License

This project is licensed under the [LICENSE_NAME] License - see the [LICENSE](LICENSE) file for details.

**Common License Options:**
- MIT License (Permissive, widely used)
- Apache 2.0 (Permissive with patent grant)
- GPL v3 (Copyleft, requires derivative works to be open source)

---

Made with ❤️ at TinkerHub
