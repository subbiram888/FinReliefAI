import os
import importlib
from dotenv import load_dotenv

load_dotenv()

GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY", "")


def generate_email(
    lender_name: str,
    outstanding_amount: float,
    overdue_months: int
):
    prompt = f"""
Write a professional loan settlement email.

Bank:
{lender_name}

Outstanding Amount:
₹{outstanding_amount}

Overdue Months:
{overdue_months}

The email should:

- Be polite
- Request settlement or restructuring
- Mention financial hardship
- Ask for a positive resolution
"""

    try:
        genai = importlib.import_module("google.generativeai")

        genai.configure(api_key=GOOGLE_API_KEY)

        model = genai.GenerativeModel("gemini-1.5-flash")

        response = model.generate_content(prompt)

        return {
            "email": response.text
        }

    except Exception:

        return {
            "email":
            f"""
Subject: Request for Loan Settlement

Dear {lender_name},

I hope you are doing well.

Due to temporary financial difficulties, I am unable to continue my loan payments as scheduled.

I sincerely request you to consider my account for settlement or restructuring so that I can repay my dues without further delay.

Thank you for your understanding.

Yours faithfully,
Customer
"""
        }