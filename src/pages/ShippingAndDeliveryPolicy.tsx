import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Stethoscope,
    Video,
    Building2,
    Pill,
    MapPin,
    Wallet,
    Truck,
    Mail,
} from "lucide-react";

type ContentBlock =
    | { type: "paragraph"; text: string }
    | { type: "list"; items: string[] };

interface Section {
    icon: typeof Stethoscope;
    title: string;
    content: ContentBlock[];
}

const sections: Section[] = [
    {
        icon: Stethoscope,
        title: "1. Consultation Service Delivery",
        content: [
            { type: "paragraph", text: "Consultations may be provided:" },
            {
                type: "list",
                items: ["In person at the clinic; or", "Online through Google Meet."],
            },
            {
                type: "paragraph",
                text: "The consultation will be provided according to the date, time, and format selected during appointment booking.",
            },
        ],
    },
    {
        icon: Video,
        title: "2. Online Consultation",
        content: [
            {
                type: "paragraph",
                text: "Patients who select an online consultation will receive the necessary information to attend the consultation through Google Meet.",
            },
            {
                type: "paragraph",
                text: "Patients should ensure that they have a suitable internet connection and the necessary device to participate in the consultation.",
            },
        ],
    },
    {
        icon: Building2,
        title: "3. In-Person Consultation",
        content: [
            {
                type: "paragraph",
                text: "Patients selecting an in-person appointment should attend the clinic at the scheduled date and time.",
            },
        ],
    },
    {
        icon: Pill,
        title: "4. Prescription-Based Medicines",
        content: [
            {
                type: "paragraph",
                text: "If a doctor determines that medicine is appropriate following a consultation, the medicine may be provided according to the doctor's prescription.",
            },
            { type: "paragraph", text: "Patients may:" },
            {
                type: "list",
                items: [
                    "Collect applicable medicines from the clinic; or",
                    "Request delivery to an eligible address.",
                ],
            },
        ],
    },
    {
        icon: MapPin,
        title: "5. Medicine Delivery Availability",
        content: [
            {
                type: "paragraph",
                text: "Medicine delivery availability is determined by the doctor based on the patient's location.",
            },
            {
                type: "paragraph",
                text: "Delivery may be available within India or internationally where the doctor determines that delivery can be provided.",
            },
            { type: "paragraph", text: "Availability is not guaranteed for every location." },
        ],
    },
    {
        icon: Wallet,
        title: "6. Delivery Charges",
        content: [
            { type: "paragraph", text: "Any applicable medicine delivery charges are payable by the patient." },
            {
                type: "paragraph",
                text: "The patient will be informed of applicable delivery charges before proceeding with delivery.",
            },
        ],
    },
    {
        icon: Truck,
        title: "7. Delivery Times",
        content: [
            {
                type: "paragraph",
                text: "Delivery timelines may vary depending on the patient's location, courier availability, and other circumstances affecting delivery.",
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

const ShippingDeliveryPolicy = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-16 bg-gradient-calm">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
                            Shipping & Service Delivery Policy
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed animate-slide-up">
                            How consultation services and prescription-based medicine delivery are handled at
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
                            Reliable Homeo Clinics primarily provides doctor consultation services. This policy
                            explains how consultation services and, where applicable, prescription-based
                            medicine delivery are handled.
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
                                    <span>8. Contact</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    For questions regarding consultation delivery or prescription-based medicine
                                    delivery:
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

export default ShippingDeliveryPolicy;