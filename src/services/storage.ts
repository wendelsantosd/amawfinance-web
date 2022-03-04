export default {
    write: (key: string, value: { [key: string]: any } | undefined): void => {
        localStorage.setItem(
            key,
            JSON.stringify(value)
        )
    },

    read: (key: string): any | null | undefined => {
        const value = localStorage.getItem(key)

        if (value) {
            return JSON.parse(value)
        } else {
            return null
        }
    },

    clear: (item: string): void => {
        if (item === 'all') {
            localStorage.clear()
        } else {
            localStorage.removeItem(item)
        }
    }
}