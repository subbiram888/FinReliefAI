from sqlalchemy.orm import Session

from app.models.loan import Loan
from app.models.user import User


def calculate_financial_health(db: Session, user_id: int):

    user = db.query(User).filter(User.id == user_id).first()

    loans = db.query(Loan).filter(Loan.user_id == user_id).all()

    total_emi = sum(loan.emi for loan in loans)
    total_outstanding = sum(loan.outstanding_amount for loan in loans)

    monthly_income = user.monthly_income if user else 0
    monthly_expenses = user.monthly_expenses if user else 0
    savings = user.savings if user else 0

    surplus = monthly_income - monthly_expenses - total_emi

    emi_ratio = (total_emi / monthly_income * 100) if monthly_income else 0
    debt_ratio = (total_outstanding / monthly_income * 100) if monthly_income else 0

    if emi_ratio >= 50:
        stress = "High"
    elif emi_ratio >= 30:
        stress = "Medium"
    else:
        stress = "Low"

    return {
        "monthly_income": monthly_income,
        "monthly_expenses": monthly_expenses,
        "savings": savings,
        "surplus": surplus,
        "total_loans": len(loans),
        "total_emi": total_emi,
        "total_outstanding": total_outstanding,
        "debt_ratio": round(debt_ratio, 2),
        "stress_level": stress
    }