from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.schemas.loan import LoanCreate
from app.services.loan_service import (
    add_loan,
    get_loans,
    delete_loan,
)

from app.dependencies import get_current_user
from app.models.user import User

router = APIRouter(tags=["Loan Management"])


@router.post("/add-loan")
def create_loan(
    loan: LoanCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    return add_loan(
        db=db,
        user_id=current_user.id,
        lender_name=loan.lender_name,
        outstanding_amount=loan.outstanding_amount,
        emi=loan.emi,
        interest_rate=loan.interest_rate,
        overdue_months=loan.overdue_months,
    )


@router.get("/loans")
def fetch_loans(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    return get_loans(
        db=db,
        user_id=current_user.id,
    )


@router.delete("/loan/{loan_id}")
def remove_loan(
    loan_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    return delete_loan(
        db=db,
        loan_id=loan_id,
        user_id=current_user.id,
    )