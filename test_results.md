# Expense Tracker Test Results

## Manual Browser Tests

| Test | Expected result | Actual result | Status |
|---|---|---|---|
| Refresh page | Empty list and $0.00 total | Empty list and $0.00 total | PASS |
| Add Lunch, 12.50, Food | Lunch appears; total $12.50 | Lunch appears; total $12.50 | PASS |
| Add Bus, 3.00, Travel | Both expenses appear; total $15.50 | Both expenses appear; total $15.50 | PASS |
| Submit empty name with amount 5 | Error: Enter an expense name, not just spaces.; total stays $15.50 | Error:Enter an expense name, not just spaces.; no expense added; total stays $15.50 | PASS |
| Submit Test with amount -5 | Error: Enter an amount greater than zero.; no expense added; total stays $15.50 | Error: Enter an amount greater than zero.; no expense added; total stays $15.50 | PASS |
| Submit Test with zero amount | Error: Enter an amount greater than zero.; no expense added; total stays $15.50 | Error: Enter an amount greater than zero.; no expense added; total stays $15.50 | PASS |
| Submit Test with amount 1.234 | Error: Use at most two decimal places, for example 12.50.; no expense added; total stays $15.50 | Error: Use at most two decimal places, for example 12.50.; no expense added; total stays $15.50 | PASS |
| Submit Test with amount "abc" | Error: Enter a valid number.; no expense added; total stays $15.50 | Error: Enter a valid number.; no expense added; total stays $15.50 | PASS |
| Delete Lunch | Only Bus remains; total $3.00 | Only Bus remains; total $3.00 | PASS |
| Delete Bus | Empty-state message; total $0.00 | Empty-state message; total $0.00 | PASS |
| Navigate using Tab | Fields and buttons are reachable with visible focus | Fields and buttons are reachable with visible focus | PASS |
| Submit valid expense using Enter | Expense is added and total updates correctly | Expense is added and total updates correctly | PASS |

## Automated Checks Reported by the AI Agent

The agent reported 22 automated browser checks passing at
1280px and 375px, plus a JavaScript syntax check.

Reported coverage included adding and deleting expenses,
input validation, decimal precision, category validation,
safe text rendering, form reset, empty state, and overflow.

These results are separate from my manual checks above.

## Screenshot Evidence

- screenshots/working-expenses.png
- screenshots/invalid-input.png
- screenshots/invalid-input-improvement.png
- screenshots/after-deletion.png

## Limitations

Screen-reader announcements and other browsers have not
been verified.