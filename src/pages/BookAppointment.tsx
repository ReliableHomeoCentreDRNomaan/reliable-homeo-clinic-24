import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Clock, Calendar, Globe, Video } from "lucide-react";

const BookAppointment = () => {
  const handlePhoneCall = () => {
    window.location.href = "tel:+918686904404";
  };

  const handleBookOnline = () => {
    window.open("https://dr-nomaan-siddiqui.dayschedule.com/", "_blank");
  };


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Book Your Appointment
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-slide-up">
              Take the first step towards natural healing. Schedule your consultation with our experienced homeopathic doctors.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Easy Ways to Book
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Phone Booking */}
              <Card className="relative overflow-hidden shadow-healing hover:shadow-lg transition-smooth">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-healing opacity-10 rounded-full -mr-16 -mt-16"></div>
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="h-16 w-16 rounded-full bg-gradient-healing flex items-center justify-center">
                      <Phone className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">Call Directly</CardTitle>
                  <CardDescription>
                    Speak with our friendly staff to schedule your appointment
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="text-2xl font-bold text-primary">+91 86869 04404</div>
                  <Button
                    variant="healing"
                    size="lg"
                    onClick={handlePhoneCall}
                    className="w-full"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Available Tuesday & Thursday, 11 AM - 1 PM
                  </p>
                </CardContent>
              </Card>

              {/* Online Consultation for International Patients */}
              <Card className="relative overflow-hidden shadow-healing hover:shadow-lg transition-smooth">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-trust opacity-10 rounded-full -mr-16 -mt-16"></div>
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="h-16 w-16 rounded-full bg-gradient-trust flex items-center justify-center">
                      <Globe className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">Online Consultation</CardTitle>
                  <CardDescription>
                    Perfect for international patients - Connect with Dr. Nomaan from anywhere in the world
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="text-lg font-semibold text-foreground">Global Healthcare Access</div>
                  <p className="text-sm text-muted-foreground">
                    Get expert homeopathic treatment through secure video consultation, regardless of your location
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-primary mb-4">
                    <Video className="h-4 w-4" />
                    <span>Secure Video Consultation</span>
                  </div>
                  <Button
                    variant="appointment"
                    size="lg"
                    onClick={handleBookOnline}
                    className="w-full"
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    Book Online Consultation
                  </Button>
                  {/* <DayScheduleButton /> */}
                </CardContent>
              </Card>
            </div>


            {/* Clinic Locations */}
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              Choose Your Preferred Location
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Abids Clinic */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-primary" />
                    <span>Abids Clinic</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      4-1-414, Sagar Plaza, Opposite Sachin Sports, <br />
                      Abids road, Bank Street.
                    </p>
                  </div>

                  <div className="flex items-start space-x-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="font-medium">Timings:</span>
                    <div className="flex flex-col">
                      <span className="text-muted-foreground">Mon-Thu & Sat: 11:30 AM - 2:30 PM</span>
                      <span className="text-muted-foreground">Mon, Wed, Sat: 6 PM - 9 PM</span>
                      <span className="text-muted-foreground">Sun: 1 PM - 3 PM</span>

                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="font-medium">Available:</span>
                    <span className="text-success">Monday to Saturday</span>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full mt-4"
                    onClick={() => window.open("https://maps.google.com/?q=Abids+Reliable+Homeo+Clinic", "_blank")}
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    View on Google Maps
                  </Button>
                </CardContent>
              </Card>


              {/* Mehdipatnam Clinic */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-primary" />
                    <span>Mehdipatnam Clinic</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      #13-6-437/B/2, Khadar Bagh, Nanal Nagar<br />
                      (Near Quba Masjid & Premier Hospital)
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="font-medium">Timings:</span>
                    <span className="text-muted-foreground">Tue, Thu: 5 PM - 8 PM</span>
                  </div>

                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="font-medium">Available:</span>
                    <span className="text-success">Tuesday and Thursday</span>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full mt-4 place-content-end"
                    onClick={() => window.open("https://maps.google.com/?q=Mehdipatnam+Reliable+Homeo+Clinic", "_blank")}
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    View on Google Maps
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* What to Expect */}
            <div className="mt-16 bg-muted rounded-xl p-8">
              <h3 className="text-2xl font-bold text-foreground text-center mb-8">
                What to Expect During Your Visit
              </h3>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-3">
                  <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold">
                    1
                  </div>
                  <h4 className="font-semibold text-foreground">Detailed Consultation</h4>
                  <p className="text-sm text-muted-foreground">
                    Our doctor will take a comprehensive case history to understand your complete health picture.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold">
                    2
                  </div>
                  <h4 className="font-semibold text-foreground">Personalized Treatment</h4>
                  <p className="text-sm text-muted-foreground">
                    Based on your symptoms and constitution, we'll create a customized treatment plan just for you.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold">
                    3
                  </div>
                  <h4 className="font-semibold text-foreground">Follow-up Care</h4>
                  <p className="text-sm text-muted-foreground">
                    Regular monitoring and adjustment of your treatment to ensure the best possible outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookAppointment;