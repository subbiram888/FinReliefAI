# FinRelief AI - Entity Relationship Diagram

## Entities

### Users

-   **PK:** user_id
-   full_name
-   email
-   password
-   created_at

### Financial_Profile

-   **PK:** profile_id
-   **FK:** user_id
-   monthly_income
-   monthly_expenses
-   savings
-   employment_type
-   financial_health_score

### Loans

-   **PK:** loan_id
-   **FK:** user_id
-   loan_type
-   loan_amount
-   outstanding_amount
-   interest_rate
-   emi
-   due_date

### Settlement_Prediction

-   **PK:** settlement_id
-   **FK:** user_id, loan_id
-   settlement_prediction
-   recommended_amount
-   priority_level
-   created_at

### AI_Negotiation

-   **PK:** ai_id
-   **FK:** user_id, loan_id
-   negotiation_strategy
-   settlement_letter
-   generated_at

### AI_History

-   **PK:** history_id
-   **FK:** user_id
-   query_type
-   ai_response
-   generated_at

## Relationships

-   Users (1) ------ (1) Financial_Profile
-   Users (1) ------ (N) Loans
-   Users (1) ------ (N) AI_History
-   Loans (1) ------ (N) Settlement_Prediction
-   Loans (1) ------ (N) AI_Negotiation
-   Users (1) ------ (N) AI_Negotiation

This ER model represents the conceptual database design for the
FinRelief AI platform.
