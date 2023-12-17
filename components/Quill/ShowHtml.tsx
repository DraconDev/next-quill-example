export function ShowHtml({ userText }: { userText: string }) {
    return (
        <div className="description">
            <div
                className="w-full h-[74vh] rounded overflow-y-auto"
                dangerouslySetInnerHTML={{ __html: userText }}
            />
        </div>
    );
}
