export interface SendEmailPayload {
    from_name?: string;
    from_email?: string;
    subject: string;
    message: string;
    is_html: boolean;
    to: string[];
    cc?: string[];
    bcc?: string[];
    timestamp: Date;
}
//# sourceMappingURL=payloads.d.ts.map