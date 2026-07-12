from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.services.loan_priority import get_loan_priority

router = APIRouter(tags=["Loan Priority"])


@router.get("/loan-priority")
def loan_priority(db: Session = Depends(get_db)):

    # Temporary user_id until JWT authentication is connected
    return get_loan_priority(db, user_id=1)