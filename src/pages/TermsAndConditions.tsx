import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    FileText,
    CalendarCheck,
    CreditCard,
    XCircle,
    RefreshCw,
    UserX,
    RotateCcw,
    Pill,
    Stethoscope,
    Globe,
    ShieldCheck,
    FilePenLine,
    Mail,
} from "lucide-react";

type ContentBlock =
    | { type: "paragraph"; text: string }
    | { type: "list"; items: string[] };

interface Section {
    icon: typeof FileText;
    title: string;
    content: ContentBlock[];
}

const sections: Section[] = [
    {
        icon: FileText,
        title: "1. Our Services",
        content: [
            {
                type: "paragraph",
                text: "Reliable Homeo Clinics provides homeopathic medical consultation services through qualified doctors.",
            },
            { type: "paragraph", text: "Consultations may be provided:" },
            {
                type: "list",
                items: ["In person at our clinic", "Online through Google Meet"],
            },
            {
                type: "paragraph",
                text: "The availability and format of a consultation will be based on the appointment selected by the patient.",
            },
        ],
    },
    {
        icon: CalendarCheck,
        title: "2. Appointments",
        content: [
            {
                type: "paragraph",
                text: "Patients can book consultations through our online appointment scheduling system.",
            },
            {
                type: "paragraph",
                text: "Consultation fees and applicable prices are displayed on the appointment booking page before the patient completes the booking.",
            },
            {
                type: "paragraph",
                text: "Patients are responsible for providing accurate contact and appointment information.",
            },
            {
                type: "paragraph",
                text: "An appointment is confirmed after the booking and required payment have been successfully completed.",
            },
        ],
    },
    {
        icon: CreditCard,
        title: "3. Payments",
        content: [
            {
                type: "paragraph",
                text: "Full payment for the consultation is required before the scheduled appointment.",
            },
            {
                type: "paragraph",
                text: "Payments are processed securely through Razorpay, our authorized payment gateway.",
            },
            {
                type: "paragraph",
                text: "All applicable consultation prices are displayed in Indian Rupees (INR) on the appointment booking page.",
            },
        ],
    },
    {
        icon: XCircle,
        title: "4. Cancellation",
        content: [
            {
                type: "paragraph",
                text: "Patients may cancel an appointment at least 24 hours before the scheduled appointment time and receive a full refund of the consultation fee.",
            },
            {
                type: "paragraph",
                text: "Cancellations made less than 24 hours before the scheduled appointment may not qualify for a refund, unless otherwise determined by Reliable Homeo Clinics.",
            },
        ],
    },
    {
        icon: RefreshCw,
        title: "5. Rescheduling",
        content: [
            { type: "paragraph", text: "Patients may request to reschedule their appointment." },
            {
                type: "paragraph",
                text: "If a patient does not attend a scheduled appointment, they may contact the doctor to discuss rescheduling.",
            },
            {
                type: "paragraph",
                text: "Rescheduling is subject to doctor and appointment availability.",
            },
        ],
    },
    {
        icon: UserX,
        title: "6. Cancellation by the Doctor",
        content: [
            {
                type: "paragraph",
                text: "If a doctor cancels an appointment, the patient may be offered the option to:",
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
        title: "7. Refunds",
        content: [
            { type: "paragraph", text: "Approved refunds are processed within 5 working days." },
            {
                type: "paragraph",
                text: "Refunds will generally be made through the applicable payment method used for the original transaction.",
            },
            {
                type: "paragraph",
                text: "The time required for the refunded amount to appear in the patient's bank account may depend on the payment provider or bank.",
            },
        ],
    },
    {
        icon: Pill,
        title: "8. Medicines",
        content: [
            {
                type: "paragraph",
                text: "Reliable Homeo Clinics does not sell medicines as a general e-commerce product through the website.",
            },
            {
                type: "paragraph",
                text: "If a doctor determines that medicine is appropriate following a consultation, medicine may be advised or prescribed according to the doctor's professional assessment.",
            },
            {
                type: "paragraph",
                text: "Where applicable, medicines may be collected from the clinic or delivered to the patient's address.",
            },
            {
                type: "paragraph",
                text: "Medicine delivery availability is determined by the doctor based on the patient's location. Delivery charges, where applicable, are payable by the patient.",
            },
        ],
    },
    {
        icon: Stethoscope,
        title: "9. Medical Disclaimer",
        content: [
            {
                type: "paragraph",
                text: "Information available on this website is provided for general informational purposes and should not be considered a substitute for professional medical consultation.",
            },
            { type: "paragraph", text: "Patients should follow the advice provided by their treating doctor." },
            {
                type: "paragraph",
                text: "In case of a medical emergency, patients should seek appropriate emergency medical care immediately.",
            },
        ],
    },
    {
        icon: Globe,
        title: "10. Website Information",
        content: [
            {
                type: "paragraph",
                text: "We make reasonable efforts to ensure that information published on this website is accurate and up to date. However, services, availability, appointment schedules, fees, and other information may change without prior notice.",
            },
        ],
    },
    {
        icon: ShieldCheck,
        title: "11. Privacy",
        content: [
            {
                type: "paragraph",
                text: "Personal information submitted through our website and appointment services is handled in accordance with our Privacy Policy.",
            },
        ],
    },
    {
        icon: FilePenLine,
        title: "12. Changes to These Terms",
        content: [
            {
                type: "paragraph",
                text: "Reliable Homeo Clinics reserves the right to modify these Terms & Conditions when necessary. Updated terms will be published on this page.",
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

const TermsAndConditions = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-16 bg-gradient-calm">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
                            Terms & Conditions
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed animate-slide-up">
                            Please read these terms carefully before booking an appointment or making a payment
                            with Reliable Homeo Clinics.
                        </p>
                    </div>
                </div>
            </section>

            {/* Intro */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-muted-foreground leading-relaxed text-center">
                            Welcome to Reliable Homeo Clinics. By accessing this website, booking an appointment,
                            making a payment, or using our consultation services, you agree to these Terms &
                            Conditions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Terms Sections */}
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
                                    <span>13. Contact Us</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    For questions regarding these Terms & Conditions, appointments, payments,
                                    cancellations, or services, please contact:
                                </p>
                                <p className="text-sm font-semibold text-foreground mt-3">
                                    Reliable Homeo Clinics
                                </p>
                                <p className="text-sm text-primary">Email: info@reliablehomeo.com</p>
                            </CardContent>
                        </Card>
                        <p className="text-sm text-muted-foreground italic text-center mt-8">
                            Last Updated: 26th August 2026
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TermsAndConditions;