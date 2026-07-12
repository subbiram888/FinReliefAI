from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.ai_history import AIHistory
from app.services.email_service import generate_email

router = APIRouter(
    tags=["AI Email"]
)


@router.get("/generate-negotiation-email/{loan_id}")
def generate_negotiation_email(
    loan_id: int,
    db: Session = Depends(get_db)
):

    email = generate_email(
        lender_name="HDFC Bank",
        outstanding_amount=500000,
        overdue_months=2
    )

    history = AIHistory(
        user_id=1,
        query_type="Negotiation Email",
        response=email["email"]
    )

    db.add(history)
    db.commit()

    return email