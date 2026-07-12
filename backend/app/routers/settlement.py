from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.dependencies import get_current_user
from app.models.user import User
from app.services.settlement_service import get_settlement_prediction

router = APIRouter(tags=["Settlement Predictor"])


@router.get("/settlement-predictor")
def settlement_prediction(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    return get_settlement_prediction(
        db=db,
        user_id=current_user.id
    )