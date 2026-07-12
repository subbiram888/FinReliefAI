from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
# Database
from app.database.database import Base, engine

# Import ALL models so SQLAlchemy knows about them
from app.models.user import User
from app.models.loan import Loan
from app.models.ai_history import AIHistory

# Create all database tables
Base.metadata.create_all(bind=engine)

# Routers
from app.routers.auth import router as auth_router
from app.routers.user import router as user_router
from app.routers.loan import router as loan_router
from app.routers.dashboard import router as dashboard_router
from app.routers.financial import router as financial_router
from app.routers.settlement import router as settlement_router
from app.routers.priority import router as priority_router
from app.routers.timeline import router as timeline_router
from app.routers.ai import router as ai_router
from app.routers.email import router as email_router
from app.routers.history import router as history_router

app = FastAPI(
    title="FinRelief AI 🚀",
    description="AI Powered Debt Relief & Financial Recovery Platform",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
        "https://YOUR-VERCEL-APP.vercel.app"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {
        "message": "Welcome to FinRelief AI 🚀",
        "status": "Running"
    }

# Register Routers
app.include_router(auth_router)
app.include_router(user_router)
app.include_router(loan_router)
app.include_router(dashboard_router)
app.include_router(financial_router)
app.include_router(settlement_router)
app.include_router(priority_router)
app.include_router(timeline_router)
app.include_router(ai_router)
app.include_router(email_router)
app.include_router(history_router)