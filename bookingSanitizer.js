// ==========================================
// JAVASCRIPT MODULE: Booking Data Sanitizer
// Purpose: Process, sanitize, and validate user input 
// for the booking cancellation and refund workflow.
// ==========================================

export async function compute() {
    // 1. Sanitize input fields: trim whitespace and normalize email to lowercase
    const userEmail = input.user_email ? input.user_email.trim().toLowerCase() : "";
    const rawExplanation = input.user_explanation ? input.user_explanation.trim() : "";
    const cancellationReason = input.cancellation_reason ? input.cancellation_reason.trim() : "";

    // 2. Perform basic string manipulation and conditional logic
    const explanationLength = rawExplanation.length;
    
    // Evaluate if the user's explanation is detailed enough (more than 20 characters)
    const isDetailedExplanation = explanationLength > 20;

    // 3. Construct and return the cleaned data object back to Make
    return {
        sanitized_email: userEmail,
        clean_explanation: rawExplanation,
        reason: cancellationReason,
        metadata: {
            char_count: explanationLength,
            is_detailed: isDetailedExplanation,
            processed_at: new Date().toISOString()
        }
    };
}
