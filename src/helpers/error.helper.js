import PubSub from 'pubsub-js';

export default class ErrorHelper {

    static handle(errors) {
        errors.forEach(error => {
            PubSub.publish('validationError', error)
        });
    }

    static clear() {
        PubSub.publish('validationErrorClear');
    }
}