from sqlalchemy.orm import Session

from app.models.loan import Loan


def simulate_debt_timeline(db: Session, user_id: int, extra_payment: float = 0):

    loans = db.query(Loan).filter(Loan.user_id == user_id).all()

    loan_data = [
        {
            "loan_id": loan.id,
            "balance": loan.outstanding_amount,
            "interest_rate": loan.interest_rate,
            "emi": loan.emi
        }
        for loan in loans
    ]

    months = 0
    max_months = 240
    timeline = []

    while any(loan["balance"] > 0 for loan in loan_data) and months < max_months:

        months += 1
        total_balance = 0

        loan_data.sort(key=lambda x: x["balance"], reverse=True)

        for loan in loan_data:

            if loan["balance"] <= 0:
                continue

            monthly_interest = (loan["interest_rate"] / 100) / 12
            loan["balance"] += loan["balance"] * monthly_interest

            payment = loan["emi"]

            if extra_payment > 0 and loan == loan_data[0]:
                payment += extra_payment

            loan["balance"] -= payment

            if loan["balance"] < 0:
                loan["balance"] = 0

            total_balance += loan["balance"]

        timeline.append({
            "month": months,
            "remaining_balance": round(total_balance, 2)
        })

    return {
        "months_to_debt_free": months,
        "final_remaining_balance": round(total_balance, 2),
        "timeline_preview": timeline[:12]
    }