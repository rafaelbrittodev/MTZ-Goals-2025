function() {
    return function sanitize(string) {
        try {
            if (typeof string !== 'string') {
                return '';
            }

            let sanitized = string.trim().toLowerCase();

            sanitized = sanitized
                .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                .replace(/[^a-z0-9\s-]/g, "")
                .replace(/\s+/g, "-")
                .replace(/-+/g, "-");

            return sanitized;
        } catch (e) {
            return '';
        }
    };
}