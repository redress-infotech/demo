// Current User Level (1 = You, 2 = Friend, 3 = Friend's Friend)
let currentLevel = 1;

// WhatsApp Share Function
function shareCoupon(level) {
    let couponCode = "";
    let message = "";

    if (level === 1) {
        couponCode = "SHOP30";
        message = `मेरे साथ ₹30 की छूट पाएं! कूपन कोड: ${couponCode}\n\nइस कोड को चेकआउट पर डालें।`;
        document.getElementById("your-coupon").style.display = "block";
    } else if (level === 2) {
        couponCode = "FRIEND20";
        message = `मेरे दोस्त ने आपके लिए ₹20 की छूट भेजी है! कूपन कोड: ${couponCode}`;
        document.getElementById("friend-coupon").style.display = "block";
    }

    // Open WhatsApp with the message
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`);

    // Move to next level
    if (level < 3) {
        setTimeout(() => {
            document.getElementById(`level${level}-page`).classList.remove("active");
            document.getElementById(`level${level + 1}-page`).classList.add("active");
            currentLevel = level + 1;
        }, 1000);
    }
}