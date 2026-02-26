import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle2, ArrowRight, Calculator, TrendingUp, Phone, Mail } from "lucide-react";

interface QuizAnswers {
  creditScore: string;
  timeInBusiness: string;
  annualRevenue: string;
  hasCollections: string;
  fundingAmount: string;
}

interface ContactInfo {
  name: string;
  email: string;
  phone: string;
}

export default function CreditQuiz() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<QuizAnswers>({
    creditScore: "",
    timeInBusiness: "",
    annualRevenue: "",
    hasCollections: "",
    fundingAmount: "",
  });
  const [contact, setContact] = useState<ContactInfo>({
    name: "",
    email: "",
    phone: "",
  });
  const [showContactForm, setShowContactForm] = useState(false);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const calculateScore = (a: QuizAnswers): number => {
    let s = 0;
    // Credit score
    if (a.creditScore === "720+") s += 30;
    else if (a.creditScore === "680-719") s += 25;
    else if (a.creditScore === "640-679") s += 15;
    else if (a.creditScore === "600-639") s += 10;
    else if (a.creditScore === "<600") s += 0;
    // Time in business
    if (a.timeInBusiness === "2+ years") s += 25;
    else if (a.timeInBusiness === "1-2 years") s += 20;
    else if (a.timeInBusiness === "6mo-1 year") s += 10;
    else if (a.timeInBusiness === "<6 months") s += 0;
    // Revenue
    if (a.annualRevenue === "500k+") s += 25;
    else if (a.annualRevenue === "250k-500k") s += 20;
    else if (a.annualRevenue === "100k-250k") s += 15;
    else if (a.annualRevenue === "50k-100k") s += 10;
    else if (a.annualRevenue === "<50k") s += 0;
    // Collections
    if (a.hasCollections === "no") s += 20;
    else s += 0;
    return s;
  };

  const getReadinessLevel = (s: number) => {
    if (s >= 80) return { label: "Excellent", color: "text-green-400", bg: "bg-green-500/20" };
    if (s >= 60) return { label: "Good", color: "text-teal-400", bg: "bg-teal-500/20" };
    if (s >= 40) return { label: "Fair", color: "text-yellow-400", bg: "bg-yellow-500/20" };
    return { label: "Needs Work", color: "text-red-400", bg: "bg-red-500/20" };
  };

  const getQualifyingPrograms = (s: number, a: QuizAnswers) => {
    const programs = [];
    if (s >= 60) programs.push("MCA (Merchant Cash Advance)");
    if (parseInt(a.annualRevenue.replace(/[^0-9]/g, "")) >= 100000 || a.annualRevenue === "500k+") {
      programs.push("Business Term Loans");
    }
    if (parseInt(a.creditScore.replace(/[^0-9]/g, "")) >= 680 || a.creditScore === "720+") {
      programs.push("SBA Loans");
    }
    if (s >= 40) programs.push("Lines of Credit");
    return programs.length ? programs : ["Credit Repair Program"];
  };

  const handleSubmit = () => {
    const finalScore = calculateScore(answers);
    setScore(finalScore);
    setSubmitted(true);
    // In production, this would save to a database
    console.log("Quiz submitted:", { answers, contact, score: finalScore });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  if (submitted) {
    const readiness = getReadinessLevel(score);
    const programs = getQualifyingPrograms(score, answers);

    return (
      <Card className="w-full max-w-2xl mx-auto bg-navy-light border-gold/20">
        <CardHeader className="text-center">
          <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full ${readiness.bg} mx-auto mb-4`}>
            <Calculator className={`w-12 h-12 ${readiness.color}`} />
          </div>
          <CardTitle className="text-2xl text-white">Your Funding Readiness Score</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className={`text-6xl font-bold ${readiness.color}`}>{score}/100</div>
            <div className={`inline-block mt-2 px-4 py-1 rounded-full ${readiness.bg} ${readiness.color} font-medium`}>
              {readiness.label}
            </div>
          </div>

          <div className="bg-navy rounded-lg p-4 border border-white/10">
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-gold" />
              You May Qualify For:
            </h4>
            <ul className="space-y-2">
              {programs.map((p, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-navy rounded-lg p-4 border border-white/10">
            <h4 className="text-white font-semibold mb-3">Next Steps</h4>
            {showContactForm ? (
              <div className="space-y-3">
                <Input
                  placeholder="Your name"
                  value={contact.name}
                  onChange={(e) => setContact({ ...contact, name: e.target.value })}
                  className="bg-navy-dark border-white/20 text-white"
                />
                <Input
                  placeholder="Email address"
                  value={contact.email}
                  onChange={(e) => setContact({ ...contact, email: e.target.value })}
                  className="bg-navy-dark border-white/20 text-white"
                />
                <Input
                  placeholder="Phone number"
                  value={contact.phone}
                  onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                  className="bg-navy-dark border-white/20 text-white"
                />
                <Button 
                  onClick={() => {
                    console.log("Lead captured:", { contact, score });
                    alert("Thanks! We'll be in touch within 24 hours.");
                  }}
                  className="bg-gold hover:bg-gold/80 text-navy font-semibold w-full"
                >
                  Submit & Get My Funding Plan
                </Button>
              </div>
            ) : (
              <>
                <p className="text-gray-400 text-sm mb-4">
                  Our team will review your assessment and contact you within 24 hours with funding options tailored to your business.
                </p>
                <div className="flex gap-3">
                  <Button className="bg-gold hover:bg-gold/80 text-navy font-semibold flex-1">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white/20 text-white hover:bg-white/10"
                    onClick={() => setShowContactForm(true)}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Me Details
                  </Button>
                </div>
              </>
            )}
          </div>

          <p className="text-center text-gray-500 text-xs">
            This is a preliminary assessment. Final approval depends on full application review.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto bg-navy-light border-gold/20">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl text-white">Credit Readiness Quiz</CardTitle>
          <div className="text-gold text-sm font-medium">Step {step} of 5</div>
        </div>
        <div className="w-full bg-navy rounded-full h-2 mt-2">
          <div
            className="bg-gold h-2 rounded-full transition-all duration-300"
            style={{ width: `${(step / 5) * 100}%` }}
          />
        </div>
      </CardHeader>
      <CardContent>
        {step === 1 && (
          <div className="space-y-4">
            <Label className="text-white text-lg">What's your approximate personal credit score?</Label>
            <RadioGroup
              value={answers.creditScore}
              onValueChange={(v) => setAnswers({ ...answers, creditScore: v })}
              className="space-y-3"
            >
              {["720+", "680-719", "640-679", "600-639", "<600", "Not sure"].map((score) => (
                <label
                  key={score}
                  className="flex items-center space-x-3 p-3 rounded-lg border border-white/10 hover:border-gold/50 cursor-pointer transition-colors"
                >
                  <RadioGroupItem value={score} className="border-white/30" />
                  <span className="text-gray-200">{score}</span>
                </label>
              ))}
            </RadioGroup>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <Label className="text-white text-lg">How long has your business been operating?</Label>
            <RadioGroup
              value={answers.timeInBusiness}
              onValueChange={(v) => setAnswers({ ...answers, timeInBusiness: v })}
              className="space-y-3"
            >
              {["2+ years", "1-2 years", "6mo-1 year", "<6 months", "Not started yet"].map((time) => (
                <label
                  key={time}
                  className="flex items-center space-x-3 p-3 rounded-lg border border-white/10 hover:border-gold/50 cursor-pointer transition-colors"
                >
                  <RadioGroupItem value={time} className="border-white/30" />
                  <span className="text-gray-200">{time}</span>
                </label>
              ))}
            </RadioGroup>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <Label className="text-white text-lg">What's your annual business revenue?</Label>
            <RadioGroup
              value={answers.annualRevenue}
              onValueChange={(v) => setAnswers({ ...answers, annualRevenue: v })}
              className="space-y-3"
            >
              {["500k+", "250k-500k", "100k-250k", "50k-100k", "<50k", "Pre-revenue"].map((rev) => (
                <label
                  key={rev}
                  className="flex items-center space-x-3 p-3 rounded-lg border border-white/10 hover:border-gold/50 cursor-pointer transition-colors"
                >
                  <RadioGroupItem value={rev} className="border-white/30" />
                  <span className="text-gray-200">{rev}</span>
                </label>
              ))}
            </RadioGroup>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <Label className="text-white text-lg">Do you have any collections or judgments?</Label>
            <RadioGroup
              value={answers.hasCollections}
              onValueChange={(v) => setAnswers({ ...answers, hasCollections: v })}
              className="space-y-3"
            >
              <label className="flex items-center space-x-3 p-3 rounded-lg border border-white/10 hover:border-gold/50 cursor-pointer transition-colors">
                <RadioGroupItem value="no" className="border-white/30" />
                <span className="text-gray-200">No, all accounts are in good standing</span>
              </label>
              <label className="flex items-center space-x-3 p-3 rounded-lg border border-white/10 hover:border-gold/50 cursor-pointer transition-colors">
                <RadioGroupItem value="yes" className="border-white/30" />
                <span className="text-gray-200">Yes, I have some collections</span>
              </label>
            </RadioGroup>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-4">
            <Label className="text-white text-lg">How much funding do you need?</Label>
            <RadioGroup
              value={answers.fundingAmount}
              onValueChange={(v) => setAnswers({ ...answers, fundingAmount: v })}
              className="space-y-3"
            >
              {["$10k-$25k", "$25k-$50k", "$50k-$100k", "$100k-$250k", "$250k+"].map((amt) => (
                <label
                  key={amt}
                  className="flex items-center space-x-3 p-3 rounded-lg border border-white/10 hover:border-gold/50 cursor-pointer transition-colors"
                >
                  <RadioGroupItem value={amt} className="border-white/30" />
                  <span className="text-gray-200">{amt}</span>
                </label>
              ))}
            </RadioGroup>
          </div>
        )}

        <div className="flex justify-between mt-6">
          {step > 1 ? (
            <Button variant="ghost" onClick={prevStep} className="text-gray-400 hover:text-white">
              Back
            </Button>
          ) : (
            <div />
          )}
          {step < 5 ? (
            <Button
              onClick={nextStep}
              className="bg-gold hover:bg-gold/80 text-navy font-semibold"
              disabled={
                (step === 1 && !answers.creditScore) ||
                (step === 2 && !answers.timeInBusiness) ||
                (step === 3 && !answers.annualRevenue) ||
                (step === 4 && !answers.hasCollections) ||
                (step === 5 && !answers.fundingAmount)
              }
            >
              Continue
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              className="bg-gold hover:bg-gold/80 text-navy font-semibold"
              disabled={!answers.creditScore || !answers.timeInBusiness || !answers.annualRevenue || !answers.hasCollections || !answers.fundingAmount}
            >
              See My Results
              <Calculator className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
