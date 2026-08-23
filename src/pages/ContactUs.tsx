import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Mail,
    MapPin,
    Phone,
    CalendarDays,
    Video,
    MessageCircle,
} from "lucide-react";

const ContactPage = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-16 bg-gradient-calm">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
                            Contact Us
                        </h1>

                        <p className="text-xl text-muted-foreground leading-relaxed animate-slide-up">
                            Get in touch with Reliable Homeo Clinics for appointments,
                            consultations, payments, refunds, and other enquiries.
                        </p>
                    </div>
                </div>
            </section>

            {/* Intro */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-muted-foreground leading-relaxed text-center">
                            For appointments, consultations, cancellations, rescheduling,
                            payments, refunds, or other enquiries, please contact Reliable
                            Homeo Clinics using the information below.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="pb-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-6">

                        {/* General Contact */}
                        <Card className="shadow-card">
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-3 text-lg">
                                    <div className="h-10 w-10 rounded-lg bg-gradient-trust flex items-center justify-center flex-shrink-0">
                                        <MessageCircle className="h-5 w-5 text-white" />
                                    </div>

                                    <span>Contact Reliable Homeo Clinics</span>
                                </CardTitle>
                            </CardHeader>

                            <CardContent>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    For appointments, consultations, cancellations,
                                    rescheduling, payments, refunds, or other enquiries,
                                    please contact Reliable Homeo Clinics.
                                </p>

                                <p className="text-sm font-semibold text-foreground mt-4">
                                    Reliable Homeo Clinics
                                </p>
                            </CardContent>
                        </Card>

                        {/* Email */}
                        <Card className="shadow-card">
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-3 text-lg">
                                    <div className="h-10 w-10 rounded-lg bg-gradient-trust flex items-center justify-center flex-shrink-0">
                                        <Mail className="h-5 w-5 text-white" />
                                    </div>

                                    <span>Email</span>
                                </CardTitle>
                            </CardHeader>

                            <CardContent>
                                <a
                                    href="mailto:info@reliablehomeo.com"
                                    className="text-sm text-primary hover:underline"
                                >
                                    info@reliablehomeo.com
                                </a>
                            </CardContent>
                        </Card>

                        {/* Phone */}
                        <Card className="shadow-card">
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-3 text-lg">
                                    <div className="h-10 w-10 rounded-lg bg-gradient-trust flex items-center justify-center flex-shrink-0">
                                        <Phone className="h-5 w-5 text-white" />
                                    </div>

                                    <span>Phone</span>
                                </CardTitle>
                            </CardHeader>

                            <CardContent>
                                <a
                                    href="tel:+917780396837"
                                    className="text-sm text-primary hover:underline"
                                >
                                    +91 77803 96837
                                </a>
                            </CardContent>
                        </Card>

                        {/* Clinic Locations */}
                        <Card className="shadow-card">
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-3 text-lg">
                                    <div className="h-10 w-10 rounded-lg bg-gradient-trust flex items-center justify-center flex-shrink-0">
                                        <MapPin className="h-5 w-5 text-white" />
                                    </div>

                                    <span>Clinic Locations</span>
                                </CardTitle>
                            </CardHeader>

                            <CardContent>
                                <div className="space-y-6">

                                    {/* Abids Clinic */}
                                    <div>
                                        <h3 className="text-sm font-semibold text-foreground mb-2">
                                            Abids Clinic
                                        </h3>

                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            4-1-865/1, Tilak Road, Abids,
                                            <br />
                                            Hyderabad, Telangana 500001,
                                            <br />
                                            India
                                        </p>
                                    </div>

                                    {/* Mehdipatnam Clinic */}
                                    <div>
                                        <h3 className="text-sm font-semibold text-foreground mb-2">
                                            Mehdipatnam Clinic
                                        </h3>

                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            #13-6-437/B/2, Khadar Bagh,
                                            <br />
                                            Nanal Nagar
                                            <br />
                                            (Near Quba Masjid & Premier Hospital)
                                        </p>
                                    </div>

                                </div>
                            </CardContent>
                        </Card>

                        {/* Appointments */}
                        <Card className="shadow-card">
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-3 text-lg">
                                    <div className="h-10 w-10 rounded-lg bg-gradient-trust flex items-center justify-center flex-shrink-0">
                                        <CalendarDays className="h-5 w-5 text-white" />
                                    </div>

                                    <span>Appointments</span>
                                </CardTitle>
                            </CardHeader>

                            <CardContent>
                                <div className="space-y-3">
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Consultation appointments can be booked through our
                                        online appointment scheduling system.
                                    </p>

                                    <div className="flex items-start gap-3">
                                        <Video className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />

                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            Consultations are available both in person and
                                            online through Google Meet, subject to appointment
                                            availability.
                                        </p>
                                    </div>

                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        For appointment-related questions, cancellations,
                                        rescheduling, or refunds, please contact us using the
                                        information above.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                    </div>
                </div>
            </section>

            {/* Last Updated */}
            <section className="pb-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-sm text-muted-foreground italic text-center">
                            Last Updated: 21st August 2026
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;