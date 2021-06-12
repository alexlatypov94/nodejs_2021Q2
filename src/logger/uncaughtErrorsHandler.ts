import { logger } from './logger';

export default function handleException(): void {
    process
        .on('unhandledRejection', (reason, p) => {
            console.error(reason, 'Unhandled Rejection at Promise', p);
            logger.error(reason);
        })
        .on('uncaughtException', (err) => {
            console.error(err, 'Uncaught Exception thrown');
            logger.error(err.stack!, () => {
                // eslint-disable-next-line no-process-exit
                process.exit(1);
            });
        });
}