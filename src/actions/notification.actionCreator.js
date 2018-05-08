
export function notify(msg) {
    return{ type: notificationActions.notify, msg }
}

export const notificationActions = {
    notify: 'notification:notify'
}
