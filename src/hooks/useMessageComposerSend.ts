import { useCallback, useState, useRef } from 'preact/hooks';
import { submitComposerMessage, type SubmitComposerMessageOptions } from '@/services/composer/sendMessage';

function errorMessage(error: unknown) {
    return error instanceof Error ? error.message : '发送失败，请重试';
}

export function useMessageComposerSend() {
    const [isSending, setIsSending] = useState(false);
    const isSendingRef = useRef(false);

    const send = useCallback(async (options: SubmitComposerMessageOptions) => {
        if ((!options.content.trim() && !options.voiceDraft) || isSendingRef.current) return;

        isSendingRef.current = true;
        setIsSending(true);

        try {
            await submitComposerMessage(options);
        } catch (error) {
            alert(errorMessage(error));
        } finally {
            isSendingRef.current = false;
            setIsSending(false);
        }
    }, []);

    return {
        isSending,
        send,
    };
}
