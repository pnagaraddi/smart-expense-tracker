# Improvement After Code Review

The original amount validation rejected invalid inputs but
used the same error message for several different problems.

Following AI code review, I requested separate messages for
missing amounts, zero or negative amounts, excessive decimal
places, and nonnumeric input.

The amount field was changed to text with inputmode="decimal".
This lets JavaScript distinguish an empty field from nonnumeric
text while requesting a decimal keyboard on supported devices.

This makes errors easier to correct. Existing range checks,
integer-cent storage, and name/category validation were preserved.

The AI agent reported passing automated checks. My manual
verification results are recorded in test_results.md.