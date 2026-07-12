from sqlalchemy.orm import Session
from sqlalchemy import func

from app.models.loan import Loan
from app.models.user import User


def get_dashboard_data(db: Session, user_id: int):

    user = db.query(User).filter(User.id == user_id).first()

    if not user:
        return {
            "total_loans": 0,
            "total_outstanding": 0,
            "total_emi": 0,
            "monthly_income": 0,
            "monthly_expenses": 0,
            "savings": 0,
            "monthly_surplus": 0,
            "debt_ratio": 0,
            "stress_level": "LOW",
        }

    loans = db.query(Loan).filter(Loan.user_id == user_id).all()

    total_loans = len(loans)

    total_outstanding = (
        db.query(func.sum(Loan.outstanding_amount))
        .filter(Loan.user_id == user_id)
        .scalar()
        or 0
    )

    total_emi = (
        db.query(func.sum(Loan.emi))
        .filter(Loan.user_id == user_id)
        .scalar()
        or 0
    )

    monthly_income = user.monthly_income or 0
    monthly_expenses = user.monthly_expenses or 0
    savings = user.savings or 0

    monthly_surplus = monthly_income - monthly_expenses - total_emi

    debt_ratio = 0

    if monthly_income > 0:
        debt_ratio = round((total_emi / monthly_income) * 100, 2)

    if debt_ratio < 30:
        stress_level = "LOW"
    elif debt_ratio < 60:
        stress_level = "MEDIUM"
    else:
        stress_level = "HIGH"

    return {
        "total_loans": total_loans,
        "total_outstanding": total_outstanding,
        "total_emi": total_emi,
        "monthly_income": monthly_income,
        "monthly_expenses": monthly_expenses,
        "savings": savings,
        "monthly_surplus": monthly_surplus,
        "debt_ratio": debt_ratio,
        "stress_level": stress_level,
    }