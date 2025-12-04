export const lesson60Quiz = [
  {
    id: 1,
    question: "A technician needs to create user accounts for 50 new employees. Instead of manually creating each account, what approach would be most efficient?",
    options: [
      "Manually create all 50 accounts one-by-one",
      "Write a script to automate account creation using a list of employee information",
      "Hire 50 additional IT staff to create the accounts",
      "Tell employees they don't need accounts"
    ],
    correct: 1,
    explanation: "Scripting excels at repetitive tasks. A PowerShell or bash script can: read employee data from CSV file, loop through each employee, create account with proper settings, set passwords, add to groups, create home directories, send welcome emails. Manual creation is error-prone and time-consuming (50 × 10 minutes = 8+ hours). Script runs in minutes and ensures consistency. Write once, use many times. This is primary scripting benefit - automation of repetitive tasks. Scripts also provide: documentation (script shows what was done), reproducibility (same results every time), efficiency (hours → minutes). Learning to script saves significant time long-term."
  },
  {
    id: 2,
    question: "What is the file extension for a PowerShell script?",
    options: [
      ".bat",
      ".ps1",
      ".exe",
      ".txt"
    ],
    correct: 1,
    explanation: ".ps1 is the PowerShell script extension. PowerShell is Microsoft's modern scripting language for Windows automation. Other extensions: .bat/.cmd (batch files - older Windows scripting), .sh (shell scripts - Linux/Mac), .py (Python), .vbs (VBScript), .js (JavaScript). File extensions identify script type and determine execution environment. PowerShell scripts require: execution policy configuration (security feature), PowerShell installed (built into modern Windows). .exe files are compiled executables (not scripts). .txt is plain text. Scripts are plain text files containing commands that are interpreted/executed by scripting engines. Know extensions to identify script types."
  },
  {
    id: 3,
    question: "A technician writes a script with a variable: $computerName = 'SERVER01'. What is the purpose of this variable?",
    options: [
      "Variables serve no purpose in scripts",
      "To store and reuse the value 'SERVER01' throughout the script, making it easier to modify and maintain",
      "To delete the server",
      "Variables only work in databases"
    ],
    correct: 1,
    explanation: "Variables store values for reuse and manipulation: store data temporarily ($computerName = 'SERVER01'), reuse throughout script (reference $computerName instead of typing 'SERVER01' repeatedly), easy modification (change value once, affects entire script), improve readability (descriptive names clarify purpose). Variables can store: strings (text), numbers, arrays (lists), objects, boolean (true/false). PowerShell variables start with $. Batch files use %variable%. Benefits: code maintainability (change once vs. find/replace), dynamic values (user input, calculated values), clearer code (meaningful names). Variables are fundamental programming concept - essential for any scripting. Example use: loop counters, file paths, user inputs, configuration values."
  },
  {
    id: 4,
    question: "A script contains: 'for ($i=1; $i -le 10; $i++) { Write-Output $i }'. What does this script do?",
    options: [
      "Crashes the computer",
      "Creates a loop that outputs numbers 1 through 10",
      "Deletes 10 files",
      "Does nothing"
    ],
    correct: 1,
    explanation: "This is a FOR loop in PowerShell: $i=1 (initialize counter at 1), $i -le 10 (continue while i less than or equal to 10), $i++ (increment i by 1 each iteration), Write-Output $i (display current value). Output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Loops enable: repetitive tasks (process 100 files), counting operations, iteration through lists. Loop types: for (known iterations), while (condition-based), foreach (iterate collections). Common uses: process multiple files, create multiple users, perform actions X times, iterate through arrays. Loops are powerful automation tools - turn single commands into bulk operations. Understanding loops essential for effective scripting."
  },
  {
    id: 5,
    question: "What is the purpose of comments in scripts (lines starting with # in PowerShell or REM in batch files)?",
    options: [
      "Comments execute special commands",
      "To document what the script does, explain logic, and help others (and future you) understand the code",
      "Comments slow down script execution",
      "Comments are errors that should be removed"
    ],
    correct: 1,
    explanation: "Comments document code: explain what script does, clarify complex logic, provide usage examples, note assumptions/limitations, help debugging, assist maintenance. Syntax: PowerShell/Python/Bash use # for comments, Batch uses REM or ::, VBScript uses '. Comments are ignored during execution (no performance impact). Benefits: future understanding (you forget your own code), collaboration (others understand your work), maintenance (identify what needs changing), troubleshooting (temporarily disable code by commenting out). Good practices: explain WHY not WHAT (code shows what, comments explain reasoning), update comments when code changes, include header with: purpose, author, date, usage. Well-commented code is professional code."
  },
  {
    id: 6,
    question: "A script needs to perform different actions based on whether a user is in the Sales or IT department. What programming concept enables this?",
    options: [
      "Variables alone",
      "Conditional statements (if/then/else) to check conditions and execute different code paths",
      "Comments",
      "Scripts cannot make decisions"
    ],
    correct: 1,
    explanation: "Conditional statements enable decision-making: if (condition) { do this } else { do that }. Example: if ($department -eq 'Sales') { add to Sales group } elseif ($department -eq 'IT') { add to IT group } else { add to general users }. Conditions check: equality (-eq, ==), comparison (<, >, <=, >=), existence (file/folder exists), boolean values (true/false). Conditionals enable: different logic for different scenarios, error handling, validation, user input processing, environment-specific actions. Without conditionals, scripts execute same actions regardless of situation. Real-world uses: check if file exists before processing, verify user input, handle different OS versions, implement business logic. Decision-making is fundamental to useful scripts."
  },
  {
    id: 7,
    question: "What is an environment variable and how is it used in scripts?",
    options: [
      "Environment variables don't exist",
      "System-wide or user-specific variables storing configuration info (like paths, usernames) accessible to scripts and programs",
      "Variables that only work outdoors",
      "Environment variables are viruses"
    ],
    correct: 1,
    explanation: "Environment variables store system configuration: %USERPROFILE% (user's home directory in Windows), %PATH% (directories to search for executables), %TEMP% (temporary file location), $HOME (home directory in Linux). Scripts use environment variables for: portability (work on different systems), system information access, configuration, finding system paths. Access: PowerShell uses $env:VARIABLENAME, Batch uses %VARIABLENAME%, Bash uses $VARIABLENAME. Common uses: create files in user's temp folder, add programs to system path, get current username, identify OS version. Environment variables enable scripts to adapt to different environments without hardcoding values. List variables: 'set' (Windows), 'printenv' (Linux)."
  },
  {
    id: 8,
    question: "A PowerShell script won't run and displays 'running scripts is disabled on this system.' What needs to be configured?",
    options: [
      "PowerShell is broken and must be reinstalled",
      "PowerShell execution policy needs to be set to allow script execution (Set-ExecutionPolicy)",
      "Windows needs to be reinstalled",
      "Scripts can never run on this system"
    ],
    correct: 1,
    explanation: "PowerShell execution policy is security feature preventing unauthorized script execution. Policies (least to most permissive): Restricted (default, no scripts), AllSigned (only signed scripts), RemoteSigned (downloaded scripts must be signed, local scripts can run), Unrestricted (all scripts run with warning), Bypass (nothing blocked). Change with: Set-ExecutionPolicy RemoteSigned (common for IT environments). Scope levels: Process (current session), CurrentUser (current user), LocalMachine (all users). This prevents: accidental malicious script execution, downloaded script attacks. IT environments typically use RemoteSigned. Check current policy: Get-ExecutionPolicy. Execution policy isn't security boundary - users can bypass. It's protection against accidental execution, not determined attackers."
  },
  {
    id: 9,
    question: "Why would a technician use a script instead of performing a task manually through the GUI?",
    options: [
      "Scripts are always slower and more complicated",
      "Scripts provide automation, consistency, documentation, and efficiency for repetitive tasks",
      "GUI is always superior to scripts",
      "Scripts exist only to confuse people"
    ],
    correct: 1,
    explanation: "Scripting advantages over GUI: Automation (run unattended, scheduled), Consistency (same steps every time, no human error), Efficiency (bulk operations, faster than clicking), Documentation (script shows exactly what happens), Reproducibility (run on multiple systems), Scalability (1 system or 1000 systems - same effort), Remote execution (run on systems you can't physically access). GUI advantages: visual, user-friendly for occasional tasks, no coding knowledge needed. Use scripts for: repetitive tasks, bulk operations, scheduled tasks, standardized configurations, disaster recovery procedures. Use GUI for: one-time tasks, unfamiliar operations, visual exploration. Professional IT staff use both - choosing appropriate tool for each task. Scripting skills multiply productivity."
  },
  {
    id: 10,
    question: "A script needs to process all .txt files in a folder. Which scripting concept would be used to go through each file?",
    options: [
      "Variables only",
      "A loop (such as foreach or for) to iterate through each file in the collection",
      "Comments will find the files",
      "Scripts cannot process multiple files"
    ],
    correct: 1,
    explanation: "Loops iterate through collections: Get-ChildItem *.txt | ForEach-Object { process each file } (PowerShell), for f in *.txt; do process $f; done (Bash), for %%f in (*.txt) do (process %%f) (Batch). ForEach loops: get collection of items, execute code block for each item, access current item in loop. Use cases: process multiple files, iterate through user list, perform actions on array elements, batch operations. Loop types: foreach (collections), for (counted iterations), while (condition-based). Real examples: rename 100 files, compress all documents, copy files matching pattern, process CSV rows. Loops transform single-item operations into bulk operations - essential for automation."
  },
  {
    id: 11,
    question: "What is the benefit of using a .bat or .cmd batch file for simple Windows automation?",
    options: [
      "Batch files are more powerful than PowerShell",
      "Simple syntax, no special software needed (runs on all Windows versions), good for basic tasks like file operations",
      "Batch files are obsolete and useless",
      "Batch files only work on Linux"
    ],
    correct: 1,
    explanation: "Batch file advantages: Built into all Windows (no installation), Simple syntax for basic tasks, Backwards compatibility (works on old/new Windows), Good for: file copying, program launching, basic automation, calling other programs. Limitations: basic string manipulation, limited error handling, no objects/advanced features. PowerShell is more powerful but batch files sufficient for: simple file operations, launching programs with parameters, basic system tasks, quick automation. When to use: simple automation needs, maximum compatibility required, calling legacy programs, quick scripts. When to use PowerShell: complex logic, object manipulation, remote management, advanced features. Both have place in IT toolkit. Batch files = quick simple tasks; PowerShell = complex automation."
  },
  {
    id: 12,
    question: "A script contains error handling: 'try { risky operation } catch { handle error }'. Why is error handling important in scripts?",
    options: [
      "Error handling slows down scripts unnecessarily",
      "To gracefully handle failures, log errors, prevent script crashes, and provide useful error messages",
      "Scripts never have errors",
      "Error handling makes scripts more confusing"
    ],
    correct: 1,
    explanation: "Error handling (try/catch, if/else checks) provides: Graceful failure (script continues or exits cleanly), Error logging (record what went wrong), User-friendly messages (not cryptic errors), Prevent data corruption (rollback on failure), Debugging information (identify problems). Without error handling: scripts crash on errors, data potentially corrupted, unclear why failure occurred, difficult troubleshooting. Example: try { copy file } catch { log error, notify admin, try backup location }. Professional scripts include: input validation, error checking after operations, meaningful error messages, logging, recovery procedures. Error handling separates proof-of-concept scripts from production-ready automation. Always assume: files might not exist, network might fail, permissions might be wrong. Code defensively."
  },
  {
    id: 13,
    question: "What common scripting task involves reading data from a .csv (comma-separated values) file?",
    options: [
      "Scripts cannot read CSV files",
      "Bulk operations like creating users, importing data, or processing records stored in spreadsheet format",
      "CSV files are only for databases",
      "Reading CSV files requires special hardware"
    ],
    correct: 1,
    explanation: "CSV files store tabular data (spreadsheet-like) in plain text. Scripts read CSV to: import user lists (create AD accounts), process data exports, load configuration, bulk updates. PowerShell: Import-Csv users.csv | ForEach-Object { New-ADUser -Name $_.Name -Email $_.Email }. Python: csv.reader(). Benefits: easy data entry (create in Excel), human-readable, portable format, handles multiple records. Common scenarios: create 100 users from HR spreadsheet, import inventory data, process reports, update configurations. CSV + scripting = powerful automation. Preparation: clean data, consistent format, validate before import. Alternative formats: JSON (structured data), XML (complex hierarchies). CSV is standard for bulk data import/export - essential scripting skill."
  },
  {
    id: 14,
    question: "A scheduled task runs a script at 2 AM daily to backup files. What scripting use case does this demonstrate?",
    options: [
      "Scripts running at 2 AM are illegal",
      "Unattended automation - scripts running automatically on schedule without human intervention",
      "Someone must click to run the script at 2 AM",
      "Scheduled tasks don't work with scripts"
    ],
    correct: 1,
    explanation: "Scheduled automation runs scripts: at specific times (2 AM daily), on triggers (system startup, user login), periodically (every 15 minutes), based on events (log entry detected). Windows Task Scheduler / Linux cron enable: unattended operation, off-hours processing, regular maintenance, automated backups, monitoring tasks. Scripts perfect for scheduling because: consistent execution, no manual intervention, run during off-hours, logging/reporting built-in. Common scheduled scripts: backups, log rotation, cleanup old files, system health checks, report generation, database maintenance. Combined scripting + scheduling = powerful automation. Design considerations: error handling (no one watching), logging (know what happened), email notifications (alert on failures). Automation works while you sleep."
  },
  {
    id: 15,
    question: "A technician wants to learn scripting but feels overwhelmed. What is the best approach to start?",
    options: [
      "Give up - scripting is impossible to learn",
      "Start with simple tasks (copy files, create folders), learn basic concepts (variables, loops), gradually increase complexity",
      "Immediately try to write complex enterprise automation",
      "Memorize entire programming language before writing any code"
    ],
    correct: 1,
    explanation: "Learning scripting progression: Start simple (one-command scripts, file operations), Learn basics (variables, loops, conditionals), Practice with real tasks (automate your actual work), Build complexity gradually, Use existing scripts as examples, Google/ChatGPT for help, Don't memorize - understand concepts. Simple starting tasks: copy files with timestamp, rename files in folder, create user directories, list installed software, export data to CSV. Progression: add error handling, user input, logging, functions. Scripting is learned by doing, not reading/memorizing. Every expert started with simple scripts. Resources: PowerShell documentation, online tutorials, script repositories (GitHub). Start today with: one command you type repeatedly → put in script → save time. Iterate and improve. Small automation wins build confidence and skills."
  }
];