export const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
};
export const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12)
        return "Good Morning";
    if (hour < 17)
        return "Good Afternoon";
    return "Good Evening";
};
