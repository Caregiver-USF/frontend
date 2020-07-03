class Auth {
    constructor(authstatus = false) {
        this.authstatus = authstatus
    }

    listener(val) {}

    set currentStatus(val) {
        this.authstatus = val
        this.listener(val);
    }

    get currentStatus() {
        return this.authstatus
    }

    checkAuthStatus(listener) {
        this.listener = listener
    }
}

export const authService = new Auth();