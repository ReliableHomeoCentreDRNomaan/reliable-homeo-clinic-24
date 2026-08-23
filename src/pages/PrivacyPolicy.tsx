import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Database,
    ListChecks,
    CalendarClock,
    CreditCard,
    Share2,
    Lock,
    Cookie,
    Puzzle,
    UserCheck,
    Baby,
    FilePenLine,
    Mail,
} from "lucide-react";

type ContentBlock =
    | { type: "paragraph"; text: string }
    | { type: "list"; items: string[] };

interface Section {
    icon: typeof Database;
    title: string;
    content: ContentBlock[];
}

const sections: Section[] = [
    {
        icon: Database,
        title: "1. Information We Collect",
        content: [
            {
                type: "paragraph",
                text: "Depending on how you interact with our website and services, we may collect information such as:",
            },
            {
                type: "list",
                items: [
                    "Name",
                    "Phone number",
                    "Email address",
                    "Appointment details",
                    "Information voluntarily provided when contacting us",
                    "Information necessary to process payments",
                ],
            },
            {
                type: "paragraph",
                text: "We aim to collect only information reasonably necessary to provide and manage our services.",
            },
        ],
    },
    {
        icon: ListChecks,
        title: "2. How We Use Information",
        content: [
            { type: "paragraph", text: "Information may be used to:" },
            {
                type: "list",
                items: [
                    "Schedule and manage appointments",
                    "Contact patients regarding appointments",
                    "Process payments",
                    "Provide consultation services",
                    "Respond to enquiries",
                    "Handle cancellations and rescheduling",
                    "Process eligible refunds",
                    "Arrange prescription-based medicine delivery where applicable",
                    "Improve our website and services",
                    "Maintain appropriate business and transaction records",
                    "Comply with applicable legal requirements",
                ],
            },
        ],
    },
    {
        icon: CalendarClock,
        title: "3. Appointment Scheduling",
        content: [
            {
                type: "paragraph",
                text: "Our appointment scheduling system, DaySchedule, is used to facilitate appointment bookings.",
            },
            {
                type: "paragraph",
                text: "DaySchedule does not collect patient information as part of our appointment booking process beyond the information necessary for the booking process as configured by Reliable Homeo Clinics.",
            },
        ],
    },
    {
        icon: CreditCard,
        title: "4. Payment Information",
        content: [
            {
                type: "paragraph",
                text: "Payments are processed through Razorpay, our authorized third-party payment gateway.",
            },
            {
                type: "paragraph",
                text: "Reliable Homeo Clinics does not intentionally store customers' complete card, UPI, or banking credentials on its website.",
            },
            {
                type: "paragraph",
                text: "Payment information is processed by Razorpay in accordance with its applicable security and privacy practices.",
            },
        ],
    },
    {
        icon: Share2,
        title: "5. Sharing of Information",
        content: [
            { type: "paragraph", text: "We do not sell or rent personal information to third parties." },
            {
                type: "paragraph",
                text: "Information may be shared with service providers where reasonably necessary to operate our services, including payment processing, appointment scheduling, website hosting, communication, and related technical services.",
            },
            {
                type: "paragraph",
                text: "Information may also be disclosed where required by applicable law or a lawful government or regulatory authority.",
            },
        ],
    },
    {
        icon: Lock,
        title: "6. Data Security",
        content: [
            {
                type: "paragraph",
                text: "We take reasonable measures to protect personal information against unauthorized access, misuse, alteration, disclosure, or loss.",
            },
            {
                type: "paragraph",
                text: "However, no internet-based system can be guaranteed to be completely secure.",
            },
        ],
    },
    {
        icon: Cookie,
        title: "7. Cookies and Similar Technologies",
        content: [
            {
                type: "paragraph",
                text: "Our website may use cookies and similar technologies to provide website functionality, improve performance, understand website usage, and support relevant services.",
            },
            {
                type: "paragraph",
                text: "Users may manage cookie settings through their browser where applicable.",
            },
        ],
    },
    {
        icon: Puzzle,
        title: "8. Third-Party Services",
        content: [
            {
                type: "paragraph",
                text: "Our website may use third-party services, including appointment scheduling, payment processing, analytics, communication, hosting, and other technical services.",
            },
            {
                type: "paragraph",
                text: "These third-party providers may process information according to their own applicable privacy policies and terms.",
            },
        ],
    },
    {
        icon: UserCheck,
        title: "9. Your Rights",
        content: [
            {
                type: "paragraph",
                text: "Subject to applicable law, you may contact us to request access to, correction of, or deletion of your personal information, or to ask questions regarding how your information is handled.",
            },
        ],
    },
    {
        icon: Baby,
        title: "10. Children's Information",
        content: [
            {
                type: "paragraph",
                text: "Parents or legal guardians should provide appropriate consent and supervision when using our services on behalf of minors.",
            },
        ],
    },
    {
        icon: FilePenLine,
        title: "11. Changes to This Privacy Policy",
        content: [
            {
                type: "paragraph",
                text: "We may update this Privacy Policy from time to time. Any changes will be published on this page.",
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

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-16 bg-gradient-calm">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed animate-slide-up">
                            How Reliable Homeo Clinics collects, uses, and protects your personal information.
                        </p>
                    </div>
                </div>
            </section>

            {/* Intro */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-muted-foreground leading-relaxed text-center">
                            Reliable Homeo Clinics respects your privacy and is committed to protecting the
                            personal information provided by users of our website and appointment services.
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
                                        <div className="h-10 w-10 rounded-lg bg-gradient-trust flex items-center justify-center flex-shrink-0">
                                            <Icon className="h-5 w-5 text-white" />
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
                                    <div className="h-10 w-10 rounded-lg bg-gradient-trust flex items-center justify-center flex-shrink-0">
                                        <Mail className="h-5 w-5 text-white" />
                                    </div>
                                    <span>12. Contact Us</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    For questions regarding this Privacy Policy or your personal information:
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

export default PrivacyPolicy;