from sqlalchemy.orm import Session

from app.models.loan import Loan
from app.models.user import User


def get_settlement_prediction(db: Session, user_id: int):

    loans = db.query(Loan).filter(Loan.user_id == user_id).all()

    user = db.query(User).filter(User.id == user_id).first()

    settlement_results = []

    total_outstanding = sum(loan.outstanding_amount for loan in loans)

    monthly_income = user.monthly_income if user else 0

    if monthly_income > 0:
        debt_to_income = (total_outstanding / monthly_income) * 100
    else:
        debt_to_income = 0

    for loan in loans:

        settlement = 50.0
        risk_score = 0

        if loan.overdue_months > 0:
            settlement += 5
            risk_score += 20

        if loan.interest_rate > 12:
            settlement += 5
            risk_score += 10

        if debt_to_income > 80:
            settlement += 5
            risk_score += 15

        settlement = max(40, min(75, settlement))

        if risk_score >= 40:
            risk_category = "High"
        elif risk_score >= 20:
            risk_category = "Medium"
        else:
            risk_category = "Low"

        settlement_results.append({
            "loan_id": loan.id,
            "lender_name": loan.lender_name,
            "outstanding_amount": loan.outstanding_amount,
            "interest_rate": loan.interest_rate,
            "emi": loan.emi,
            "overdue_months": loan.overdue_months,
            "suggested_settlement_percentage": settlement,
            "risk_score": risk_score,
            "risk_category": risk_category
        })

    return settlement_results