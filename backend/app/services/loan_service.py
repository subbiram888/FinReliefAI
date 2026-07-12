from sqlalchemy.orm import Session

from app.models.loan import Loan


def add_loan(
    db: Session,
    user_id: int,
    lender_name: str,
    outstanding_amount: float,
    emi: float,
    interest_rate: float,
    overdue_months: int,
):

    loan = Loan(
        user_id=user_id,
        lender_name=lender_name,
        outstanding_amount=outstanding_amount,
        emi=emi,
        interest_rate=interest_rate,
        overdue_months=overdue_months,
    )

    db.add(loan)
    db.commit()
    db.refresh(loan)

    return {
        "message": "Loan added successfully",
        "loan_id": loan.id,
    }


def get_loans(db: Session, user_id: int):

    return (
        db.query(Loan)
        .filter(Loan.user_id == user_id)
        .all()
    )


def delete_loan(
    db: Session,
    loan_id: int,
    user_id: int,
):

    loan = (
        db.query(Loan)
        .filter(
            Loan.id == loan_id,
            Loan.user_id == user_id,
        )
        .first()
    )

    if loan is None:
        return {
            "error": "Loan not found"
        }

    db.delete(loan)
    db.commit()

    return {
        "message": "Loan deleted successfully"
    }