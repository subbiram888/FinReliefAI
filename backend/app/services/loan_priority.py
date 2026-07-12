from sqlalchemy.orm import Session

from app.models.loan import Loan


def get_loan_priority(db: Session, user_id: int):

    loans = db.query(Loan).filter(Loan.user_id == user_id).all()

    priority_list = []

    monthly_income = 50000
    total_emi = sum(loan.emi for loan in loans)

    if monthly_income > 0:
        emi_ratio = (total_emi / monthly_income) * 100
    else:
        emi_ratio = 0

    for loan in loans:

        is_overdue = loan.overdue_months > 0
        high_interest = loan.interest_rate > 12
        high_emi_ratio = emi_ratio > 50

        if is_overdue or high_interest or high_emi_ratio:
            priority = "High"
        elif loan.interest_rate > 8 or loan.overdue_months > 0:
            priority = "Medium"
        else:
            priority = "Low"

        priority_list.append({
            "loan_id": loan.id,
            "lender_name": loan.lender_name,
            "outstanding_amount": loan.outstanding_amount,
            "interest_rate": loan.interest_rate,
            "emi": loan.emi,
            "overdue_months": loan.overdue_months,
            "priority": priority
        })

    priority_order = {
        "High": 0,
        "Medium": 1,
        "Low": 2
    }

    priority_list.sort(
        key=lambda x: priority_order[x["priority"]]
    )

    return priority_list