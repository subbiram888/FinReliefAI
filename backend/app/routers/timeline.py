from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.services.timeline_service import simulate_debt_timeline

router = APIRouter(tags=["Debt Timeline"])


@router.get("/debt-timeline")
def debt_timeline(db: Session = Depends(get_db)):

    return simulate_debt_timeline(
        db=db,
        user_id=1,
        extra_payment=0
    )