from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.dependencies import get_current_user
from app.models.user import User
from app.models.loan import Loan
from app.models.ai_history import AIHistory
from app.services.ai_service import generate_negotiation_strategy

router = APIRouter(tags=["AI Negotiation"])


@router.get("/ai-negotiation-strategy")
def ai_strategy(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    loan = (
        db.query(Loan)
        .filter(Loan.user_id == current_user.id)
        .order_by(Loan.outstanding_amount.desc())
        .first()
    )

    if loan is None:
        return {
        "loan": None,
        "strategy": "No loans found. Please add a loan first."
    }
    strategy = generate_negotiation_strategy(
        lender_name=loan.lender_name,
        outstanding_amount=loan.outstanding_amount,
        interest_rate=loan.interest_rate,
        overdue_months=loan.overdue_months,
    )

    history = AIHistory(
        user_id=current_user.id,
        query_type="Negotiation Strategy",
        response=strategy,
    )

    db.add(history)
    db.commit()

    return {
        "loan": {
            "id": loan.id,
            "lender_name": loan.lender_name,
            "outstanding_amount": loan.outstanding_amount,
            "interest_rate": loan.interest_rate,
            "emi": loan.emi,
            "overdue_months": loan.overdue_months,
        },
        "strategy": strategy,
    }