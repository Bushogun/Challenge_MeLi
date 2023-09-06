export function capitalizeLocations(text: string): string {
    return text.replace(/\b[A-Z]+\b/g, (word) => {
        return word.charAt(0) + word.slice(1).toLowerCase();
    });
}

export function capitalizeTitle(text: string): string {
    return text
        .toLowerCase()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
