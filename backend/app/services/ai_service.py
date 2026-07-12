import os

import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-2.5-flash")


def generate_negotiation_strategy(
    lender_name: str,
    outstanding_amount: float,
    interest_rate: float,
    overdue_months: int,
):

    prompt = f"""
You are an expert financial advisor.

A customer has:

Lender: {lender_name}
Outstanding Amount: ₹{outstanding_amount}
Interest Rate: {interest_rate}%
Overdue Months: {overdue_months}

Write a professional debt negotiation strategy.

Include:

1. Settlement recommendation
2. Negotiation tips
3. Risk analysis
4. Best next steps

Keep the response simple and practical.
"""

    try:
        response = model.generate_content(prompt)

        # Return only the text
        return response.text

    except Exception:
        # Fallback response if Gemini fails
        return f"""
Negotiation Strategy

1. Contact {lender_name} immediately and explain your financial hardship.

2. Request a One-Time Settlement (OTS) or loan restructuring.

3. Since your outstanding amount is ₹{outstanding_amount}, negotiate for a lower settlement amount if possible.

4. Because the loan has {overdue_months} overdue month(s), act quickly to avoid additional penalties.

5. Maintain polite communication and keep records of all discussions with the lender.

6. If possible, arrange a partial lump-sum payment to improve your chances of a successful settlement.
"""