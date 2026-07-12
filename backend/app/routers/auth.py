from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.schemas.auth import RegisterRequest, LoginRequest
from app.services.auth_service import register_user, login_user

router = APIRouter(tags=["Authentication"])


@router.post("/register")
def register(request: RegisterRequest, db: Session = Depends(get_db)):
    return register_user(
        db,
        request.full_name,
        request.email,
        request.password
    )


@router.post("/login")
def login(request: LoginRequest, db: Session = Depends(get_db)):
    return login_user(
        db,
        request.email,
        request.password
    )