import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    UserX,
    Clock,
    RefreshCw,
    CalendarX,
    Ban,
    RotateCcw,
    Copy,
    Pill,
    Mail,
} from "lucide-react";

type ContentBlock =
    | { type: "paragraph"; text: string }
    | { type: "list"; items: string[] };

interface Section {
    icon: typeof UserX;
    title: string;
    content: ContentBlock[];
}

const sections: Section[] = [
    {
        icon: UserX,
        title: "1. Patient Cancellation",
        content: [
            {
                type: "paragraph",
                text: "Patients may cancel their appointment at least 24 hours before the scheduled appointment time.",
            },
            {
                type: "paragraph",
                text: "Eligible cancellations made at least 24 hours before the appointment will receive a full refund of the consultation fee.",
            },
        ],
    },
    {
        icon: Clock,
        title: "2. Cancellation Less Than 24 Hours Before Appointment",
        content: [
            {
                type: "paragraph",
                text: "Cancellations made less than 24 hours before the scheduled appointment may not qualify for a refund.",
            },
            {
                type: "paragraph",
                text: "Patients may contact the doctor regarding their circumstances and possible rescheduling.",
            },
        ],
    },
    {
        icon: RefreshCw,
        title: "3. Rescheduling",
        content: [
            { type: "paragraph", text: "Patients may request to reschedule an appointment." },
            {
                type: "paragraph",
                text: "Rescheduling is subject to the availability of the doctor and suitable appointment slots.",
            },
        ],
    },
    {
        icon: CalendarX,
        title: "4. Missed Appointments",
        content: [
            {
                type: "paragraph",
                text: "If a patient does not attend their scheduled appointment, they may contact the doctor to discuss rescheduling.",
            },
            { type: "paragraph", text: "Rescheduling is subject to the doctor's availability." },
        ],
    },
    {
        icon: Ban,
        title: "5. Cancellation by Reliable Homeo Clinics",
        content: [
            {
                type: "paragraph",
                text: "If the doctor or Reliable Homeo Clinics cancels an appointment, the patient may choose to:",
            },
            {
                type: "list",
                items: [
                    "Reschedule the appointment; or",
                    "Receive a refund of the applicable consultation fee.",
                ],
            },
        ],
    },
    {
        icon: RotateCcw,
        title: "6. Refund Processing",
        content: [
            { type: "paragraph", text: "Approved refunds will be processed within 5 working days." },
            {
                type: "paragraph",
                text: "Refunds will generally be made through the original payment method.",
            },
            {
                type: "paragraph",
                text: "The time taken for the refund to appear in the patient's account may vary depending on the bank or payment provider.",
            },
        ],
    },
    {
        icon: Copy,
        title: "7. Duplicate or Incorrect Payments",
        content: [
            {
                type: "paragraph",
                text: "If a patient believes they have been charged more than once or charged an incorrect amount, they should contact Reliable Homeo Clinics with their appointment and payment details so that the transaction can be reviewed.",
            },
        ],
    },
    {
        icon: Pill,
        title: "8. Medicine Payments",
        content: [
            { type: "paragraph", text: "Consultation refunds and medicine payments are separate matters." },
            {
                type: "paragraph",
                text: "Where medicine has been prescribed by a doctor following consultation, any applicable medicine and delivery charges will be payable by the patient.",
            },
            {
                type: "paragraph",
                text: "Medicine delivery availability is determined by the doctor based on the patient's location.",
            },
        ],
    },
];

const renderContent = (content: ContentBlock[]) =>
    content.map((block, i) =>
        block.type === "paragraph" ? (
            <p key={i} className="text-sm text-muted-foreground leading-relaxed">
                {block.text}
            </p>
        ) : (
            <ul key={i} className="list-disc pl-5 space-y-1">
                {block.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground leading-relaxed">
                        {item}
                    </li>
                ))}
            </ul>
        )
    );

const CancellationRefundPolicy = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-16 bg-gradient-calm">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
                            Cancellation & Refund Policy
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed animate-slide-up">
                            How cancellations, rescheduling, and refunds are handled for consultations with
                            Reliable Homeo Clinics.
                        </p>
                    </div>
                </div>
            </section>

            {/* Intro */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-muted-foreground leading-relaxed text-center">
                            Reliable Homeo Clinics provides consultation appointments that may be conducted in
                            person or online through Google Meet.
                        </p>
                    </div>
                </div>
            </section>

            {/* Policy Sections */}
            <section className="pb-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-6">
                        {sections.map(({ icon: Icon, title, content }) => (
                            <Card key={title} className="shadow-card">
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-3 text-lg">
                                        <div className="h-10 w-10 rounded-lg bg-gradient-healing flex items-center justify-center flex-shrink-0">
                                            <Icon className="h-5 w-5 text-primary-foreground" />
                                        </div>
                                        <span>{title}</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">{renderContent(content)}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact / Last updated */}
            <section className="pb-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <Card className="shadow-card">
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-3 text-lg">
                                    <div className="h-10 w-10 rounded-lg bg-gradient-healing flex items-center justify-center flex-shrink-0">
                                        <Mail className="h-5 w-5 text-primary-foreground" />
                                    </div>
                                    <span>9. Contact</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    For cancellation, rescheduling, or refund enquiries:
                                </p>
                                <p className="text-sm font-semibold text-foreground mt-3">
                                    Reliable Homeo Clinics
                                </p>
                                <p className="text-sm text-primary">Email: info@reliablehomeo.com</p>
                            </CardContent>
                        </Card>
                        <p className="text-sm text-muted-foreground italic text-center mt-8">
                            Last Updated: 21st August 2026
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CancellationRefundPolicy;