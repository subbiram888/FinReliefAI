from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from app.models.user import User
from app.core.security import (
    hash_password,
    verify_password,
    create_access_token,
)


def register_user(db: Session, full_name: str, email: str, password: str):

    existing_user = db.query(User).filter(User.email == email).first()

    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Email already registered"
        )

    new_user = User(
        full_name=full_name,
        email=email,
        password=hash_password(password)
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {
        "message": "User registered successfully"
    }


def login_user(db: Session, email: str, password: str):

    user = db.query(User).filter(User.email == email).first()

    print("\n========== LOGIN DEBUG ==========")
    print("Email Entered:", email)
    print("Password Entered:", password)
    print("User Found:", user)

    if user:
        print("Stored Password Hash:", user.password)
        print("Password Match:", verify_password(password, user.password))
    print("=================================\n")

    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password"
        )

    if not verify_password(password, user.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password"
        )

    access_token = create_access_token(
        data={
            "sub": user.email
        }
    )

    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": {
            "id": user.id,
            "full_name": user.full_name,
            "email": user.email
        }
    }