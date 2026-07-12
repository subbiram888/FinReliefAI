from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.dependencies import get_current_user
from app.models.user import User
from app.services.financial_service import calculate_financial_health

router = APIRouter(tags=["Financial Health"])


@router.get("/financial-health")
def financial_health(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    return calculate_financial_health(
        db=db,
        user_id=current_user.id,
    )