"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Download, ExternalLink, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResumeDialog() {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <Button>Resume</Button>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50" />

                <Dialog.Content className="fixed inset-0 z-50 flex flex-col bg-background m-auto w-[80vw] h-[90vh] rounded-lg shadow-xl overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b px-4 py-3">
                        <Dialog.Title className="font-semibold">
                            Resume Preview
                        </Dialog.Title>
                        <Dialog.Close asChild>
                            <Button variant="ghost" size="icon">
                                <X className="h-4 w-4" />
                            </Button>
                        </Dialog.Close>
                    </div>

                    {/* PDF */}
                    <div className="flex-1 overflow-hidden">
                        <iframe
                            src="/resume/Resume_chawalit_marayat.pdf"
                            className="h-full w-full"
                            style={{ border: "none" }}
                        />
                    </div>

                    {/* Footer */}
                    <div className="flex gap-3 border-t p-4">
                        <Button asChild>
                            <a href="/resume/Resume_chawalit_marayat.pdf" download>
                                <Download className="mr-2 h-4 w-4" />
                                Download
                            </a>
                        </Button>
                        <Button variant="outline" asChild>
                            <a href="/resume/Resume_chawalit_marayat.pdf" target="_blank">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Open
                            </a>
                        </Button>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}