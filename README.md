# Most Frequent Words on a website calculator
1. Set up a virtual environment (optional but recommended) to keep dependencies organized:

bash: python -m venv venv

Activate the virtual environment:

On Windows:

bash: venv\Scripts\activate

On macOS/Linux:

bash: source venv/bin/activate

Install the required libraries (Flask, Requests, and BeautifulSoup):

bash: pip install Flask requests beautifulsoup4

2. Run the Backend Server

Make sure the terminal is open in the project’s folder.

Run the backend server with:

bash: python app.py

You should see an output similar to:

csharp  * Running on http://127.0.0.1:5000

Keep this terminal open and running.

4. Open the Frontend in a Browser

You can open the index.html file directly in your browser by right-clicking the file in VS Code and selecting Open with Live Server (if you have the Live Server extension installed) or simply Reveal in File Explorer/Finder and double-click the file to open it in the browser.

In the webpage, enter a URL in the input field and click Analyze to initiate the word frequency analysis.

4. Test the Application

Enter a URL (e.g., https://example.com) in the input box and click Analyze.

The frontend sends the URL to the backend, which fetches the page content, calculates the top words, and sends back a list of the most frequent words and their counts.

If everything is set up correctly, you’ll see the word frequencies displayed in a table on the webpage.
